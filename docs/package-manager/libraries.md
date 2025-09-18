Library Structure

"LibraryName/" Folder  
"include/" Folder  
"options/" Folder  
"LibraryAutorDefined_Option1" Folder  
"option_setting1" Folder  
"option_setting2" Folder  
lib.json

Example:

imgui
include
backends/
include resources
options
backends

## lib.json

This is where the library configurations live, from the config that gets duplicated by default to the projects dependencies
to the configurations for the different options set by the author

we will use imgui as an example

```json
{
  "dependencyConfig": {
    "name": "imgui",
    "libPath": "external/imgui",
    "version": "1.92.2",
    "options": {
      "backends": ["glfw", "opengl"]
    }
  },
  "libraryOptions": {
    "backends": [
      {
        "option": "glfw",
        "from": "options/backends/GLFW",
        "to": "include/backends"
      },
      {
        "option": "vulkan",
        "from": "options/backends/Vulkan",
        "to": "include/backends"
      },
      {
        "option": "webgpu",
        "from": "options/backends/WebGPU",
        "to": "include/backends"
      },
      {
        "option": "dx12",
        "from": "options/backends/DX12",
        "to": "include/backends"
      },
      {
        "option": "opengl",
        "from": "options/backends/OpenGL3",
        "to": "include/backends"
      },
      {
        "option": "sdl",
        "from": "options/backends/SDL3",
        "to": "include/backends"
      }
    ]
  }
}
```
