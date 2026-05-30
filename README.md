<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/e-palmisano/macos-dev/main/docs/logo.png" alt="macos-dev" width="120">
  <br>
  macos-dev
  <br>
</h1>

<h4 align="center">A <a href="https://claude.ai/code" target="_blank">Claude Code</a> plugin for building native macOS apps with SwiftUI, AppKit, and Liquid Glass.</h4>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  </a>
  <img src="https://img.shields.io/badge/version-0.1.0-green.svg" alt="Version">
  <img src="https://img.shields.io/badge/platform-macOS-lightgrey.svg" alt="Platform">
  <img src="https://img.shields.io/badge/Claude%20Code-plugin-blueviolet.svg" alt="Claude Code Plugin">
  <img src="https://img.shields.io/badge/Pi-package-orange.svg" alt="Pi Package">
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#what-it-gives-you">What It Gives You</a> •
  <a href="#reference-topics">Reference Topics</a> •
  <a href="#install-on-pi">Pi</a> •
  <a href="#install-locally">Local Install</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  Bundles curated Apple Developer documentation (snapshot 2026-05-30) directly into Claude Code. No web fetching, no hallucinated APIs — the skill auto-triggers on macOS dev tasks and points Claude at topic-organized reference files covering SwiftUI, AppKit, Liquid Glass, and AppKit↔SwiftUI interop.
</p>

---

## Quick Start (Claude Code)

Install in two commands from inside Claude Code:

```bash
/plugin marketplace add e-palmisano/macos-dev

/plugin install macos-dev
```

Then `/reload-plugins`. Ask any macOS dev question to confirm the skill triggers — for example:

> "Adopt Liquid Glass in my SwiftUI Mac app"

---

## Install on Pi

This repository is also a **[Pi package](https://github.com/earendil-works/pi-coding-agent)**. Install it with the `pi` CLI:

### From GitHub (recommended)

```bash
pi install git:github.com/e-palmisano/macos-dev
```

### From npm

If you publish the package to npm with the `pi-package` keyword:

```bash
pi install npm:macos-dev-code
```

### Enable the skill

After installation, verify the skill is enabled:

```bash
pi config
```

The `macos-development` skill auto-triggers on macOS / SwiftUI / AppKit / Liquid Glass keywords, or invoke it manually with:

```
/skill:macos-development
```

> **Tip:** Pi loads skills from `~/.pi/agent/skills/` (global) or `.pi/skills/` (project-local). Installing via `pi install` places the package under `~/.pi/agent/git/` and automatically makes the skill available to every session.

---

## What It Gives You

**Liquid Glass coverage** — the 2025/2026 macOS design system postdates most model training cutoffs. This plugin carries the exact API names (`glassEffect(_:in:)`, `GlassEffectContainer`, `glassEffectID(_:in:)`, `NSGlassEffectView`) so Claude doesn't invent them from memory.

**SwiftUI-first guidance** — app/scene structure, views, state, controls, layout, animation, interaction, accessibility. Standard SwiftUI components pick up Liquid Glass automatically on the latest SDK.

**AppKit when you need it** — deep TextKit 2, `NSView` drawing, precise window/panel control, mature table/outline behavior, menus, and appearance.

**Interop without the footguns** — clear direction on which bridge to use: `NSHostingController`/`NSHostingView` for SwiftUI inside AppKit, `NSViewRepresentable`/`NSViewControllerRepresentable` for AppKit inside SwiftUI.

**Auto-triggers** — the skill activates automatically on any of these keywords:

`build a macOS app` · `SwiftUI for macOS` · `AppKit` · `Liquid Glass` · `glassEffect` · `GlassEffectContainer` · `NavigationSplitView` · `NSToolbar` · `NSViewRepresentable` · `NSHostingView` · `MenuBarExtra` · `WindowGroup` · `NSSplitViewController` · `TextKit` · `Icon Composer` · and more.

---

## Reference Topics

The `skills/macos-development/references/` directory contains topic-organized Apple docs. Claude loads only what's relevant to the current step and uses `grep` before full reads on large files.

| Topic | File |
|---|---|
| Liquid Glass, glass APIs, background extension, Icon Composer | `references/liquid-glass.md` |
| App protocol, scenes, windows, documents, Settings, menu-bar | `references/swiftui-app-and-scenes.md` |
| View protocol, modifier index, view styles, data flow / state | `references/swiftui-views-and-state.md` |
| Controls, text input/output, images, glass button styles | `references/swiftui-controls-and-text.md` |
| Layout, custom `Layout`, lists, tables, scroll, shapes, drawing | `references/swiftui-layout-lists-and-drawing.md` |
| Gestures, focus, drag-and-drop, accessibility | `references/swiftui-interaction-and-accessibility.md` |
| NavigationStack/SplitView, toolbars, inspectors, NSToolbar | `references/navigation-and-toolbars.md` |
| AppKit: app env, NSView, windows, appearance, animation, menus | `references/appkit-essentials.md` |
| NSButton, NSTextField, TextKit, fonts, drawing, color, printing | `references/appkit-controls-text-graphics.md` |
| NSHostingView/Controller/Menu, NSViewRepresentable, bridging | `references/interop-appkit-swiftui.md` |
| Xcode previews, performance, `UIDesignRequiresCompatibility` | `references/tooling-and-performance.md` |
| End-to-end Apple sample-app walkthroughs | `references/sample-apps.md` |

---

## Install Locally (without GitHub)

```bash
claude --plugin-dir /path/to/macos-dev
```

Useful for testing changes before pushing.

---

## Structure

```
macos-dev/
├── .claude-plugin/
│   ├── plugin.json          # Claude Code plugin manifest
│   └── marketplace.json     # Claude Code marketplace entry
├── docs/
│   └── logo.png
├── skills/
│   └── macos-development/
│       ├── SKILL.md         # Skill definition and trigger keywords
│       └── references/      # Curated Apple Developer docs (2026-05-30)
└── package.json             # Pi package manifest (keywords: pi-package)
```

The `package.json` at the repository root makes this a **dual-platform** plugin: it works as a Claude Code plugin (via `.claude-plugin/`) and as a Pi package (via `package.json` → `pi.skills`).


---

## Scope

This plugin targets **macOS** only. The `UI*` pages in the references exist for cross-framework comparison, not as iOS guidance. The documentation is a **2026-05-30 snapshot** — refresh after major OS releases.

---

## License

MIT © [Enzo Pio Palmisano](https://github.com/e-palmisano)
