---
title: "🌐 Language References"
sidebar_position: 1
---

# 🌐 Language Reference Manuals

CodeFrame is a modern, unified toolchain that treats C, C++, and Assembly as first-class citizens. By integrating industry-standard compilers and built-in assemblers under a single, cohesive configuration model, CodeFrame makes multi-language programming seamless.

This reference section serves as a premium, highly-practical, single point of truth for syntax standards, compiler invocations, optimization patterns, and language features supported by the CodeFrame SDK.

---

## 🚀 Supported Standards & Targets

CodeFrame auto-configures your workspace using industry-standard compilers and tools. By default, it targets the following language specifications:

| Language | Default Standard | Toolchain Engine | Windows Target | Linux Target | macOS Target |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **C++** | `C++23` | Clang (`clang++`) | `x86_64-w64-mingw32` | `x86_64-unknown-linux-gnu` | `arm64-apple-darwin` |
| **C** | `C23` | Clang (`clang`) | `x86_64-w64-mingw32` | `x86_64-unknown-linux-gnu` | `arm64-apple-darwin` |
| **Assembly** | x86-64 (Intel style) | Clang Integrated Assembler | `-masm=intel` | `-masm=intel` | `-masm=intel` |

---

## 📚 Deep Dive Guides

Choose a language reference manual to explore complete code blocks, real-world examples, advanced standard library support, and deep compiler mechanics:

:::tip
* **[C++ Reference Manual](./cpp/cpp.md)**: Explore modern C++20/C++23 features, compile-time concepts, smart pointers, ranges, parallel execution, and strict compiler optimization levels (`-O3`).
* **[C Reference Manual](./c/c.md)**: Master the new C23 standard, checked integer arithmetic (`<stdckdint.h>`), bit manipulation (`<stdbit.h>`), concurrency (`<threads.h>`), signals, and optimal memory management.
* **[Assembly Reference Manual](./asm/asm.md)**: Harness raw CPU power using Intel x86-64 syntax. Learn Register configurations, Calling Conventions (MS ABI vs System V), Clang's integrated assembler pipeline, and C/Assembly integration.
:::

---

## 🛠️ The CodeFrame Mindset

When working with C, C++, or Assembly in CodeFrame, keep these structural principles in mind:

1. **Flat Namespace Convention**: No two files in a single project should have the exact same filename, regardless of their subdirectory. This ensures clear module boundaries and eliminates ambiguity in compilation objects.
2. **Unified Configuration**: All project presets, target specifications, custom flags, assets, and library dependencies are centralized inside a single `.codeframe` configuration file.
3. **Optimized by Default**: In `debug` mode, CodeFrame compiles with full debug flags (`-g -O0 -fno-omit-frame-pointer`). In `release` mode, it automatically boosts speed to maximum optimizations (`-O3`) for standard GNU builds.
