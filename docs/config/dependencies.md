---
sidebar_position: 2
---

Dependencies are managed in the .codeframe file.  
:::note Note
Installed dependencies are always dropped in the `libs/external/` directory.
:::

**`name`**:  
The name of the dependency.

**`libPath`**:  
Path to the dependency’s location, resolved relative to the `libs/` directory.

**`type`**:  
The type of dependency (e.g., library).

**`linkType`**:
`source` (default)  
`header_only`
`static`
`dynamic`

**`outputType`**:  
(CUSTOM ONLY)  
lets you specify how the library should be build
`static` (default)  
`dynamic`  
`*` / `all` --> Creates Dynamic and Static Library when you build it.  
`defaults to 'static'`

**`libs`**:  
List of specific libraries or binaries provided by the dependency.

**`options`**:
Library author defined options that changes the shape or the library for easy compilation

**`version`**:
simply the version of the library.

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
