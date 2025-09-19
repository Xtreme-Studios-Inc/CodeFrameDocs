---
title: Examples
sidebar_position: 2
---

CodeFrame currently supports two main dependency types:

- **`library`**
- **`env`** (Coming Soon)

---

## Library

### External Libraries

Libraries that are **not part of your project** but are pulled in as dependencies.  
These can be _third-party/vendor_ libraries (e.g., `glfw`, `fmt`, `imgui`) or even your own libraries that live outside the project’s source tree.

They are referenced via the `libPath` property (usually under `libs/external/`), and typically include:

- `source` dependencies → raw `.cpp/.c/.h` files
- `header_only` dependencies → headers only, no compiled artifacts
- `static` or `dynamic` dependencies → precompiled binaries you link against

:::note
Unlike internal libraries, **external libraries never use** the `"custom": true` flag — they’re consumed “as is” by your project.
:::

#### _Source (`linkType: "source"`)_

library consisting of source files e.g. (.cpp / .c / .h) files all within the `include` directory within the library folder.

```json title="Internal Source Library"
{
  "name": "codeframe",
  "libPath": "external/codeframe",
  "linkType": "source",
  "version": "0.0.1"
}
```

```json title="With Options"
{
  "name": "imgui",
  "libPath": "external/imgui",
  "linkType": "source",
  "options": {
    "backends": ["glfw", "vulkan"]
  },
  "version": "1.91.0"
}
```

#### _Header Only (`linkType: "header_only"`)_

```json
{
  "name": "fmt",
  "libPath": "external/fmt",
  "version": "10.2",
  "linkType": "header_only"
}
```

#### _Static / Dynamic (`linkType: "static" or "dynamic"`)_

```json
{
  "name": "glfw",
  "libPath": "external/glfw",
  "linkType": < "static" | "dynamic" >,
  "libs": ["glfw3"],
  "version": "3.5"
}
```

### Internal Libraries

Internal Libraries

Libraries that are part of your own project.
Setting `"custom": true` marks the library as internal.
With this, you can control the `outputType`:

- static → only static library
- dynamic → only shared library
- all / \* → build both

```json Library with options
{
  "name": "codeframe",
  "libPath": "codeframe",
  "linkType": "source",
  "custom": true,
  "outputType": "static"
}
```

## Env

(Coming Soon)
