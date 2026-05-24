---
title: "🅲🞤 C++ Reference"
sidebar_position: 1
---

# 🅲🞤 C++ Reference Manual (C++23 Standard)

CodeFrame delivers a state-of-the-art developer experience for Modern C++. All projects are compiled using the integrated **LLVM Clang++ Compiler Engine**, utilizing the **ISO C++23 Standard** (`-std=c++23`) as its default framework, with full compatibility for C++11, C++17, C++20, and upcoming C++26 modules.

---

## 🛠️ The CodeFrame C++ Engine Architecture

CodeFrame eliminates compile-configuration stress, automatically organizing compiler headers and standard library linking behind simple commands.

* **Default Language Standard**: `C++23` (configured via `-std=c++23`).
* **Compiler Backend**: LLVM `clang++` toolchain.
* **Standard Library Backend**: LLVM `libc++` with standard static/dynamic linking configurations.
* **Default Compiler Flags**:
  * **Debug Mode (`cf build debug`)**: `-g -O0 -fexceptions -fcxx-exceptions -fno-omit-frame-pointer -Wall` for strict testing.
  * **Release Mode (`cf build release`)**: `-O3 -fexceptions -fcxx-exceptions -Wall` for maximum execution speed.

---

## ⚡ Next-Generation Features of Modern C++ in CodeFrame

Modern C++ offers dramatic improvements in performance, safety, and readability. Through Clang, CodeFrame unlocks the full suite of modern library features:

### 1. Concepts and Constraints (`<concepts>`) [C++20]
Validate template parameters at compile time. Say goodbye to unreadable 200-line template compile error messages!
```cpp
#include <concepts>
#include <iostream>

// Define a structural Concept requiring numeric parameters
template <typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template <Numeric T>
T add_values(T a, T b) {
    return a + b;
}
```

### 2. Formatted Printing (`<print>`) [C++23]
Replaces heavy, slow, and hard-to-format streams like `std::cout` with high-performance, type-safe print primitives based on `std::format`.
```cpp
#include <print>

void print_demo() {
    std::println("Hello, {}! The year is {}.", "CodeFrame Operator", 2026);
}
```

### 3. Safe Error Returns (`<expected>`) [C++23]
Returns either a valid value or a detailed error code without throwing slow, resource-heavy exceptions.
```cpp
#include <expected>
#include <string>

std::expected<double, std::string> divide(double a, double b) {
    if (b == 0.0) {
        return std::unexpected("Division by zero!");
    }
    return a / b;
}
```

### 4. Ranges and Views (`<ranges>`) [C++20]
Enables functional composition pipelines over containers without copying original data elements (lazy evaluation).
```cpp
#include <ranges>
#include <vector>
#include <print>

void ranges_demo() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6};
    
    // Filter even values and square them lazily!
    auto result = numbers 
                | std::views::filter([](int n) { return n % 2 == 0; })
                | std::views::transform([](int n) { return n * n; });

    for (int n : result) {
        std::println("{}", n); // Output: 4, 16, 36
    }
}
```

### 5. Contiguous Memory Views (`<span>`) [C++20]
Provides safe, zero-overhead views over continuous arrays, `std::vector`, or `std::array`.
```cpp
#include <span>
#include <vector>

void process_data(std::span<const int> data) {
    // Read-only continuous block of integers
    for (int val : data) { /* ... */ }
}
```

---

## 📂 CodeFrame C++ Header Catalog

### 🔢 Numbers & Math
* **[`<limits>`](./numbers-and-math/limits.md)**: Query properties of fundamental types.
* **[`<cmath>`](./numbers-and-math/cmath.md)**: Common mathematical operations.
* **[`<numbers>`](./numbers-and-math/numbers.md)**: Standard mathematical constants (like `std::numbers::pi` in C++20).
* **[`<numeric>`](./numbers-and-math/numeric.md)**: Math algorithms (accumulation, inner products).
* **[`<random>`](./numbers-and-math/random.md)**: Random number generators and distributions.
* **[`<bit>`](./numbers-and-math/bit.md)**: Direct bit operations (rotate, population count).

### ✍️ Strings & Text
* **[`<string>`](./strings-and-text/string.md)**: Highly dynamic string class `std::string`.
* **[`<string_view>`](./strings-and-text/string_view.md)**: Lightweight, zero-allocation pointer view `std::string_view`.
* **[`<format>`](./strings-and-text/format.md)**: Formatting engine (standard safe strings formatting).
* **[`<print>`](./io/print.md)**: Clean type-safe terminal print capabilities (`std::println`).
* **[`<charconv>`](./strings-and-text/charconv.md)**: Fast, non-allocating string-to-number transitions.

### 📦 Containers
* **[`<vector>`](./containers/vector.md)**: Dynamic contiguous vector array.
* **[`<array>`](./containers/array.md)**: Fixed-size contiguous array wrapper.
* **[`<map>`](./containers/map.md)** / **[`<set>`](./containers/set.md)**: Ordered tree structures.
* **[`<unordered_map>`](./containers/unordered_map.md)** / **[`<unordered_set>`](./containers/unordered_set.md)**: High-speed hash-table structures.
* **[`<span>`](./containers/span.md)**: Non-owning contiguous memory views.
* **[`<flat_map>`](./containers/flat_map.md)** / **[`<flat_set>`](./containers/flat_set.md)**: Contiguous memory-mapped key-value adapters (C++23).

### 📂 Input / Output
* **[`<iostream>`](./io/iostream.md)**: Standard console I/O streams.
* **[`<fstream>`](./io/fstream.md)**: Low-level file streams.
* **[`<sstream>`](./io/sstream.md)**: String reading and writing streams.
* **[`<syncstream>`](./io/syncstream.md)**: Concurrent, thread-safe console output streams.

### 🔧 Utilities
* **[`<optional>`](./utilities/optional.md)**: Type encapsulating optional variables.
* **[`<variant>`](./utilities/variant.md)**: Type-safe, high-performance union variable structures.
* **[`<expected>`](./utilities/expected.md)**: (C++23) Clean, monadic error handling interface.
* **[`<tuple>`](./utilities/tuple.md)**: Multiple-type fixed value structures.
* **[`<functional>`](./utilities/functional.md)**: High-performance functional bindings, lambda wrappers, and `std::invoke`.
* **[`<utility>`](./utilities/utility.md)**: Utility operations (`std::move`, `std::swap`).

### 🧵 Memory Management
* **[`<memory>`](./memory-management/memory.md)**: Clean smart pointers (`std::unique_ptr`, `std::shared_ptr`, `std::weak_ptr`).
* **[`<new>`](./memory-management/new.md)**: Raw allocator allocations, placement `new`, and memory exceptions.

### ⚡ Diagnostics & Errors
* **[`<stdexcept>`](./error-handling-and-debugging/stdexcept.md)**: Standard exception types.
* **[`<stacktrace>`](./error-handling-and-debugging/stacktrace.md)**: (C++23) Standard hardware call stack introspection.

### 🔒 Atomics & Concurrency
* **[`<atomic>`](./atomics-and-concurrency/atomic.md)**: Thread-safe, lock-free standard atomics.
* **[`<thread>`](./threading-and-parallelism/thread.md)**: Threads control and lifecycle operations.
* **[`<mutex>`](./threading-and-parallelism/mutex.md)** / **[`<shared_mutex>`](./threading-and-parallelism/shared_mutex.md)**: Exclusive lock control.
* **[`<semaphore>`](./threading-and-parallelism/semaphore.md)**: Thread restriction controls (C++20).

---

## 🤝 Modern C++ Sandbox Demonstration

This full program showcases the beauty and brevity of modern C++23 compiling inside CodeFrame:

```cpp title="src/main.cpp"
#include <print>
#include <expected>
#include <string>
#include <vector>
#include <concepts>
#include <ranges>

// 1. Defining templates safely with compile-time concepts
template <typename T>
concept Printable = requires(T v) {
    std::println("{}", v);
};

template <Printable T>
void dump_collection(const std::vector<T>& vec) {
    for (const auto& item : vec) {
        std::println("-> {}", item);
    }
}

// 2. Safe error checking without exception overhead
std::expected<double, std::string> calculate_inverse(double value) {
    if (value == 0.0) {
        return std::unexpected("Cannot calculate inverse of zero.");
    }
    return 1.0 / value;
}

int main() {
    std::println("=== CodeFrame Modern C++23 Sandbox ===\n");

    // 3. Testing Safe Errors
    auto calculation = calculate_inverse(4.0);
    if (calculation) {
        std::println("Inverse: {:.4f}", calculation.value());
    } else {
        std::println("Error: {}", calculation.error());
    }

    auto bad_calculation = calculate_inverse(0.0);
    if (!bad_calculation) {
        std::println("Safely Caught expected error: {}", bad_calculation.error());
    }

    // 4. Testing Ranges and Views
    std::vector<int> ages = { 12, 19, 25, 45, 17, 33, 50, 8 };
    std::println("\nFiltering adults over 18 using C++20 Ranges:");

    // Zero allocations, purely logical filter!
    auto adult_view = ages 
                    | std::views::filter([](int age) { return age >= 18; })
                    | std::views::transform([](int age) { return age * 10; });

    std::vector<int> processed_ages(adult_view.begin(), adult_view.end());
    dump_collection(processed_ages);

    return 0;
}
```

---

## 💡 Best Practices for C++ in CodeFrame

1. **Avoid `std::cout`**: Migrate your codebase to `<print>` and use `std::println`. It compiles faster, formats cleanly, and performs better.
2. **Pass Read-Only Strings as `std::string_view`**: Avoid allocating memory when passing strings as parameters by using non-owning `std::string_view`.
3. **Prefer Smart Pointers**: Never write raw `new` and `delete`. Use `std::make_unique` or `std::make_shared` from `<memory>` to avoid memory leaks.
4. **Use Concepts for Templates**: Constrain all your template structures. It yields clean compilation errors and guarantees safety.
