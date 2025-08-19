---
title: ASM
---

---

## The 5 things assembly is made of

1. **Mnemonic** — the verb: `mov`, `add`, `cmp`, `jmp`, `call`, `ret`
2. **Operands** — what it acts on: registers (`rax`), immediates (`42`), memory (`[rbp+8]`)
3. **Registers** — the CPU’s built-in variables
4. **Labels** — names for addresses: `loop:`
5. **Directives** — assembler commands: `.text`, `.data`, `global main`

---

## Learn these 12 mnemonics first (ignore the rest)

- **Data move:** `mov`, `lea`
- **Math/logic:** `add`, `sub`, `and`, `or`, `xor`
- **Compare/branch:** `cmp`, `jmp`, `je`, `jne`
- **Calls/returns:** `call`, `ret`

With those you can read/write most small functions.

---

## The registers you actually need at start

### General-purpose (64/32/16/8-bit views)

- `RAX` (return value) → `EAX/AX/AL`
- `RBX` → `EBX/BX/BL`
- `RCX` → `ECX/CX/CL`
- `RDX` → `EDX/DX/DL`
- `RSI` → `ESI/SI/SIL`
- `RDI` → `EDI/DI/DIL`
- `RBP` (frame/base) → `EBP/BP/BPL`
- `RSP` (stack ptr) → `ESP/SP/SPL`
- `R8–R15` → `R8D–R15D` → `R8W–R15W` → `R8B–R15B`

> **Tip:** avoid the legacy high bytes `AH/BH/CH/DH` in 64-bit code.

### Flags you’ll see from `cmp`/ALU

- `ZF` (zero) — result was 0 → used by `je`/`jne`
- `SF` (sign), `CF` (carry), `OF` (overflow) — used by signed/unsigned `j*`

---

## Two calling conventions (pick one target)

### Windows x64 (MS ABI)

- **Args:** `RCX, RDX, R8, R9` (then stack)
- **Return:** `RAX`
- **Caller-saved:** `RAX, RCX, RDX, R8–R11`
- **Callee-saved:** `RBX, RBP, RSI, RDI, R12–R15`
- **Stack rule:** before each `call`, provide **32 bytes shadow space** and keep stack **16-byte aligned**

### System V (Linux/macOS)

- **Args:** `RDI, RSI, RDX, RCX, R8, R9`
- **Return:** `RAX`
- **Caller-saved:** `RAX, RCX, RDX, RSI, RDI, R8–R11`
- **Callee-saved:** `RBX, RBP, R12–R15`
- **Stack rule:** keep stack **16-byte aligned** at `call`

---

## Memory operand pattern (Intel)
