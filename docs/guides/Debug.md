# Debug Guide

Debugging in **CodeFrame** is simple and seamlessly integrates with **VSCode**.

---

### Prerequisites

- [VSCode](https://code.visualstudio.com/) installed
- New project created with `cf new` and opened in VSCode

---

## Workflow

### 1. Add Breakpoints

- Open your project in **VSCode**
- Navigate to the file you want to debug
- Add breakpoints by clicking in the left margin or pressing `F9`

### 2. Open the Debug Panel

- In VSCode, click the **Run and Debug** activity bar item on the left sidebar
- You should see a preconfigured **Debug Launch** task (automatically created by CodeFrame when generating a project)

### 3. Start Debugging

- Select the **Debug Launch** task
- Press the **Start Debugging** button (▶) or simply hit **`F5`**
- Your program will start with LLDB attached, and execution will pause at your breakpoints

## Notes

- CodeFrame’s debug setup is **pre-integrated**—no extra configuration required
- All standard VSCode debugging tools (watch, step into, step over, variables, call stack, etc.) work out of the box

---

👉 That’s it. CodeFrame takes care of the setup so you can focus on debugging.
