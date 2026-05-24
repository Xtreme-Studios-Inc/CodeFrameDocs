---
title: "🗄️ Register Reference"
sidebar_position: 2
---

# 🗄️ x86-64 Register Cheat Sheet

An absolute reference manual for all registers available in user-mode 64-bit Assembly programming within the CodeFrame Clang integrated assembler pipeline.

---

## 🏗️ General-Purpose Registers (GPRs)

The 64-bit general-purpose registers are backward-compatible with 32-bit (`E*`), 16-bit (`*`), and 8-bit (`*L`) operand sizes.

```
+---------------------------------------------------------------+
| RAX (64-bit)                                                  |
+-------------------------------+-------------------------------+
                                | EAX (32-bit)                  |
                                +---------------+---------------+
                                                | AX (16-bit)   |
                                                +-------+-------+
                                                | AH(8) | AL(8) |
                                                +-------+-------+
```

| 64-bit GPR | 32-bit View | 16-bit View | 8-bit View | Preserved? | Typical Purpose in ABI / Interoperability |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`RAX`** | `EAX` | `AX` | `AL` | **No** (Clobbered) | Function return values |
| **`RBX`** | `EBX` | `BX` | `BL` | **Yes** (Preserved) | General-purpose base address pointer |
| **`RCX`** | `ECX` | `CX` | `CL` | **No** (Clobbered) | 1st Argument (Windows) / 4th (Linux/macOS) |
| **`RDX`** | `EDX` | `DX` | `DL` | **No** (Clobbered) | 2nd Argument (Windows) / 3rd (Linux/macOS) |
| **`RSI`** | `ESI` | `SI` | `SIL` | **Yes** (Win) / **No** (SysV)| Source indexing pointer / 2nd Arg (Linux/macOS) |
| **`RDI`** | `EDI` | `DI` | `DIL` | **Yes** (Win) / **No** (SysV)| Destination indexing pointer / 1st Arg (Linux/macOS)|
| **`RSP`** | `ESP` | `SP` | `SPL` | **Yes** (Stack) | Stack pointer (Points to current active element) |
| **`RBP`** | `EBP` | `BP` | `BPL` | **Yes** (Frame) | Stack frame pointer (Access parameters & local variables)|
| **`R8`** | `R8D` | `R8W` | `R8B` | **No** (Clobbered) | 3rd Argument (Windows) / 5th (Linux/macOS) |
| **`R9`** | `R9D` | `R9W` | `R9B` | **No** (Clobbered) | 4th Argument (Windows) / 6th (Linux/macOS) |
| **`R10`** | `R10D` | `R10W` | `R10B` | **No** (Clobbered) | Caller-saved scratch register (Often used for dynamic link pointer)|
| **`R11`** | `R11D` | `R11W` | `R11B` | **No** (Clobbered) | Caller-saved scratch register (Often clobbered by calls)|
| **`R12`–`R15`**| `R12D`–`R15D`| `R12W`–`R15W`| `R12B`–`R15B`| **Yes** (Preserved) | Callee-saved general-purpose storage registers |

:::warning
⚠️ **High-Byte Register Caveat**: The high 8-bit GPR partitions (`AH`, `BH`, `CH`, `DH`) **cannot** be referenced in any assembly instructions that generate a REX prefix (i.e. instructions that interact with `R8–R15` or utilize 64-bit data operands). Prefer standard low-byte components (`AL`, `BL`, `CL`, `DL`) for 8-bit structures.
:::

---

## 🗺️ Instruction Pointer & Control Flags

* **`RIP` (64-bit Instruction Pointer)**:
  * Contains the address of the currently executing instruction.
  * Cannot be written to directly (e.g. `mov rip, rax` is illegal).
  * Accessed implicitly via branches (`jmp`, `call`, `ret`) or explicitly via **RIP-relative addressing**:
    ```assembly
    lea rax, [rip + my_variable]  ; Highly-optimized position-independent access
    ```
* **`RFLAGS` / `EFLAGS` (Status Flags)**:
  * High-performance register reflecting operation status:
    * **`ZF` (Zero)**: Output of operation was zero (`result == 0`).
    * **`SF` (Sign)**: Most-significant-bit of output was set (`result < 0`).
    * **`CF` (Carry)**: Unsigned arithmetic generated overflow/underflow.
    * **`OF` (Overflow)**: Signed arithmetic generated mathematical overflow.
    * **`DF` (Direction)**: Direction pointer for auto-increment operations (`lodsb`, `movsb`).

---

## 🎛️ Vector & Floating-Point Registers (SIMD)

Modern CPUs support Single Instruction Multiple Data (SIMD) configurations. In CodeFrame, floating-point math and vector operations utilize the SSE/AVX registers.

* **`XMM0`–`XMM15` (128-bit Registers)**:
  * Standard on all x86-64 processors.
  * Used for standard floating-point variables (`float`, `double`).
  * Interfaced with single-precision or double-precision scalar math (`addss`, `addsd`).
  * In calling conventions, floating-point parameters are passed in `XMM0–XMM3` (Windows) and `XMM0–XMM7` (Linux/macOS).
* **`YMM0`–`YMM15` (256-bit Registers)**:
  * Available on processors with AVX / AVX2 support.
  * The lower 128-bit blocks map directly to the corresponding `XMM` registers.
* **`ZMM0`–`ZMM31` (512-bit Registers)**:
  * Available on processors supporting AVX-512 extensions.
* **`MXCSR` (SSE Control and Status Register)**:
  * Manages rounding rules, flush-to-zero options, and logs numeric exceptions (division by zero, overflow). Loaded/saved via `ldmxcsr` and `stmxcsr`.

---

## 🔒 Privileged & Segment Registers

Most operating systems restrict access to segments and debug ports in standard user-mode code.

* **Segment Registers (`CS`, `DS`, `SS`, `ES`, `FS`, `GS`)**:
  * In modern flat-memory 64-bit programming, segment offsets are generally fixed to zero.
  * **Exception**: `FS` and `GS` are utilized by Windows and Linux to address **Thread Local Storage (TLS)**.
    ```assembly
    mov rax, gs:[0x30]  ; Read the Process Environment Block (PEB) on Windows
    ```
* **Control Registers (`CR0`–`CR8`)**:
  * Control page structures, protection configurations, and CPU extensions. **Privileged (Kernel-only)**.
* **Debug Registers (`DR0`–`DR7`)**:
  * Control hardware breakpoints. **Privileged**.

---

## 🧠 Memory Data Size Qualifiers

When using registers with memory addresses, Clang's integrated assembler requires explicit data size qualifiers to avoid ambiguity:

```assembly
mov byte ptr [rdi], 10    ; 8-bit memory write (char / uint8_t)
mov word ptr [rdi], 10    ; 16-bit memory write (short / uint16_t)
mov dword ptr [rdi], 10   ; 32-bit memory write (int / float / uint32_t)
mov qword ptr [rdi], 10   ; 64-bit memory write (long long / double / void*)
```
