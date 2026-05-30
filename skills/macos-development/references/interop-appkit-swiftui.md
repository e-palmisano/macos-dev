# Interop: Mixing AppKit and SwiftUI

> Hosting SwiftUI in AppKit (NSHostingView/Controller/Menu) and AppKit in SwiftUI (NSViewRepresentable, NSViewControllerRepresentable), scene representation, gesture-recognizer bridging, and porting to Apple silicon.

---

# https://developer.apple.com/documentation/SwiftUI

Framework

# SwiftUI

Declare the user interface and behavior for your app on every platform.

## Overview

SwiftUI provides views, controls, and layout structures for declaring your app’s user interface. The framework provides event handlers for delivering taps, gestures, and other types of input to your app, and tools to manage the flow of data from your app’s models down to the views and controls that users see and interact with.

Define your app structure using the `App` protocol, and populate it with scenes that contain the views that make up your app’s user interface. Create your own custom views that conform to the `View` protocol, and compose them with SwiftUI views for displaying text, images, and custom shapes using stacks, lists, and more. Apply powerful modifiers to built-in views and your own views to customize their rendering and interactivity. Share code between apps on multiple platforms with views and controls that adapt to their context and presentation.

You can integrate SwiftUI views with objects from the UIKit, AppKit, and WatchKit frameworks to take further advantage of platform-specific functionality. You can also customize accessibility support in SwiftUI, and localize your app’s interface for different languages, countries, or cultural regions.

### Featured samples

![An image with a background of Mount Fuji, and in the foreground screenshots of the landmark detail view for Mount Fuji in the Landmarks app, in an iPad and iPhone.\\
\\
Landmarks: Building an app with Liquid Glass \\
\\
Enhance your app experience with system-provided and custom Liquid Glass.\\
\\
](https://developer.apple.com/documentation/swiftui/landmarks-building-an-app-with-liquid-glass)

![A conceptual illustration of a map, with three images of locations on the map.\\
\\
Wishlist: Planning travel in a SwiftUI app \\
\\
Build a travel planning app that organizes trips into collections and tracks activity completion.\\
\\
](https://developer.apple.com/documentation/swiftui/wishlist-planning-travel-in-a-swiftui-app)

![An image showing Destination Video on visionOS.\\
\\
Destination Video \\
\\
Leverage SwiftUI to build an immersive media experience in a multiplatform app.\\
\\
](https://developer.apple.com/documentation/visionOS/destination-video)

![A screenshot displaying the document launch experience on iPad with a robot and plant accessory to the left and right of the title view, respectively.\\
\\
Building a document-based app with SwiftUI \\
\\
Create, save, and open documents in a multiplatform app.\\
\\
](https://developer.apple.com/documentation/swiftui/building-a-document-based-app-with-swiftui)

## Topics

### Essentials

Adopting Liquid Glass

Find out how to bring the new material to your app.

Develop in Swift

Develop in Swift Tutorials introduce app development with Swift and Xcode to anyone learning to build apps for Apple platforms.

SwiftUI updates

Learn about important changes to SwiftUI.

Landmarks: Building an app with Liquid Glass

Enhance your app experience with system-provided and custom Liquid Glass.

### App structure

Define the entry point and top-level structure of your app.

Declare the user interface groupings that make up the parts of your app.

Display user interface content in a window or a collection of windows.

Display unbounded content in a person’s surroundings.

Enable people to open and manage documents.

Enable people to move between different parts of your app’s view hierarchy within a scene.

Present content in a separate view that offers focused interaction.

Provide immediate access to frequently used commands and controls.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

### Data and storage

Manage the data that your app uses to drive its interface.

Share data throughout a view hierarchy using the environment.

Indicate configuration preferences from views to their container views.

Store data for use across sessions of your app.

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

### View layout

Arrange views inside built-in layout containers like stacks and grids.

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

Place views in custom arrangements and create animated transitions between layout types.

Display a structured, scrollable column of information.

Display selectable, sortable data arranged in rows and columns.

Present views in different kinds of purpose-driven containers, like forms or control groups.

Enable people to scroll to content that doesn’t fit in the current display.

### Event handling

Define interactions from taps, clicks, and swipes to fine-grained gestures.

Respond to input from a hardware device, like a keyboard or a Touch Bar.

Enable people to move or duplicate items by issuing Copy and Paste commands.

Enable people to move or duplicate items by dragging them from one location to another.

Identify and control which visible object responds to user interaction.

React to system events, like opening a URL.

### Accessibility

Make your SwiftUI apps accessible to everyone, including people with disabilities.

Enhance the legibility of content in your app’s interface.

Improve access to actions that your app can undertake.

Describe interface elements to help people understand what they represent.

Enable users to navigate to specific user interface elements using rotors.

### Framework integration

Add AppKit views to your SwiftUI app, or use SwiftUI views in your AppKit app.

Add UIKit views to your SwiftUI app, or use SwiftUI views in your UIKit app.

Add WatchKit views to your SwiftUI app, or use SwiftUI views in your WatchKit app.

Use SwiftUI views that other Apple frameworks provide.

### Tool support

Generate dynamic, interactive previews of your custom views.

Expose custom views and modifiers in the Xcode library.

Measure and improve your app’s responsiveness.

### Articles

Wishlist: Planning travel in a SwiftUI app

Build a travel planning app that organizes trips into collections and tracks activity completion.

---

# https://developer.apple.com/documentation/swiftui/appkit-integration

Collection

- SwiftUI
- AppKit integration

API Collection

# AppKit integration

Add AppKit views to your SwiftUI app, or use SwiftUI views in your AppKit app.

## Overview

Integrate SwiftUI with your app’s existing content using hosting controllers to add SwiftUI views into AppKit interfaces. A hosting controller wraps a set of SwiftUI views in a form that you can then add to your storyboard-based app.

You can also add AppKit views and view controllers to your SwiftUI interfaces. A representable object wraps the designated view or view controller, and facilitates communication between the wrapped object and your SwiftUI views.

For design guidance, see Designing for macOS in the Human Interface Guidelines.

## Topics

### Displaying SwiftUI views in AppKit

Unifying your app’s animations

Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.

`class NSHostingController`

An AppKit view controller that hosts SwiftUI view hierarchy.

`class NSHostingView`

An AppKit view that hosts a SwiftUI view hierarchy.

`class NSHostingMenu`

An AppKit menu with menu items that are defined by a SwiftUI View.

`struct NSHostingSizingOptions`

Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.

`class NSHostingSceneRepresentation`

An AppKit type that hosts and can present SwiftUI scenes

`struct NSHostingSceneBridgingOptions`

Options for how hosting views and controllers manage aspects of the associated window.

### Adding AppKit views to SwiftUI view hierarchies

`protocol NSViewRepresentable`

A wrapper that you use to integrate an AppKit view into your SwiftUI view hierarchy.

`struct NSViewRepresentableContext`

Contextual information about the state of the system that you use to create and update your AppKit view.

`protocol NSViewControllerRepresentable`

A wrapper that you use to integrate an AppKit view controller into your SwiftUI interface.

`struct NSViewControllerRepresentableContext`

Contextual information about the state of the system that you use to create and update your AppKit view controller.

### Adding AppKit gesture recognizers into SwiftUI view hierarchies

`protocol NSGestureRecognizerRepresentable`

A wrapper for an `NSGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.

`struct NSGestureRecognizerRepresentableContext`

Contextual information about the state of the system that you use to create and update a represented gesture recognizer.

`struct NSGestureRecognizerRepresentableCoordinateSpaceConverter`

A structure used to convert locations to and from coordinate spaces in the hierarchy of the SwiftUI view associated with an `NSGestureRecognizerRepresentable`.

## See Also

### Framework integration

Add UIKit views to your SwiftUI app, or use SwiftUI views in your UIKit app.

Add WatchKit views to your SwiftUI app, or use SwiftUI views in your WatchKit app.

Use SwiftUI views that other Apple frameworks provide.

---

# https://developer.apple.com/documentation/SwiftUI/NSHostingMenu

- SwiftUI
- NSHostingMenu

Class

# NSHostingMenu

An AppKit menu with menu items that are defined by a SwiftUI View.

## Overview

Because `NSHostingMenu` is an `NSMenu` subclass, you can integrate it into your existing AppKit view hierarchies that display menus. For example, you can set a hosting menu as an AppKit view’s context menu.

A hosting menu’s `items` property will be updated based on the content of the provided `rootView`, so direct mutations to the item array are not allowed, even if done using methods like `addItem` on the menu itself.

SwiftUI views hosted in the menu will be styled and behave identically to views in a `Menu` or `View/contextMenu`. Make sure to use a `Group` or a view with multiple subviews as your top level container instead of an `HStack` or other container that would attempt to place all of your actions in a single menu item.

For example, the following code would set up the first part of the Finder’s context menu, both in the Action button in the toolbar and as a context menu:

struct FileOrFolderContextMenu: View {
let url: URL
var body: some View {
Section {
if url.hasDirectoryPath {
Button("Open in New Tab") { ... }
} else {
Button("Open") { ... }
Menu("Open With") { ... }
}
}
Section {
Button("Move to Trash") { ... }
}
Section {
Button("Get Info") { ... }
Button("Rename") { ... }
if url.pathExtension != "zip" {
Button("Compress “\(url.lastPathComponent)”") { ... }
}
// ...
}
}
}

// In the toolbar setup:
let popUpButton = NSPopUpButton(frame: .zero, pullsDown: true)
(popUpButton.cell as! NSPopUpButtonCell).usesItemFromMenu = false
popUpButton.menu = NSHostingMenu(rootView: Group {
Button("New Folder") { ... }
FileOrFolderContextMenu(url: selectedURL)
})

// In the column view:
List(directoryContents, selection: $selection) { entry in
DirectoryEntryRow(entry: entry)
.contextMenu {
FileOrFolderContextMenu(url: entry.url)
}
}

## Topics

### Initializers

`init(rootView: Content)`

Creates a hosting menu object that wraps the specified SwiftUI view.

### Instance Properties

`var rootView: Content`

The root view of the SwiftUI view hierarchy managed by this menu.

## Relationships

### Inherits From

- `NSMenu`

### Conforms To

- `CVarArg`
- `CustomDebugStringConvertible`
- `CustomStringConvertible`
- `Equatable`
- `Hashable`
- `NSAccessibilityElementProtocol`
- `NSAccessibilityProtocol`
- `NSAppearanceCustomization`
- `NSCoding`
- `NSCopying`
- `NSObjectProtocol`
- `NSUserInterfaceItemIdentification`

## See Also

### Displaying SwiftUI views in AppKit

Unifying your app’s animations

Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.

`class NSHostingController`

An AppKit view controller that hosts SwiftUI view hierarchy.

`class NSHostingView`

An AppKit view that hosts a SwiftUI view hierarchy.

`struct NSHostingSizingOptions`

Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.

`class NSHostingSceneRepresentation`

An AppKit type that hosts and can present SwiftUI scenes

`struct NSHostingSceneBridgingOptions`

Options for how hosting views and controllers manage aspects of the associated window.

---

# https://developer.apple.com/documentation/SwiftUI/NSHostingSceneRepresentation

- SwiftUI
- NSHostingSceneRepresentation

Class

# NSHostingSceneRepresentation

An AppKit type that hosts and can present SwiftUI scenes

@MainActor

## Overview

Use instances of this type with `NSApplication.addSceneRepresentation(_:)` to include SwiftUI scene functionality in an app which uses the AppKit app lifecycle.

For example, you can add a `Settings` scene to your app and present it when the corresponding menu item is selected:

import AppKit
import SwiftUI

@main
class ApplicationDelegate: NSApplicationDelegate {
let settingsScene = NSHostingSceneRepresentation {
Settings {
SettingsView()
}
}

func applicationWillFinishLaunching(_ notification: Notification) {
NSApplication.shared.addSceneRepresentation(settingsScene)
}

@IBAction func showAppSettings(_ sender: NSMenuItem) {
settingsScene.environment.openSettings()
}
}

## Topics

### Initializers

Creates a new hosting scene representation for the specified scene(s).

### Instance Properties

`var environment: EnvironmentValues`

The environment for any scene(s) being represented by `self`.

## See Also

### Displaying SwiftUI views in AppKit

Unifying your app’s animations

Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.

`class NSHostingController`

An AppKit view controller that hosts SwiftUI view hierarchy.

`class NSHostingView`

An AppKit view that hosts a SwiftUI view hierarchy.

`class NSHostingMenu`

An AppKit menu with menu items that are defined by a SwiftUI View.

`struct NSHostingSizingOptions`

Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.

`struct NSHostingSceneBridgingOptions`

Options for how hosting views and controllers manage aspects of the associated window.

---

# https://developer.apple.com/documentation/SwiftUI/UIHostingSceneDelegate

- SwiftUI
- UIHostingSceneDelegate

Protocol

# UIHostingSceneDelegate

Extends `UIKit/UISceneDelegate` to bridge SwiftUI scenes.

protocol UIHostingSceneDelegate : UISceneDelegate

## Overview

Declare any SwiftUI scenes you wish to activate from UIKit in the static `rootScene` property of your conforming class:

class HostingSceneDelegate: UIHostingSceneDelegate {
static var rootScene: some Scene {
WindowGroup(id: "swiftui-window") {
ContentView()
}
}

// Add UISceneDelegate lifecycle callbacks here
}

Use a class conforming to `UIHostingSceneDelegate` to activate a scene by its ID or presented value with `UISceneSessionActivationRequest`:

if let requestWithID = UISceneSessionActivationRequest(
hostingDelegateClass: HostingSceneDelegate.self,
id: "swiftui-window"
) {
UIApplication.shared.activateSceneSession(for: requestWithID)
}

if let requestWithData = UISceneSessionActivationRequest(
hostingDelegateClass: HostingSceneDelegate.self,
value: FavoriteNumber(13)
) {
UIApplication.shared.activateSceneSession(for: requestWithData)
}

When a SwiftUI scene declared in your `rootScene` property is activated, an instance of your conforming class will be created by SwiftUI and receive window scene lifecycle callbacks.

Your `UIHostingSceneDelegate` class can be used with a `UISceneConfiguration` in your app delegate’s `application(_:configurationForConnecting:options:)`method to activate a SwiftUI scene in response to an external event:

class AppDelegate: UIApplicationDelegate {

func application(
_ app: UIApplication,
configurationForConnecting sceneSession: UISceneSession,
options: UIScene.ConnectionOptions

let config = UISceneConfiguration(
name: nil, sessionRole: sceneSession.role)
config.delegateClass = HostingSceneDelegate.self
return config
}

}

## Topics

### Associated Types

`associatedtype RootScene : Scene`

**Required**

### Type Properties

`static var rootScene: Self.RootScene`

## Relationships

### Inherits From

- `NSObjectProtocol`
- `UISceneDelegate`

## See Also

### Displaying SwiftUI views in UIKit

Using SwiftUI with UIKit

Learn how to incorporate SwiftUI views into a UIKit app.

Unifying your app’s animations

Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.

`class UIHostingController`

A UIKit view controller that manages a SwiftUI view hierarchy.

`struct UIHostingControllerSizingOptions`

Options for how a hosting controller tracks its content’s size.

`struct UIHostingConfiguration`

A content configuration suitable for hosting a hierarchy of SwiftUI views.

---

# https://developer.apple.com/documentation/SwiftUI/NSGestureRecognizerRepresentable

- SwiftUI
- NSGestureRecognizerRepresentable

Protocol

# NSGestureRecognizerRepresentable

A wrapper for an `NSGestureRecognizer` that you use to integrate that gesture recognizer into your SwiftUI hierarchy.

@MainActor @preconcurrency
protocol NSGestureRecognizerRepresentable

## Overview

Use an `NSGestureRecognizerRepresentable` instance to create and manage an `NSGestureRecognizer` object in your SwiftUI interface.

To add your gesture recognizer to a SwiftUI view, create an instance of `NSGestureRecognizerRepresentable` and use the `gesture(_:)` modifier to attach it. The system calls the methods of your representable instance at appropriate times to create and update the gesture recognizer.

The following example shows the inclusion of a custom `MyGestureRecognizer` structure in the view hierarchy.

struct ContentView: View {
var body: some View {
VStack {
Image("Mountain")
.gesture(MyGestureRecognizer())
}
}
}

`NSGestureRecognizerRepresentable` types can use the environment and have data dependencies, similar to views and view representables. The system will call the appropriate methods on your instance to propagate the latest data.

## Handling Gesture Recognizer Actions

SwiftUI automatically installs a target to handle the gesture recognizer’s action on your behalf. Implement the `handleNSGestureRecognizerAction` method to react to the gesture recognizing its action.

You can optionally include a coordinator object to forward delegate messages from your gesture recognizer or add additional targets.

## Coordinate Space Conversions

The gesture recognizer you create may not be attached to an `NSView` in the hierarchy, or it may return a view with different geometry than your SwiftUI view.

To handle this, use the converter on the context to perform coordinate space conversions from the global coordinate space. You can pass the gesture recognizer and a SwiftUI coordinate space to the converter to retrieve a final converted point. Passing the `local` coordinate space (the default) will provide the point in the SwiftUI view the gesture recognizer is attached to.

## Topics

### Associated Types

`associatedtype Coordinator = Void`

A type to coordinate with the gesture recognizer.

**Required**

`associatedtype NSGestureRecognizerType : NSGestureRecognizer`

The type of `NSGestureRecognizer` to be presented.

### Instance Methods

`func handleNSGestureRecognizerAction(Self.NSGestureRecognizerType, context: Self.Context)`

Handles recognition of the represented `NSGestureRecognizer`.

**Required** Default implementation provided.

Creates the custom object that you use to communicate state changes from your gesture recognizer to other parts of your SwiftUI interface.

Creates an instance of the represented gesture recognizer.

`func updateNSGestureRecognizer(Self.NSGestureRecognizerType, context: Self.Context)`

Updates the `NSGestureRecognizer` (and coordinator) to the latest configuration.

### Type Aliases

`typealias Context`

Contextual information about the state of the system that you use to create and update your gesture recognizer.

`typealias CoordinateSpaceConverter`

A type used to convert coordinates to/from coordinate spaces in the hierarchy of the associated SwiftUI view.

## See Also

### Adding AppKit gesture recognizers into SwiftUI view hierarchies

`struct NSGestureRecognizerRepresentableContext`

Contextual information about the state of the system that you use to create and update a represented gesture recognizer.

`struct NSGestureRecognizerRepresentableCoordinateSpaceConverter`

A structure used to convert locations to and from coordinate spaces in the hierarchy of the SwiftUI view associated with an `NSGestureRecognizerRepresentable`.

---

# https://developer.apple.com/documentation/Apple-Silicon/porting-your-macos-apps-to-apple-silicon

Collection

- Apple silicon
- Porting your macOS apps to Apple silicon

# Porting your macOS apps to Apple silicon

Create a version of your macOS app that runs on both Apple silicon and Intel-based Mac computers.

## Overview

Port your existing macOS app to Apple silicon by creating a universal binary and modifying your code to handle architectural differences. A universal binary looks no different than a regular app, but its executable file contains two versions of your compiled code. One version runs natively on Apple silicon, and the other runs natively on Intel-based Mac computers. At runtime, the system automatically chooses which version to run on the current platform.

To build a universal binary, you need Xcode 12 or a later version, which adds `arm64` to the standard list of build architectures for macOS binaries. When you open your project and do a clean build, Xcode creates a universal binary automatically if your project uses the standard architectures. If you use custom makefiles or build scripts, add the `arm64` architecture to your build system.

After you create a universal binary, test it on both architectures and determine whether you need to make additional changes. macOS frameworks shield apps from most architectural differences between platforms, but some differences may still require you to change your code. In addition, architectural differences may affect your app’s performance and require further changes.

To learn how to build a universal binary, see Building a universal macOS binary.

### Create a Porting Plan

Early in the porting process, identify the workflow you’ll use to build and test your code. Xcode runs on all Mac computers, so build your code on either an Apple silicon or Intel-based Mac computer and do your initial testing there. However, always test, tune, and validate your code on both computer types to uncover issues specific to that architecture.

In addition to a workflow plan, identify potential areas to investigate during the porting process. The porting effort for `arm64` depends on how much you rely on hardware-specific features. If you rely mostly on Apple frameworks and technologies, your porting effort may be small. If you tuned your code specifically for the `x86_64` architecture and hardware capabilities, porting to `arm64` may require additional effort.

To start your investigation, make a note of any code that does the following:

- Interacts with third-party libraries you don’t own.

- Interacts with the kernel or hardware.

- Relies on specific GPU behaviors.

- Contains assembly instructions.

- Manages threads or optimizes your app’s multithreaded behavior.

- Contains hardware-specific assumptions or performance optimizations.

The list above is not exhaustive, but it offers a starting point for your investigation. Hardware and architectural differences may introduce bugs or performance issues to your code on Apple silicon. Identifying potential problem areas early will save you time later.

Always have a well-defined test plan, ideally with a set of automated test suites you can run at build time. In addition to testing your code’s correctness, gather metrics on your app’s performance. Examine your app’s memory usage, and measure how long it takes to execute specific tasks on both Apple silicon and Intel-based Mac computers. Use that information to identify additional areas to investigate.

### Obtain Universal Versions of Linked Libraries

If your project depends on any third-party libraries, contact the original vendors and ask them to provide you with universal versions of those libraries. All code running in the same process must support the same architecture. You cannot produce a universal version of your binary without universal versions of all linked libraries. If one or more libraries is not universal, the linker reports errors.

To learn how to create your own universal binaries, see Building a universal macOS binary.

### Update Plug-Ins to Universal Binaries

A universal plug-in runs natively on any Mac computer. If your app supports a plug-in model, create universal versions of the plug-ins that you manage. If your company allows external developers to contribute plug-ins, encourage those developers to create universal versions of their plug-ins.

Universal plug-ins are essential if your app loads those plug-ins directly into its process space. Code running in the same process must support the same architecture. If your app attempts to load a plug-in with an incompatible architecture, the system reports an error at load time.

Plug-ins that run out-of-process using an XPC service may run using a different architecture than the app itself. To give your developers time to update their plug-ins, provide two non-universal XPC services—one to run `arm64` plug-ins and one to run `x86_64` plug-ins. A single XPC service can manage either native or translated plug-ins, but not both at the same time. When creating the services, give each one a unique bundle identifier so they may run simultaneously.

For information about how to communicate with out-of-process plug-ins using XPC, see XPC.

### Address Architectural Differences

Apart from large-scale changes to the processor and graphics hardware, subtle architectural differences exist between Apple silicon and Intel-based Mac computers. During the porting process, audit your code to identify fixes for any potential architectural issues. For example, look for places where your code relies on specific hardware features or configurations.

The following list identifies several known architectural differences between Apple silicon and Intel-based Mac computers. Update code that relies on any of the following:

- Virtual memory-page sizes

- Cache line sizes

- Variadic functions

- Memory that is simultaneously writable and executable

- Just-in-time compilers

- Realtime threads

- Explicit thread priorities

- Hardware-specific details

- Assembly-language instructions or builtin intrinsics

- Vector unit instructions

- C++ ABI details

For additional information about architectural differences, see Addressing architectural differences in your macOS code.

### Update GPU-Specific Code

Metal on Apple silicon supports the features of both Intel-based Mac computers and iOS devices. If your app adopts Metal features that are found only on Intel-based Mac computers, consider also adopting the iOS-specific features in your `arm64` code. Adopting these features can lead to performance improvements for many apps.

If your app uses Metal, OpenGL, or OpenCL, be aware of the following differences:

- The GPU and CPU on Apple silicon share memory.

- OpenGL is deprecated, but is available on Apple silicon.

- OpenCL is deprecated, but is available on Apple silicon when targeting the GPU. The OpenCL CPU device is not available to arm64 apps.

For information about how to update your graphics code, see Porting your Metal code to Apple silicon.

### Update Drivers, System Extensions, and Kernel Extensions

When porting code to macOS 11, be aware of the following requirements for code that interacts with the kernel:

- Implement hardware drivers using DriverKit. macOS 11 requires you to use a DriverKit extension when support for one is available. Most driver types now support DriverKit, and only a few still require the creation of a kernel extension.

- Kernel extensions must support the native architecture. Kernel extensions run in the kernel, and the kernel always runs as a native process. You cannot run kernel extensions using Rosetta translation.

- The installation and uninstallation of kernel extensions requires a reboot. When you install a kernel extension, the system doesn’t load your extension until after a reboot.

For more information about kernel extension and driver changes, see Implementing drivers, system extensions, and kexts.

### Migrate Away from Specific Technologies

macOS includes a few technologies that are currently deprecated or discouraged for active development. If your app uses one of the following technologies, migrate to an appropriate replacement as soon as possible:

- OpenGL—Use Metal instead.

- OpenCL—Use Metal instead.

- AddressBook—Use the Contacts framework instead.

- Carbon APIs—Migrate to AppKit, Foundation, and other modern APIs.

- IOKit kernel extensions—Migrate to DriverKit where appropriate; see DriverKit framework.

Apple silicon still provides support for the preceding technologies, and you may continue to use them in macOS 11. However, this support may be removed in a future version of macOS, so migration to newer technologies is recommended.

### Debug and Test Your Code

Apple silicon supports all debugging and testing tools found on Intel-based Mac computers. Use the Xcode IDE to set and monitor breakpoints and monitor other aspects of your app’s behavior. Use `lldb` from the command line to perform similar tasks outside of the Xcode interface.

For more information about how to debug and test your code, see Xcode.

### Tune Your App’s Performance

Apple silicon runs all performance tools found on Intel-based Mac computers. Use Instruments and other performance tools to gather different types of metrics for your app, including information about its memory usage, speed, energy usage, and more. You can also use command-line tools such as `leaks`, `heap`, `top`, `fs_usage`, `sc_usage`, `vm_stat`, `otool`, `sample`, `malloc_history`, and `vmmap` to identify potential performance issues.

Architectural differences between `arm64` and `x86_64` mean that techniques that work well on one system might not work well on the other. For example:

- Don’t assume a discrete GPU means better performance. The integrated GPU in Apple processors is optimized for high performance graphics tasks. See Porting your Metal code to Apple silicon.

- Don’t assume that all processor cores are equal. The processors on Apple silicon contain a mixture of cores, code paths, and other technologies that that can prioritize speed or efficiency of your code, and process tasks with different performance characteristics. Use Quality-of-Service (QoS) classes to help the system schedule your tasks on the right type of core.

During the porting process, measure your app’s performance on both Apple silicon and Intel-based Mac computers and investigate any discrepancies. Tasks that take longer to run on one platform may require additional tuning.

For specific tips on tuning universal binaries, see Tuning your code’s performance for Apple silicon.

## Topics

### Additional Porting Tips

Addressing architectural differences in your macOS code

Fix problems that stem from architectural differences between Apple silicon and Intel-based Mac computers.

Porting your audio code to Apple silicon

Eliminate issues in your audio-specific code when running on Apple silicon Mac computers.

Porting just-in-time compilers to Apple silicon

Update your just-in-time (JIT) compiler to work with the Hardened Runtime capability, and with Apple silicon.

## See Also

### Essentials

Building a universal macOS binary

Create macOS apps and other executables that run natively on both Apple silicon and Intel-based Mac computers.

---

# Protecting the User’s Privacy

Secure personal data, and respect user preferences for how data is used.

## Overview

Designing for user privacy is important. Most Apple devices contain personal data that the user doesn’t want to expose to apps or to external entities. If your app accesses or uses data inappropriately, the user might stop using your app and even delete it from their device.

Access user or device data only with the user’s informed consent obtained in accordance with applicable law. In addition, take appropriate steps to protect user and device data, and be transparent about how you use it.

### Review Guidelines from Government and Industry Sources

Consult these documents:

- Mobile Privacy Disclosures: Building Trust Through Transparency. The Federal Trade Commission’s report on mobile privacy.

- Opinion 02/2013 on Apps on Smart Devices. The EU Data Protection Commissioners’ opinion on data protection for mobile apps.

- Privacy on the Go: Recommendations for the Mobile Ecosystem. The California State Attorney General’s recommendations for mobile privacy.

- Smartphone Privacy Initiative (2012) in English or Japanese and Smartphone Privacy Initiative II (2013) in English or Japanese. The Japanese Ministry of Internal Affairs and Communications’ Smartphone Privacy Initiatives.

### Request Access Only When Your App Needs the Data

Request access to sensitive user or device data—like location, contacts, and photos—at the time your app needs the data. Supply a purpose string (sometimes called a usage description string) in your app’s `Information Property List` that the system can present to a user explaining why your app needs access. Provide reasonable fallback behavior in situations where the user doesn’t grant access to the requested data. For more details, see Requesting access to protected resources.

### Be Transparent About How Data Will Be Used

For example, when you submit your app to the App Store, specify a URL for your or statement as part of your App Store Connect metadata. You can also summarize that policy or statement in your app description.

### Give the User Control Over Data and Protect Data You Collect

Respect the user’s preferences, and take reasonable steps to protect the data that you collect in your apps:

- Provide settings that allow the user to disable access to sensitive information. The operating system does this automatically for protected system resources—like location, contacts, and health data—through the Privacy menu of the Settings app. Extend this behavior to any data you cache from these sources or collect directly. For example, if your users build a social media profile containing personal information, offer them a way to delete the data (including any server copies you have).

- When storing files in iOS, use the strongest data protection level that works for your app, as described in Encrypting Your App’s Files. Use App Transport Security when sending user or device data over the network, as described in NSAppTransportSecurity.

- If your app uses the `ASIdentifierManager` class, respect the value of its `isAdvertisingTrackingEnabled` property. If the user sets that property to false, then use the `ASIdentifierManager` class only for limited advertising purposes, like frequency capping, attribution, conversion events, estimating the number of unique users, advertising fraud detection, and debugging. See the AdSupport framework for additional information.

- If you must identify users persistently, use the `identifierForVendor` property of the `UIDevice` class or the `advertisingIdentifier` property of the `ASIdentifierManager` class.

### Use the Minimum Amount of Data Required

Request and use the minimum amount of user or device data needed to accomplish a given task. Don’t seek access to or collect data for unnecessary or non-obvious reasons, or because you think it might be useful later.

If your app supports audio input, configure your audio session for recording only at the point where you actually plan to begin recording. Don’t configure your audio session for recording at launch time if you don’t plan to record right away. The system alerts users when apps configure their audio session for recording and gives the user the option to disable recording for your app.

## Topics

### Supporting Privacy

Requesting access to protected resources

Provide a purpose string that explains to a person why you need access to protected resources on their device.

Encrypting Your App’s Files

Protect the user’s data in iOS by encrypting it on disk.

## See Also

### Essentials

Adopting Liquid Glass

Find out how to bring the new material to your app.

UIKit updates

Learn about important changes to UIKit.

About app development with UIKit

Learn about the basic support that UIKit and Xcode provide for your iOS and tvOS apps.

---

