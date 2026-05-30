# SwiftUI Views, View Styles & Data Flow

> The View protocol, view fundamentals/configuration/styles, and the data-flow stack: model-data, Observable, environment values, preferences, persistent storage, StateObject/ObservedObject/EnvironmentObject.

---

# https://developer.apple.com/documentation/swiftui/view

- SwiftUI
- View

Protocol

# View

A type that represents part of your app’s user interface and provides modifiers that you use to configure views.

@MainActor @preconcurrency
protocol View

## Mentioned in

Declaring a custom view

Configuring views

Reducing view modifier maintenance

Displaying data in lists

Migrating to the SwiftUI life cycle

## Overview

You create custom views by declaring types that conform to the `View` protocol. Implement the required `body` computed property to provide the content for your custom view.

struct MyView: View {
var body: some View {
Text("Hello, World!")
}
}

Assemble the view’s body by combining one or more of the built-in views provided by SwiftUI, like the `Text` instance in the example above, plus other custom views that you define, into a hierarchy of views. For more information about creating custom views, see Declaring a custom view.

The `View` protocol provides a set of modifiers — protocol methods with default implementations — that you use to configure views in the layout of your app. Modifiers work by wrapping the view instance on which you call them in another view with the specified characteristics, as described in Configuring views. For example, adding the `opacity(_:)` modifier to a text view returns a new view with some amount of transparency:

Text("Hello, World!")
.opacity(0.5) // Display partially transparent text.

The complete list of default modifiers provides a large set of controls for managing views. For example, you can fine tune Layout modifiers, add Accessibility modifiers information, and respond to Input and event modifiers. You can also collect groups of default modifiers into new, custom view modifiers for easy reuse.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is declared in its original declaration. Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt-out the isolation.

## Topics

### Implementing a custom view

`var body: Self.Body`

The content and behavior of the view.

**Required** Default implementations provided.

`associatedtype Body : View`

The type of view representing the body of this view.

**Required**

Applies a modifier to a view and returns a new view.

Generate dynamic, interactive previews of your custom views.

### Configuring view elements

Make your SwiftUI apps accessible to everyone, including people with disabilities.

Configure a view’s foreground and background styles, controls, and visibility.

Manage the rendering, selection, and entry of text in your view.

Add and configure supporting views, like toolbars and context menus.

Configure charts that you declare with Swift Charts.

### Drawing views

Apply built-in styles to different types of views.

Tell a view how to arrange itself within a view hierarchy by adjusting its size, position, alignment, padding, and so on.

Affect the way the system draws a view, for example by scaling or masking a view, or by applying graphical effects.

### Providing interactivity

Supply actions for a view to perform in response to user input and system events.

Enable people to search for content in your app.

Define additional views for the view to present under specified conditions.

Access storage and provide child views with configuration data.

### Deprecated modifiers

Review unsupported modifiers and their replacements.

### View modifiers & conforming types
_(Full flat index of every View modifier and conforming type omitted — it is a link dump in the source. The grouped topics above cover the categories. For a specific modifier, grep the relevant task-focused reference, e.g. layout in `swiftui-layout-lists-and-drawing.md`, styling in this file's "View styles" section below, accessibility in `swiftui-interaction-and-accessibility.md`.)_

## See Also

### Creating a view

Define views and assemble them into a view hierarchy.

`struct ViewBuilder`

A custom parameter attribute that constructs views from closures.

---

# https://developer.apple.com/documentation/swiftui/view-fundamentals

Collection

- SwiftUI
- View fundamentals

API Collection

# View fundamentals

Define the visual elements of your app using a hierarchy of views.

## Overview

Views are the building blocks that you use to declare your app’s user interface. Each view contains a description of what to display for a given state. Every bit of your app that’s visible to the user derives from the description in a view, and any type that conforms to the `View` protocol can act as a view in your app.

Compose a custom view by combining built-in views that SwiftUI provides with other custom views that you create in your view’s `body` computed property. Configure views using the view modifiers that SwiftUI provides, or by defining your own view modifiers using the `ViewModifier` protocol and the `modifier(_:)` method.

## Topics

### Creating a view

Declaring a custom view

Define views and assemble them into a view hierarchy.

`protocol View`

A type that represents part of your app’s user interface and provides modifiers that you use to configure views.

`struct ViewBuilder`

A custom parameter attribute that constructs views from closures.

### Modifying a view

Configuring views

Adjust the characteristics of a view by applying view modifiers.

Reducing view modifier maintenance

Bundle view modifiers that you regularly reuse into a custom view modifier.

Applies a modifier to a view and returns a new view.

`protocol ViewModifier`

A modifier that you apply to a view or another view modifier, producing a different version of the original value.

`struct EmptyModifier`

An empty, or identity, modifier, used during development to switch modifiers at compile time.

`struct ModifiedContent`

A value with a modifier applied to it.

`protocol EnvironmentalModifier`

A modifier that must resolve to a concrete modifier in an environment before use.

`struct ManipulableModifier`

`struct ManipulableResponderModifier`

`struct ManipulableTransformBindingModifier`

`struct ManipulationGeometryModifier`

`struct ManipulationGestureModifier`

`struct ManipulationUsingGestureStateModifier`

`enum Manipulable`

A namespace for various manipulable related types.

### Responding to view life cycle updates

Adds an action to perform before this view appears.

Adds an action to perform after this view disappears.

### Managing the view hierarchy

Binds a view’s identity to the given proxy value.

Sets the unique tag value of this view.

Prevents the view from updating its child view when its new value is the same as its old value.

### Supporting view types

`struct AnyView`

A type-erased view.

`struct EmptyView`

A view that doesn’t contain any content.

`struct EquatableView`

A view type that compares itself against its previous value and prevents its child updating if its new value is the same as its old value.

`struct SubscriptionView`

A view that subscribes to a publisher with an action.

`struct TupleView`

A View created from a swift tuple of View values.

## See Also

### Views

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/swiftui/view-configuration

Collection

- SwiftUI
- View configuration

API Collection

# View configuration

Adjust the characteristics of views in a hierarchy.

## Overview

SwiftUI enables you to tune the appearance and behavior of views using view modifiers.

Many modifiers apply to specific kinds of views or behaviors, but some apply more generally. For example, you can conditionally hide any view by dynamically setting its opacity, display contextual help when people hover over a view, or request the light or dark appearance for a view.

## Topics

### Hiding views

Sets the transparency of this view.

Hides this view unconditionally.

### Hiding system elements

Hides the labels of any controls contained within this view.

Controls the visibility of labels of any controls contained within this view.

`var labelsVisibility: Visibility`

The labels visibility set by `labelsVisibility(_:)`.

Sets the menu indicator visibility for controls within this view.

Sets the visibility of the status bar.

Sets the preferred visibility of the non-transient system views overlaying the app.

`enum Visibility`

The visibility of a UI element, chosen automatically based on the platform, current context, and other factors.

### Managing view interaction

Adds a condition that controls whether users can interact with this view.

`var isEnabled: Bool`

A Boolean value that indicates whether the view associated with this environment allows user interaction.

Sets a tag that you use for tracking interactivity.

Mark the receiver as their content might be invalidated.

### Providing contextual help

`func help(_:)`

Adds help text to a view using a text view that you provide.

### Detecting and requesting the light or dark appearance

Sets the preferred color scheme for this presentation.

`var colorScheme: ColorScheme`

The color scheme of this environment.

`enum ColorScheme`

The possible color schemes, corresponding to the light and dark appearances.

### Getting the color scheme contrast

`var colorSchemeContrast: ColorSchemeContrast`

The contrast associated with the color scheme of this environment.

`enum ColorSchemeContrast`

The contrast between the app’s foreground and background colors.

### Configuring passthrough

Applies an effect to passthrough video.

`struct SurroundingsEffect`

Effects that the system can apply to passthrough video.

`struct BreakthroughEffect`

### Redacting private content

Designing your app for the Always On state

Customize your watchOS app’s user interface for continuous display.

Protecting sensitive content when screen sharing and remote control are active

Detect active screen capture sessions and respond appropriately to protect sensitive content in your app.

Marks the view as containing sensitive, private user data.

Adds a reason to apply a redaction to this view hierarchy.

Removes any reason to apply a redaction to this view hierarchy.

`var redactionReasons: RedactionReasons`

The current redaction reasons applied to the view hierarchy.

`var isSceneCaptured: Bool`

The current capture state.

`struct RedactionReasons`

The reasons to apply a redaction to data displayed on screen.

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/swiftui/view-styles

Collection

- SwiftUI
- View styles

API Collection

# View styles

Apply built-in and custom appearances and behaviors to different types of views.

## Overview

SwiftUI defines built-in styles for certain kinds of views and automatically selects the appropriate style for a particular presentation context. For example, a `Label` might appear as an icon, a string title, or both, depending on factors like the platform, whether the view appears in a toolbar, and so on.

You can override the automatic style by using one of the style view modifiers. These modifiers typically propagate throughout a container view, so that you can wrap a view hierarchy in a style modifier to affect all the views of the given type within the hierarchy.

Any of the style protocols that define a `makeBody(configuration:)` method, like `ToggleStyle`, also enable you to define custom styles. Create a type that conforms to the corresponding style protocol and implement its `makeBody(configuration:)` method. Then apply the new style using a style view modifier exactly like a built-in style.

## Topics

### Styling views with Liquid Glass

Applying Liquid Glass to custom views

Configure, combine, and morph views using Liquid Glass effects.

Landmarks: Building an app with Liquid Glass

Enhance your app experience with system-provided and custom Liquid Glass.

Applies the Liquid Glass effect to a view.

Returns a copy of the structure configured to be interactive.

`struct GlassEffectContainer`

A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.

`struct GlassEffectTransition`

A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.

`struct GlassButtonStyle`

A button style that applies glass border artwork based on the button’s context.

`struct GlassProminentButtonStyle`

A button style that applies prominent glass border artwork based on the button’s context.

`struct DefaultGlassEffectShape`

The default shape applied by glass effects, a capsule.

### Styling buttons

`func buttonStyle(_:)`

Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.

`protocol ButtonStyle`

A type that applies standard interaction behavior and a custom appearance to all buttons within a view hierarchy.

`struct ButtonStyleConfiguration`

The properties of a button.

`protocol PrimitiveButtonStyle`

A type that applies custom interaction behavior and a custom appearance to all buttons within a view hierarchy.

`struct PrimitiveButtonStyleConfiguration`

Sets the style used for displaying the control (see `SignInWithAppleButton.Style`).

### Styling pickers

Sets the style for pickers within this view.

`protocol PickerStyle`

A type that specifies the appearance and interaction of all pickers within a view hierarchy.

Sets the style for date pickers within this view.

`protocol DatePickerStyle`

A type that specifies the appearance and interaction of all date pickers within a view hierarchy.

### Styling menus

Sets the style for menus within this view.

`protocol MenuStyle`

A type that applies standard interaction behavior and a custom appearance to all menus within a view hierarchy.

`struct MenuStyleConfiguration`

A configuration of a menu.

### Styling toggles

Sets the style for toggles in a view hierarchy.

`protocol ToggleStyle`

The appearance and behavior of a toggle.

`struct ToggleStyleConfiguration`

The properties of a toggle instance.

### Styling indicators

Sets the style for gauges within this view.

`protocol GaugeStyle`

Defines the implementation of all gauge instances within a view hierarchy.

`struct GaugeStyleConfiguration`

The properties of a gauge instance.

Sets the style for progress views in this view.

`protocol ProgressViewStyle`

A type that applies standard interaction behavior to all progress views within a view hierarchy.

`struct ProgressViewStyleConfiguration`

The properties of a progress view instance.

### Styling views that display text

Sets the style for labels within this view.

`protocol LabelStyle`

A type that applies a custom appearance to all labels within a view.

`struct LabelStyleConfiguration`

The properties of a label.

Sets the style for text fields within this view.

`protocol TextFieldStyle`

A specification for the appearance and interaction of a text field.

Sets the style for text editors within this view.

`protocol TextEditorStyle`

A specification for the appearance and interaction of a text editor.

`struct TextEditorStyleConfiguration`

The properties of a text editor.

### Styling collection views

Sets the style for lists within this view.

`protocol ListStyle`

A protocol that describes the behavior and appearance of a list.

Sets the style for tables within this view.

`protocol TableStyle`

A type that applies a custom appearance to all tables within a view.

`struct TableStyleConfiguration`

The properties of a table.

Sets the style for disclosure groups within this view.

`protocol DisclosureGroupStyle`

A type that specifies the appearance and interaction of disclosure groups within a view hierarchy.

### Styling navigation views

Sets the style for navigation split views within this view.

`protocol NavigationSplitViewStyle`

A type that specifies the appearance and interaction of navigation split views within a view hierarchy.

Sets the style for the tab view within the current environment.

`protocol TabViewStyle`

A specification for the appearance and interaction of a tab view.

### Styling groups

Sets the style for control groups within this view.

`protocol ControlGroupStyle`

Defines the implementation of all control groups within a view hierarchy.

`struct ControlGroupStyleConfiguration`

The properties of a control group.

Sets the style for forms in a view hierarchy.

`protocol FormStyle`

The appearance and behavior of a form.

`struct FormStyleConfiguration`

The properties of a form instance.

Sets the style for group boxes within this view.

`protocol GroupBoxStyle`

A type that specifies the appearance and interaction of all group boxes within a view hierarchy.

`struct GroupBoxStyleConfiguration`

The properties of a group box instance.

Sets the style for the index view within the current environment.

`protocol IndexViewStyle`

Defines the implementation of all `IndexView` instances within a view hierarchy.

Sets a style for labeled content.

`protocol LabeledContentStyle`

The appearance and behavior of a labeled content instance..

`struct LabeledContentStyleConfiguration`

The properties of a labeled content instance.

### Styling windows from a view inside the window

Sets the style for windows created by interacting with this view.

Sets the style for the toolbar in windows created by interacting with this view.

### Adding a glass background on views in visionOS

Fills the view’s background with an automatic glass background effect and container-relative rounded rectangle shape.

Fills the view’s background with an automatic glass background effect and a shape that you specify.

`enum GlassBackgroundDisplayMode`

The display mode of a glass background.

`protocol GlassBackgroundEffect`

A specification for the appearance of a glass background.

`struct AutomaticGlassBackgroundEffect`

The automatic glass background effect.

`struct GlassBackgroundEffectConfiguration`

A configuration used to build a custom effect.

`struct FeatheredGlassBackgroundEffect`

`struct PlateGlassBackgroundEffect`

The plate glass background effect.

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/swiftui/model-data

Collection

- SwiftUI
- Model data

API Collection

# Model data

Manage the data that your app uses to drive its interface.

## Overview

SwiftUI offers a declarative approach to user interface design. As you compose a hierarchy of views, you also indicate data dependencies for the views. When the data changes, either due to an external event or because of an action that the user performs, SwiftUI automatically updates the affected parts of the interface. As a result, the framework automatically performs most of the work that view controllers traditionally do.

The framework provides tools, like state variables and bindings, for connecting your app’s data to the user interface. These tools help you maintain a single source of truth for every piece of data in your app, in part by reducing the amount of glue logic you write. Select the tool that best suits the task you need to perform:

- Manage transient UI state locally within a view by wrapping value types as `State` properties.

- Share a reference to a source of truth, like local state, using the `Binding` property wrapper.

- Connect to and observe reference model data in views by applying the `Observable()` macro to the model data type. Instantiate an observable model data type directly in a view using a `State` property. Share the observable model data with other views in the hierarchy without passing a reference using the `Environment` property wrapper.

### Leveraging property wrappers

SwiftUI implements many data management types, like `State` and `Binding`, as Swift property wrappers. Apply a property wrapper by adding an attribute with the wrapper’s name to a property’s declaration.

@State private var isVisible = true // Declares isVisible as a state variable.

The property gains the behavior that the wrapper specifies. The state and data flow property wrappers in SwiftUI watch for changes in your data, and automatically update affected views as necessary. When you refer directly to the property in your code, you access the wrapped value, which for the `isVisible` state property in the example above is the stored Boolean.

if isVisible == true {
Text("Hello") // Only renders when isVisible is true.
}

Alternatively, you can access a property wrapper’s projected value by prefixing the property name with the dollar sign (`$`). SwiftUI state and data flow property wrappers project a `Binding`, which is a two-way connection to the wrapped value, allowing another view to access and mutate a single source of truth.

Toggle("Visible", isOn: $isVisible) // The toggle can update the stored value.

For more information about property wrappers, see Property Wrappers in The Swift Programming Language.

## Topics

### Creating and sharing view state

Managing user interface state

Encapsulate view-specific data within your app’s view hierarchy to make your views reusable.

`struct State`

A property wrapper type that can read and write a value managed by SwiftUI.

`struct Bindable`

A property wrapper type that supports creating bindings to the mutable properties of observable objects.

`struct Binding`

A property wrapper type that can read and write a value owned by a source of truth.

### Creating model data

Managing model data in your app

Create connections between your app’s data model and views.

Migrating from the Observable Object protocol to the Observable macro

Update your existing app to leverage the benefits of Observation in Swift.

`macro Observable()`

Defines and implements conformance of the Observable protocol.

Monitoring data changes in your app

Show changes to data in your app’s user interface by using observable objects.

`struct StateObject`

A property wrapper type that instantiates an observable object.

`struct ObservedObject`

A property wrapper type that subscribes to an observable object and invalidates a view whenever the observable object changes.

`protocol ObservableObject`

A type of object with a publisher that emits before the object has changed.

### Responding to data changes

`func onChange(of:initial:_:)`

Adds a modifier for this view that fires an action when a specific value changes.

Adds an action to perform when this view detects data emitted by the given publisher.

### Distributing model data throughout your app

Supplies an observable object to a view’s hierarchy.

Supplies an `ObservableObject` to a view subhierarchy.

`struct EnvironmentObject`

A property wrapper type for an observable object that a parent or ancestor view supplies.

### Managing dynamic data

`protocol DynamicProperty`

An interface for a stored variable that updates an external property of a view.

## See Also

### Data and storage

Share data throughout a view hierarchy using the environment.

Indicate configuration preferences from views to their container views.

Store data for use across sessions of your app.

---

# https://developer.apple.com/documentation/swiftui/environment-values

Collection

- SwiftUI
- Environment values

API Collection

# Environment values

Share data throughout a view hierarchy using the environment.

## Overview

Views in SwiftUI can react to configuration information that they read from the environment using an `Environment` property wrapper.

A view inherits its environment from its container view, subject to explicit changes from an `environment(_:_:)` view modifier, or by implicit changes from one of the many modifiers that operate on environment values. As a result, you can configure a entire hierarchy of views by modifying the environment of the group’s container.

You can find many built-in environment values in the `EnvironmentValues` structure. You can also create a custom `EnvironmentValues` property by defining a new property in an extension to the environment values structure and applying the `Entry()` macro to the variable declaration.

## Topics

### Accessing environment values

`struct Environment`

A property wrapper that reads a value from a view’s environment.

`struct EnvironmentValues`

A collection of environment values propagated through a view hierarchy.

### Creating custom environment values

`macro Entry()`

Creates an environment values, transaction, container values, or focused values entry.

`protocol EnvironmentKey`

A key for accessing values in the environment.

### Modifying the environment of a view

Places an observable object in the view’s environment.

Sets the environment value of the specified key path to the given value.

Transforms the environment value of the specified key path with the given function.

### Modifying the environment of a scene

Places an observable object in the scene’s environment.

## See Also

### Data and storage

Manage the data that your app uses to drive its interface.

Indicate configuration preferences from views to their container views.

Store data for use across sessions of your app.

---

# https://developer.apple.com/documentation/swiftui/preferences

Collection

- SwiftUI
- Preferences

API Collection

# Preferences

Indicate configuration preferences from views to their container views.

## Overview

Whereas you use the environment to configure the subviews of a view, you use preferences to send configuration information from subviews toward their container. However, unlike configuration information that flows down a view hierarchy from one container to many subviews, a single container needs to reconcile potentially conflicting preferences flowing up from its many subviews.

When you use the `PreferenceKey` protocol to define a custom preference, you indicate how to merge preferences from multiple subviews. You can then set a value for the preference on a view using the `preference(key:value:)` view modifier. Many built-in modifiers, like `navigationTitle(_:)`, rely on preferences to send configuration information to their container.

## Topics

### Setting preferences

Sets a value for the given preference.

Applies a transformation to a preference value.

### Creating custom preferences

`protocol PreferenceKey`

A named value produced by a view.

### Setting preferences based on geometry

Sets a value for the specified preference key, the value is a function of a geometry value tied to the current coordinate space, allowing readers of the value to convert the geometry to their local coordinates.

Sets a value for the specified preference key, the value is a function of the key’s current value and a geometry value tied to the current coordinate space, allowing readers of the value to convert the geometry to their local coordinates.

### Responding to changes in preferences

Adds an action to perform when the specified preference key’s value changes.

### Generating backgrounds and overlays from preferences

Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.

Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.

## See Also

### Data and storage

Manage the data that your app uses to drive its interface.

Share data throughout a view hierarchy using the environment.

Store data for use across sessions of your app.

---

# https://developer.apple.com/documentation/swiftui/persistent-storage

Collection

- SwiftUI
- Persistent storage

API Collection

# Persistent storage

Store data for use across sessions of your app.

## Overview

The operating system provides ways to store data when your app closes, so that when people open your app again later, they can continue working without interruption. The mechanism that you use depends on factors like what and how much you need to store, whether you need serialized or random access to the data, and so on.

You use the same kinds of storage in a SwiftUI app that you use in any other app. For example, you can access files on disk using the `FileManager` interface. However, SwiftUI also provides conveniences that make it easier to use certain kinds of persistent storage in a declarative environment. For example, you can use `FetchRequest` and `FetchedResults` to interact with a Core Data model.

## Topics

### Saving state across app launches

Restoring your app’s state with SwiftUI

Provide app continuity for users by preserving their current activities.

The default store used by `AppStorage` contained within the view.

`struct AppStorage`

A property wrapper type that reflects a value from `UserDefaults` and invalidates a view on a change in value in that user default.

`struct SceneStorage`

A property wrapper type that reads and writes to persisted, per-scene storage.

### Accessing Core Data

Loading and displaying a large data feed

Consume data in the background, and lower memory use by batching imports and preventing duplicate records.

`var managedObjectContext: NSManagedObjectContext`

`struct FetchRequest`

A property wrapper type that retrieves entities from a Core Data persistent store.

`struct FetchedResults`

A collection of results retrieved from a Core Data store.

`struct SectionedFetchRequest`

A property wrapper type that retrieves entities, grouped into sections, from a Core Data persistent store.

`struct SectionedFetchResults`

A collection of results retrieved from a Core Data persistent store, grouped into sections.

## See Also

### Data and storage

Manage the data that your app uses to drive its interface.

Share data throughout a view hierarchy using the environment.

Indicate configuration preferences from views to their container views.

---

# https://developer.apple.com/documentation/swiftui/stateobject

- SwiftUI
- StateObject

Structure

# StateObject

A property wrapper type that instantiates an observable object.

@MainActor @frozen @propertyWrapper @preconcurrency

## Overview

Use a state object as the single source of truth for a reference type that you store in a view hierarchy. Create a state object in an `App`, `Scene`, or `View` by applying the `@StateObject` attribute to a property declaration and providing an initial value that conforms to the `ObservableObject` protocol. Declare state objects as private to prevent setting them from a memberwise initializer, which can conflict with the storage management that SwiftUI provides:

class DataModel: ObservableObject {
@Published var name = "Some Name"
@Published var isEnabled = false
}

struct MyView: View {
@StateObject private var model = DataModel() // Create the state object.

var body: some View {
Text(model.name) // Updates when the data model changes.
MySubView()
.environmentObject(model)
}
}

SwiftUI creates a new instance of the model object only once during the lifetime of the container that declares the state object. For example, SwiftUI doesn’t create a new instance if a view’s inputs change, but does create a new instance if the identity of a view changes. When published properties of the observable object change, SwiftUI updates any view that depends on those properties, like the `Text` view in the above example.

### Share state objects with subviews

You can pass a state object into a subview through a property that has the `ObservedObject` attribute. Alternatively, add the object to the environment of a view hierarchy by applying the `environmentObject(_:)` modifier to a view, like `MySubView` in the above code. You can then read the object inside `MySubView` or any of its descendants using the `EnvironmentObject` attribute:

struct MySubView: View {
@EnvironmentObject var model: DataModel

var body: some View {
Toggle("Enabled", isOn: $model.isEnabled)
}
}

Get a `Binding` to the state object’s properties using the dollar sign (`$`) operator. Use a binding when you want to create a two-way connection. In the above code, the `Toggle` controls the model’s `isEnabled` value through a binding.

### Initialize state objects using external data

When a state object’s initial state depends on data that comes from outside its container, you can call the object’s initializer explicitly from within its container’s initializer. For example, suppose the data model from the previous example takes a `name` input during initialization and you want to use a value for that name that comes from outside the view. You can do this with a call to the state object’s initializer inside an explicit initializer that you create for the view:

struct MyInitializableView: View {
@StateObject private var model: DataModel

init(name: String) {
// SwiftUI ensures that the following initialization uses the
// closure only once during the lifetime of the view, so
// later changes to the view's name input have no effect.
_model = StateObject(wrappedValue: DataModel(name: name))
}

var body: some View {
VStack {
Text("Name: \(model.name)")
}
}
}

Use caution when doing this. SwiftUI only initializes a state object the first time you call its initializer in a given view. This ensures that the object provides stable storage even as the view’s inputs change. However, it might result in unexpected behavior or unwanted side effects if you explicitly initialize the state object.

In the above example, if the `name` input to `MyInitializableView` changes, SwiftUI reruns the view’s initializer with the new value. However, SwiftUI runs the autoclosure that you provide to the state object’s initializer only the first time you call the state object’s initializer, so the model’s stored `name` value doesn’t change.

Explicit state object initialization works well when the external data that the object depends on doesn’t change for a given instance of the object’s container. For example, you can create two views with different constant names:

var body: some View {
VStack {
MyInitializableView(name: "Ravi")
MyInitializableView(name: "Maria")
}
}

### Force reinitialization by changing view identity

If you want SwiftUI to reinitialize a state object when a view input changes, make sure that the view’s identity changes at the same time. One way to do this is to bind the view’s identity to the value that changes using the `id(_:)` modifier. For example, you can ensure that the identity of an instance of `MyInitializableView` changes when its `name` input changes:

MyInitializableView(name: name)
.id(name) // Binds the identity of the view to the name property.

If you need the view to reinitialize state based on changes in more than one value, you can combine the values into a single identifier using a `Hasher`. For example, if you want to update the data model in `MyInitializableView` when the values of either `name` or `isEnabled` change, you can combine both variables into a single hash:

var hash: Int {
var hasher = Hasher()
hasher.combine(name)
hasher.combine(isEnabled)
return hasher.finalize()
}

Then apply the combined hash to the view as an identifier:

MyInitializableView(name: name, isEnabled: isEnabled)
.id(hash)

Be mindful of the performance cost of reinitializing the state object every time the input changes. Also, changing view identity can have side effects. For example, SwiftUI doesn’t automatically animate changes inside the view if the view’s identity changes at the same time. Also, changing the identity resets _all_ state held by the view, including values that you manage as `State`, `FocusState`, `GestureState`, and so on.

## Topics

### Creating a state object

Creates a new state object with an initial wrapped value.

### Getting the value

`var wrappedValue: ObjectType`

The underlying value referenced by the state object.

A projection of the state object that creates bindings to its properties.

## Relationships

### Conforms To

- `DynamicProperty`
- `Sendable`
- `SendableMetatype`

## See Also

### Creating model data

Managing model data in your app

Create connections between your app’s data model and views.

Migrating from the Observable Object protocol to the Observable macro

Update your existing app to leverage the benefits of Observation in Swift.

`macro Observable()`

Defines and implements conformance of the Observable protocol.

Monitoring data changes in your app

Show changes to data in your app’s user interface by using observable objects.

`struct ObservedObject`

A property wrapper type that subscribes to an observable object and invalidates a view whenever the observable object changes.

`protocol ObservableObject`

A type of object with a publisher that emits before the object has changed.

---

# https://developer.apple.com/documentation/swiftui/observedobject

- SwiftUI
- ObservedObject

Structure

# ObservedObject

A property wrapper type that subscribes to an observable object and invalidates a view whenever the observable object changes.

@MainActor @propertyWrapper @preconcurrency @frozen

## Overview

Add the `@ObservedObject` attribute to a parameter of a SwiftUI `View` when the input is an `ObservableObject` and you want the view to update when the object’s published properties change. You typically do this to pass a `StateObject` into a subview.

The following example defines a data model as an observable object, instantiates the model in a view as a state object, and then passes the instance to a subview as an observed object:

class DataModel: ObservableObject {
@Published var name = "Some Name"
@Published var isEnabled = false
}

struct MyView: View {
@StateObject private var model = DataModel()

var body: some View {
Text(model.name)
MySubView(model: model)
}
}

struct MySubView: View {
@ObservedObject var model: DataModel

var body: some View {
Toggle("Enabled", isOn: $model.isEnabled)
}
}

When any published property of the observable object changes, SwiftUI updates any view that depends on the object. Subviews can also make updates to the model properties, like the `Toggle` in the above example, that propagate to other observers throughout the view hierarchy.

Don’t specify a default or initial value for the observed object. Use the attribute only for a property that acts as an input for a view, as in the above example.

## Topics

### Creating an observed object

`init(wrappedValue: ObjectType)`

Creates an observed object with an initial wrapped value.

`init(initialValue: ObjectType)`

Creates an observed object with an initial value.

### Getting the value

`var wrappedValue: ObjectType`

The underlying value that the observed object references.

A projection of the observed object that creates bindings to its properties.

`struct Wrapper`

A wrapper of the underlying observable object that can create bindings to its properties.

## Relationships

### Conforms To

- `DynamicProperty`
- `Sendable`
- `SendableMetatype`

## See Also

### Creating model data

Managing model data in your app

Create connections between your app’s data model and views.

Migrating from the Observable Object protocol to the Observable macro

Update your existing app to leverage the benefits of Observation in Swift.

`macro Observable()`

Defines and implements conformance of the Observable protocol.

Monitoring data changes in your app

Show changes to data in your app’s user interface by using observable objects.

`struct StateObject`

A property wrapper type that instantiates an observable object.

`protocol ObservableObject`

A type of object with a publisher that emits before the object has changed.

---

# https://developer.apple.com/documentation/swiftui/environmentobject

- SwiftUI
- EnvironmentObject

Structure

# EnvironmentObject

A property wrapper type for an observable object that a parent or ancestor view supplies.

@MainActor @frozen @propertyWrapper @preconcurrency

## Overview

An environment object invalidates the current view whenever the observable object that conforms to `ObservableObject` changes. If you declare a property as an environment object, be sure to set a corresponding model object on an ancestor view by calling its `environmentObject(_:)` modifier.

## Topics

### Creating an environment object

`init()`

Creates an environment object.

### Getting the value

`var wrappedValue: ObjectType`

The underlying value referenced by the environment object.

A projection of the environment object that creates bindings to its properties using dynamic member lookup.

`struct Wrapper`

A wrapper of the underlying environment object that can create bindings to its properties using dynamic member lookup.

## Relationships

### Conforms To

- `DynamicProperty`
- `Sendable`
- `SendableMetatype`

## See Also

### Distributing model data throughout your app

Supplies an observable object to a view’s hierarchy.

Supplies an `ObservableObject` to a view subhierarchy.

---

