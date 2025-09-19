---
title: Dependency Config
---

Dependencies are managed in the .codeframe file.

:::note Note
Installed dependencies are always dropped in the `libs/external/` directory.
:::

---

# TL;DR for Library Users

If you’re just installing/using a package, focus on:

- **`name`** — the actual dependency name.
  > ⚠️ This **must match** the dependency’s real name and the folder name in which it resides. Do not change it unless you know what you’re doing.
- **`libPath`** — where CodeFrame finds the package (relative to `libs/`).
- **`linkType`** — how it links: `header_only`, `static`, `dynamic`, or `source`.
- **`libs`** — the actual library artifact names (if needed, e.g., `["glfw3"]`).
- **`options`** — feature flags the package exposes (turn features on/off).
- **`version`** — pin it for reproducible builds.

Everything else is either defaulted or mostly for package authors.

---

## Dependency Properties

### `name`

The name of the dependency.  
This is **not just cosmetic** — it must exactly match the dependency’s actual name and the folder name in which it resides. Changing this can break resolution. Only advanced users or package authors should modify it.

### `libPath`

Path to the dependency’s location, resolved relative to the `libs/` directory.

- Example: `"external/glfw"` or `"vendor/imgui"`.
- By default, installed dependencies go into `libs/external/`.

### `linkType`

Defines how the dependency links into your project:

- `header_only` → header-only library, no linker step required.
- `static` → compiled directly into your binary (self-contained, larger binary).
- `dynamic` → uses a shared library (`.dll`, `.so`, `.dylib`) at runtime.
- `source` → builds directly from source (slower, but safest for ABI compatibility).

### `libs`

Specifies the actual library artifacts required at link time.

- Example: `["glfw3"]`
- Required for `static` and `dynamic` linking.
- Artifact names may differ between platforms — check the library’s own docs.

### `options`

Feature flags provided by the library author.  
They make it easy to toggle optional functionality:

```json
"options": {
  "vulkan": true,
  "wayland": false
}
```

### `version`

Specifies the version of the dependency.

- Always pin a version for reproducible builds.
- Example: `"3.5"` for GLFW.
- Avoid leaving it out unless you are actively testing or developing.

### `type`

The type of dependency changes the way the other properties are used and makes other properties available

- `library` → set to library by default if left blank and uses each property like its documented here.
- `env` → (Coming Soon)

```json title=".codeframe"
{
  "dependencies": [
    {
      "name": "codeframe",
      "libPath": "codeframe",
      "type": "library",
      "linkType": "source",
      "outputType": "*",
      "custom": true
    },
    {
      "name": "glfw",
      "libPath": "external/glfw",
      "type": "library",
      "linkType": "static",
      "libs": ["glfw3"],
      "version": "3.5"
    }
  ]
}
```

To see more examples view [Package Manager -> Examples](examples.md)
