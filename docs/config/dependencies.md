---
sidebar_position: 2
---

Dependencies are declared in the `.codeframe` file under the `dependencies` array.

:::note
Installed dependencies are always placed in the `libs/external/` directory.
:::

Example:

```json title=".codeframe"
{
  "dependencies": [
    {
      "name": "codeframe",
      "libPath": "codeframe",
      "type": "library",
      "linkType": "source",
      "custom": true,
      "outputType": "*"
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

For a complete explanation of all available dependency properties, see [Package Manager -> Dependency Config](../package-manager/dependency-config.md)
