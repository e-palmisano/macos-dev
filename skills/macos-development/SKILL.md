---
name: macos-development-swiftui-appkit
description: This skill should be used when the user asks to "build a macOS app", "create a Mac app", "write SwiftUI for macOS", or works with AppKit/SwiftUI APIs — including "adopt Liquid Glass", "glassEffect", "GlassEffectContainer", "backgroundExtensionEffect", "NavigationSplitView", "NSToolbar", "NSSplitViewController", "NSViewRepresentable", "NSHostingView/NSHostingController", "MenuBarExtra", "WindowGroup", "Settings scene", "NSTextField", "NSButton", "TextKit", "Icon Composer", or mixing AppKit and SwiftUI. Use it for window/scene structure, controls, layout, navigation, toolbars, drawing, accessibility, and the 2025/2026 design system on macOS.
version: 0.1.0
---

# macOS Development with SwiftUI and AppKit

## Purpose

Guide the design and implementation of native **macOS** apps using SwiftUI and AppKit together. This skill front-loads the **2025/2026 design system (Liquid Glass)** — knowledge that often postdates a model's training cutoff — and bundles curated Apple Developer documentation (snapshot 2026-05-30) as topic-organized reference files. Consult the references for exact API names, signatures, modifiers, and adoption guidance rather than relying on memory.

## When SwiftUI vs. AppKit

Default to **SwiftUI-first** for new macOS apps, and drop to AppKit only where SwiftUI lacks coverage or fine control is required.

- **Use SwiftUI** for app/scene structure, most views, controls, layout, navigation, and animation. Standard SwiftUI components automatically pick up Liquid Glass when built with the latest SDK.
- **Use AppKit** for deep text systems (TextKit 2), precise `NSView` drawing, mature table/outline behavior, fine-grained window/panel control, and existing Cocoa codebases. See `references/appkit-essentials.md` and `references/appkit-controls-text-graphics.md`.
- **Mix them** via hosting (SwiftUI inside AppKit) and representables (AppKit inside SwiftUI). See `references/interop-appkit-swiftui.md`.

State assumptions explicitly when a requirement could map to either framework, and present the trade-off instead of silently picking one.

## Liquid Glass (read first)

Liquid Glass is the dynamic material introduced across Apple platforms. Treat its adoption as a first-class requirement for any current macOS UI work. Load `references/liquid-glass.md` whenever glass, materials, the visual refresh, or app icons come up.

Key APIs to reach for:

- **SwiftUI**: `glassEffect(_:in:)`, `GlassEffectContainer` (group/merge glass shapes so they blend and morph), `glassEffectID(_:in:)` (animated transitions), and the button styles `.glass` / `.glassProminent`.
- **AppKit**: `NSGlassEffectView`, `NSGlassEffectContainerView`, and `NSButton.BezelStyle.glass`.
- **Background extension**: `backgroundExtensionEffect()` (SwiftUI) / `NSBackgroundExtensionView` (AppKit) to extend content edge-to-edge beneath sidebars, inspectors, and toolbars.
- **App icons**: build layered, glass-aware icons with **Icon Composer**.

Critical guidance: standard components adopt Liquid Glass automatically on the latest SDK — avoid hand-reimplementing system chrome. Only opt out (temporarily) with the `UIDesignRequiresCompatibility` Info.plist key while migrating; see `references/tooling-and-performance.md`.

## Implementation workflow

1. **Clarify the app shape.** Single-window utility, document-based app, multi-window, or menu-bar (`MenuBarExtra`) app? This determines the scene structure. See `references/swiftui-app-and-scenes.md`.
2. **Establish app + scenes.** Define the `App`, choose scene types (`WindowGroup`, `Settings`, `MenuBarExtra`, `DocumentGroup`), and decide lifecycle. Bridge to AppKit lifecycle with `NSApplicationDelegateAdaptor` when delegate callbacks are needed.
3. **Plan navigation and chrome.** Use `NavigationSplitView` for the standard sidebar/content/detail Mac layout; add `.toolbar`, `ToolbarSpacer`, and `.inspector`. AppKit equivalents are `NSSplitViewController` and `NSToolbar`. See `references/navigation-and-toolbars.md`.
4. **Model the data flow.** Choose the state primitives (`@State`, `@Observable`/`Observable` macro, `@StateObject`/`@ObservedObject`/`@EnvironmentObject`, environment values, `@AppStorage`/`SceneStorage`). See `references/swiftui-views-and-state.md`.
5. **Build the views.** Compose controls, text, and images (`references/swiftui-controls-and-text.md`); arrange with stacks, grids, `Layout`, lists, and tables (`references/swiftui-layout-lists-and-drawing.md`).
6. **Apply Liquid Glass** to custom surfaces and verify the material reads correctly against content.
7. **Wire interaction + accessibility.** Gestures, focus, drag-and-drop, and a complete accessibility pass (`references/swiftui-interaction-and-accessibility.md`). Accessibility is not optional — label controls, support VoiceOver navigation, and respect appearance settings.
8. **Verify in Xcode.** Use previews, then build and run on the latest SDK to confirm the visual refresh; profile with Instruments. See `references/tooling-and-performance.md`.

## Reference map

Load only the file(s) relevant to the current step — the references are large, so prefer `grep` over full reads for big files.

| Topic | File |
|---|---|
| Liquid Glass, glass APIs, background extension, Icon Composer | `references/liquid-glass.md` |
| App protocol, scenes, windows, documents, Settings, menu-bar apps, lifecycle adaptors | `references/swiftui-app-and-scenes.md` |
| View protocol + modifier index, view styles, data flow / state | `references/swiftui-views-and-state.md` |
| Controls, text input/output, images, per-control pages, glass button styles | `references/swiftui-controls-and-text.md` |
| Layout, custom `Layout`, lists, tables, scroll, shapes, drawing, animation | `references/swiftui-layout-lists-and-drawing.md` |
| Gestures, input events, focus, drag-and-drop, accessibility | `references/swiftui-interaction-and-accessibility.md` |
| NavigationStack/SplitView, toolbars, inspectors, NSToolbar/NSSplitView, tab bar | `references/navigation-and-toolbars.md` |
| AppKit framework: app env, NSView, windows, appearance, animation, menus | `references/appkit-essentials.md` |
| NSButton/NSSwitch/NSTextField, TextKit, fonts, drawing, color, printing | `references/appkit-controls-text-graphics.md` |
| NSHostingView/Controller/Menu, NSViewRepresentable, scene/gesture bridging, Apple-silicon porting | `references/interop-appkit-swiftui.md` |
| Xcode previews, performance, `UIDesignRequiresCompatibility` | `references/tooling-and-performance.md` |
| End-to-end Apple sample-app walkthroughs | `references/sample-apps.md` |

**Grep examples** (run against a reference file before reading it whole):

```bash
REF=macos-dev/skills/macos-development/references
grep -n -i "glasseffectcontainer\|glassEffectID" "$REF/liquid-glass.md"
grep -n "NSViewRepresentable\|NSHostingController" "$REF/interop-appkit-swiftui.md"
grep -n "NavigationSplitView\|inspector(" "$REF/navigation-and-toolbars.md"
```

## Gotchas

- **Liquid Glass postdates many training cutoffs.** Do not invent glass APIs from memory — confirm exact names (`glassEffect(_:in:)`, `GlassEffectContainer`, `NSGlassEffectView`) in `references/liquid-glass.md`.
- **Group glass shapes.** Multiple separate `glassEffect` views that should blend must share a `GlassEffectContainer`; otherwise they render as disconnected panes and won't morph.
- **macOS ≠ iOS.** The references include UIKit (`UI*`) pages only for cross-framework comparison. On macOS use SwiftUI or AppKit (`NS*`) types — never instantiate `UIView`/`UIViewController`.
- **Don't reimplement system chrome.** Toolbars, sidebars, and standard controls get the visual refresh for free on the latest SDK; custom reimplementations break consistency and accessibility.
- **Bridging direction matters.** SwiftUI-in-AppKit uses `NSHostingController`/`NSHostingView`/`NSHostingMenu`; AppKit-in-SwiftUI uses `NSViewRepresentable`/`NSViewControllerRepresentable`. Mixing them up is a common error — verify in `references/interop-appkit-swiftui.md`.
- **Cite versions for behavior claims.** These docs are a 2026-05-30 snapshot; when stating availability or deprecation, reference the snapshot rather than guessing OS versions.

## Scope

Use this skill for **macOS** work. For iOS/iPadOS-only, watchOS, visionOS, or cross-platform UIKit work, prefer a platform-appropriate resource — the `UI*` pages here exist only for cross-framework comparison, not as iOS guidance. The reference content is a **2026-05-30 snapshot**; cite that date for availability/deprecation claims and refresh the docs after major OS releases.

## Additional resources

The bundled `references/` directory contains the curated Apple Developer documentation that backs every recommendation above. The `sample-apps.md` reference shows the frameworks working together in complete apps and is useful for end-to-end structure questions.
