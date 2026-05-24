---
sidebar_label: <stdatomic.h>
title: "<stdatomic.h> Reference"
---

# `<stdatomic.h>` Atomic Operations

The `<stdatomic.h>` header provides lock-free, concurrent atomic accesses to variables shared across multiple threads. It prevents data corruption and compiler reordering.

---

## 🏗️ Atomic Types

To declare an atomic variable, prefix or wrap its type using standard qualifiers:

```c
#include <stdatomic.h>

atomic_int counter = 0; // standard atomic integer
_Atomic double scale = 1.0; // standard atomic double
```

---

## ⚡ Core Atomic APIs

* `atomic_store`: Writes a value to an atomic variable safely.
* `atomic_load`: Reads a value from an atomic variable safely.
* `atomic_fetch_add`: Atomically adds a value and returns the old value.
* `atomic_fetch_sub`: Atomically subtracts a value and returns the old value.
* `atomic_compare_exchange_strong`: Performs an atomic Compare-And-Swap (CAS) operation.

### Highly Optimized Concurrency Example:
```c
#include <stdatomic.h>
#include <threads.h>
#include <stdio.h>

atomic_int active_jobs = ATOMIC_VAR_INIT(0);

int job_runner(void* arg) {
    atomic_fetch_add(&active_jobs, 1); // Safely increments in-place!
    // Perform job...
    atomic_fetch_sub(&active_jobs, 1); // Safely decrements in-place!
    return 0;
}
```
