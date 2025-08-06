---
sidebar_position: 2
---

Dependencies are managed in the .codeframe file.
Installed dependencies are always placed in the vendor directory for consistency.

`name`:  
The name of the dependency.

`libPath`:  
Path to the dependency’s location.
Note: Installed dependencies are always dropped in the vendor directory.

`type`:  
The type of dependency (e.g., library).

`libs`:  
List of specific libraries or binaries provided by the dependency.

```json title=".codeframe"
{
  "dependencies": [
    {
      "name": "codeframe",
      "libPath": "codeframe",
      "type": "library",
      "custom": true
    },
    {
      "name": "glfw",
      "libPath": "vendor/glfw",
      "type": "library",
      "libs": ["glfw3"]
    }
  ]
}
```
