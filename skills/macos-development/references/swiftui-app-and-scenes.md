# SwiftUI App Structure, Scenes & Windows

> The App protocol, scene types, window management, documents, settings, menu-bar apps, and lifecycle adaptors for bridging to NSApplicationDelegate.

---

# https://developer.apple.com/documentation/swiftui/app

- SwiftUI
- App

Protocol

# App

A type that represents the structure and behavior of an app.

@MainActor @preconcurrency
protocol App

## Mentioned in

Migrating to the SwiftUI life cycle

## Overview

Create an app by declaring a structure that conforms to the `App` protocol. Implement the required `body` computed property to define the app’s content:

@main
struct MyApp: App {
var body: some Scene {
WindowGroup {
Text("Hello, world!")
}
}
}

Precede the structure’s declaration with the @main attribute to indicate that your custom `App` protocol conformer provides the entry point into your app. The protocol provides a default implementation of the `main()` method that the system calls to launch your app. You can have exactly one entry point among all of your app’s files.

Compose the app’s body from instances that conform to the `Scene` protocol. Each scene contains the root view of a view hierarchy and has a life cycle managed by the system. SwiftUI provides some concrete scene types to handle common scenarios, like for displaying documents or settings. You can also create custom scenes.

@main
struct Mail: App {
var body: some Scene {
WindowGroup {
MailViewer()
}
Settings {
SettingsView()
}
}
}

You can declare state in your app to share across all of its scenes. For example, you can use the `StateObject` attribute to initialize a data model, and then provide that model on a view input as an `ObservedObject` or through the environment as an `EnvironmentObject` to scenes in the app:

@main
struct Mail: App {
@StateObject private var model = MailModel()

var body: some Scene {
WindowGroup {
MailViewer()
.environmentObject(model) // Passed through the environment.
}
Settings {
SettingsView(model: model) // Passed as an observed object.
}
}
}

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

struct MyCustomType: Transition {
// `@preconcurrency @MainActor` isolation by default
}

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

extension MyCustomType: Transition {
// `nonisolated` by default
}

## Topics

### Implementing an app

`var body: Self.Body`

The content and behavior of the app.

**Required**

`associatedtype Body : Scene`

The type of scene representing the content of the app.

### Running an app

`init()`

Creates an instance of the app using the body that you define for its content.

`static func main()`

Initializes and runs the app.

## See Also

### Creating an app

Destination Video

Leverage SwiftUI to build an immersive media experience in a multiplatform app.

Hello World

Use windows, volumes, and immersive spaces to teach people about the Earth.

Backyard Birds: Building an app with SwiftData and widgets

Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

Food Truck: Building a SwiftUI multiplatform app

Create a single codebase and app target for Mac, iPad, and iPhone.

Fruta: Building a feature-rich app with SwiftUI

Create a shared codebase to build a multiplatform app that offers widgets and an App Clip.

Use a scene-based life cycle in SwiftUI while keeping your existing codebase.

---

# https://developer.apple.com/documentation/swiftui/app-organization

Collection

- SwiftUI
- App organization

API Collection

# App organization

Define the entry point and top-level structure of your app.

## Overview

Describe your app’s structure declaratively, much like you declare a view’s appearance. Create a type that conforms to the `App` protocol and use it to enumerate the Scenes that represent aspects of your app’s user interface.

SwiftUI enables you to write code that works across all of Apple’s platforms. However, it also enables you to tailor your app to the specific capabilities of each platform. For example, if you need to respond to the callbacks that the system traditionally makes on a UIKit, AppKit, or WatchKit app’s delegate, define a delegate object and instantiate it in your app structure using an appropriate delegate adaptor property wrapper, like `UIApplicationDelegateAdaptor`.

For platform-specific design guidance, see Getting started in the Human Interface Guidelines.

## Topics

### Creating an app

Destination Video

Leverage SwiftUI to build an immersive media experience in a multiplatform app.

Hello World

Use windows, volumes, and immersive spaces to teach people about the Earth.

Backyard Birds: Building an app with SwiftData and widgets

Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

Food Truck: Building a SwiftUI multiplatform app

Create a single codebase and app target for Mac, iPad, and iPhone.

Fruta: Building a feature-rich app with SwiftUI

Create a shared codebase to build a multiplatform app that offers widgets and an App Clip.

Migrating to the SwiftUI life cycle

Use a scene-based life cycle in SwiftUI while keeping your existing codebase.

`protocol App`

A type that represents the structure and behavior of an app.

### Targeting iOS and iPadOS

`UILaunchScreen`

The user interface to show while an app launches.

`UILaunchScreens`

The user interfaces to show while an app launches in response to different URL schemes.

`struct UIApplicationDelegateAdaptor`

A property wrapper type that you use to create a UIKit app delegate.

### Targeting macOS

`struct NSApplicationDelegateAdaptor`

A property wrapper type that you use to create an AppKit app delegate.

### Targeting watchOS

`struct WKApplicationDelegateAdaptor`

A property wrapper that is used in `App` to provide a delegate from WatchKit.

`struct WKExtensionDelegateAdaptor`

A property wrapper type that you use to create a WatchKit extension delegate.

### Targeting tvOS

Creating a tvOS media catalog app in SwiftUI

Build standard content lockups and rows of content shelves for your tvOS app.

### Handling system recenter events

`enum WorldRecenterPhase`

A type that represents information associated with a phase of a system recenter event. Values of this type are passed to the closure specified in View.onWorldRecenter(action:).

## See Also

### App structure

Declare the user interface groupings that make up the parts of your app.

Display user interface content in a window or a collection of windows.

Display unbounded content in a person’s surroundings.

Enable people to open and manage documents.

Enable people to move between different parts of your app’s view hierarchy within a scene.

Present content in a separate view that offers focused interaction.

Provide immediate access to frequently used commands and controls.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

---

# https://developer.apple.com/documentation/swiftui/scenes

Collection

- SwiftUI
- Scenes

API Collection

# Scenes

Declare the user interface groupings that make up the parts of your app.

## Overview

A scene represents a part of your app’s user interface that has a life cycle that the system manages. An `App` instance presents the scenes it contains, while each `Scene` acts as the root element of a `View` hierarchy.

The system presents scenes in different ways depending on the type of scene, the platform, and the context. A scene might fill the entire display, part of the display, a window, a tab in a window, or something else. In some cases, your app might also be able to display more than one instance of the scene at a time, like when a user simultaneously opens multiple windows based on a single `WindowGroup` declaration in your app. For more information about the primary built-in scene types, see Windows and Documents.

You configure scenes using modifiers, similar to how you configure views. For example, you can adjust the appearance of the window that contains a scene — if the scene happens to appear in a window — using the `windowStyle(_:)` modifier. Similarly, you can add menu commands that become available when the scene is in the foreground on certain platforms using the `commands(content:)` modifier.

## Topics

### Creating scenes

`protocol Scene`

A part of an app’s user interface with a life cycle managed by the system.

`struct SceneBuilder`

A result builder for composing a collection of scenes into a single composite scene.

### Monitoring scene life cycle

`var scenePhase: ScenePhase`

The current phase of the scene.

`enum ScenePhase`

An indication of a scene’s operational state.

### Managing a settings window

`struct Settings`

A scene that presents an interface for viewing and modifying an app’s settings.

`struct SettingsLink`

A view that opens the Settings scene defined by an app.

`struct OpenSettingsAction`

An action that presents the settings scene for an app.

`var openSettings: OpenSettingsAction`

A Settings presentation action stored in a view’s environment.

### Building a menu bar

Building and customizing the menu bar with SwiftUI

Provide a seamless, cross-platform user experience by building a native menu bar for iPadOS and macOS.

### Creating a menu bar extra

`struct MenuBarExtra`

A scene that renders itself as a persistent control in the system menu bar.

Sets the style for menu bar extra created by this scene.

`protocol MenuBarExtraStyle`

A specification for the appearance and behavior of a menu bar extra scene.

### Creating watch notifications

`struct WKNotificationScene`

A scene which appears in response to receiving the specified category of remote or local notifications.

## See Also

### App structure

Define the entry point and top-level structure of your app.

Display user interface content in a window or a collection of windows.

Display unbounded content in a person’s surroundings.

Enable people to open and manage documents.

Enable people to move between different parts of your app’s view hierarchy within a scene.

Present content in a separate view that offers focused interaction.

Provide immediate access to frequently used commands and controls.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

---

# https://developer.apple.com/documentation/swiftui/scene

- SwiftUI
- Scene

Protocol

# Scene

A part of an app’s user interface with a life cycle managed by the system.

@MainActor @preconcurrency
protocol Scene

## Mentioned in

Building and customizing the menu bar with SwiftUI

Migrating to the SwiftUI life cycle

## Overview

You create an `App` by combining one or more instances that conform to the `Scene` protocol in the app’s `body`. You can use the built-in scenes that SwiftUI provides, like `WindowGroup`, along with custom scenes that you compose from other scenes. To create a custom scene, declare a type that conforms to the `Scene` protocol. Implement the required `body` computed property and provide the content for your custom scene:

struct MyScene: Scene {
var body: some Scene {
WindowGroup {
MyRootView()
}
}
}

A scene acts as a container for a view hierarchy that you want to display to the user. The system decides when and how to present the view hierarchy in the user interface in a way that’s platform-appropriate and dependent on the current state of the app. For example, for the window group shown above, the system lets the user create or remove windows that contain `MyRootView` on platforms like macOS and iPadOS. On other platforms, the same view hierarchy might consume the entire display when active.

Read the `scenePhase` environment value from within a scene or one of its views to check whether a scene is active or in some other state. You can create a property that contains the scene phase, which is one of the values in the `ScenePhase` enumeration, using the `Environment` attribute:

struct MyScene: Scene {
@Environment(\.scenePhase) private var scenePhase

// ...
}

The `Scene` protocol provides scene modifiers, defined as protocol methods with default implementations, that you use to configure a scene. For example, you can use the `onChange(of:perform:)` modifier to trigger an action when a value changes. The following code empties a cache when all of the scenes in the window group have moved to the background:

struct MyScene: Scene {
@Environment(\.scenePhase) private var scenePhase
@StateObject private var cache = DataCache()

var body: some Scene {
WindowGroup {
MyRootView()
}
.onChange(of: scenePhase) { newScenePhase in
if newScenePhase == .background {
cache.empty()
}
}
}
}

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

struct MyCustomType: Transition {
// `@preconcurrency @MainActor` isolation by default
}

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

extension MyCustomType: Transition {
// `nonisolated` by default
}

## Topics

### Creating a scene

`var body: Self.Body`

The content and behavior of the scene.

**Required**

`associatedtype Body : Scene`

The type of scene that represents the body of this scene.

### Watching for changes

`func onChange(of:initial:_:)`

Adds an action to perform when the given value changes.

Specifies the external events for which SwiftUI opens a new instance of the modified scene.

### Creating background tasks

Runs the specified action when the system provides a background task.

### Managing app storage

The default store used by `AppStorage` contained within the scene and its view content.

### Setting commands

Adds commands to the scene.

Removes all commands defined by the modified scene.

Replaces all commands defined by the modified scene with the commands from the builder.

Defines a keyboard shortcut for opening new scene windows.

### Sizing and positioning the scene

Sets a default position for a window.

`func defaultSize(_:)`

Sets a default size for a window.

Sets a default width and height for a window.

Sets a default size for a volumetric window.

Defines a function used for determining the default placement of windows.

Sets the kind of resizability to use for a window.

Specifies how windows derived form this scene should determine their size when zooming.

Provides a function which determines a placement to use when windows of a scene zoom.

Configures the role for windows derived from `self` when participating in a managed window context, such as full screen or Stage Manager.

### Interacting with volumes

Specifies how a volume should be aligned when moved in the world.

Specify the world scaling behavior for the window.

### Configuring scene visibility

Sets the default launch behavior for this scene.

Sets the restoration behavior for this scene.

Sets the preferred visibility of the non-transient system views overlaying the app.

### Styling the scene

Sets the style for an immersive space.

Sets the preferred visibility of the user’s upper limbs, while an `ImmersiveSpace` scene is presented.

Sets the style for windows created by this scene.

Sets the window level of this scene.

Sets the style for the toolbar defined within this scene.

Sets the label style of items in a toolbar and enables user customization.

Sets the label style of items in a toolbar.

### Configuring a data model

Sets the model context in this scene’s environment.

Sets the model container and associated model context in this scene’s environment.

`func modelContainer(for:inMemory:isAutosaveEnabled:isUndoEnabled:onSetup:)`

Sets the model container in this scene for storing the provided model type, creating a new container if necessary, and also sets a model context for that container in this scene’s environment.

### Managing the environment

Places an observable object in the scene’s environment.

Sets the environment value of the specified key path to the given value.

Supplies an `ObservableObject` to a view subhierarchy.

Transforms the environment value of the specified key path with the given function.

### Interacting with dialogs

Configures the icon used by alerts.

Sets the severity for alerts.

Enables user suppression of an alert with a custom suppression message.

`func dialogSuppressionToggle(_:isSuppressed:)`

### Supporting drag behavior

Configures the behavior of dragging a window by its background.

### Deprecated symbols

Deprecated

### Instance Methods

Adds to a `DocumentGroupLaunchScene` actions that accept a list of selected files as their parameter.

Sets the content brightness of an immersive space.

Sets the immersive environment behavior that should apply when this scene opens.

Sets the style for menu bar extra created by this scene.

## Relationships

### Conforming Types

- `AlertScene`
- `AssistiveAccess`
- `DocumentGroup`
- `DocumentGroupLaunchScene`
- `Group`
Conforms when `Content` conforms to `Scene`.

- `ImmersiveSpace`
- `MenuBarExtra`
- `ModifiedContent`
Conforms when `Content` conforms to `Scene` and `Modifier` conforms to `_SceneModifier`.

- `RemoteImmersiveSpace`
- `Settings`
- `UtilityWindow`
- `WKNotificationScene`
- `Window`
- `WindowGroup`

## See Also

### Creating scenes

`struct SceneBuilder`

A result builder for composing a collection of scenes into a single composite scene.

---

# https://developer.apple.com/documentation/swiftui/windows

Collection

- SwiftUI
- Windows

API Collection

# Windows

Display user interface content in a window or a collection of windows.

## Overview

The most common way to present a view hierarchy in your app’s interface is with a `WindowGroup`, which produces a platform-specific behavior and appearance.

On platforms that support it, people can open multiple windows from the group simultaneously. Each window relies on the same root view definition, but retains its own view state. On some platforms, you can also supplement your app’s user interface with a single-instance window using the `Window` scene type.

Configure windows using scene modifiers that you add to the window declaration, like `windowStyle(_:)` or `defaultPosition(_:)`. You can also indicate how to configure new windows that you present from a view hierarchy by adding the `presentedWindowStyle(_:)` view modifier to a view in the hierarchy.

For design guidance, see Windows in the Human Interface Guidelines.

## Topics

### Essentials

Customizing window styles and state-restoration behavior in macOS

Configure how your app’s windows look and function in macOS to provide an engaging and more coherent experience.

Bringing multiple windows to your SwiftUI app

Compose rich views by reacting to state changes and customize your app’s scene presentation and behavior on iPadOS and macOS.

### Creating windows

`struct WindowGroup`

A scene that presents a group of identically structured windows.

`struct Window`

A scene that presents its content in a single, unique window.

`struct UtilityWindow`

A specialized window scene that provides secondary utility to the content of the main scenes of an application.

`protocol WindowStyle`

A specification for the appearance and interaction of a window.

Sets the style for windows created by this scene.

### Styling the associated toolbar

Sets the style for the toolbar defined within this scene.

Sets the label style of items in a toolbar and enables user customization.

Sets the label style of items in a toolbar.

`protocol WindowToolbarStyle`

A specification for the appearance and behavior of a window’s toolbar.

### Opening windows

Presenting windows and spaces

Open and close the scenes that make up your app’s interface.

`var supportsMultipleWindows: Bool`

A Boolean value that indicates whether the current platform supports opening multiple windows.

`var openWindow: OpenWindowAction`

A window presentation action stored in a view’s environment.

`struct OpenWindowAction`

An action that presents a window.

`struct PushWindowAction`

An action that opens the requested window in place of the window the action is called from.

### Closing windows

`var dismissWindow: DismissWindowAction`

A window dismissal action stored in a view’s environment.

`struct DismissWindowAction`

An action that dismisses a window associated to a particular scene.

`var dismiss: DismissAction`

An action that dismisses the current presentation.

`struct DismissAction`

An action that dismisses a presentation.

`struct DismissBehavior`

Programmatic window dismissal behaviors.

### Sizing a window

Positioning and sizing windows

Influence the initial geometry of windows that your app presents.

`func defaultSize(_:)`

Sets a default size for a window.

Sets a default width and height for a window.

Sets a default size for a volumetric window.

Sets the kind of resizability to use for a window.

`struct WindowResizability`

The resizability of a window.

Specifies how windows derived form this scene should determine their size when zooming.

`struct WindowIdealSize`

A type which defines the size a window should use when zooming.

### Positioning a window

Sets a default position for a window.

`struct WindowLevel`

The level of a window.

Sets the window level of this scene.

`struct WindowLayoutRoot`

A proxy which represents the root contents of a window.

`struct WindowPlacement`

A type which represents a preferred size and position for a window.

Defines a function used for determining the default placement of windows.

Provides a function which determines a placement to use when windows of a scene zoom.

`struct WindowPlacementContext`

A type which represents contextual information used for sizing and positioning windows.

`struct WindowProxy`

The proxy for an open window in the app.

`struct DisplayProxy`

A type which provides information about display hardware.

### Configuring window visibility

`struct WindowVisibilityToggle`

A specialized button for toggling the visibility of a window.

Sets the default launch behavior for this scene.

Sets the restoration behavior for this scene.

`struct SceneLaunchBehavior`

The launch behavior for a scene.

`struct SceneRestorationBehavior`

The restoration behavior for a scene.

Sets the preferred visibility of the non-transient system views overlaying the app.

Configures the visibility of the window toolbar when the window enters full screen mode.

`struct WindowToolbarFullScreenVisibility`

The visibility of the window toolbar with respect to full screen mode.

### Managing window behavior

`struct WindowManagerRole`

Options for defining how a scene’s windows behave when used within a managed window context, such as full screen mode and Stage Manager.

Configures the role for windows derived from `self` when participating in a managed window context, such as full screen or Stage Manager.

`struct WindowInteractionBehavior`

Options for enabling and disabling window interaction behaviors.

Configures the dismiss functionality for the window enclosing `self`.

Configures the full screen functionality for the window enclosing `self`.

Configures the minimize functionality for the window enclosing `self`.

Configures the resize functionality for the window enclosing `self`.

Configures the behavior of dragging a window by its background.

### Interacting with volumes

Adds an action to perform when the viewpoint of the volume changes.

Specifies which viewpoints are supported for the window bar and ornaments in a volume.

`struct VolumeViewpointUpdateStrategy`

A type describing when the action provided to `onVolumeViewpointChange(updateStrategy:initial:_:)` should be called.

`struct Viewpoint3D`

A type describing what direction something is being viewed from.

`enum SquareAzimuth`

A type describing what direction something is being viewed from along the horizontal plane and snapped to 4 directions.

`struct WorldAlignmentBehavior`

A type representing the world alignment behavior for a scene.

Specifies how a volume should be aligned when moved in the world.

`struct WorldScalingBehavior`

Specifies the scaling behavior a window should have within the world.

Specify the world scaling behavior for the window.

`struct WorldScalingCompensation`

Indicates whether returned metrics will take dynamic scaling into account.

The current limitations of the device tracking the user’s surroundings.

`struct WorldTrackingLimitation`

A structure to represent limitations of tracking the user’s surroundings.

`struct SurfaceSnappingInfo`

A type representing information about the window scenes snap state.

### Deprecated Types

`enum ControlActiveState`

The active appearance expected of controls in a window.

Deprecated

## See Also

### App structure

Define the entry point and top-level structure of your app.

Declare the user interface groupings that make up the parts of your app.

Display unbounded content in a person’s surroundings.

Enable people to open and manage documents.

Enable people to move between different parts of your app’s view hierarchy within a scene.

Present content in a separate view that offers focused interaction.

Provide immediate access to frequently used commands and controls.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

---

# https://developer.apple.com/documentation/swiftui/windowgroup

- SwiftUI
- WindowGroup

Structure

# WindowGroup

A scene that presents a group of identically structured windows.

## Mentioned in

Building and customizing the menu bar with SwiftUI

## Overview

Use a `WindowGroup` as a container for a view hierarchy that your app presents. The hierarchy that you declare as the group’s content serves as a template for each window that the app creates from that group:

@main
struct Mail: App {
var body: some Scene {
WindowGroup {
MailViewer() // Define a view hierarchy for the window.
}
}
}

SwiftUI takes care of certain platform-specific behaviors. For example, on platforms that support it, like macOS and iPadOS, people can open more than one window from the group simultaneously. In macOS, people can gather open windows together in a tabbed interface. Also in macOS, window groups automatically provide commands for standard window management.

Every window in the group maintains independent state. For example, the system allocates new storage for any `State` or `StateObject` variables instantiated by the scene’s view hierarchy for each window that it creates.

For document-based apps, use `DocumentGroup` to define windows instead.

### Open windows programmatically

If you initialize a window group with an identifier, a presentation type, or both, you can programmatically open a window from the group. For example, you can give the mail viewer scene from the previous example an identifier:

WindowGroup(id: "mail-viewer") { // Identify the window group.
MailViewer()
}

Elsewhere in your code, you can use the `openWindow` action from the environment to create a new window from the group:

struct NewViewerButton: View {
@Environment(\.openWindow) private var openWindow

var body: some View {
Button("Open new mail viewer") {
openWindow(id: "mail-viewer") // Match the group's identifier.
}
}
}

Be sure to use unique strings for identifiers that you apply to window groups in your app.

### Present data in a window

If you initialize a window group with a presentation type, you can pass data of that type to the window when you open it. For example, you can define a second window group for the Mail app that displays a specified message:

@main
struct Mail: App {
var body: some Scene {
WindowGroup {
MailViewer(id: "mail-viewer")
}

// A window group that displays messages.
WindowGroup(for: Message.ID.self) { $messageID in
MessageDetail(messageID: messageID)
}
}
}

When you call the `openWindow` action with a value, SwiftUI finds the window group with the matching type and passes a binding to the value into the window group’s content closure. For example, you can define a button that opens a message by passing the message’s identifier:

struct NewMessageButton: View {
var message: Message
@Environment(\.openWindow) private var openWindow

var body: some View {
Button("Open message") {
openWindow(value: message.id)
}
}
}

Be sure that the type you present conforms to both the `Hashable` and `Codable` protocols. Also, prefer lightweight data for the presentation value. For model values that conform to the `Identifiable` protocol, the value’s identifier works well as a presentation type, as the above example demonstrates.

WindowGroup(for: Message.ID.self) { $messageID in
MessageDetail(messageID: messageID)
} defaultValue: {
model.makeNewMessage().id // A new message that your model stores.
}

SwiftUI persists the value of the binding for the purposes of state restoration, and reapplies the same value when restoring the window. If the restoration process results in an error, SwiftUI sets the binding to the default value if you provide one, or `nil` otherwise.

### Title your app’s windows

To help people distinguish among windows from different groups, include a title as the first parameter in the group’s initializer:

WindowGroup("Message", for: Message.ID.self) { $messageID in
MessageDetail(messageID: messageID)
}

SwiftUI uses this title when referring to the window in:

- The window’s title bar.

- The list of open windows that the Window menu displays.

If you don’t provide a title for a window, the system refers to the window using the app’s name instead.

### Distinguish windows that present like data

To programmatically distinguish between windows that present the same type of data, like when you use a `UUID` as the identifier for more than one model type, add the `id` parameter to the group’s initializer to provide a unique string identifier:

WindowGroup("Message", id: "message", for: UUID.self) { $uuid in
MessageDetail(uuid: uuid)
}
WindowGroup("Account", id: "account-info", for: UUID.self) { $uuid in
AccountDetail(uuid: uuid)
}

Then use both the identifer and a value to open the window:

struct ActionButtons: View {
var messageID: UUID
var accountID: UUID

@Environment(\.openWindow) private var openWindow

var body: some View {
HStack {
Button("Open message") {
openWindow(id: "message", value: messageID)
}
Button("Edit account information") {
openWindow(id: "account-info", value: accountID)
}
}
}
}

### Dismiss a window programmatically

The system provides people with platform-appropriate controls to dismiss a window. You can also dismiss windows programmatically by calling the `dismiss` action from within the window’s view hierarchy. For example, you can include a button in the account detail view from the previous example that dismisses the view:

struct AccountDetail: View {
var uuid: UUID?
@Environment(\.dismiss) private var dismiss

var body: some View {
VStack {
// ...

Button("Dismiss") {
dismiss()
}
}
}
}

The dismiss action doesn’t close the window if you call it from a modal — like a sheet or a popover — that you present from the window. In that case, the action dismisses the modal presentation instead.

## Topics

### Creating a window group

Creates a window group.

Deprecated

`init(_:content:)`

Creates a window group with a text view title.

### Identifying a window group

Creates a window group with an identifier.

`init(_:id:content:)`

Creates a window group with a text view title and an identifier.

### Creating a data-driven window group

Creates a data-presenting window group.

`init(_:for:content:)`

Creates a data-presenting window group with a text view title.

### Providing default data to a window group

Creates a data-presenting window group with a default value.

`init(_:for:content:defaultValue:)`

Creates a data-presenting window group with a text view title and a default value.

### Identifying a data-driven window group

Creates a data-presenting window group with an identifier.

`init(_:id:for:content:)`

Creates a data-presenting window group with a text view title and an identifier.

### Identifying a window group that has default data

Creates a data-presenting window group with an identifier and a default value.

`init(_:id:for:content:defaultValue:)`

Creates a data-presenting window group with a text view title, an identifier, and a default value.

### Supporting types

`struct PresentedWindowContent`

A view that represents the content of a presented window.

### Initializers

`init(_:id:makeContent:)`

`init(_:makeContent:)`

## Relationships

### Conforms To

- `Scene`

## See Also

### Creating windows

`struct Window`

A scene that presents its content in a single, unique window.

`struct UtilityWindow`

A specialized window scene that provides secondary utility to the content of the main scenes of an application.

`protocol WindowStyle`

A specification for the appearance and interaction of a window.

Sets the style for windows created by this scene.

---

# https://developer.apple.com/documentation/swiftui/scene/windowstyle(_:)

#app-main)

- SwiftUI
- Scene
- windowStyle(\_:)

Instance Method

# windowStyle(\_:)

Sets the style for windows created by this scene.

nonisolated

## See Also

### Creating windows

`struct WindowGroup`

A scene that presents a group of identically structured windows.

`struct Window`

A scene that presents its content in a single, unique window.

`struct UtilityWindow`

A specialized window scene that provides secondary utility to the content of the main scenes of an application.

`protocol WindowStyle`

A specification for the appearance and interaction of a window.

---

# https://developer.apple.com/documentation/swiftui/scene/commands(content:)

#app-main)

- SwiftUI
- Scene
- commands(content:)

Instance Method

# commands(content:)

Adds commands to the scene.

nonisolated

## Mentioned in

Building and customizing the menu bar with SwiftUI

## Discussion

Commands are realized in different ways on different platforms. On macOS, the main menu uses the available command menus and groups to organize its main menu items. Each menu is represented as a top-level menu bar menu, and each command group has a corresponding set of menu items in one of the top-level menus, delimited by separator menu items.

On iPadOS, commands with keyboard shortcuts are exposed in the shortcut discoverability HUD that users see when they hold down the Command (⌘) key.

## See Also

### Defining commands

Removes all commands defined by the modified scene.

Replaces all commands defined by the modified scene with the commands from the builder.

`protocol Commands`

Conforming types represent a group of related commands that can be exposed to the user via the main menu on macOS and key commands on iOS.

`struct CommandMenu`

Command menus are stand-alone, top-level containers for controls that perform related, app-specific commands.

`struct CommandGroup`

Groups of controls that you can add to existing command menus.

`struct CommandsBuilder`

Constructs command sets from multi-expression closures. Like `ViewBuilder`, it supports up to ten expressions in the closure body.

`struct CommandGroupPlacement`

The standard locations that you can place new command groups relative to.

---

# https://developer.apple.com/documentation/swiftui/scenebuilder

- SwiftUI
- SceneBuilder

Structure

# SceneBuilder

A result builder for composing a collection of scenes into a single composite scene.

@resultBuilder
struct SceneBuilder

## Topics

### Building content

`static buildBlock(_:)`

Passes a single scene written as a child scene through unmodified.

Builds an expression within the builder.

`static buildLimitedAvailability(_:)`

Processes scene content for a conditional compiler-control statement that performs an availability check.

Produces an optional scene for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.

## See Also

### Creating scenes

`protocol Scene`

A part of an app’s user interface with a life cycle managed by the system.

---

# https://developer.apple.com/documentation/swiftui/environmentvalues/scenephase

- SwiftUI
- EnvironmentValues
- scenePhase

Instance Property

# scenePhase

The current phase of the scene.

var scenePhase: ScenePhase { get set }

## Discussion

The system sets this value to provide an indication of the operational state of a scene or collection of scenes. The exact meaning depends on where you access the value. For more information, see `ScenePhase`.

## See Also

### Monitoring scene life cycle

`enum ScenePhase`

An indication of a scene’s operational state.

---

# https://developer.apple.com/documentation/SwiftUI/View/windowResizeAnchor(_:)

#app-main)

- SwiftUI
- View
- windowResizeAnchor(\_:)

Instance Method

# windowResizeAnchor(\_:)

Sets the window anchor point used when the size of the view changes such that the window must resize.

nonisolated

## Parameters

`anchor`

The window point fixed under programmatic size changes caused by the content size of the window changing. Defaults to a system defined value when `nil`.

## Return Value

A view whose scene resizes on `anchor`.

## Discussion

In SwiftUI life cycle apps, this modifier can be used to control how a window anchors when animating: drive window animations by changing the size of a view in a way that causes the window size to change. Note that if the window size is decreasing and an animation is desired, it is often necessary to (temporarily, if desired) set the `windowResizability(_:)` to `contentSize`.

struct Scratchpad: App {
var body: some Scene {
WindowGroup {
HeightResizingExample()
}
.windowResizability(.contentSize)
}
}

struct HeightResizingExample: View {
@State private var height: CGFloat = 300

var body: some View {
ZStack(alignment: .topLeading) {
Color.red
.overlay {
Text("Tap to toggle")
.foregroundStyle(.white)
}
}
.onTapGesture {
withAnimation(.easeInOut) {
height = height == 300 ? 700 : 300
}
}
.frame(width: 250, height: height)
.windowResizeAnchor(.top)
}
}

The default anchor varies by scene type and is used when `anchor` is nil. Generally, it resolves to the `.topLeading` corner.

---

# https://developer.apple.com/documentation/swiftui/documents

Collection

- SwiftUI
- Documents

API Collection

# Documents

Enable people to open and manage documents.

## Overview

Create a user interface for opening and editing documents using the `DocumentGroup` scene type.

You initialize the scene with a model that describes the organization of the document’s data, and a view hierarchy that SwiftUI uses to display the document’s contents to the user. You can use either a value type model, which you typically store as a structure, that conforms to the `FileDocument` protocol, or a reference type model you store in a class instance that conforms to the `ReferenceFileDocument` protocol. You can also use SwiftData-backed documents using an initializer like `init(editing:contentType:editor:prepareDocument:)`.

SwiftUI supports standard behaviors that users expect from a document-based app, appropriate for each platform, like multiwindow support, open and save panels, drag and drop, and so on. For related design guidance, see Patterns in the Human Interface Guidelines.

## Topics

### Creating a document

Building a document-based app with SwiftUI

Create, save, and open documents in a multiplatform app.

Building a document-based app using SwiftData

Code along with the WWDC presenter to transform an app with SwiftData.

`struct DocumentGroup`

A scene that enables support for opening, creating, and saving documents.

### Storing document data in a structure instance

`protocol FileDocument`

A type that you use to serialize documents to and from file.

`struct FileDocumentConfiguration`

The properties of an open file document.

### Storing document data in a class instance

`protocol ReferenceFileDocument`

A type that you use to serialize reference type documents to and from file.

`struct ReferenceFileDocumentConfiguration`

The properties of an open reference file document.

`var undoManager: UndoManager?`

The undo manager used to register a view’s undo operations.

### Accessing document configuration

`var documentConfiguration: DocumentConfiguration?`

The configuration of a document in a `DocumentGroup`.

`struct DocumentConfiguration`

### Reading and writing documents

`struct FileDocumentReadConfiguration`

The configuration for reading file contents.

`struct FileDocumentWriteConfiguration`

The configuration for serializing file contents.

### Opening a document programmatically

`var newDocument: NewDocumentAction`

An action in the environment that presents a new document.

`struct NewDocumentAction`

An action that presents a new document.

`var openDocument: OpenDocumentAction`

An action in the environment that presents an existing document.

`struct OpenDocumentAction`

An action that presents an existing document.

### Configuring the document launch experience

`struct DocumentGroupLaunchScene`

A launch scene for document-based applications.

`struct DocumentLaunchView`

A view to present when launching document-related user experience.

`struct DocumentLaunchGeometryProxy`

A proxy for access to the frame of the scene and its title view.

`struct DefaultDocumentGroupLaunchActions`

The default actions for the document group launch scene and the document launch view.

`struct NewDocumentButton`

A button that creates and opens new documents.

`protocol DocumentBaseBox`

A Box that allows setting its Document base not requiring the caller to know the exact types of the box and its base.

### Renaming a document

`struct RenameButton`

A button that triggers a standard rename action.

`func renameAction(_:)`

Sets a closure to run for the rename action.

`var rename: RenameAction?`

An action that activates the standard rename interaction.

`struct RenameAction`

An action that activates a standard rename interaction.

## See Also

### App structure

Define the entry point and top-level structure of your app.

Declare the user interface groupings that make up the parts of your app.

Display user interface content in a window or a collection of windows.

Display unbounded content in a person’s surroundings.

Enable people to move between different parts of your app’s view hierarchy within a scene.

Present content in a separate view that offers focused interaction.

Provide immediate access to frequently used commands and controls.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

---

# https://developer.apple.com/documentation/swiftui/modal-presentations

Collection

- SwiftUI
- Modal presentations

API Collection

# Modal presentations

Present content in a separate view that offers focused interaction.

## Overview

To draw attention to an important, narrowly scoped task, you display a modal presentation, like an alert, popover, sheet, or confirmation dialog.

In SwiftUI, you create a modal presentation using a view modifier that defines how the presentation looks and the condition under which SwiftUI presents it. SwiftUI detects when the condition changes and makes the presentation for you. Because you provide a `Binding` to the condition that initiates the presentation, SwiftUI can reset the underlying value when the user dismisses the presentation.

For design guidance, see Modality in the Human Interface Guidelines.

## Topics

### Configuring a dialog

`struct DialogSeverity`

The severity of an alert or confirmation dialog.

### Showing a sheet, cover, or popover

Presents a sheet when a binding to a Boolean value that you provide is true.

Presents a sheet using the given item as a data source for the sheet’s content.

Presents a modal view that covers as much of the screen as possible when binding to a Boolean value you provide is true.

Presents a modal view that covers as much of the screen as possible using the binding you provide as a data source for the sheet’s content.

Presents a popover using the given item as a data source for the popover’s content.

Presents a popover when a given condition is true.

`enum PopoverAttachmentAnchor`

An attachment anchor for a popover.

### Adapting a presentation size

Specifies how to adapt a presentation to horizontally and vertically compact size classes.

Specifies how to adapt a presentation to compact size classes.

`struct PresentationAdaptation`

Strategies for adapting a presentation to a different size class.

Sets the sizing of the containing presentation.

`protocol PresentationSizing`

A type that defines the size of the presentation content and how the presentation size adjusts to its content’s size changing.

`struct PresentationSizingRoot`

A proxy to a view provided to the presentation with a defined presentation size.

`struct PresentationSizingContext`

Contextual information about a presentation.

### Configuring a sheet’s height

Sets the available detents for the enclosing sheet.

Sets the available detents for the enclosing sheet, giving you programmatic control of the currently selected detent.

Configures the behavior of swipe gestures on a presentation.

Sets the visibility of the drag indicator on top of a sheet.

`struct PresentationDetent`

A type that represents a height where a sheet naturally rests.

`protocol CustomPresentationDetent`

The definition of a custom detent with a calculated height.

`struct PresentationContentInteraction`

A behavior that you can use to influence how a presentation responds to swipe gestures.

### Styling a sheet and its background

Requests that the presentation have a specific corner radius.

Sets the presentation background of the enclosing sheet using a shape style.

Sets the presentation background of the enclosing sheet to a custom view.

Controls whether people can interact with the view behind a presentation.

`struct PresentationBackgroundInteraction`

The kinds of interaction available to views behind a presentation.

### Presenting an alert

`struct AlertScene`

A scene that renders itself as a standalone alert dialog.

`func alert(_:isPresented:actions:)`

Presents an alert when a given condition is true, using a text view for the title.

`func alert(_:isPresented:presenting:actions:)`

Presents an alert using the given data to produce the alert’s content and a text view as a title.

Presents an alert when an error is present.

`func alert(_:isPresented:actions:message:)`

Presents an alert with a message when a given condition is true using a text view as a title.

`func alert(_:isPresented:presenting:actions:message:)`

Presents an alert with a message using the given data to produce the alert’s content and a text view for a title.

Presents an alert with a message when an error is present.

### Getting confirmation for an action

`func confirmationDialog(_:isPresented:titleVisibility:actions:)`

Presents a confirmation dialog when a given condition is true, using a text view for the title.

`func confirmationDialog(_:isPresented:titleVisibility:presenting:actions:)`

Presents a confirmation dialog using data to produce the dialog’s content and a text view for the title.

`func dismissalConfirmationDialog(_:shouldPresent:actions:)`

Presents a confirmation dialog when a dismiss action has been triggered.

### Showing a confirmation dialog with a message

`func confirmationDialog(_:isPresented:titleVisibility:actions:message:)`

Presents a confirmation dialog with a message when a given condition is true, using a text view for the title.

`func confirmationDialog(_:isPresented:titleVisibility:presenting:actions:message:)`

Presents a confirmation dialog with a message using data to produce the dialog’s content and a text view for the message.

`func dismissalConfirmationDialog(_:shouldPresent:actions:message:)`

### Configuring a dialog

Configures the icon used by dialogs within this view.

Configures the icon used by alerts.

Sets the severity for alerts.

Enables user suppression of dialogs and alerts presented within `self`, with a default suppression message on macOS. Unused on other platforms.

Enables user suppression of an alert with a custom suppression message.

`func dialogSuppressionToggle(_:isSuppressed:)`

Enables user suppression of dialogs and alerts presented within `self`, with a custom suppression message on macOS. Unused on other platforms.

### Exporting to file

`func fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:)`

Presents a system interface for exporting a document that’s stored in a value type, like a structure, to a file on disk.

`func fileExporter(isPresented:documents:contentType:onCompletion:)`

Presents a system interface for exporting a collection of value type documents to files on disk.

`func fileExporter(isPresented:document:contentTypes:defaultFilename:onCompletion:onCancellation:)`

Presents a system interface for allowing the user to export a `FileDocument` to a file on disk.

`func fileExporter(isPresented:documents:contentTypes:onCompletion:onCancellation:)`

Presents a system dialog for allowing the user to export a collection of documents that conform to `FileDocument` to files on disk.

Presents a system interface allowing the user to export a `Transferable` item to file on disk.

Presents a system interface allowing the user to export a collection of items to files on disk.

`func fileExporterFilenameLabel(_:)`

On macOS, configures the `fileExporter` with a label for the file name field.

### Importing from file

Presents a system interface for allowing the user to import multiple files.

Presents a system interface for allowing the user to import an existing file.

Presents a system dialog for allowing the user to import multiple files.

### Moving a file

Presents a system interface for allowing the user to move an existing file to a new location.

Presents a system interface for allowing the user to move a collection of existing files to a new location.

Presents a system dialog for allowing the user to move an existing file to a new location.

Presents a system dialog for allowing the user to move a collection of existing files to a new location.

### Configuring a file dialog

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to provide a refined URL search experience: include or exclude hidden files, allow searching by tag, etc.

`func fileDialogConfirmationLabel(_:)`

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom confirmation button label.

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` to persist and restore the file dialog configuration.

Configures the `fileExporter`, `fileImporter`, or `fileMover` to open with the specified default directory.

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` behavior when a user chooses an alias.

`func fileDialogMessage(_:)`

On macOS, configures the `fileExporter`, `fileImporter`, or `fileMover` with a custom text that is presented to the user, similar to a title.

On macOS, configures the `fileImporter` or `fileMover` to conditionally disable presented URLs.

`struct FileDialogBrowserOptions`

The way that file dialogs present the file system.

### Presenting an inspector

Inserts an inspector at the applied position in the view hierarchy.

Sets a fixed, preferred width for the inspector containing this view when presented as a trailing column.

Sets a flexible, preferred width for the inspector in a trailing-column presentation.

### Dismissing a presentation

`var isPresented: Bool`

A Boolean value that indicates whether the view associated with this environment is currently presented.

`var dismiss: DismissAction`

An action that dismisses the current presentation.

`struct DismissAction`

An action that dismisses a presentation.

Conditionally prevents interactive dismissal of presentations like popovers, sheets, and inspectors.

### Deprecated modal presentations

`struct Alert`

A representation of an alert presentation.

Deprecated

`struct ActionSheet`

A representation of an action sheet presentation.

## See Also

### App structure

Define the entry point and top-level structure of your app.

Declare the user interface groupings that make up the parts of your app.

Display user interface content in a window or a collection of windows.

Display unbounded content in a person’s surroundings.

Enable people to open and manage documents.

Enable people to move between different parts of your app’s view hierarchy within a scene.

Provide immediate access to frequently used commands and controls.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

---

# https://developer.apple.com/documentation/swiftui/settings

- SwiftUI
- Settings

Structure

# Settings

A scene that presents an interface for viewing and modifying an app’s settings.

## Mentioned in

Building and customizing the menu bar with SwiftUI

Declaring a custom view

## Overview

Use a settings scene to have SwiftUI manage views with controls for your app’s settings when you declare your app using the `App` protocol. When you use an `App` declaration for multiple platforms, compile the settings scene only in macOS:

@main
struct MyApp: App {
var body: some Scene {
WindowGroup {
ContentView()
}
#if os(macOS)
Settings {
SettingsView()
}
#endif
}
}

Passing a view as the argument to a settings scene in the `App` declaration causes SwiftUI to enable the app’s Settings menu item. SwiftUI manages displaying and removing the settings view when the user selects the Settings item from the application menu or the equivalent keyboard shortcut:

The contents of your settings view are controls that modify bindings to `UserDefaults` values that SwiftUI manages using the `AppStorage` property wrapper:

struct GeneralSettingsView: View {
@AppStorage("showPreview") private var showPreview = true
@AppStorage("fontSize") private var fontSize = 12.0

var body: some View {
Form {
Toggle("Show Previews", isOn: $showPreview)
Slider(value: $fontSize, in: 9...96) {
Text("Font Size (\(fontSize, specifier: "%.0f") pts)")
}
}
}
}

You can define your settings in a single view, or you can use a `TabView` to group settings into different collections:

struct SettingsView: View {
var body: some View {
TabView {
Tab("General", systemImage: "gear") {
GeneralSettingsView()
}
Tab("Advanced", systemImage: "star") {
AdvancedSettingsView()
}
}
.scenePadding()
.frame(maxWidth: 350, minHeight: 100)
}
}

## Topics

### Creating a settings scene

Creates a scene that presents an interface for viewing and modifying an app’s preferences.

## Relationships

### Conforms To

- `Scene`

## See Also

### Managing a settings window

`struct SettingsLink`

A view that opens the Settings scene defined by an app.

`struct OpenSettingsAction`

An action that presents the settings scene for an app.

`var openSettings: OpenSettingsAction`

A Settings presentation action stored in a view’s environment.

---

# https://developer.apple.com/documentation/swiftui/settingslink

- SwiftUI
- SettingsLink

Structure

# SettingsLink

A view that opens the Settings scene defined by an app.

## Overview

On macOS, clicking on the link opens the window for the scene or orders it to the front if it is already open.

## Topics

### Creating a settings link

`init()`

Creates a settings link with the default system label.

Creates a settings link with a custom label.

### Supporting types

`struct DefaultSettingsLinkLabel`

The default label to use for a settings link.

## Relationships

### Conforms To

- `View`

## See Also

### Managing a settings window

`struct Settings`

A scene that presents an interface for viewing and modifying an app’s settings.

`struct OpenSettingsAction`

An action that presents the settings scene for an app.

`var openSettings: OpenSettingsAction`

A Settings presentation action stored in a view’s environment.

---

# https://developer.apple.com/documentation/swiftui/opensettingsaction

- SwiftUI
- OpenSettingsAction

Structure

# OpenSettingsAction

An action that presents the settings scene for an app.

@MainActor @preconcurrency
struct OpenSettingsAction

## Overview

Use the `openSettings` environment value to get the instance of this structure for a given `Environment`. Then call the instance to open a window. You call the instance directly because it defines a `callAsFunction()` method that Swift calls when you call the instance.

For example, you can define a button that opens the settings window to a particular tab:

@main
struct MyApp: App {
var body: some Scene {
WindowGroup {
ContentView()
}
#if os(macOS)
Settings {
SettingsView()
}
#endif
}
}

struct SettingsView: View {
@AppStorage("selectedSettingsTab")
private var selectedSettingsTab = SettingsTab.general

var body: some View {
TabView(selection: $selectedSettingsTab) {
GeneralSettings()
AdvancedSettings()
}
}
}

struct AdvancedSettingsButton: View {
@AppStorage("selectedSettingsTab")
private var selectedSettingsTab = SettingsTab.general

@Environment(\.openSettings) private var openSettings

var body: some View {
Button("Open Advanced Settings…") {
selectedSettingsTab = .advanced
openSettings()
}
}
}

enum SettingsTab: Int {
case general
case advanced
}

## Topics

### Instance Methods

`func callAsFunction()`

Opens the window associated to the `Settings` scene defined by this app, if one exists.

## Relationships

### Conforms To

- `Sendable`
- `SendableMetatype`

## See Also

### Managing a settings window

`struct Settings`

A scene that presents an interface for viewing and modifying an app’s settings.

`struct SettingsLink`

A view that opens the Settings scene defined by an app.

`var openSettings: OpenSettingsAction`

A Settings presentation action stored in a view’s environment.

---

# https://developer.apple.com/documentation/swiftui/environmentvalues/opensettings

- SwiftUI
- EnvironmentValues
- openSettings

Instance Property

# openSettings

A Settings presentation action stored in a view’s environment.

var openSettings: OpenSettingsAction { get }

## Discussion

Use the `openSettings` environment value to get an `OpenSettingsAction` instance for a given `Environment`. Then call the instance to open a window. You call the instance directly because it defines a `callAsFunction()` method that Swift calls when you call the instance.

For example, you can define a button that opens the settings window to a particular tab:

@main
struct MyApp: App {
var body: some Scene {
WindowGroup {
ContentView()
}
#if os(macOS)
Settings {
SettingsView()
}
#endif
}
}

struct SettingsView: View {
@AppStorage("selectedSettingsTab")
private var selectedSettingsTab = SettingsTab.general

var body: some View {
TabView(selection: $selectedSettingsTab) {
GeneralSettings()
AdvancedSettings()
}
}
}

struct AdvancedSettingsButton: View {
@AppStorage("selectedSettingsTab")
private var selectedSettingsTab = SettingsTab.general

@Environment(\.openSettings) private var openSettings

var body: some View {
Button("Open Advanced Settings…") {
selectedSettingsTab = .advanced
openSettings()
}
}
}

enum SettingsTab: Int {
case general
case advanced
}

## See Also

### Managing a settings window

`struct Settings`

A scene that presents an interface for viewing and modifying an app’s settings.

`struct SettingsLink`

A view that opens the Settings scene defined by an app.

`struct OpenSettingsAction`

An action that presents the settings scene for an app.

---

# https://developer.apple.com/documentation/swiftui/building-and-customizing-the-menu-bar-with-swiftui

- SwiftUI
- Menus and commands
- Building and customizing the menu bar with SwiftUI

Article

# Building and customizing the menu bar with SwiftUI

Provide a seamless, cross-platform user experience by building a native menu bar for iPadOS and macOS.

## Overview

On iPadOS and macOS, the menu bar provides access to crucial system-provided actions, such as Cut, Copy, Paste, and window management. The system groups these actions by function into menus and submenus through the menu bar. Apps can add contextual actions, like showing and hiding a sidebar, and can also create custom menus and menu items to allow people to perform app-specific actions from the menu bar. You can also bind menu bar to keyboard shortcuts to make your app quicker and easier to use.

Apps include instances of `Scene` which display the main views of the app. Each scene provides different default menu sets and actions in the menu bar. Contextually relevant menus and actions, and even custom menus and actions, are specified with the `commands(content:)` modifier.

The order of system-provided menus and menu items is consistent across all apps, but some menus and menu items are added depending on context. For example, document-based apps include options in the File menu for creating and opening documents. Similarly, not all apps include text-formatting capabilities, but those that include text editing views get a Format menu with options for choosing fonts and styling text by including `TextFormattingCommands` in the scene’s commands. The system will then add the appropriate menu groups and items that people expect in this context.

## Populate the menu bar

When your app launches, the menu bar populates with menus and menu items based on the implemented scenes and commands. Menu items for conditional or context-dependent commands are made active or inactive dynamically, using information from the active scene and its view hierarchy in focus.

Each scene includes a set of default menus and menu items, which you can supplement with your own app-specific needs using the `commands(content:)` modifier.

A scene’s default menus and menu items are dependent on the functionality the scene type supports. For example, `WindowGroup` includes commands for quitting and hiding the app, as well as Copy and Paste support and window management.

@main
struct MyApp: App {
var body: some Scene {
WindowGroup {
ContentView()
}
}
}
@main
struct MyApp: App {
var body: some Scene {
WindowGroup {
ContentView()
}

#if os(macOS)
Settings {
SettingsView()
}
#endif
}
}

The `DocumentGroup` scene includes actions that `WindowGroup` includes, as well as a number of actions that support document management capabilities, like Save and Duplicate.

Using scenes together creates a menu bar that includes menu items for all of the core functionality of an app that creates and edits documents, manages multiple windows, and exposes user-configurable settings.

@main
struct MyApp: App {
var body: some Scene {
DocumentGroup(newDocument: MyAppDocument()) { file in
// ...
}

#if os(macOS)
Settings {
// ...
}
#endif

## Add contextual system-provided menu items

Some common menu items are optional, but are helpful if the app contains certain capabilities. For example, not every scene includes a navigation sidebar, but for those that do, people expect to find a menu item that controls the navigation sidebar’s visibility. If your scene includes a navigation sidebar, include this menu item using the `commands(content:)` modifier and implementing `SidebarCommands`:

@main
struct MyApp: App {
var body: some Scene {
DocumentGroup(newDocument: MyAppDocument()) { file in
ContentView(document: file.$document)
}
.commands {
SidebarCommands()
}
}
}

For more information on system-provided command groups, such as text formatting, toolbars, and inspectors, see `Commands`.

## Create custom menus and menu items

Organize and group your app’s custom menu items in custom menus using `CommandMenu`. The system inserts custom menus into the menu bar after the View menu.

Custom menu items are created with standard SwiftUI views, for example `Button` and `Toggle`. `Menu` creates a submenu. For more information about menu item creation, see Populating SwiftUI menus with adaptive controls.

WindowGroup {
ContentView()
}
.commands {
CommandMenu("Actions") {
Button("Run", systemImage: "play.fill") { ... }
.keyboardShortcut("R")

Button("Stop", systemImage: "stop.fill") { ... }
.keyboardShortcut(".")
}
}

## Modify standard menus

Modify system-provided menus using `CommandGroup`. These groups either extend menus with additional menu items or they replace existing menu items in the indicated command group. When you add menu items in this way, you can specify the location of the menu item based on system-provided menu items.

WindowGroup {
ContentView()
}
.commands {
CommandGroup(before: .systemServices) {
Button("Check for Updates") { ... }
}

CommandGroup(after: .newItem) {
Button("New from Clipboard") { ... }
}

CommandGroup(replacing: .help) {
Button("User Manual") { ... }
}
}

## Update menus and menu items dynamically

Many menu items update their appearance or action depending on whether the scene is active, if the scene has focus, or what is currently selected. For example, the system grays out the Close Window command in the File menu when the app’s last window closes. Similarly, the Cut and Copy menu items are only available in the active window if the person selects copyable data. This behavior also applies to custom menus and menu items your app provides.

Use `FocusedValue` to create contextual dependencies with your menus and menu items. For example, a menu item’s title can change if the current focus is on a photo or a photo album. A focused value is state data that requires an active scene with its view hierarchy in focus. Use a dynamic property to react to changes in the views of the scene.

In the following, an app with a `WindowGroup` scene has an `Observable()` data model for each window that supplies that window’s contents. The active window’s data model is made available as a focused value using the `focusedSceneValue(_:)` modifier in the window view hierarchy.

@Observable
final class DataModel {
var messages: [Message]
...
}

struct ContentView: View {
@State private var model = DataModel()

var body: some View {
VStack {
ForEach(model.messages) { ... }
}
.focusedSceneValue(model)
}
}

Use the `FocusedValue` property wrapper to represent the active scene’s data model in the menu bar. The data model changes whether the “New Message” button is active or inactive:

struct MessageCommands: Commands {
@FocusedValue(DataModel.self) private var dataModel: DataModel?

var body: some Commands {
CommandGroup(after: .newItem) {
Button("New Message") {
dataModel?.messages.append(...)
}
.disabled(dataModel == nil)
}
}
}

@main struct MessagesApp: App {
var body: some Scene {
WindowGroup {
ContentView()
}
.commands {
MessageCommands()
}
}
}

Similar to the `Environment` dynamic property, `FocusedValue` uses a key you provide to find the current value. When the focused value is an `Observable` object, that key can simply be the object’s type.

To share value-typed values, extend `FocusedValues` with a custom entry using the `Entry()` macro, and pass the resulting key path when declaring the `FocusedValue` property. Custom entry values must always be optional.

struct ContentView: View {
@State private var items: [Item] = ...
@State private var selection: UUID?

var body: some View {
List(items, selection: $selection) { item in
...
}
// When active, views in the same scene or in the menu bar
// can read the selected item ID.
.focusedSceneValue(\.selectedItemID, selection)
}
}

struct ItemCommands: Commands {
@FocusedValue(\.selectedItemID) var selectedItemID: UUID?

var body: some Commands {
...
}
}

extension FocusedValues {
@Entry var selectedItemID: UUID?
}

Use `focusedValue(_:)` when a menu item depends on the current placement of focus within the active scene’s view hierarchy. This creates a focused value that’s’ only visible to other views when focus is on the modified view or one of its subviews. When focus is elsewhere, the value of corresponding `FocusedValue` property is `nil`.

var body: some View {
NavigationSplitView {
SidebarContent()
} detail: {
List(items, selection: $selection) { item in
...
}

// The selected item ID is visible when focus is on the
// navigation detail list. If focus is on the sidebar, the value of
// `@FocusedValue(\.selectedItemID)` is `nil`.
.focusedValue(\.selectedItemID, selection)
}
}
}

---

# https://developer.apple.com/documentation/swiftui/menubarextra

- SwiftUI
- MenuBarExtra

Structure

# MenuBarExtra

A scene that renders itself as a persistent control in the system menu bar.

## Overview

Use a `MenuBarExtra` when you want to provide access to commonly used functionality, even when your app is not active.

@main
struct AppWithMenuBarExtra: App {
@AppStorage("showMenuBarExtra") private var showMenuBarExtra = true

var body: some Scene {
WindowGroup {
ContentView()
}
MenuBarExtra(
"App Menu Bar Extra", systemImage: "star",
isInserted: $showMenuBarExtra)
{
StatusMenu()
}
}
}

Or alternatively, to create a utility app that only shows in the menu bar.

@main
struct UtilityApp: App {
var body: some Scene {
MenuBarExtra("Utility App", systemImage: "hammer") {
AppMenu()
}
}
}

An app that only shows in the menu bar will be automatically terminated if the user removes the extra from the menu bar.

For apps that only show in the menu bar, a common behavior is for the app to not display its icon in either the Dock or the application switcher. To enable this behavior, set the `LSUIElement` flag in your app’s `Information Property List` file to `true`.

For more complex or data rich menu bar extras, you can use the `window` style, which displays a popover-like window from the menu bar icon that contains standard controls. You define the layout and contents of those controls with the content that you provide:

MenuBarExtra("Utility App", systemImage: "hammer") {
ScrollView {
LazyVGrid(...)
}
}
.menuBarExtraStyle(.window)

## Topics

### Creating a menu bar extra

`init(_:content:)`

Creates a menu bar extra with a key for a localized string to use as the label. The extra defines the primary scene of an `App`.

Creates a menu bar extra that will be displayed in the system menu bar, and defines the primary scene of an `App`.

`init(_:isInserted:content:)`

Creates a menu bar extra with a key for a localized string to use as the label. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.

Creates a menu bar extra. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.

### Creating a menu bar extra with an image

`init(_:image:content:)`

Creates a menu bar extra with an image to use as the items label. The provided title will be used by the accessibility system.

`init(_:image:isInserted:content:)`

`init(_:systemImage:content:)`

Creates a menu bar extra with a system image to use as the items label. The provided title will be used by the accessibility system.

`init(_:systemImage:isInserted:content:)`

## Relationships

### Conforms To

- `Scene`

## See Also

### Creating a menu bar extra

Sets the style for menu bar extra created by this scene.

`protocol MenuBarExtraStyle`

A specification for the appearance and behavior of a menu bar extra scene.

---

# https://developer.apple.com/documentation/swiftui/scene/menubarextrastyle(_:)

#app-main)

- SwiftUI
- Scene
- menuBarExtraStyle(\_:)

Instance Method

# menuBarExtraStyle(\_:)

Sets the style for menu bar extra created by this scene.

nonisolated

## See Also

### Creating a menu bar extra

`struct MenuBarExtra`

A scene that renders itself as a persistent control in the system menu bar.

`protocol MenuBarExtraStyle`

A specification for the appearance and behavior of a menu bar extra scene.

---

# https://developer.apple.com/documentation/swiftui/menubarextrastyle

- SwiftUI
- MenuBarExtraStyle

Protocol

# MenuBarExtraStyle

A specification for the appearance and behavior of a menu bar extra scene.

protocol MenuBarExtraStyle

## Topics

### Getting menu bar extra styles

`static var automatic: AutomaticMenuBarExtraStyle`

The default menu bar extra style.

`static var menu: PullDownMenuBarExtraStyle`

A menu bar extra style that renders its contents as a menu that pulls down from the icon in the menu bar.

`static var window: WindowMenuBarExtraStyle`

A menu bar extra style that renders its contents in a popover-like window.

### Supporting types

`struct AutomaticMenuBarExtraStyle`

The default menu bar extra style. You can also use `automatic` to construct this style.

`struct PullDownMenuBarExtraStyle`

`struct WindowMenuBarExtraStyle`

## Relationships

### Conforming Types

- `AutomaticMenuBarExtraStyle`
- `PullDownMenuBarExtraStyle`
- `WindowMenuBarExtraStyle`

## See Also

### Creating a menu bar extra

`struct MenuBarExtra`

A scene that renders itself as a persistent control in the system menu bar.

Sets the style for menu bar extra created by this scene.

---

# https://developer.apple.com/documentation/swiftui/app-extensions

Collection

- SwiftUI
- App extensions

API Collection

# App extensions

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

## Overview

Use SwiftUI along with WidgetKit to add widgets to your app.

Widgets provide quick access to relevant content from your app. Define a structure that conforms to the `Widget` protocol, and declare a view hierarchy for the widget. Configure the views inside the widget as you do other SwiftUI views, using view modifiers, including a few widget-specific modifiers.

For design guidance, see Widgets in the Human Interface Guidelines.

## Topics

### Creating widgets

Building Widgets Using WidgetKit and SwiftUI

Create widgets to show your app’s content on the Home screen, with custom intents for user-customizable settings.

Creating a widget extension

Display your app’s content in a convenient, informative widget on various devices.

Keeping a widget up to date

Plan your widget’s timeline to show timely, relevant information using dynamic views, and update the timeline when things change.

Making a configurable widget

Give people the option to customize their widgets by adding a custom app intent to your project.

`protocol Widget`

The configuration and content of a widget to display on the Home screen or in Notification Center.

`protocol WidgetBundle`

A container used to expose multiple widgets from a single widget extension.

`struct LimitedAvailabilityConfiguration`

A type-erased widget configuration.

`protocol WidgetConfiguration`

A type that describes a widget’s content.

`struct EmptyWidgetConfiguration`

An empty widget configuration.

### Composing control widgets

`protocol ControlWidget`

The configuration and content of a control widget to display in system spaces such as Control Center, the Lock Screen, and the Action Button.

`protocol ControlWidgetConfiguration`

A type that describes a control widget’s content.

`struct EmptyControlWidgetConfiguration`

An empty control widget configuration.

`struct ControlWidgetConfigurationBuilder`

A custom attribute that constructs a control widget’s body.

`protocol ControlWidgetTemplate`

`struct EmptyControlWidgetTemplate`

An empty control widget template.

`struct ControlWidgetTemplateBuilder`

A custom attribute that constructs a control widget template’s body.

`func controlWidgetActionHint(_:)`

The action hint of the control described by the modified label.

`func controlWidgetStatus(_:)`

The status of the control described by the modified label.

### Labeling a widget

`func widgetLabel(_:)`

Returns a localized text label that displays additional content outside the accessory family widget’s main SwiftUI view.

Creates a label for displaying additional content outside an accessory family widget’s main SwiftUI view.

### Styling a widget group

The view modifier that can be applied to `AccessoryWidgetGroup` to specify the shape the three content views will be masked with. The value of `style` is set to `.automatic`, which is `.circular` by default.

### Controlling the accented group

Adds the view and all of its subviews to the accented group.

### Managing placement in the Dynamic Island

Specifies the vertical placement for a view of an expanded Live Activity that appears in the Dynamic Island.

## See Also

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

---

# https://developer.apple.com/documentation/swiftui/migrating-to-the-swiftui-life-cycle

- SwiftUI
- App organization
- Migrating to the SwiftUI life cycle

Article

# Migrating to the SwiftUI life cycle

Use a scene-based life cycle in SwiftUI while keeping your existing codebase.

## Overview

Take advantage of the declarative syntax in SwiftUI and its compatibility with spatial frameworks by moving your app to the SwiftUI life cycle.

Moving to the SwiftUI life cycle requires several steps, including changing your app’s entry point, configuring the launch of your app, and monitoring life-cycle changes with the methods that SwiftUI provides.

### Change your app’s entry point

The UIKit framework defines the `AppDelegate` file as the entry point of your app with the annotation `@main`. For more information on `@main`, see the Attributes section in The Swift Programming Language. To indicate the entry of a SwiftUI app, you’ll need to create a new file that defines your app’s structure.

1. Open your project in Xcode.

4. Add `import SwiftUI` at the top of the file.

5. Annotate the app structure with the `@main` attribute to indicate the entry point of the SwiftUI app, as shown in the code snippet below.

Use following code to create the SwiftUI app structure. To learn more about this structure, see `App`.

import SwiftUI

@main
struct MyExampleApp: App {
var body: some Scene {
WindowGroup {
ContentView()
}
}
}

### Support app delegate methods

To continue using methods in your app delegate, use the `UIApplicationDelegateAdaptor` property wrapper. To tell SwiftUI about a delegate that conforms to the `UIApplicationDelegate` protocol, place this property wrapper inside your `App` declaration:

@main
struct MyExampleApp: App {
@UIApplicationDelegateAdaptor private var appDelegate: MyAppDelegate
var body: some Scene { ... }
}

This example marks a custom app delegate named `MyAppDelegate` as the delegate adaptor. Be sure to implement any necessary delegate methods in that type.

### Configure the launch of your app

If you’re migrating an app that contains storyboards to SwiftUI, make sure to remove them when they’re no longer needed.

2. Remove `Main.storyboard` from the project navigator.

3. Choose your app’s target.

4. Open the `Info.plist` file.

5. Remove the `Main storyboard file base name` key.

This figure shows the structure of the `Info.plist` file before removing these keys.

The scene delegate continues to be called after removing the keys from the `Info.plist` file, so you can still handle other scene-based life cycle changes in this file. If you were previously launching your app in your scene delegate, remove the `scene(_:willConnectTo:options:)` method from your scene delegate.

If you didn’t previously support scenes in your app and rely on your app delegate to respond to the launch of your app, ensure you’re no longer setting a root view controller in `application(_:didFinishLaunchingWithOptions:)`. Instead, return `true`.

### Monitor life cycle changes

You will no longer be able to monitor life-cycle changes in your app delegate due to the scene-based nature of SwiftUI (see `Scene`). Prefer to handle these changes in `ScenePhase`, the life cycle enumeration that SwiftUI provides to monitor the phases of a scene. Observe the `Environment` value to initiate actions when the phase changes.

@Environment(\.scenePhase) private var scenePhase

Interpret the value differently based on where you read it from. If you read the phase from inside a `View` instance, the value reflects the phase of the scene that contains the view. If you read the phase from within an `App` instance, the value reflects an aggregation of the phases of all of the scenes in your app.

To handle scene-based events with a scene delegate, provide your scene delegate to your SwiftUI app inside your app delegate. For more information, see the “Scene delegates” section of `UIApplicationDelegateAdaptor`.

For more information on handling scene-based life cycle events, see Managing your app’s life cycle.

## See Also

### Creating an app

Destination Video

Leverage SwiftUI to build an immersive media experience in a multiplatform app.

Hello World

Use windows, volumes, and immersive spaces to teach people about the Earth.

Backyard Birds: Building an app with SwiftData and widgets

Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

Food Truck: Building a SwiftUI multiplatform app

Create a single codebase and app target for Mac, iPad, and iPhone.

Fruta: Building a feature-rich app with SwiftUI

Create a shared codebase to build a multiplatform app that offers widgets and an App Clip.

`protocol App`

A type that represents the structure and behavior of an app.

---

# https://developer.apple.com/documentation/swiftui/uiapplicationdelegateadaptor

- SwiftUI
- UIApplicationDelegateAdaptor

Structure

# UIApplicationDelegateAdaptor

A property wrapper type that you use to create a UIKit app delegate.

@MainActor @preconcurrency @propertyWrapper

## Mentioned in

Migrating to the SwiftUI life cycle

## Overview

To handle app delegate callbacks in an app that uses the SwiftUI life cycle, define a type that conforms to the `UIApplicationDelegate` protocol, and implement the delegate methods that you need. For example, you can implement the `application(_:didRegisterForRemoteNotificationsWithDeviceToken:)` method to handle remote notification registration:

class MyAppDelegate: NSObject, UIApplicationDelegate, ObservableObject {
func application(
_ application: UIApplication,
didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
) {
// Record the device token.
}
}

Then use the `UIApplicationDelegateAdaptor` property wrapper inside your `App` declaration to tell SwiftUI about the delegate type:

@main
struct MyApp: App {
@UIApplicationDelegateAdaptor private var appDelegate: MyAppDelegate

var body: some Scene { ... }
}

SwiftUI instantiates the delegate and calls the delegate’s methods in response to life cycle events. Define the delegate adaptor only in your `App` declaration, and only once for a given app. If you declare it more than once, SwiftUI generates a runtime error.

If your app delegate conforms to the `ObservableObject` protocol, as in the example above, then SwiftUI puts the delegate it creates into the `Environment`. You can access the delegate from any scene or view in your app using the `EnvironmentObject` property wrapper:

@EnvironmentObject private var appDelegate: MyAppDelegate

This enables you to use the dollar sign (`$`) prefix to get a binding to published properties that you declare in the delegate. For more information, see `projectedValue`.

### Scene delegates

Some iOS apps define a `UIWindowSceneDelegate` to handle scene-based events, like app shortcuts:

class MySceneDelegate: NSObject, UIWindowSceneDelegate, ObservableObject {
func windowScene(
_ windowScene: UIWindowScene,
performActionFor shortcutItem: UIApplicationShortcutItem

// Do something with the shortcut...

return true
}
}

You can provide this kind of delegate to a SwiftUI app by returning the scene delegate’s type from the `application(_:configurationForConnecting:options:)` method inside your app delegate:

extension MyAppDelegate {
func application(
_ application: UIApplication,
configurationForConnecting connectingSceneSession: UISceneSession,
options: UIScene.ConnectionOptions

let configuration = UISceneConfiguration(
name: nil,
sessionRole: connectingSceneSession.role)
if connectingSceneSession.role == .windowApplication {
configuration.delegateClass = MySceneDelegate.self
}
return configuration
}
}

When you configure the `UISceneConfiguration` instance, you only need to indicate the delegate class, and not a scene class or storyboard. SwiftUI creates and manages the delegate instance, and sends it any relevant delegate callbacks.

As with the app delegate, if you make your scene delegate an observable object, SwiftUI automatically puts it in the `Environment`, from where you can access it with the `EnvironmentObject` property wrapper, and create bindings to its published properties.

## Topics

### Creating a delegate adaptor

`init(_:)`

Creates a UIKit app delegate adaptor using an observable delegate.

### Getting the delegate adaptor

A projection of the observed object that provides bindings to its properties.

`var wrappedValue: DelegateType`

The underlying app delegate.

## Relationships

### Conforms To

- `DynamicProperty`
- `Sendable`
- `SendableMetatype`

## See Also

### Targeting iOS and iPadOS

`UILaunchScreen`

The user interface to show while an app launches.

`UILaunchScreens`

The user interfaces to show while an app launches in response to different URL schemes.

---

# https://developer.apple.com/documentation/swiftui/nsapplicationdelegateadaptor

- SwiftUI
- NSApplicationDelegateAdaptor

Structure

# NSApplicationDelegateAdaptor

A property wrapper type that you use to create an AppKit app delegate.

@MainActor @preconcurrency @propertyWrapper

## Mentioned in

Migrating to the SwiftUI life cycle

## Overview

To handle app delegate callbacks in an app that uses the SwiftUI life cycle, define a type that conforms to the `NSApplicationDelegate` protocol, and implement the delegate methods that you need. For example, you can implement the `application(_:didRegisterForRemoteNotificationsWithDeviceToken:)` method to handle remote notification registration:

class MyAppDelegate: NSObject, NSApplicationDelegate, ObservableObject {
func application(
_ application: NSApplication,
didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
) {
// Record the device token.
}
}

Then use the `NSApplicationDelegateAdaptor` property wrapper inside your `App` declaration to tell SwiftUI about the delegate type:

@main
struct MyApp: App {
@NSApplicationDelegateAdaptor private var appDelegate: MyAppDelegate

var body: some Scene { ... }
}

SwiftUI instantiates the delegate and calls the delegate’s methods in response to life cycle events. Define the delegate adaptor only in your `App` declaration, and only once for a given app. If you declare it more than once, SwiftUI generates a runtime error.

If your app delegate conforms to the `ObservableObject` protocol, as in the example above, then SwiftUI puts the delegate it creates into the `Environment`. You can access the delegate from any scene or view in your app using the `EnvironmentObject` property wrapper:

@EnvironmentObject private var appDelegate: MyAppDelegate

This enables you to use the dollar sign (`$`) prefix to get a binding to published properties that you declare in the delegate. For more information, see `projectedValue`.

## Topics

### Creating a delegate adaptor

`init(_:)`

Creates an AppKit app delegate adaptor using an observable delegate.

### Getting the delegate adaptor

A projection of the observed object that provides bindings to its properties.

`var wrappedValue: DelegateType`

The underlying delegate.

## Relationships

### Conforms To

- `DynamicProperty`
- `Sendable`
- `SendableMetatype`

---

