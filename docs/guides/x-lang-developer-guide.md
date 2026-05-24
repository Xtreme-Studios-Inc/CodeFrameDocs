# Developer's Guide: Implementing New Syntax in X-Lang

This guide outlines the precise architectural steps, implementation skeletons, and verification protocols to integrate three new syntax capabilities—**Classic C-style loops**, **Collection For-In loops**, and **Pre- & Post-Increment/Decrement operators (`++`, `--`)**—into X-Lang. It ensures that both the **native compiler backend** and the **AST interpreter** remain perfectly in sync, with neither lagging behind as a second thought.

---

## 1. Loop & Increment Syntax Specifications

Standard X-Lang requires **parentheses `()` by default** around loop variables/conditions, and standard variable declarations use name-first dynamic typing.

### I. Classic C-Style Loops
For sequential iteration, count-based steps, or pointer advancements.
```x
for (i: int = 0; i < 5; i++) {
    console.log("C-style value: " + i)
}
```

### II. Collection For-In Loops
For traversing lists, vectors, or statically sized stack arrays over their values.
```x
// 1. Dynamic Variant (auto-inferred variable type)
let arr = [10, 20, 30, 40];
for (var val in arr) {
    console.log("Dynamic value: " + val)
}

// 2. Statically Typed Variant (explicit variable type)
let words = ["hello", "world"];
for (str word in words) {
    console.log("Static word: " + word)
}
```

### III. Pre- & Post-Increment/Decrement (`++`, `--`)
*   **Prefix Syntax**: `++i`, `--i` (Increments/decrements the variable, and returns the *new* value).
*   **Postfix Syntax**: `i++`, `i--` (Increments/decrements the variable, and returns the *original* value).

---

## 2. AST Representation (Memory Arena Allocations)

All nodes must be allocated sequential-style inside our thread-local `Arena` using raw pointers (`StmtPtr` and `ExprPtr`).

### `UpdateExpr` (Increment / Decrement AST Node)
*   **File**: `src/x-lang/frontend/parser/ast/expression.h`
    ```cpp
    class UpdateExpr : public Expression {
    public:
        UpdateExpr(ExprPtr operand, const Token &op, bool isPrefix);
        ~UpdateExpr() = default;

        const ExprPtr &getOperand() const;
        const Token &getOperator() const;
        bool isPrefix() const;

    private:
        ExprPtr operand_;
        Token op_;
        bool isPrefix_;
    };
    ```

### `ForStmt` (Classic C-Style AST Node)
*   **File**: `src/x-lang/frontend/parser/ast/statement.h`
    ```cpp
    class ForStmt : public Statement {
    public:
        ForStmt(StmtPtr initializer, ExprPtr condition, ExprPtr increment, StmtPtr body);
        ~ForStmt() = default;

        const StmtPtr &getInitializer() const;
        const ExprPtr &getCondition() const;
        const ExprPtr &getIncrement() const;
        const StmtPtr &getBody() const;

    private:
        StmtPtr initializer_;
        ExprPtr condition_;
        ExprPtr increment_;
        StmtPtr body_;
    };
    ```

---

## 3. Parsing Blueprint

### I. Lexer Symbol Registration (`syntax_config.json`)
First, add mapping definitions for `++` and `--` inside standard configuration files:
```json
"symbol_mappings": {
  "++": "++",
  "--": "--"
}
```

### II. Parsing Operators (`parser.cpp`)
*   **Prefix Updates** (e.g. `++i`, `--i`): Inside `Parser::unary()`:
    ```cpp
    ExprPtr Parser::unary() {
        if (match({XTokenType::Symbol}) && (previous().getValue() == "++" || previous().getValue() == "--")) {
            Token op = previous();
            ExprPtr operand = primary(); // Expect variable identifier
            return Arena::alloc<UpdateExpr>(operand, op, true); // true = Prefix
        }
        // ... (standard unary logic)
    }
    ```
*   **Postfix Updates** (e.g. `i++`, `i--`): Inside `Parser::primary()` or `postfix()` parsing loop:
    ```cpp
    ExprPtr Parser::postfix() {
        ExprPtr expr = primary();
        while (true) {
            if (match({XTokenType::Symbol}) && (previous().getValue() == "++" || previous().getValue() == "--")) {
                Token op = previous();
                expr = Arena::alloc<UpdateExpr>(expr, op, false); // false = Postfix
            } else {
                break;
            }
        }
        return expr;
    }
    ```

### III. Parsing the `For` Statement:
When encountering `for`, determine if it is a C-style loop or a collection for-in loop, and route to `parseClassicForStatement()` or `parseForInStatement()` dynamically.

---

## 4. Semantic Analysis & Scoping (`binder.cpp` & `checker.cpp`)

*   **Scoping Rules**: Classic and collection loops declare their loop control variable inside a newly spawned scope (`beginScope()`), which is popped (`endScope()`) on block exit.
*   **Type Checker L-Value Verification**:
    When type-checking `UpdateExpr`, verify that:
    1.  The operand expression resolves to a valid assignable variable (L-Value check).
    2.  The variable type is numeric (`int`, `float`, or sized integer variants).

---

## 5. Dual-Execution Track Alignment (Interpreter vs. Codegen)

### Track A: The AST Interpreter (`interpreter.cpp`)
*   **UpdateExpr Evaluation**:
    ```cpp
    Val Interp::evalUpdate(const UpdateExpr& expr) {
        auto varExpr = dynamic_pointer_cast<VariableExpr>(expr.getOperand());
        if (!varExpr) throw runtime_error("Increment operand must be an assignable variable.");

        Val currentVal = env_->get(varExpr->getName());
        if (!holds_alternative<double>(currentVal)) throw runtime_error("Operand must be a number.");

        double val = get<double>(currentVal);
        double newVal = (expr.getOperator().getValue() == "++") ? val + 1.0 : val - 1.0;
        
        env_->set(varExpr->getName(), newVal);

        // Return new value for prefix, original value for postfix
        return expr.isPrefix() ? newVal : val;
    }
    ```

### Track B: The Native Compiler (`direct_compiler.cpp` & `x86_64_backend.cpp`)
*   **UpdateExpr Emission**:
    *   **Prefix `++i`**: Load variable value, increment it using x86 `inc` or `add [mem], 1`, and leave the *new* value in the accumulator register (`rax` / `xmm0`).
    *   **Postfix `i++`**: Load variable value, copy original value to a temporary register, increment the variable in memory, and return the *original* copied value inside the accumulator.
*   **For Loops Emission**:
    Build an assembly loop using two labels (`startLabel` and `endLabel`), evaluating the condition and jumping on false `jz`, and executing the increment code at each iteration step cleanly.

---

## 6. Verification Pipeline

After coding:
1.  **Uncomment references**: Go to [syntax_reference.x](file:///d:/Dev/XtremeStudios/XDev/XCodeFrame/src/tests/x-lang/projects/x/syntax_reference.x) and uncomment the loop examples.
2.  **Verify Parity**: Run `.\build\debug\codeframe.exe x test`.
3.  **Run Combinatorial Tests**: Run `python scripts/combinatorial_harness.py` to confirm transpilation is 100% flawless across all 81 passes!
