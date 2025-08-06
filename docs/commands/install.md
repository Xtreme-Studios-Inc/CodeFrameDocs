---
sidebar_position: 6
---

Installs a package from our proof of concept list of packages.  
Currently only supporting statically linked libraries

## Command

```bash
cf install [package]
```

### Aliases

`install`, `i`

### Arguments

**_package_** (optional)  
Name of the package to install.

```
EXAMPLE:
cf install glfw
```

If omitted, all packages listed in .codeframe dependencies are installed.  
See more on the dependency configuration [here](../config/dependencies.md).
