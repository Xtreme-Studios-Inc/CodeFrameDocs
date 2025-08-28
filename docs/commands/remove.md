---
sidebar_position: 7
---

Removes a single package (dependency) from your project.

## Command

```bash
cf remove <package>
```

### Aliases

`remove`, `rm`, `rem`, `rmv`

## Arguments

### **_package_** (required)

Name of the package to remove.  
_You must specify exactly one package._

```
EXAMPLE:
cf remove glfw
```

Package folder along what that specific dependency configuration would be removed form .codeframe file.  
See more on the dependency configuration [here](../config/dependencies.md).
