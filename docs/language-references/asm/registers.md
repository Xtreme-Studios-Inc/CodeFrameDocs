## x86-64 Registers You Can Use in NASM (User-mode)

### General-Purpose (GPRs)

64-bit → 32-bit → 16-bit → 8-bit

- **RAX** → EAX → AX → **AH/AL** _(avoid AH in 64-bit; see note)_
- **RBX** → EBX → BX → **BH/BL** _(avoid BH in 64-bit)_
- **RCX** → ECX → CX → **CH/CL** _(avoid CH in 64-bit)_
- **RDX** → EDX → DX → **DH/DL** _(avoid DH in 64-bit)_
- **RSI** → ESI → SI → **SIL**
- **RDI** → EDI → DI → **DIL**
- **RBP** → EBP → BP → **BPL**
- **RSP** → ESP → SP → **SPL**
- **R8–R15** → R8D–R15D → R8W–R15W → **R8B–R15B**

> **AH/BH/CH/DH caveat:** in x86-64, whenever an instruction uses a REX prefix (most 64-bit forms), the high-byte regs **AH/BH/CH/DH can’t be used**. Prefer `AL/BL/CL/DL` or `R8B–R15B`.

### Instruction Pointer & Flags

- **RIP** — 64-bit instruction pointer (read via RIP-relative addressing, not directly writable).
- **RFLAGS**/**EFLAGS** — status/controls (common flags: **CF, PF, AF, ZF, SF, OF, DF, IF**).

### Segment Registers (rare in user-mode)

- **CS, DS, ES, SS, FS, GS**
  - In 64-bit user code, **FS/GS** are the only ones you might touch indirectly (e.g., TLS via `fs:`/`gs:`). Others are effectively fixed.

### SIMD / Vector (baseline x86-64 has SSE2)

- **XMM0–XMM15** — 128-bit (SSE/SSE2/…).
- **YMM0–YMM15** — 256-bit (AVX/AVX2).
- **ZMM0–ZMM31** & **K0–K7** — 512-bit + masks (AVX-512). _(Only if the CPU/OS enables them.)_
- **MXCSR** — SSE control/status (use `ldmxcsr/stmxcsr`).

### Legacy (usually avoid)

- **x87 FPU**: `ST(0)–ST(7)` (use SSE2+ instead).
- **MMX**: `MM0–MM7` (obsolete with SSE2).
- **Control/Debug**: `CR0–CR8`, `DR0–DR7` (privileged; not for user-mode).

---

## Call-preserved vs Call-clobbered (handy when mixing C/asm)

### Windows x64 (MS ABI)

- **Args**: RCX, RDX, R8, R9 (then stack).
- **Caller-saved (clobbered)**: RAX, RCX, RDX, R8–R11, XMM0–XMM5.
- **Callee-saved (preserved)**: RBX, RBP, RSI, RDI, R12–R15, XMM6–XMM15.
- **Stack**: 32-byte shadow space; 16-byte alignment at each `call`.

### System V AMD64 (Linux/macOS)

- **Args**: RDI, RSI, RDX, RCX, R8, R9 (then stack); FP args in XMM0–XMM7.
- **Caller-saved**: RAX, RCX, RDX, RSI, RDI, R8–R11, XMM0–XMM15.
- **Callee-saved**: RBX, RBP, R12–R15; (RSP always preserved).
- **Stack**: keep 16-byte alignment at call sites.

---

## NASM notes

- Register name ⇒ size (no suffixes needed): `mov eax, 1` (32-bit), `mov rax, 1` (64-bit).
- Memory sizes use keywords: `byte`, `word`, `dword`, `qword` (e.g., `mov byte [rdi], al`).
