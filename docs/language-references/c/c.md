---
title: "🅲 C Reference"
sidebar_position: 1
---

# 🅲 C Reference Manual (C23 Standard)

CodeFrame provides a modern compiler experience for Standard C. Projects are compiled using the integrated **Clang Compiler Core**, configured to target the cutting-edge **ISO C23 Standard** (`-std=c23`) with full support for legacy C89/C99/C11 standards.

---

## 🛠️ The CodeFrame C Compilation Engine

Under the hood, CodeFrame manages compiler configurations automatically to provide seamless out-of-the-box performance.

* **Default Language Standard**: `C23` (configured via `-std=c23`).
* **Compiler Engine**: LLVM Clang.
* **Architecture Mapping**: Cross-compiles across standard systems (Windows, Linux, macOS, iOS, Android).
* **Optimization Defaults**: 
  * **Debug Mode (`cf build debug`)**: `-g -O0 -fno-omit-frame-pointer` for detailed stacktraces.
  * **Release Mode (`cf build release`)**: `-O3 -flto` for peak performance.

---

## ⚡ Key Highlights of C23 Support in CodeFrame

The C23 standard marks the largest modernization of the C programming language in over a decade. CodeFrame fully supports these features through the modern Clang backend:

### 1. Safe Checked Arithmetic (`<stdckdint.h>`)
Avoid dangerous integer overflows using safe, compiler-checked math functions.
```c
#include <stdckdint.h>
#include <stdio.h>

void safe_math() {
    int a = 2000000000;
    int b = 2000000000;
    int result;

    // ckd_add automatically detects overflow across any integer sizes
    if (ckd_add(&result, a, b)) {
        printf("⚠️ Integer overflow detected safely!\n");
    } else {
        printf("Result: %d\n", result);
    }
}
```

### 2. Standardized Bit Manipulation (`<stdbit.h>`)
Exposes highly efficient CPU-level bit functions in a type-generic manner (e.g. population counts, leading/trailing zero checks).
```c
#include <stdbit.h>
#include <stdint.h>
#include <stdio.h>

void bit_ops() {
    uint32_t val = 0b00001111;
    printf("Trailing zeros: %d\n", stdc_trailing_zeros_ui(val)); // 0
    printf("Trailing ones: %d\n", stdc_trailing_ones_ui(val));   // 4
    printf("Popcount (Active bits): %d\n", stdc_count_ones_ui(val)); // 4
}
```

### 3. The `nullptr` Keyword
C23 deprecates the old macro `NULL` (which was typically defined as `0` or `(void*)0`) in favor of a formal, compiler-recognized **`nullptr`** keyword of type `nullptr_t`.
```c
int* ptr = nullptr; // Clean, strongly-typed null pointer declaration
```

### 4. Advanced Keywords & Type Inference
* **`auto`**: Allows type inference for variables initialized at declaration.
  ```c
  auto count = 42LL; // Inferred as long long
  auto message = "Hello from CodeFrame"; // Inferred as const char*
  ```
* **`constexpr`**: Allows variables or structures to be calculated at compile time, matching C++ constants.
  ```c
  constexpr int max_items = 100 * 5;
  ```
* **`typeof`**: Evaluates the type of an expression at compile time (analogous to C++ `decltype`).
  ```c
  int x = 10;
  typeof(x) y = 20; // y is declared as type int
  ```

---

## 📚 Standard Library Directory

CodeFrame exposes all standard ISO C headers. They are categorized below:

### 📂 Input / Output
* **[`<stdio.h>`](./io/stdio.md)**: Standard stream processing (`printf`, `scanf`, `fopen`, `fread`).

### ✍️ Strings & Text
* **[`<string.h>`](./strings-and-text/string.md)**: Standard string functions (`strlen`, `strcpy`, `memcpy`, `memset`).
* **[`<ctype.h>`](./strings-and-text/ctype.md)**: Character categorization (`isdigit`, `isalpha`, `tolower`).
* **[`<wchar.h>`](./strings-and-text/wchar.md)**: Wide character utilities.
* **[`<wctype.h>`](./strings-and-text/wctype.md)**: Wide character classification.
* **[`<uchar.h>`](./strings-and-text/uchar.md)**: Unicode translation utilities (UTF-16 and UTF-32 support).

### 🔢 Numbers & Math
* **[`<math.h>`](./numbers-and-math/math.md)**: Standard mathematical algorithms (`sin`, `cos`, `pow`, `sqrt`, `ceil`).
* **[`<complex.h>`](./numbers-and-math/complex.md)**: Complex number operations.
* **[`<tgmath.h>`](./numbers-and-math/tgmath.md)**: Type-generic mathematical macros.
* **[`<fenv.h>`](./numbers-and-math/fenv.md)**: Access floating-point flags and environments.
* **[`<float.h>`](./numbers-and-math/float.md)**: Limits and precision values of floating-point types.

### 🧵 Memory & Objects
* **[`<stdlib.h>`](./memory-and-objects/stdlib.md)**: Memory allocation (`malloc`, `calloc`, `free`), environment utilities, sorting (`qsort`), and random numbers.
* **[`<stddef.h>`](./memory-and-objects/stddef.md)**: Standard types (`size_t`, `ptrdiff_t`, `nullptr_t`).
* **[`<stdnoreturn.h>`](./memory-and-objects/stdnoreturn.md)**: Defines `noreturn` for functions that never return execution back to callers.

### 🔒 Concurrency & Atomics
* **[`<threads.h>`](./concurrency-and-atomics/threads.md)**: ISO standard threads, mutexes, and condition variables.
* **[`<stdatomic.h>`](./concurrency-and-atomics/stdatomic.md)**: Atomic memory accesses across concurrent threads.

### 🔤 Types, Limits & Bits
* **[`<stdint.h>`](./types-limits-and-bits/stdint.md)**: Strict fixed-width integers (`int8_t`, `uint32_t`, `int64_t`).
* **[`<inttypes.h>`](./types-limits-and-bits/inttypes.md)**: Formatting macros for fixed-width integers.
* **[`<limits.h>`](./types-limits-and-bits/limits.md)**: Limits of built-in integer variables.
* **[`<stdbit.h>`](./types-limits-and-bits/stdbit.md)**: (C23) Core bit manipulation APIs.
* **[`<stdckdint.h>`](./types-limits-and-bits/stdckdint.md)**: (C23) Checked integer math.

### ⏳ Time & Locale
* **[`<time.h>`](./time-and-locale/time.md)**: Time calculations (`time`, `clock`, `strftime`).
* **[`<locale.h>`](./time-and-locale/locale.md)**: Cultural and localization formatting.

### ⚡ Diagnostics & Errors
* **[`<assert.h>`](./errors-and-signals/assert.md)**: Execution assertions (`assert`).
* **[`<errno.h>`](./errors-and-signals/errno.md)**: Thread-local system error codes.

### 🚦 Control Flow & Signals
* **[`<setjmp.h>`](./control-flow-and-signals/setjmp.md)**: Low-level non-local jumps.
* **[`<signal.h>`](./control-flow-and-signals/signal.md)**: OS event and interrupt signal traps.

### 🔄 Miscellaneous
* **[`<stdarg.h>`](./misc/stdarg.md)**: Variadic function support (`va_list`, `va_start`, `va_end`).
* **[`<iso646.h>`](./misc/iso646.md)**: Textual operators (e.g. `and` for `&&`, `or` for `||`).

---

## 🤝 Premium Code Example: Harnessing C23 in CodeFrame

This clean, complete C program leverages modern C23 standards to implement safe operations.

```c title="src/main.c"
#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>
#include <stdckdint.h>
#include <stdbit.h>

// 1. Defining a clean constant structure
typedef struct {
    const char* name;
    int32_t id;
} User;

int main() {
    printf("=== CodeFrame Modern C23 Sandbox ===\n\n");

    // 2. Using 'nullptr'
    User* user_ptr = nullptr;
    if (user_ptr == nullptr) {
        printf("User pointer is safely initialized to nullptr.\n");
    }

    // 3. Using C23 Type Inference ('auto')
    auto text = "Processing modern integers...";
    printf("%s\n", text);

    // 4. Safe arithmetic checks (C23 stdckdint.h)
    int64_t num1 = 9223372036854775800LL;
    int64_t num2 = 100LL;
    int64_t sum_result;

    if (ckd_add(&sum_result, num1, num2)) {
        printf("🚨 Critical: Math overflow blocked for 64-bit int!\n");
    } else {
        printf("Calculated Sum: %lld\n", (long long)sum_result);
    }

    // 5. C23 Bit Operations (stdbit.h)
    uint16_t mask = 0b0000000011110000;
    auto leading = stdc_leading_zeros_us(mask);
    auto ones = stdc_count_ones_us(mask);

    printf("Mask: 0x%04X\n", mask);
    printf("Leading Zeros in 16-bit mask: %d\n", leading);
    printf("Active Bits count (Popcount): %d\n", ones);

    return 0;
}
```

---

## 💡 Best Practices for CodeFrame C Projects

1. **Avoid NULL macros**: Migrate your codebase to use `nullptr` for all pointer initializations and assertions.
2. **Explicit Integer Sizes**: Always import `<stdint.h>` and prefer explicit size types (`int32_t`, `int64_t`) to make memory management predictable.
3. **Use Safe Math**: When coding networking logic, file parsers, or indices, wrap additions and multiplications inside `<stdckdint.h>` traps.
4. **Compile-Time Optimization**: Leverage `constexpr` for any array limits or constant hashes to avoid runtime calculation penalties.
