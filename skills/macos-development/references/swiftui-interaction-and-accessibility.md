# SwiftUI Gestures, Input, Focus, Drag & Drop, Accessibility

> Event handling (gestures, input events, focus, system events), clipboard, drag and drop (including the modern container drag APIs), and the full accessibility stack.

---

# https://developer.apple.com/documentation/swiftui/gestures

Collection

- SwiftUI
- Gestures

API Collection

# Gestures

Define interactions from taps, clicks, and swipes to fine-grained gestures.

## Overview

Respond to gestures by adding gesture modifiers to your views. You can listen for taps, drags, pinches, and other standard gestures.

You can also compose custom gestures from individual gestures using the `simultaneously(with:)`, `sequenced(before:)`, or `exclusively(before:)` modifiers, or combine gestures with keyboard modifiers using the `modifiers(_:)` modifier.

For design guidance, see Gestures in the Human Interface Guidelines.

## Topics

### Essentials

Adding interactivity with gestures

Use gesture modifiers to add interactivity to your app.

### Recognizing tap gestures

Adds an action to perform when this view recognizes a tap gesture.

`func onTapGesture(count:coordinateSpace:perform:)`

Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.

`struct TapGesture`

A gesture that recognizes one or more taps.

`struct SpatialTapGesture`

A gesture that recognizes one or more taps and reports their location.

### Recognizing long press gestures

Adds an action to perform when this view recognizes a long press gesture.

Adds an action to perform when this view recognizes a remote long touch gesture. A long touch gesture is when the finger is on the remote touch surface without actually pressing.

`struct LongPressGesture`

A gesture that succeeds when the user performs a long press.

### Recognizing spatial events

`struct SpatialEventGesture`

A gesture that provides information about ongoing spatial events like clicks and touches.

`struct SpatialEventCollection`

A collection of spatial input events that target a specific view.

`enum Chirality`

The chirality, or handedness, of a pose.

### Recognizing gestures that change over time

`func gesture(_:)`

Attaches an `NSGestureRecognizerRepresentable` to the view.

Attaches a gesture to the view with a lower precedence than gestures defined by the view.

`struct DragGesture`

A dragging motion that invokes an action as the drag-event sequence changes.

`struct WindowDragGesture`

A gesture that recognizes the motion of and handles dragging a window.

`struct MagnifyGesture`

A gesture that recognizes a magnification motion and tracks the amount of magnification.

`struct RotateGesture`

A gesture that recognizes a rotation motion and tracks the angle of the rotation.

`struct RotateGesture3D`

A gesture that recognizes 3D rotation motion and tracks the angle and axis of the rotation.

`struct GestureMask`

Options that control how adding a gesture to a view affects other gestures recognized by the view and its subviews.

### Recognizing Apple Pencil gestures

Adds an action to perform after the user double-taps their Apple Pencil.

Adds an action to perform when the user squeezes their Apple Pencil.

`var preferredPencilDoubleTapAction: PencilPreferredAction`

The action that the user prefers to perform after double-tapping their Apple Pencil, as selected in the Settings app.

`var preferredPencilSqueezeAction: PencilPreferredAction`

The action that the user prefers to perform when squeezing their Apple Pencil, as selected in the Settings app.

`struct PencilPreferredAction`

An action that the user prefers to perform after double-tapping their Apple Pencil.

`struct PencilDoubleTapGestureValue`

Describes the value of an Apple Pencil double-tap gesture.

`struct PencilSqueezeGestureValue`

Describes the value of an Apple Pencil squeeze gesture.

`enum PencilSqueezeGesturePhase`

Describes the phase and value of an Apple Pencil squeeze gesture.

`struct PencilHoverPose`

A value describing the location and distance of an Apple Pencil hovering in the area above a view’s bounds.

### Combining gestures

Composing SwiftUI gestures

Combine gestures to create complex interactions.

Attaches a gesture to the view to process simultaneously with gestures defined by the view.

`struct SequenceGesture`

A gesture that’s a sequence of two gestures.

`struct SimultaneousGesture`

A gesture containing two gestures that can happen at the same time with neither of them preceding the other.

`struct ExclusiveGesture`

A gesture that consists of two gestures where only one of them can succeed.

### Defining custom gestures

Attaches a gesture to the view with a higher precedence than gestures defined by the view.

Assigns a hand gesture shortcut to the modified control.

Sets the screen edge from which you want your gesture to take precedence over the system gesture.

`protocol Gesture`

An instance that matches a sequence of events to a gesture, and returns a stream of values for each of its states.

`struct AnyGesture`

A type-erased gesture.

`struct HandActivationBehavior`

An activation behavior specific to hand-driven input.

`struct HandGestureShortcut`

Hand gesture shortcuts describe finger and wrist movements that the user can perform in order to activate a button or toggle.

### Managing gesture state

`struct GestureState`

A property wrapper type that updates a property while the user performs a gesture and resets the property

A gesture that updates the state provided by a gesture’s updating callback.

### Handling activation events

Configures whether gestures in this view hierarchy can handle events that activate the containing window.

### Deprecated gestures

`struct MagnificationGesture`

Deprecated

`struct RotationGesture`

## See Also

### Event handling

Respond to input from a hardware device, like a keyboard or a Touch Bar.

Enable people to move or duplicate items by issuing Copy and Paste commands.

Enable people to move or duplicate items by dragging them from one location to another.

Identify and control which visible object responds to user interaction.

React to system events, like opening a URL.

---

# https://developer.apple.com/documentation/swiftui/input-events

Collection

- SwiftUI
- Input events

API Collection

# Input events

Respond to input from a hardware device, like a keyboard or a Touch Bar.

## Overview

SwiftUI provides view modifiers that enable your app to listen for and react to various kinds of user input. For example, you can create keyboard shortcuts, respond to a form submission, or take input from the digital crown of an Apple Watch.

For design guidance, see Inputs in the Human Interface Guidelines.

## Topics

### Responding to keyboard input

Performs an action if the user presses a key on a hardware keyboard while the view has focus.

Performs an action if the user presses any key on a hardware keyboard while the view has focus.

Performs an action if the user presses one or more keys on a hardware keyboard while the view has focus.

`struct KeyPress`

### Creating keyboard shortcuts

`func keyboardShortcut(_:)`

Assigns a keyboard shortcut to the modified control.

Defines a keyboard shortcut and assigns it to the modified control.

`var keyboardShortcut: KeyboardShortcut?`

The keyboard shortcut that buttons in this environment will be triggered with.

`struct KeyboardShortcut`

Keyboard shortcuts describe combinations of keys on a keyboard that the user can press in order to activate a button or toggle.

`struct KeyEquivalent`

Key equivalents consist of a letter, punctuation, or function key that can be combined with an optional set of modifier keys to specify a keyboard shortcut.

`struct EventModifiers`

A set of key modifiers that you can add to a gesture.

### Responding to modifier keys

Performs an action whenever the user presses or releases a hardware modifier key.

Builds a view to use in place of the modified view when the user presses the modifier key(s) indicated by the given set.

### Responding to hover events

Adds an action to perform when the user moves the pointer over or away from the view’s frame.

`func onContinuousHover(coordinateSpace:perform:)`

Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.

`func hoverEffect(_:isEnabled:)`

Applies a hover effect to this view.

Adds a condition that controls whether this view can display hover effects.

`func defaultHoverEffect(_:)`

Sets the default hover effect to use for views within this view.

`var isHoverEffectEnabled: Bool`

A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.

`enum HoverPhase`

The current hovering state and value of the pointer.

`struct HoverEffectPhaseOverride`

Options for overriding a hover effect’s current phase.

`struct OrnamentHoverContentEffect`

Presents an ornament on hover using a custom effect.

`struct OrnamentHoverEffect`

Presents an ornament on hover.

### Modifying pointer appearance

Sets the pointer style to display when the pointer is over the view.

`struct PointerStyle`

A style describing the appearance of the pointer (also called a cursor) when it’s hovered over a view.

Sets the visibility of the pointer when it’s over the view.

### Changing view appearance for hover events

`struct HoverEffect`

An effect applied when the pointer hovers over a view.

Applies a hover effect to this view, optionally adding it to a `HoverEffectGroup`.

Applies a hover effect to this view described by the given closure.

`protocol CustomHoverEffect`

A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.

`struct ContentHoverEffect`

A `CustomHoverEffect` that applies effects to a view on hover using a closure.

`struct HoverEffectGroup`

Describes a grouping of effects that activate together.

Adds an implicit `HoverEffectGroup` to all effects defined on descendant views, so that all effects added to subviews activate as a group whenever this view or any descendant views are hovered.

Adds a `HoverEffectGroup` to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.

`struct GroupHoverEffect`

A `CustomHoverEffect` that activates a named group of effects.

`protocol HoverEffectContent`

A type that describes the effects of a view for a particular hover effect phase.

`struct EmptyHoverEffectContent`

An empty base effect that you use to build other effects.

Sets the behavior of the hand pointer while the user is interacting with the view.

`struct HandPointerBehavior`

A behavior that can be applied to the hand pointer while the user is interacting with a view.

### Responding to submission events

Adds an action to perform when the user submits a value to this view.

Prevents submission triggers originating from this view to invoke a submission action configured by a submission modifier higher up in the view hierarchy.

`struct SubmitTriggers`

A type that defines various triggers that result in the firing of a submission action.

### Labeling a submission event

Sets the submit label for this view.

`struct SubmitLabel`

A semantic label describing the label of submission within a view hierarchy.

### Responding to commands

Adds an action to perform in response to a move command, like when the user presses an arrow key on a Mac keyboard, or taps the edge of the Siri Remote when controlling an Apple TV.

Adds an action to perform in response to the system’s Delete command, or pressing either the ⌫ (backspace) or ⌦ (forward delete) keys while the view has focus.

Steps a value through a range in response to page up or page down commands.

Sets up an action that triggers in response to receiving the exit command while the view has focus.

Adds an action to perform in response to the system’s Play/Pause command.

Adds an action to perform in response to the given selector.

`enum MoveCommandDirection`

Specifies the direction of an arrow key movement.

### Controlling hit testing

Sets whether text in this view can compress the space between characters when necessary to fit text in a line.

Defines the content shape for hit testing.

Sets the content shape for this view.

`struct ContentShapeKinds`

A kind for the content shape of a view.

### Interacting with the Digital Crown

Specifies the visibility of Digital Crown accessory Views on Apple Watch.

Places an accessory View next to the Digital Crown on Apple Watch.

Tracks Digital Crown rotations by updating the specified binding.

`func digitalCrownRotation(detent:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)`

`struct DigitalCrownEvent`

An event emitted when the user rotates the Digital Crown.

`enum DigitalCrownRotationalSensitivity`

The amount of Digital Crown rotation needed to move between two integer numbers.

### Managing Touch Bar input

Sets the content that the Touch Bar displays.

Sets the Touch Bar content to be shown in the Touch Bar when applicable.

Sets principal views that have special significance to this Touch Bar.

Sets a user-visible string that identifies the view’s functionality.

Sets the behavior of the user-customized view.

`struct TouchBar`

A container for a view that you can show in the Touch Bar.

`enum TouchBarItemPresence`

Options that affect user customization of the Touch Bar.

### Responding to capture events

Used to register an action triggered by system capture events.

Used to register actions triggered by system capture events.

## See Also

### Event handling

Define interactions from taps, clicks, and swipes to fine-grained gestures.

Enable people to move or duplicate items by issuing Copy and Paste commands.

Enable people to move or duplicate items by dragging them from one location to another.

Identify and control which visible object responds to user interaction.

React to system events, like opening a URL.

---

# https://developer.apple.com/documentation/swiftui/focus

Collection

- SwiftUI
- Focus

API Collection

# Focus

Identify and control which visible object responds to user interaction.

## Overview

Focus indicates which element in the display receives the next input. Use view modifiers to indicate which views can receive focus, to detect which view has focus, and to programmatically control focus state.

For design guidance, see Focus and selection in the Human Interface Guidelines.

## Topics

### Essentials

Focus Cookbook: Supporting and enhancing focus-driven interactions in your SwiftUI app

Create custom focusable views with key-press handlers that accelerate keyboard input and support movement, and control focus programmatically.

### Indicating that a view can receive focus

Specifies if the view is focusable.

Specifies if the view is focusable, and if so, what focus-driven interactions it supports.

`struct FocusInteractions`

Values describe different focus interactions that a view can support.

### Managing focus state

Modifies this view by binding its focus state to the given state value.

Modifies this view by binding its focus state to the given Boolean state value.

`var isFocused: Bool`

Returns whether the nearest focusable ancestor has focus.

`struct FocusState`

A property wrapper type that can read and write a value that SwiftUI updates as the placement of focus within the scene changes.

`struct FocusedValue`

A property wrapper for observing values from the focused view or one of its ancestors.

`macro Entry()`

Creates an environment values, transaction, container values, or focused values entry.

`protocol FocusedValueKey`

A protocol for identifier types used when publishing and observing focused values.

`struct FocusedBinding`

A convenience property wrapper for observing and automatically unwrapping state bindings from the focused view or one of its ancestors.

Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given Boolean value.

Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given value.

### Exposing value types to focused views

Sets the focused value for the given object type.

`func focusedValue(_:_:)`

Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused view hierarchy.

Sets the focused value for the given object type at a scene-wide scope.

`func focusedSceneValue(_:_:)`

Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused scene.

`struct FocusedValues`

A collection of state exported by the focused scene or view and its ancestors.

### Exposing reference types to focused views

`func focusedObject(_:)`

Creates a new view that exposes the provided object to other views whose whose state depends on the focused view hierarchy.

`func focusedSceneObject(_:)`

Creates a new view that exposes the provided object to other views whose whose state depends on the active scene.

`struct FocusedObject`

A property wrapper type for an observable object supplied by the focused view or one of its ancestors.

### Setting focus scope

Creates a focus scope that SwiftUI uses to limit default focus preferences.

Indicates that the view’s frame and cohort of focusable descendants should be used to guide focus movement.

### Controlling default focus

Indicates that the view should receive focus by default for a given namespace.

Defines a region of the window in which default focus is evaluated by assigning a value to a given focus state binding.

`struct DefaultFocusEvaluationPriority`

Prioritizations for default focus preferences when evaluating where to move focus in different circumstances.

### Resetting focus

`var resetFocus: ResetFocusAction`

An action that requests the focus system to reevaluate default focus.

`struct ResetFocusAction`

An environment value that provides the ability to reevaluate default focus.

### Configuring effects

Adds a condition that controls whether this view can display focus effects, such as a default focus ring or hover effect.

`var isFocusEffectEnabled: Bool`

A Boolean value that indicates whether the view associated with this environment allows focus effects to be displayed.

## See Also

### Event handling

Define interactions from taps, clicks, and swipes to fine-grained gestures.

Respond to input from a hardware device, like a keyboard or a Touch Bar.

Enable people to move or duplicate items by issuing Copy and Paste commands.

Enable people to move or duplicate items by dragging them from one location to another.

React to system events, like opening a URL.

---

# https://developer.apple.com/documentation/swiftui/system-events

Collection

- SwiftUI
- System events

API Collection

# System events

React to system events, like opening a URL.

## Overview

Specify view and scene modifiers to indicate how your app responds to certain system events. For example, you can use the `onOpenURL(perform:)` view modifier to define an action to take when your app receives a universal link, or use the `backgroundTask(_:action:)` scene modifier to specify an asynchronous task to carry out in response to a background task event, like the completion of a background URL session.

## Topics

### Sending and receiving user activities

Restoring your app’s state with SwiftUI

Provide app continuity for users by preserving their current activities.

Advertises a user activity type.

Registers a handler to invoke in response to a user activity that your app receives.

### Sending and receiving URLs

`var openURL: OpenURLAction`

An action that opens a URL.

`struct OpenURLAction`

Registers a handler to invoke in response to a URL that your app receives.

### Handling external events

Specifies the external events for which SwiftUI opens a new instance of the modified scene.

Specifies the external events that the view’s scene handles if the scene is already open.

### Handling background tasks

Runs the specified action when the system provides a background task.

`struct BackgroundTask`

The kinds of background tasks that your app or extension can handle.

`struct SnapshotData`

The associated data of a snapshot background task.

`struct SnapshotResponse`

Your application’s response to a snapshot background task.

### Importing and exporting transferable items

Enables importing items from services, such as Continuity Camera on macOS.

Exports items for consumption by shortcuts, quick actions, and services.

Exports read-write items for consumption by shortcuts, quick actions, and services.

### Importing and exporting using item providers

Enables importing item providers from services, such as Continuity Camera on macOS.

Exports a read-only item provider for consumption by shortcuts, quick actions, and services.

Exports a read-write item provider for consumption by shortcuts, quick actions, and services.

## See Also

### Event handling

Define interactions from taps, clicks, and swipes to fine-grained gestures.

Respond to input from a hardware device, like a keyboard or a Touch Bar.

Enable people to move or duplicate items by issuing Copy and Paste commands.

Enable people to move or duplicate items by dragging them from one location to another.

Identify and control which visible object responds to user interaction.

---

# https://developer.apple.com/documentation/swiftui/clipboard

Collection

- SwiftUI
- Clipboard

API Collection

# Clipboard

Enable people to move or duplicate items by issuing Copy and Paste commands.

## Overview

When people issue standard Copy and Cut commands, they expect to move items to the system’s Clipboard, from which they can paste the items into another place in the same app or into another app. Your app can participate in this activity if you add view modifiers that indicate how to respond to the standard commands.

In your copy and paste modifiers, provide or accept types that conform to the `Transferable` protocol, or that inherit from the `NSItemProvider` class. When possible, prefer using transferable items.

## Topics

### Copying transferable items

Specifies a list of items to copy in response to the system’s Copy command.

Specifies an action that moves items to the Clipboard in response to the system’s Cut command.

Specifies an action that adds validated items to a view in response to the system’s Paste command.

### Copying items using item providers

Adds an action to perform in response to the system’s Copy command.

Adds an action to perform in response to the system’s Cut command.

`func onPasteCommand(of:perform:)`

Adds an action to perform in response to the system’s Paste command.

`func onPasteCommand(of:validator:perform:)`

Adds an action to perform in response to the system’s Paste command with items that you validate.

## See Also

### Event handling

Define interactions from taps, clicks, and swipes to fine-grained gestures.

Respond to input from a hardware device, like a keyboard or a Touch Bar.

Enable people to move or duplicate items by dragging them from one location to another.

Identify and control which visible object responds to user interaction.

React to system events, like opening a URL.

---

# https://developer.apple.com/documentation/swiftui/drag-and-drop

Collection

- SwiftUI
- Drag and drop

API Collection

# Drag and drop

Enable people to move or duplicate items by dragging them from one location to another.

## Overview

Drag and drop offers people a convenient way to move content from one part of your app to another, or from one app to another, using an intuitive dragging gesture. Support this feature in your app by adding view modifiers to potential source and destination views within your app’s interface.

In your modifiers, provide or accept types that conform to the `Transferable` protocol, or that inherit from the `NSItemProvider` class. When possible, prefer using transferable items.

For design guidance, see Drag and drop in the Human Interface Guidelines.

## Topics

### Essentials

Adopting drag and drop using SwiftUI

Enable drag-and-drop interactions in lists, tables and custom views.

Making a view into a drag source

Adopt draggable API to provide items for drag-and-drop operations.

### Configuring drag and drop behavior

`struct DragConfiguration`

The behavior of the drag, proposed by the dragging source.

`struct DropConfiguration`

Describes the behavior of the drop.

### Moving items

`struct DragSession`

Describes the ongoing dragging session.

`struct DropSession`

### Moving transferable items

Activates this view as the source of a drag and drop operation.

Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.

Deprecated

### Moving items using item providers

Provides a closure that vends the drag representation to be used for a particular data element.

`func onDrop(of:isTargeted:perform:)`

Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.

`func onDrop(of:delegate:)`

Defines the destination of a drag and drop operation using behavior controlled by the delegate that you provide.

`protocol DropDelegate`

An interface that you implement to interact with a drop operation in a view modified to accept drops.

`struct DropProposal`

The behavior of a drop.

`enum DropOperation`

Operation types that determine how a drag and drop session resolves when the user drops a drag item.

`struct DropInfo`

The current state of a drop.

### Describing preview formations

`struct DragDropPreviewsFormation`

On macOS, describes the way the dragged previews are visually composed. Both drag sources and drop destination can specify their desired preview formation.

### Configuring spring loading

Sets the spring loading behavior this view.

`var springLoadingBehavior: SpringLoadingBehavior`

The behavior of spring loaded interactions for the views associated with this environment.

`struct SpringLoadingBehavior`

The options for controlling the spring loading behavior of views.

## See Also

### Event handling

Define interactions from taps, clicks, and swipes to fine-grained gestures.

Respond to input from a hardware device, like a keyboard or a Touch Bar.

Enable people to move or duplicate items by issuing Copy and Paste commands.

Identify and control which visible object responds to user interaction.

React to system events, like opening a URL.

---

# https://developer.apple.com/documentation/SwiftUI/View/draggable(containerItemID:containerNamespace:)

#app-main)

- SwiftUI
- View
- draggable(containerItemID:containerNamespace:)

Instance Method

# draggable(containerItemID:containerNamespace:)

Inside a drag container, activates this view as the source of a drag and drop operation. Supports lazy drag containers.

nonisolated

containerItemID: ItemID,
containerNamespace: Namespace.ID? = nil

## Parameters

`containerItemID`

An identifier of the associated drag payload.

`containerNamespace`

A namespace of the associated drag container.

## Return Value

A view that activates this view as the source of a drag and drop operation, beginning with user gesture input.

## Discussion

This modifier marks the view as a draggable element of an enclosing `dragContainer(_:containerNamespace:_:)`. Since this modifier does not require to provide the payload, only its identifier, it works lazily (the framework asks to provide the actual dragged items only when drag starts; also, the framework doesn’t have to render a view in order to access its payload).

Applying the `draggable(containerItemID:containerNamespace:)` modifier to a view inside a drag container adds the appropriate gestures for drag and drop to this view. SwiftUI generates a default drag preview for drag.

Below, each `FruitView` is assigned an identifier: a code of a fruit it represents. When dragging begins, the `dragContainer` closure is called with the codes of the selected fruit, or, if a user drags a view that is not selected, the closure receives the identifier of that view as a parameter.

var fruits: [Fruit]
var selectedFruitCodes: [UUID]

var body: some View {
VStack {
ForEach(fruits) { fruit in
.draggable(containerItemID: fruit.code)
}
.dragContainer { codes in
fruits(with: codes)
}
.dragContainerSelection(selectedFruitCodes)
}

struct Fruit: Transferable {
var code: UUID
...
}

---

# https://developer.apple.com/documentation/SwiftUI/View/dragContainer(for:itemID:in:_:)

#app-main)

- SwiftUI
- View
- dragContainer(for:itemID:in:\_:)

Instance Method

# dragContainer(for:itemID:in:\_:)

A container with draggable views.

nonisolated

for itemType: Item.Type = Item.self,

in namespace: Namespace.ID? = nil,

Show all declarations

## Parameters

`itemType`

A type of the dragged items.

`itemID`

A closure that provides an item’s identifier.

`namespace`

A namespace that identifies the drag container.

`payload`

A closure which is called when a drag operation begins. As an argument, the closure receives either the identifiers of all the selected items, if the dragged item is a part of selection or only the identifier of the dragged item, if it is not part of the selection. Using the passed identifiers, put together the payload to drag, and return from the closure. Return an empty `Collection` to disable the drag.

## Return Value

A view that can be activated as the source of a drag and drop operation, beginning with user gesture input.

## Discussion

In an example below, an app presents a view with `Fruit` values. `Fruit` does not conform to `Identifiable` but uses its name as its identifier.

@State private var fruits: [Fruit]
@State private var selection: [String]

var body: some View {
VStack {
ForEach(fruits) { fruit in
FruitView(fruit)
.draggable(containerItemID: fruit.name)
}
}
.dragContainer(itemID: \Fruit.name) { ids in
fruits(with: ids)
}
}

struct Fruit: Transferable {
var name: String
...
}

---

# https://developer.apple.com/documentation/swiftui/accessibility-fundamentals

Collection

- SwiftUI
- Accessibility fundamentals

API Collection

# Accessibility fundamentals

Make your SwiftUI apps accessible to everyone, including people with disabilities.

## Overview

Like all Apple UI frameworks, SwiftUI comes with built-in accessibility support. The framework introspects common elements like navigation views, lists, text fields, sliders, buttons, and so on, and provides basic accessibility labels and values by default. You don’t have to do any extra work to enable these standard accessibility features.

SwiftUI also provides tools to help you enhance the accessibility of your app. To find out what enhancements you need, try using your app with accessibility features like VoiceOver, Voice Control, and Switch Control, or get feedback from users of your app that regularly use these features. Then use the accessibility view modifiers that SwiftUI provides to improve the experience. For example, you can explicitly add accessibility labels to elements in your UI using the `accessibilityLabel(_:)` or the `accessibilityValue(_:)` view modifier.

Customize your use of accessibility modifiers for all the platforms that your app runs on. For example, you may need to adjust the accessibility elements for a companion Apple Watch app that shares a common code base with an iOS app. If you integrate AppKit or UIKit controls in SwiftUI, expose any accessibility labels and make them accessible from your `NSViewRepresentable` or `UIViewRepresentable` views, or provide custom accessibility information if the underlying accessibility labels aren’t available.

For design guidance, see Accessibility in the Human Interface Guidelines.

## Topics

### Essentials

Creating accessible views

Make your app accessible to everyone by applying accessibility modifiers to your SwiftUI views.

### Creating accessible elements

Creates a new accessibility element, or modifies the `AccessibilityChildBehavior` of the existing accessibility element.

Replaces the existing accessibility element’s children with one or more new synthetic accessibility elements.

Replaces one or more accessibility elements for this view with new accessibility elements.

`struct AccessibilityChildBehavior`

Defines the behavior for the child elements of the new parent element.

### Identifying elements

Uses the string you specify to identify the view.

### Hiding elements

Specifies whether to hide this view from system accessibility features.

### Supporting types

`struct AccessibilityTechnologies`

Accessibility technologies available to the system.

`struct AccessibilityAttachmentModifier`

A view modifier that adds accessibility properties to the view

## See Also

### Accessibility

Enhance the legibility of content in your app’s interface.

Improve access to actions that your app can undertake.

Describe interface elements to help people understand what they represent.

Enable users to navigate to specific user interface elements using rotors.

---

# https://developer.apple.com/documentation/swiftui/accessible-appearance

Collection

- SwiftUI
- Accessible appearance

API Collection

# Accessible appearance

Enhance the legibility of content in your app’s interface.

## Overview

Make content easier for people to see by making it larger, giving it greater contrast, or reducing the amount of distracting motion.

For design guidance, see Accessibility in the Accessibility section of the Human Interface Guidelines.

## Topics

### Managing color

Sets whether this view should ignore the system Smart Invert setting.

`var accessibilityInvertColors: Bool`

Whether the system preference for Invert Colors is enabled.

`var accessibilityDifferentiateWithoutColor: Bool`

Whether the system preference for Differentiate without Color is enabled.

### Enlarging content

Adds a default large content view to be shown by the large content viewer.

Adds a custom large content view to be shown by the large content viewer.

`var accessibilityLargeContentViewerEnabled: Bool`

Whether the Large Content Viewer is enabled.

### Improving legibility

`var accessibilityShowButtonShapes: Bool`

Whether the system preference for Show Button Shapes is enabled.

Deprecated

`var accessibilityReduceTransparency: Bool`

Whether the system preference for Reduce Transparency is enabled.

`var legibilityWeight: LegibilityWeight?`

The font weight to apply to text.

`enum LegibilityWeight`

The Accessibility Bold Text user setting options.

### Minimizing motion

`var accessibilityDimFlashingLights: Bool`

Whether the setting to reduce flashing or strobing lights in video content is on. This setting can also be used to determine if UI in playback controls should be shown to indicate upcoming content that includes flashing or strobing lights.

`var accessibilityPlayAnimatedImages: Bool`

Whether the setting for playing animations in an animated image is on. When this value is false, any presented image that contains animation should not play automatically.

`var accessibilityReduceMotion: Bool`

Whether the system preference for Reduce Motion is enabled.

### Using assistive access

`var accessibilityAssistiveAccessEnabled: Bool`

A Boolean value that indicates whether Assistive Access is in use.

`struct AssistiveAccess`

A scene that presents an interface appropriate for Assistive Access on iOS and iPadOS. On other platforms, this scene is unused.

## See Also

### Accessibility

Make your SwiftUI apps accessible to everyone, including people with disabilities.

Improve access to actions that your app can undertake.

Describe interface elements to help people understand what they represent.

Enable users to navigate to specific user interface elements using rotors.

---

# https://developer.apple.com/documentation/swiftui/accessible-controls

Collection

- SwiftUI
- Accessible controls

API Collection

# Accessible controls

Improve access to actions that your app can undertake.

## Overview

Help people using assistive technologies to gain access to controls in your app.

For design guidance, see Accessibility in the Accessibility section of the Human Interface Guidelines.

## Topics

### Adding actions to views

Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.

Adds multiple accessibility actions to the view.

`func accessibilityAction(named:_:)`

Adds an accessibility action labeled by the contents of `label` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.

Adds an accessibility action representing `actionKind` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.

`func accessibilityAction(named:intent:)`

Adds an accessibility action labeled `name` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.

Adds an accessibility adjustable action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.

Adds an accessibility scroll action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.

Adds multiple accessibility actions to the view with a specific category. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action and are grouped by their category. When multiple action modifiers with an equal category are applied to the view, the actions are combined together.

`struct AccessibilityActionKind`

The structure that defines the kinds of available accessibility actions.

`enum AccessibilityAdjustmentDirection`

A directional indicator you use when making an accessibility adjustment.

`struct AccessibilityActionCategory`

Designates an accessibility action category that is provided and named by the system.

### Offering Quick Actions to people

Adds a quick action to be shown by the system when active.

`protocol AccessibilityQuickActionStyle`

A type that describes the presentation style of an accessibility quick action.

### Making gestures accessible

`func accessibilityActivationPoint(_:)`

The activation point for an element is the location assistive technologies use to initiate gestures.

`func accessibilityActivationPoint(_:isEnabled:)`

`func accessibilityDragPoint(_:description:)`

The point an assistive technology should use to begin a drag interaction.

`func accessibilityDragPoint(_:description:isEnabled:)`

`func accessibilityDropPoint(_:description:)`

The point an assistive technology should use to end a drag interaction.

`func accessibilityDropPoint(_:description:isEnabled:)`

Explicitly set whether this accessibility element is a direct touch area. Direct touch areas passthrough touch events to the app rather than being handled through an assistive technology, such as VoiceOver. The modifier accepts an optional `AccessibilityDirectTouchOptions` option set to customize the functionality of the direct touch area.

Adds an accessibility zoom action to the view. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action.

`struct AccessibilityDirectTouchOptions`

An option set that defines the functionality of a view’s direct touch area.

`struct AccessibilityZoomGestureAction`

Position and direction information of a zoom gesture that someone performs with an assistive technology like VoiceOver.

### Controlling focus

Modifies this view by binding its accessibility element’s focus state to the given boolean state value.

Modifies this view by binding its accessibility element’s focus state to the given state value.

`struct AccessibilityFocusState`

A property wrapper type that can read and write a value that SwiftUI updates as the focus of any active accessibility technology, such as VoiceOver, changes.

### Managing interactivity

Explicitly set whether this Accessibility element responds to user interaction and would thus be interacted with by technologies such as Switch Control, Voice Control or Full Keyboard Access.

## See Also

### Accessibility

Make your SwiftUI apps accessible to everyone, including people with disabilities.

Enhance the legibility of content in your app’s interface.

Describe interface elements to help people understand what they represent.

Enable users to navigate to specific user interface elements using rotors.

---

# https://developer.apple.com/documentation/swiftui/accessible-descriptions

Collection

- SwiftUI
- Accessible descriptions

API Collection

# Accessible descriptions

Describe interface elements to help people understand what they represent.

## Overview

SwiftUI can often infer some information about your user interface elements, but you can use accessibility modifiers to provide even more information for users that need it.

For design guidance, see Accessibility in the Accessibility section of the Human Interface Guidelines.

## Topics

### Applying labels

`func accessibilityLabel(_:)`

Adds a label to the view that describes its contents.

`func accessibilityLabel(_:isEnabled:)`

`func accessibilityInputLabels(_:)`

Sets alternate input labels with which users identify a view.

`func accessibilityInputLabels(_:isEnabled:)`

Pairs an accessibility element representing a label with the element for the matching content.

`enum AccessibilityLabeledPairRole`

The role of an accessibility element in a label / content pair.

### Describing values

`func accessibilityValue(_:)`

Adds a textual description of the value that the view contains.

`func accessibilityValue(_:isEnabled:)`

### Describing content

Sets an accessibility text content type.

Sets the accessibility level of this heading.

`enum AccessibilityHeadingLevel`

The hierarchy of a heading in relation to other headings.

`struct AccessibilityTextContentType`

Textual context that assistive technologies can use to improve the presentation of spoken text.

### Describing charts

Adds a descriptor to a View that represents a chart to make the chart’s contents accessible to all users.

`protocol AXChartDescriptorRepresentable`

A type to generate an `AXChartDescriptor` object that you use to provide information about a chart and its data for an accessible experience in VoiceOver or other assistive technologies.

### Adding custom descriptions

`func accessibilityCustomContent(_:_:importance:)`

Add additional accessibility information to the view.

`struct AccessibilityCustomContentKey`

Key used to specify the identifier and label associated with an entry of additional accessibility information.

### Assigning traits to content

Adds the given traits to the view.

Removes the given traits from this view.

`struct AccessibilityTraits`

A set of accessibility traits that describe how an element behaves.

### Offering hints

`func accessibilityHint(_:)`

Communicates to the user what happens after performing the view’s action.

`func accessibilityHint(_:isEnabled:)`

### Configuring VoiceOver

Raises or lowers the pitch of spoken text.

Sets whether VoiceOver should always speak all punctuation in the text view.

Controls whether to queue pending announcements behind existing speech rather than interrupting speech in progress.

Sets whether VoiceOver should speak the contents of the text view character by character.

## See Also

### Accessibility

Make your SwiftUI apps accessible to everyone, including people with disabilities.

Enhance the legibility of content in your app’s interface.

Improve access to actions that your app can undertake.

Enable users to navigate to specific user interface elements using rotors.

---

# https://developer.apple.com/documentation/swiftui/accessible-navigation

Collection

- SwiftUI
- Accessible navigation

API Collection

# Accessible navigation

Enable users to navigate to specific user interface elements using rotors.

## Overview

An accessibility rotor is a shortcut that enables users to quickly navigate to specific elements of the user interface, and, optionally, to specific ranges of text within those elements.

The system automatically provides rotors for many navigable elements, but you can supply additional rotors for specific purposes, or replace system rotors when they don’t automatically pick up off-screen elements, like those far down in a `LazyVStack` or a `List`.

For design guidance, see Accessibility in the Accessibility section of the Human Interface Guidelines.

## Topics

### Working with rotors

`func accessibilityRotor(_:entries:)`

Create an Accessibility Rotor with the specified user-visible label, and entries generated from the content closure.

`func accessibilityRotor(_:entries:entryID:entryLabel:)`

Create an Accessibility Rotor with the specified user-visible label and entries.

`func accessibilityRotor(_:entries:entryLabel:)`

`func accessibilityRotor(_:textRanges:)`

Create an Accessibility Rotor with the specified user-visible label and entries for each of the specified ranges. The Rotor will be attached to the current Accessibility element, and each entry will go the specified range of that element.

### Creating rotors

`protocol AccessibilityRotorContent`

Content within an accessibility rotor.

`struct AccessibilityRotorContentBuilder`

Result builder you use to generate rotor entry content.

`struct AccessibilityRotorEntry`

A struct representing an entry in an Accessibility Rotor.

### Replacing system rotors

`struct AccessibilitySystemRotor`

Designates a Rotor that replaces one of the automatic, system-provided Rotors with a developer-provided Rotor.

### Configuring rotors

Defines an explicit identifier tying an Accessibility element for this view to an entry in an Accessibility Rotor.

Links multiple accessibility elements so that the user can quickly navigate from one element to another, even when the elements are not near each other in the accessibility hierarchy.

Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.

## See Also

### Accessibility

Make your SwiftUI apps accessible to everyone, including people with disabilities.

Enhance the legibility of content in your app’s interface.

Improve access to actions that your app can undertake.

Describe interface elements to help people understand what they represent.

---

