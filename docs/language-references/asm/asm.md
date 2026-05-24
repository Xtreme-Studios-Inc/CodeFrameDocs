---
title: "💻 Assembly Reference"
sidebar_position: 1
---

# 💻 x86-64 Assembly Reference Manual

In CodeFrame, assembly is a first-class language. The toolchain compiles and links assembly source files (`.s` or `.asm`) seamlessly into your C/C++ targets. CodeFrame utilizes the **Clang Integrated Assembler** with `-masm=intel` enabled by default, ensuring a next-generation assembly developer experience.

---

## 🛠️ The CodeFrame Assembler Pipeline

Unlike legacy environments that require manual setup of separate tools like NASM, MASM, or Yasm, CodeFrame compiles your assembly code directly using the modern Clang compiler back-end.

* **Syntax Model**: Intel-style Assembly Syntax.
* **Compiler Invocation**: 
  ```bash
  clang -c -masm=intel -target <target_flag> -sysroot <sdk_path> <file.s> -o <file.o>
  ```
* **Integration**: Assembly objects are automatically linked with your C/C++ objects, ensuring complete interoperability.

---

## 🏗️ Core Syntax Rules (Intel vs. AT&T)

Since CodeFrame defaults to Intel syntax via `-masm=intel`, ensure your code follows these clean standards:

* **Destination First**: The destination operand is always on the left, and the source is on the right.
  ```assembly
  mov rax, 42        ; Load the value 42 into RAX (RAX = 42)
  add rdi, rsi       ; Add RSI to RDI (RDI = RDI + RSI)
  ```
* **No Percent Signs**: Registers do not require a `%` prefix.
* **No Dollar Signs**: Immediates (literals) do not require a `$` prefix.
* **Memory Dereferencing**: Brackets `[]` indicate dereferencing a memory address.
  ```assembly
  mov rax, [rbp - 8] ; Load 8-byte value at address RBP - 8 into RAX
  mov [rdi], al      ; Store the low byte of RAX (AL) at address RDI
  ```

---

## 🔢 The x86-64 Register File

When writing high-performance assembly or interfacing with C/C++, you must manage registers properly. The register file is split into general-purpose, flag, and vector segments.

### 1. General-Purpose Registers (GPRs)
The 16 general-purpose registers can be accessed as 64-bit, 32-bit, 16-bit, or 8-bit views:

| 64-Bit View | 32-Bit View | 16-Bit View | 8-Bit Low View | Role / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`RAX`** | `EAX` | `AX` | `AL` | **Return Value** / Accumulator |
| **`RCX`** | `ECX` | `CX` | `CL` | 1st Argument (Win) / 4th (SysV) / Counter |
| **`RDX`** | `EDX` | `DX` | `DL` | 2nd Argument (Win) / 3rd (SysV) / Data |
| **`RBX`** | `EBX` | `BX` | `BL` | Base Register (Callee-saved) |
| **`RSP`** | `ESP` | `SP` | `SPL` | **Stack Pointer** (Points to top of stack) |
| **`RBP`** | `EBP` | `BP` | `BPL` | **Frame Pointer** (Base pointer for stack frame) |
| **`RSI`** | `ESI` | `SI` | `SIL` | Source Index / 2nd Arg (SysV) |
| **`RDI`** | `EDI` | `DI` | `DIL` | Destination Index / 1st Arg (SysV) |
| **`R8`** | `R8D` | `R8W` | `R8B` | 3rd Argument (Win) / 5th (SysV) |
| **`R9`** | `R9D` | `R9W` | `R9B` | 4th Argument (Win) / 6th (SysV) |
| **`R10`–`R11`**| `R10D`–`R11D`| `R10W`–`R11W`| `R10B`–`R11B`| Caller-saved temporary registers |
| **`R12`–`R15`**| `R12D`–`R15D`| `R12W`–`R15W`| `R12B`–`R15B`| Callee-saved registers (Must preserve) |

:::warning
⚠️ **REX Prefix Caveat**: In x86-64, if an instruction requires a REX prefix (needed to access 64-bit registers or `R8–R15`), you **cannot** reference legacy high 8-bit registers (`AH`, `BH`, `CH`, `DH`). Always prefer low views like `AL`, `BL`, `CL`, `DL`, or `R8B–R15B`.
:::

### 2. Status Flags (`RFLAGS`)
These flags reflect the outcome of mathematical operations and comparisons:
* **`ZF` (Zero Flag)**: Set to `1` if the result of an operation is zero. Checked by `je` and `jne`.
* **`SF` (Sign Flag)**: Set to `1` if the result of an operation is negative (MSB is `1`).
* **`CF` (Carry Flag)**: Set for unsigned overflow.
* **`OF` (Overflow Flag)**: Set for signed overflow.

---

## 🔀 Calling Conventions (MS ABI vs. System V)

To call an Assembly function from C/C++ or vice versa, you **must** strictly respect the calling convention of your target operating system.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
  defaultValue="windows"
  values={[
    { label: "🪟 Windows x64 (MS ABI)", value: "windows" },
    { label: "🐧 System V (Linux / macOS)", value: "sysv" },
  ]}
>
  <TabItem value="windows">
    <h3>Argument Passing & Stack Management on Windows</h3>
    <ul>
      <li><strong>Argument Order:</strong> 
        <ul>
          <li>1st Argument: <code>RCX</code></li>
          <li>2nd Argument: <code>RDX</code></li>
          <li>3rd Argument: <code>R8</code></li>
          <li>4th Argument: <code>R9</code></li>
          <li>Additional args are pushed onto the stack from right to left.</li>
        </ul>
      </li>
      <li><strong>Return Value:</strong> <code>RAX</code> (Integer/Pointer) or <code>XMM0</code> (Floating-Point).</li>
      <li><strong>Callee-Saved (Preserved):</strong> <code>RBX, RBP, RSI, RDI, R12–R15, XMM6–XMM15</code>. If you modify any of these, you <strong>must</strong> save them to the stack and restore them before returning!</li>
      <li><strong>Caller-Saved (Clobbered):</strong> <code>RAX, RCX, RDX, R8–R11, XMM0–XMM5</code>.</li>
      <li><strong>🚨 Shadow Space:</strong> The caller <strong>must</strong> reserve 32 bytes of "shadow space" (or home space) on the stack immediately before calling a function. The called function is free to write to this space.</li>
      <li><strong>🚨 Stack Alignment:</strong> The stack (<code>RSP</code>) must be aligned to a <strong>16-byte boundary</strong> immediately before any <code>call</code> instruction. Since the <code>call</code> itself pushes an 8-byte return address, the stack inside the function will initially end in <code>8</code>. Adjust it by allocating local stack space.</li>
    </ul>
  </TabItem>
  <TabItem value="sysv">
    <h3>Argument Passing & Stack Management on Linux / macOS</h3>
    <ul>
      <li><strong>Argument Order:</strong>
        <ul>
          <li>1st Argument: <code>RDI</code></li>
          <li>2nd Argument: <code>RSI</code></li>
          <li>3rd Argument: <code>RDX</code></li>
          <li>4th Argument: <code>RCX</code></li>
          <li>5th Argument: <code>R8</code></li>
          <li>6th Argument: <code>R9</code></li>
          <li>Additional args go to the stack.</li>
        </ul>
      </li>
      <li><strong>Return Value:</strong> <code>RAX</code> (Integer/Pointer) or <code>XMM0</code> (Floating-Point).</li>
      <li><strong>Callee-Saved (Preserved):</strong> <code>RBX, RBP, RSP, R12–R15</code>.</li>
      <li><strong>Caller-Saved (Clobbered):</strong> <code>RAX, RCX, RDX, RSI, RDI, R8–R11, XMM0–XMM15</code>.</li>
      <li><strong>🚨 Shadow Space:</strong> <strong>None.</strong> Do not allocate home space on Linux or macOS.</li>
      <li><strong>🚨 Stack Alignment:</strong> The stack (<code>RSP</code>) must be aligned to a <strong>16-byte boundary</strong> at the call site.</li>
    </ul>
  </TabItem>
</Tabs>

---

## 📝 Memory Addressing Modes

x86-64 features an incredibly powerful physical addressing mode that lets you calculate complex indices in a single clock cycle:

$$\text{Address} = \text{Base} + (\text{Index} \times \text{Scale}) + \text{Displacement}$$

* **Base**: Any General-Purpose 64-bit Register.
* **Index**: Any General-Purpose 64-bit Register (except `RSP`).
* **Scale**: Constant multiplier ($1, 2, 4, \text{or } 8$).
* **Displacement**: A constant offset (positive or negative).

### Examples:
```assembly
mov rax, [rbx]                 ; Dereference address in RBX
mov rax, [rbx + rsi]           ; Base + Index (Offset = RBX + RSI)
mov rax, [rbx + rsi*4]         ; Base + Index * Scale
mov rax, [rbx + rsi*8 + 32]    ; Base + Index * Scale + Displacement
```

---

## 🤝 Assembly and C Interoperability (Real-World Guide)

Let's look at how to write a premium, fully-documented assembly routine and call it natively inside a CodeFrame C++ program.

### 1. Write the Assembly File

We will write a high-performance function `sum_array` that adds all numbers in a 64-bit integer array.

```assembly title="src/math_ops.s"
.intel_syntax noprefix    ; Directs Clang to use standard Intel syntax
.global sum_array         ; Exports the symbol so C/C++ can see it

.text
; -------------------------------------------------------------
; sum_array (Adds values of a 64-bit integer array)
; 
; Signature: extern "C" int64_t sum_array(const int64_t* arr, int64_t size);
; 
; Inputs:
;   - arr:  RDI (SysV) / RCX (Windows)
;   - size: RSI (SysV) / RDX (Windows)
;
; Returns:
;   - RAX:  The calculated sum
; -------------------------------------------------------------
sum_array:
    ; --- Handle Cross-Platform Calling Conventions ---
    ; To support both Windows & Linux hosts seamlessly:
    #ifdef _WIN32
        mov rdi, rcx      ; Windows: Move Arr pointer from RCX to RDI
        mov rsi, rdx      ; Windows: Move Size from RDX to RSI
    #endif

    ; --- Function Body ---
    xor rax, rax          ; Initialize sum (RAX = 0)
    test rsi, rsi         ; Check if size is <= 0
    jle .done             ; If so, return 0

    xor rcx, rcx          ; Loop index (RCX = 0)

.loop:
    add rax, [rdi + rcx*8] ; Add current element (arr[rcx]) to RAX
    inc rcx               ; Increment index (rcx++)
    cmp rcx, rsi          ; Compare index with size
    jl .loop              ; If index < size, loop again

.done:
    ret                   ; Return to caller (Result in RAX)
```

### 2. Calling from C++

Now, let's write our main application inside CodeFrame:

```cpp title="src/main.cpp"
#include <iostream>
#include <vector>
#include <cstdint>

// Expose the Assembly symbol to C++ with C linkage
extern "C" {
    int64_t sum_array(const int64_t* arr, int64_t size);
}

int main() {
    std::cout << "=== CodeFrame C++ & Assembly Integration ===" << std::endl;

    std::vector<int64_t> numbers = { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };

    // Invoke our highly-optimized assembly function!
    int64_t sum = sum_array(numbers.data(), numbers.size());

    std::cout << "Number of elements: " << numbers.size() << std::endl;
    std::cout << "Sum calculated by Assembly: " << sum << std::endl;

    if (sum == 550) {
        std::cout << "✅ Logic works perfectly!" << std::endl;
    } else {
        std::cout << "❌ Error in calculation." << std::endl;
    }

    return 0;
}
```

---

## 💡 Best Practices and Pro Tips

1. **Keep RSP Aligned**: Always maintain 16-byte stack alignment immediately before invoking any C/C++ runtime library function (like `printf` or `malloc`). Failures result in instantaneous crashes or Segment Faults.
2. **Document Register Clobbers**: Always write headers for your assembly routines stating exactly which caller-saved registers you are modifying.
3. **Optimized Zeroing**: Prefer `xor eax, eax` over `mov eax, 0`. It generates smaller machine instruction footprints and allows the CPU execution pipeline to bypass execution dependencies.
4. **Local Variables**: For scratch space, subtract from `RSP` (e.g. `sub rsp, 16`). Don't forget to clean it up before returning (`add rsp, 16`) or use `leave`.
