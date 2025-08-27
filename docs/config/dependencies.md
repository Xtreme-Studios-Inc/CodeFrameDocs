---
sidebar_position: 2
---

Dependencies are managed in the .codeframe file.
Installed dependencies are always placed in the external directory for consistency.

**`name`**:  
The name of the dependency.

**`libPath`**:  
Path to the dependency’s location.
Note: Installed dependencies are always dropped in the external directory.

**`type`**:  
The type of dependency (e.g., library).

**`linkType`**:

**`outputType`**:  
(CUSTOM ONLY)  
lets you specify how the library should be build
`dynamic`  
`static`  
`*` --> Creates Dynamic and Static Library when you build it.  
`defaults to 'static'`

**`libs`**:  
List of specific libraries or binaries provided by the dependency.

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
      "libs": ["glfw3"]
    }
  ]
}
```
