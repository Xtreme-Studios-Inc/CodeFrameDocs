---
title: C++
---

## 📚 C++ Standard Library Headers

These are the standard headers defined by ISO C++.

---

### 🔢 Numbers & Math

- `<limits>` — Type properties
- `<climits>` — Limits of integer types
- `<cfloat>` — Limits of floating-point types
- `<cstdint>` — Fixed-width integer types (C++11)
- `<cinttypes>` — Integer format macros (C++11)
- `<stdfloat>` — Extended floating types (C++23)
- `<bit>` — Bit manipulation (C++20)
- `<cmath>` — Math functions
- `<numbers>` — Math constants (C++20)
- `<numeric>` — Numeric algorithms
- `<ratio>` — Compile-time rational arithmetic (C++11)
- `<complex>` — Complex numbers
- `<valarray>` — Value arrays
- `<cfenv>` — Floating-point environment (C++11)
- `<random>` — Random numbers (C++11)
- `<linalg>` — Linear algebra (C++26)

### ✍️ Strings & Text

- `<string>` — `std::string`
- `<string_view>` — `std::string_view` (C++17)
- `<charconv>` — `to_chars`, `from_chars` (C++17)
- `<format>` — `std::format` (C++20)
- `<cctype>` — Character classification
- `<cstring>` — C-style strings
- `<cwchar>` — Wide strings
- `<cwctype>` — Wide char classification
- `<cuchar>` — UTF conversion (C++11)

### 📦 Containers

- `<array>` — `std::array` (C++11)
- `<vector>` — `std::vector`
- `<deque>` — `std::deque`
- `<list>` — `std::list`
- `<forward_list>` — `std::forward_list` (C++11)
- `<map>` — `std::map`, `std::multimap`
- `<set>` — `std::set`, `std::multiset`
- `<unordered_map>` — Hash maps (C++11)
- `<unordered_set>` — Hash sets (C++11)
- `<stack>` — `std::stack`
- `<queue>` — `std::queue`, `std::priority_queue`
- `<span>` — `std::span` view (C++20)
- `<mdspan>` — `std::mdspan` (C++23)
- `<flat_map>` — `std::flat_map` (C++23)
- `<flat_set>` — `std::flat_set` (C++23)

### 📂 Input / Output

- `<iostream>` — Standard streams
- `<istream>` — Input streams
- `<ostream>` — Output streams
- `<ios>` — Stream base classes
- `<iosfwd>` — Forward declarations
- `<iomanip>` — I/O manipulators
- `<fstream>` — File streams
- `<sstream>` — String streams
- `<spanstream>` — Span streams (C++23)
- `<strstream>` — Deprecated old string streams
- `<cstdio>` — C I/O
- `<print>` — `std::print` (C++23)
- `<streambuf>` — Stream buffers
- `<syncstream>` — Synchronized output streams (C++20)

### 🔧 Utilities

- `<any>` — `std::any` (C++17)
- `<optional>` — `std::optional` (C++17)
- `<variant>` — `std::variant` (C++17)
- `<expected>` — `std::expected` (C++23)
- `<tuple>` — `std::tuple` (C++11)
- `<functional>` — Function objects, bind, invoke
- `<bitset>` — Fixed-size bitset
- `<source_location>` — Code location info (C++20)
- `<debugging>` — Debugging utilities (C++26)

### 🧵 Memory Management

- `<new>` — Low-level memory utilities
- `<memory>` — Smart pointers, allocators
- `<memory_resource>` — Polymorphic allocators (C++17)
- `<scoped_allocator>` — Nested allocators (C++11)

### ⚡ Error Handling & Debugging

- `<cassert>` — Assertions
- `<cerrno>` — Error codes
- `<exception>` — Exception handling
- `<stdexcept>` — Standard exceptions
- `<system_error>` — Error codes & conditions (C++11)
- `<stacktrace>` — Stacktrace (C++23)

### 🔄 Iterators & Ranges

- `<iterator>` — Iterators
- `<ranges>` — Ranges library (C++20)
- `<generator>` — `std::generator` (C++23)

### ⚙️ Algorithms & Execution

- `<algorithm>` — Sorting, searching, etc.
- `<execution>` — Parallel execution policies (C++17)

### 🌍 Localization

- `<locale>` — Localization utilities
- `<clocale>` — C-style locale
- `<codecvt>` — Unicode conversion (C++11, deprecated C++17, removed C++26)
- `<text_encoding>` — Text encodings (C++26)

### 📁 Filesystem

- `<filesystem>` — Paths and filesystem operations (C++17)

### 🔍 Regular Expressions

- `<regex>` — Regex library (C++11)

### 🔒 Atomics & Concurrency

- `<atomic>` — Atomic operations (C++11)

### 🧵 Threading & Parallelism

- `<thread>` — `std::thread` (C++11)
- `<mutex>` — Mutexes (C++11)
- `<shared_mutex>` — Shared mutex (C++14)
- `<condition_variable>` — Thread waiting (C++11)
- `<future>` — Async computations (C++11)
- `<stop_token>` — Stop tokens (C++20)
- `<barrier>` — Barriers (C++20)
- `<latch>` — Latches (C++20)
- `<semaphore>` — Semaphores (C++20)
- `<hazard_pointer>` — Hazard pointers (C++26)
- `<rcu>` — Read-copy-update (C++26)

### 🧩 Core Concepts & Language Features

- `<concepts>` — Fundamental concepts (C++20)
- `<coroutine>` — Coroutine support (C++20)
- `<compare>` — Three-way comparison (`<=>`, C++20)
- `<type_traits>` — Compile-time type information
- `<typeinfo>` — Runtime type information
- `<typeindex>` — `std::type_index` (C++11)
- `<utility>` — Utility components (`move`, `swap`, etc.)
- `<initializer_list>` — `std::initializer_list` (C++11)
- `<version>` — Implementation-dependent library info (C++20)

---
