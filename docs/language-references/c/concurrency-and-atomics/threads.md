---
sidebar_label: <threads.h>
title: "<threads.h> Reference"
---

# `<threads.h>` Concurrency Library

The `<threads.h>` standard library header was introduced in **ISO C11** to provide native platform-independent support for threads, mutual exclusion (mutexes), and condition variables.

---

## 🧵 Thread Management

In CodeFrame, threads compile natively using standard system threads under Clang.

### Functions:
* `thrd_create`: Spawns a new concurrent execution thread.
* `thrd_join`: Blocks execution of the current thread until the target thread exits, returning its exit code.
* `thrd_detach`: Detaches the target thread, allowing its resources to be freed automatically upon exit.
* `thrd_exit`: Terminates execution of the current thread immediately.
* `thrd_sleep`: Suspends execution for a specific duration of time.

### Simple Example:
```c
#include <threads.h>
#include <stdio.h>

int worker(void* arg) {
    printf("Hello from thread running in parallel!\n");
    return 0;
}

void run_thread() {
    thrd_t thread_id;
    if (thrd_create(&thread_id, worker, NULL) == thrd_success) {
        thrd_join(thread_id, NULL);
    }
}
```

---

## 🔒 Mutual Exclusion (Mutexes)

Avoid data races and state corruption by locking code blocks.

### Functions:
* `mtx_init`: Initializes a new mutex structure.
* `mtx_lock`: Locks the mutex (blocks until locked).
* `mtx_unlock`: Unlocks the mutex, letting other threads proceed.
* `mtx_destroy`: Frees mutex resources.

### Example:
```c
#include <threads.h>
#include <stdio.h>

mtx_t lock;
int counter = 0;

int increment(void* arg) {
    for (int i = 0; i < 1000; ++i) {
        mtx_lock(&lock);
        counter++; // Protected region!
        mtx_unlock(&lock);
    }
    return 0;
}
```
