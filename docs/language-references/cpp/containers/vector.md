---
sidebar_label: <vector>
title: "<vector> Reference"
---

# `<vector>` Dynamic Array

The `<vector>` header provides `std::vector`, a contiguous-memory, dynamic-size array. It is the default sequence container choice in C++.

---

## ⚡ Main Performance Characteristics

* **Direct Access**: $O(1)$ constant-time random access (`vector[i]` or `vector.at(i)`).
* **Back Operations**: Amortized $O(1)$ constant-time insertion/deletion at the end of the collection (`push_back`, `pop_back`, `emplace_back`).
* **Middle Operations**: Linear $O(N)$ insertion/deletion in the middle (`insert`, `erase`).

---

## 🏗️ Code Example

```cpp
#include <vector>
#include <print>
#include <string>

int main() {
    // 1. Initializing vectors
    std::vector<std::string> tools = {"Git", "Clang", "CodeFrame"};

    // 2. Optimized element insertion (no copy/move constructors invoked)
    tools.emplace_back("LLD Linker");

    // 3. Iterating safely
    for (const auto& tool : tools) {
        std::println("Tool: {}", tool);
    }

    return 0;
}
```

---

## 💡 Pro Tips for Vector Optimization

1. **Reserve Memory Early**: If you know the number of elements to add, call `vec.reserve(size)` before calling `push_back`. This avoids expensive memory reallocation and array copying.
2. **Prefer `emplace_back`**: When adding a temporary object, use `emplace_back` instead of `push_back`. It constructs the object directly inside the vector's memory block, bypassing copy and move operations.
3. **Use `shrink_to_fit`**: Dynamic vectors don't automatically release memory when shrunk. Call `vec.shrink_to_fit()` to free up unused capacity.
