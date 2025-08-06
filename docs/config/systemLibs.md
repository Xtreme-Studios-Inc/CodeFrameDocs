Lets you specify extra system libraries to link with your project—useful for dependencies that aren’t included by default.

You only need to add system libraries here if they aren’t already covered by CodeFrame’s default set.

By Default Included For Windows Builds
CodeFrame automatically links these libraries on Windows,  
no need to add them manually:

### Windows

```json title="Windows Default"
{
  "systemLibs": [
    "stdc++", // Standard C++ library
    "kernel32", // Windows kernel core API
    "user32", // User interface (windowing, messages, input)
    "ws2_32", // Windows Sockets (networking)
    "gdi32", // Graphics Device Interface (drawing, fonts)
    "shell32", // Windows Shell API (file operations, dialogs)
    "ole32", // Object Linking and Embedding (COM support)
    "pthread", // POSIX threads (if present/needed)
    "oleaut32", // OLE Automation
    "uuid", // UUID library (COM GUIDs)
    "advapi32" // Advanced Windows API (registry, security)
  ]
}
```

Not included by default, include if needed in your `.codeframe` config:

```json title="Windows"
{
  "systemLibs": [
    "comdlg32",
    "winmm",
    "msvcrt",
    "comctl32",
    "imm32",
    "version",
    "iphlpapi",
    "dwrite",
    "d3d11",
    "d3d12",
    "dxguid",
    "dsound",
    "xaudio2",
    "mfplat",
    "mfreadwrite",
    "wininet",
    "winhttp",
    "mswsock",
    "dnsapi",
    "ntdll",
    "comsuppw",
    "setupapi",
    "cfgmgr32",
    "pdh",
    "profapi"
  ]
}
```

## COMMING SOON:

### Linux

```json title="Linux Default"
{
  "systemLibs": [
    "stdc++", // Standard C++ library
    "c", // Standard C library (libc.so, almost always linked implicitly)
    "pthread" // POSIX threads
  ]
}
```

Not included by default, include if needed in your `.codeframe` config:

```json title="Linux"
{
  "systemLibs": [
    "m", // Math library, often linked automatically (libm.so)
    "dl", // Dynamic loading (libdl.so), needed for dlopen/dlsym
    "rt", // Realtime extensions (librt.so), needed for timer APIs, etc.
    "X11", // X11 windowing system (libX11.so)
    "Xext", // X11 extensions
    "Xrandr", // X11 RandR
    "GL", // OpenGL
    "gtk-3", // GTK3 GUI
    "gdk-3", // GDK
    "wayland-client",
    "wayland-server", // Modern display servers
    "vulkan", // Vulkan
    "asound", // ALSA audio
    "pulse", // PulseAudio
    "jack", // JACK audio
    "pipewire-0.3", // PipeWire
    "udev", // Device management
    "ssl", // OpenSSL
    "crypto", // OpenSSL crypto
    "gnome-keyring", // Desktop keyring
    "secret", // Modern secret storage
    "dbus-1", // D-Bus IPC
    "unwind", // Stack unwinding/debugging
    "bfd", // Debugging/binary file
    "dw", // DWARF debug info
    "resolv", // DNS
    "nsl", // Legacy network services
    "curl", // libcurl
    "systemd" // systemd
  ]
}
```

### Mac

```json title="Mac Default"
{
  "systemLibs": [
    "c++", // Standard C++ library (libc++.dylib/libstdc++.dylib)
    "System", // Core system (libSystem.dylib includes libc, pthread, etc.)
    "CoreFoundation.framework", // Base Mac OS API (CF types, string, file, URL, etc)
    "Foundation.framework" // Base Objective-C and Swift API (NSObject, collections, etc.)
  ]
}
```

Not included by default, include if needed in your `.codeframe` config:

```json title="Mac"
{
  "systemLibs": [
    "AppKit.framework", // GUI windows and events (needed for GUI apps)
    "CoreGraphics.framework", // 2D graphics
    "QuartzCore.framework", // Core Animation
    "OpenGL.framework", // OpenGL
    "Metal.framework", // Metal GPU API
    "MetalKit.framework", // Metal utilities
    "CoreAudio.framework", // Audio
    "AudioToolbox.framework", // Audio
    "AVFoundation.framework", // Media playback/record
    "CoreMedia.framework", // Multimedia timing
    "CoreVideo.framework", // Video
    "AVKit.framework", // Video playback UI
    "IOKit.framework", // Device and hardware interface
    "CoreServices.framework", // Versioning, file system
    "Security.framework", // Security, keychain, crypto
    "CryptoTokenKit.framework", // Crypto tokens
    "SecurityFoundation.framework", // Higher-level security
    "libobjc.A.dylib", // Objective-C runtime (needed for ObjC)
    "libunwind.dylib", // Debugging/profiling (auto-linked)
    "Instruments.framework", // Profiling (Xcode/Dev only)
    "CFNetwork.framework", // Core Foundation networking
    "SystemConfiguration.framework", // Network config
    "libresolv.dylib", // DNS resolution
    "Network.framework", // Modern network API
    "CoreWLAN.framework", // WiFi
    "CoreBluetooth.framework", // Bluetooth
    "OpenCL.framework", // GPU compute
    "Speech.framework" // Speech
  ]
}
```
