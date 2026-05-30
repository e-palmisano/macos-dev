# SwiftUI Controls, Text & Images

> Controls and indicators, text input/output, images, and detailed per-control pages (Button, Toggle, Slider, Stepper, Picker, TextField, TextEditor) including the Liquid Glass button styles. Cross-framework: shows SwiftUI alongside AppKit equivalents.

---

# https://developer.apple.com/documentation/swiftui/controls-and-indicators

Collection

- SwiftUI
- Controls and indicators

API Collection

# Controls and indicators

Display values and get user selections.

## Overview

SwiftUI provides controls that enable user interaction specific to each platform and context. For example, people can initiate events with buttons and links, or choose among a set of discrete values with different kinds of pickers. You can also display information to the user with indicators like progress views and gauges.

Use these built-in controls and indicators when composing custom views, and style them to match the needs of your app’s user interface. For design guidance, see Menus and actions, Selection and input, and Status in the Human Interface Guidelines.

## Topics

### Creating buttons

`struct Button`

A control that initiates an action.

`func buttonStyle(_:)`

Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.

Sets the border shape for buttons in this view.

Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.

`var buttonRepeatBehavior: ButtonRepeatBehavior`

Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.

`struct ButtonBorderShape`

A shape used to draw a button’s border.

`struct ButtonRole`

A value that describes the purpose of a button.

`struct ButtonRepeatBehavior`

The options for controlling the repeatability of button actions.

`struct ButtonSizing`

The sizing behavior of `Button`s and other button-like controls.

### Creating special-purpose buttons

`struct EditButton`

A button that toggles the edit mode environment value.

`struct PasteButton`

A system button that reads items from the pasteboard and delivers it to a closure.

`struct RenameButton`

A button that triggers a standard rename action.

### Linking to other content

`struct Link`

A control for navigating to a URL.

`struct ShareLink`

A view that controls a sharing presentation.

`struct SharePreview`

A representation of a type to display in a share preview.

`struct TextFieldLink`

A control that requests text input from the user when pressed.

`struct HelpLink`

A button with a standard appearance that opens app-specific help documentation.

### Getting numeric inputs

`struct Slider`

A control for selecting a value from a bounded linear range of values.

`struct Stepper`

A control that performs increment and decrement actions.

`struct Toggle`

A control that toggles between on and off states.

Sets the style for toggles in a view hierarchy.

### Choosing from a set of options

`struct Picker`

A control for selecting from a set of mutually exclusive values.

Sets the style for pickers within this view.

Sets the style for radio group style pickers within this view to be horizontally positioned with the radio buttons inside the layout.

Sets the default wheel-style picker item height.

`var defaultWheelPickerItemHeight: CGFloat`

The default height of an item in a wheel-style picker, such as a date picker.

Specifies the selection effect to apply to a palette item.

`struct PaletteSelectionEffect`

The selection effect to apply to a palette item.

### Choosing dates

`struct DatePicker`

A control for selecting an absolute date.

Sets the style for date pickers within this view.

`struct MultiDatePicker`

A control for picking multiple dates.

`var calendar: Calendar`

The current calendar that views should use when handling dates.

`var timeZone: TimeZone`

The current time zone that views should use when handling dates.

### Choosing a color

`struct ColorPicker`

A control used to select a color from the system color picker UI.

### Indicating a value

`struct Gauge`

A view that shows a value within a range.

Sets the style for gauges within this view.

`struct ProgressView`

A view that shows the progress toward completion of a task.

Sets the style for progress views in this view.

`struct DefaultDateProgressLabel`

The default type of the current value label when used by a date-relative progress view.

`struct DefaultButtonLabel`

The default label to use for a button.

### Indicating missing content

`struct ContentUnavailableView`

An interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.

### Providing haptic feedback

Plays the specified `feedback` when the provided `trigger` value changes.

`func sensoryFeedback(trigger:_:)`

Plays feedback when returned from the `feedback` closure after the provided `trigger` value changes.

Plays the specified `feedback` when the provided `trigger` value changes and the `condition` closure returns `true`.

`struct SensoryFeedback`

Represents a type of haptic and/or audio feedback that can be played.

### Sizing controls

`func controlSize(_:)`

Sets the size for controls within this view.

`var controlSize: ControlSize`

The size to apply to controls within a view.

`enum ControlSize`

The size classes, like regular or small, that you can apply to controls within a view.

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/swiftui/text-input-and-output

Collection

- SwiftUI
- Text input and output

API Collection

# Text input and output

Display formatted text and get text input from the user.

## Overview

To display read-only text, or read-only text paired with an image, use the built-in `Text` or `Label` views, respectively. When you need to collect text input from the user, use an appropriate text input view, like `TextField` or `TextEditor`.

You add view modifiers to control the text’s font, selectability, alignment, layout direction, and so on. These modifiers also affect other views that display text, like the labels on controls, even if you don’t define an explicit `Text` view.

For design guidance, see Typography in the Human Interface Guidelines.

## Topics

### Displaying text

`struct Text`

A view that displays one or more lines of read-only text.

`struct Label`

A standard label for user interface items, consisting of an icon with a title.

Sets the style for labels within this view.

### Getting text input

Building rich SwiftUI text experiences

Build an editor for formatted text using SwiftUI text editor views and attributed strings.

`struct TextField`

A control that displays an editable text interface.

Sets the style for text fields within this view.

`struct SecureField`

A control into which people securely enter private text.

`struct TextEditor`

A view that can display and edit long-form text.

### Selecting text

Controls whether people can select text within this view.

`protocol TextSelectability`

A type that describes the ability to select text.

`struct TextSelection`

Represents a selection of text.

Sets the direction of a selection or cursor relative to a text character.

`var textSelectionAffinity: TextSelectionAffinity`

A representation of the direction or association of a selection or cursor relative to a text character. This concept becomes much more prominent when dealing with bidirectional text (text that contains both LTR and RTL scripts, like English and Arabic combined).

`enum TextSelectionAffinity`

`struct AttributedTextSelection`

Represents a selection of attributed text.

### Setting a font

Applying custom fonts to text

Add and use a font in your app that scales with Dynamic Type.

Sets the default font for text in this view.

Sets the font design of the text in this view.

Sets the font weight of the text in this view.

Sets the font width of the text in this view.

`var font: Font?`

The default font of this environment.

`struct Font`

An environment-dependent font.

### Adjusting text size

Applies a text scale to text in the view.

`func dynamicTypeSize(_:)`

Sets the Dynamic Type size within the view to the given value.

`var dynamicTypeSize: DynamicTypeSize`

The current Dynamic Type size.

`enum DynamicTypeSize`

A Dynamic Type size, which specifies how large scalable content should be.

`struct ScaledMetric`

A dynamic property that scales a numeric value.

`protocol TextVariantPreference`

A protocol for controlling the size variant of text views.

`struct FixedTextVariant`

The default text variant preference that chooses the largest available variant.

`struct SizeDependentTextVariant`

The size dependent variant preference allows the text to take the available space into account when choosing the variant to display.

### Controlling text style

Applies a bold font weight to the text in this view.

Applies italics to the text in this view.

Applies an underline to the text in this view.

Applies a strikethrough to the text in this view.

Sets a transform for the case of the text contained in this view when displayed.

`var textCase: Text.Case?`

A stylistic override to transform the case of `Text` when displayed, using the environment’s locale.

Modifies the fonts of all child views to use the fixed-width variant of the current font, if possible.

Modifies the fonts of all child views to use fixed-width digits, if possible, while leaving other characters proportionally spaced.

`protocol AttributedTextFormattingDefinition`

A protocol for defining how text can be styled in a view.

`protocol AttributedTextValueConstraint`

A protocol for defining a constraint on the value of a certain attribute.

`enum AttributedTextFormatting`

A namespace for types related to attributed text formatting definitions.

### Managing text layout

Sets the truncation mode for lines of text that are too long to fit in the available space.

`var truncationMode: Text.TruncationMode`

A value that indicates how the layout truncates the last line of text to fit into the available space.

Sets whether text in this view can compress the space between characters when necessary to fit text in a line.

`var allowsTightening: Bool`

A Boolean value that indicates whether inter-character spacing should tighten to fit the text into the available space.

Sets the minimum amount that text in this view scales down to fit in the available space.

`var minimumScaleFactor: CGFloat`

The minimum permissible proportion to shrink the font size to fit the text into the available space.

Sets the vertical offset for the text relative to its baseline in this view.

Sets the spacing, or kerning, between characters for the text in this view.

Sets the tracking for the text in this view.

Sets whether this view mirrors its contents horizontally when the layout direction is right-to-left.

`enum TextAlignment`

An alignment position for text along the horizontal axis.

### Rendering text

Creating visual effects with SwiftUI

Add scroll effects, rich color treatments, custom transitions, and advanced effects using shaders and a text renderer.

`protocol TextAttribute`

A value that you can attach to text views and that text renderers can query.

Returns a new view such that any text views within it will use `renderer` to draw themselves.

`protocol TextRenderer`

A value that can replace the default text view rendering behavior.

`struct TextProxy`

A proxy for a text view that custom text renderers use.

### Limiting line count for multiline text

`func lineLimit(_:)`

Sets to a closed range the number of lines that text can occupy in this view.

Sets a limit for the number of lines text can occupy in this view.

`var lineLimit: Int?`

The maximum number of lines that text can occupy in a view.

### Formatting multiline text

Sets the amount of space between lines of text in this view.

`var lineSpacing: CGFloat`

The distance in points between the bottom of one line fragment and the top of the next.

Sets the alignment of a text view that contains multiple lines of text.

`var multilineTextAlignment: TextAlignment`

An environment value that indicates how a text view aligns its lines when the content wraps or contains newlines.

### Formatting date and time

`enum SystemFormatStyle`

A namespace for format styles that implement designs used across Apple’s platformes.

`struct TimeDataSource`

A source of time related data.

### Managing text entry

Sets whether to disable autocorrection for this view.

`var autocorrectionDisabled: Bool`

A Boolean value that determines whether the view hierarchy has auto-correction enabled.

Sets the keyboard type for this view.

Configures the behavior in which scrollable content interacts with the software keyboard.

`func textContentType(_:)`

Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.

Sets how often the shift key in the keyboard is automatically enabled.

`struct TextInputAutocapitalization`

The kind of autocapitalization behavior applied during text input.

Associates a fully formed string with the value of this view when used as a text input suggestion

Configures the text input suggestions for this view.

Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.

Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on an iOS or tvOS device.

`struct TextInputFormattingControlPlacement`

A structure defining the system text formatting controls available on each platform.

### Dictating text

Configures the dictation behavior for any search fields configured by the searchable modifier.

`struct TextInputDictationActivation`

`struct TextInputDictationBehavior`

### Configuring the Writing Tools behavior

Specifies the Writing Tools behavior for text and text input in the environment.

`struct WritingToolsBehavior`

The Writing Tools editing experience for text and text input.

### Specifying text equivalents

`func typeSelectEquivalent(_:)`

Sets an explicit type select equivalent text in a collection, such as a list or table.

### Localizing text

Preparing views for localization

Specify hints and add strings to localize your SwiftUI views.

`struct LocalizedStringKey`

The key used to look up an entry in a strings file or strings dictionary file.

`var locale: Locale`

The current locale that views should use.

`func typesettingLanguage(_:isEnabled:)`

Specifies the language for typesetting.

`struct TypesettingLanguage`

Defines how typesetting language is determined for text.

### Deprecated types

`enum ContentSizeCategory`

The sizes that you can specify for content.

Deprecated

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/swiftui/images

Collection

- SwiftUI
- Images

API Collection

# Images

Add images and symbols to your app’s user interface.

## Overview

Display images, including SF Symbols, images that you store in an asset catalog, and images that you store on disk, using an `Image` view.

For images that take time to retrieve — for example, when you load an image from a network endpoint — load the image asynchronously using `AsyncImage`. You can instruct that view to display a placeholder during the load operation.

For design guidance, see Images in the Human Interface Guidelines.

## Topics

### Creating an image

`struct Image`

A view that displays an image.

### Configuring an image

Fitting images into available space

Adjust the size and shape of images in your app’s user interface by applying view modifiers.

Scales images within the view according to one of the relative sizes available including small, medium, and large images sizes.

`var imageScale: Image.Scale`

The image scale for this environment.

`enum Scale`

A scale to apply to vector images relative to text.

`enum Orientation`

The orientation of an image.

`enum ResizingMode`

The modes that SwiftUI uses to resize an image to fit within its containing view.

### Loading images asynchronously

`struct AsyncImage`

A view that asynchronously loads and displays an image.

`enum AsyncImagePhase`

The current phase of the asynchronous image loading operation.

### Setting a symbol variant

Makes symbols within the view show a particular variant.

`var symbolVariants: SymbolVariants`

The symbol variant to use in this environment.

`struct SymbolVariants`

A variant of a symbol.

### Managing symbol effects

Returns a new view with a symbol effect added to it.

Returns a new view with its inherited symbol image effects either removed or left unchanged.

`struct SymbolEffectTransition`

Creates a transition that applies the Appear, Disappear, DrawOn or DrawOff symbol animation to symbol images within the inserted or removed view hierarchy.

### Setting symbol rendering modes

Sets the rendering mode for symbol images within this view.

`var symbolRenderingMode: SymbolRenderingMode?`

The current symbol rendering mode, or `nil` denoting that the mode is picked automatically using the current image and foreground style as parameters.

`struct SymbolRenderingMode`

A symbol rendering mode.

`struct SymbolColorRenderingMode`

A method of filling a layer in a symbol image.

`struct SymbolVariableValueMode`

A method of rendering the variable value of a symbol image.

### Rendering images from views

`class ImageRenderer`

An object that creates images from SwiftUI views.

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/swiftui/menus-and-commands

Collection

- SwiftUI
- Menus and commands

API Collection

# Menus and commands

Provide space-efficient, context-dependent access to commands and controls.

## Overview

Use a menu to provide people with easy access to common commands. You can add items to a macOS or iPadOS app’s menu bar using the `commands(content:)` scene modifier, or create context menus that people reveal near their current task using the `contextMenu(menuItems:)` view modifier.

Create submenus by nesting `Menu` instances inside others. Use a `Divider` view to create a separator between menu elements.

For design guidance, see Menus in the Human Interface Guidelines.

## Topics

### Building a menu bar

Building and customizing the menu bar with SwiftUI

Provide a seamless, cross-platform user experience by building a native menu bar for iPadOS and macOS.

### Creating a menu

Populating SwiftUI menus with adaptive controls

Improve your app by populating menus with controls and organizing your content intuitively.

`struct Menu`

A control for presenting a menu of actions.

Sets the style for menus within this view.

### Creating context menus

Adds a context menu to a view.

Adds a context menu with a custom preview to a view.

Adds an item-based context menu to a view.

### Defining commands

Adds commands to the scene.

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

### Getting built-in command groups

`struct SidebarCommands`

A built-in set of commands for manipulating window sidebars.

`struct TextEditingCommands`

A built-in group of commands for searching, editing, and transforming selections of text.

`struct TextFormattingCommands`

A built-in set of commands for transforming the styles applied to selections of text.

`struct ToolbarCommands`

A built-in set of commands for manipulating window toolbars.

`struct ImportFromDevicesCommands`

A built-in set of commands that enables importing content from nearby devices.

`struct InspectorCommands`

A built-in set of commands for manipulating inspectors.

`struct EmptyCommands`

An empty group of commands.

### Showing a menu indicator

Sets the menu indicator visibility for controls within this view.

`var menuIndicatorVisibility: Visibility`

The menu indicator visibility to apply to controls within a view.

### Configuring menu dismissal

Tells a menu whether to dismiss after performing an action.

`struct MenuActionDismissBehavior`

The set of menu dismissal behavior options.

### Setting a preferred order

Sets the preferred order of items for menus presented from this view.

`var menuOrder: MenuOrder`

The preferred order of items for menus presented from this view.

`struct MenuOrder`

The order in which a menu presents its content.

### Deprecated types

`struct MenuButton`

A button that displays a menu containing a list of choices when pressed.

Deprecated

`typealias PullDownButton` Deprecated

`struct ContextMenu`

A container for views that you present as menu items in a context menu.

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/SwiftUI/Button

- SwiftUI
- Button

Structure

# Button

A control that initiates an action.

## Mentioned in

Building and customizing the menu bar with SwiftUI

Configuring views

Managing search interface activation

Populating SwiftUI menus with adaptive controls

## Overview

You create a button by providing an action and a label. The action is either a method or closure property that does something when a user clicks or taps the button. The label is a view that describes the button’s action — for example, by showing text, an icon, or both.

The label of a button can be any kind of view, such as a `Text` view for text-only labels:

Button(action: signIn) {
Text("Sign In")
}

Or a `Label` view, for buttons with both a title and an icon:

Button(action: signIn) {
Label("Sign In", systemImage: "arrow.up")
}

For those common cases, you can also use the convenience initializers that take a title string or `LocalizedStringKey` as their first parameter, and optionally a system image name or `ImageResource` as their second parameter, instead of a trailing closure:

Button("Sign In", systemImage: "arrow.up", action: signIn)

Prefer to use these convenience initializers, or a `Label` view, when providing both a title and an icon. This allows the button to dynamically adapt its appearance to render its title and icon correctly in containers such as toolbars and menus. For example, on iOS, buttons only display their icons by default when placed in toolbars, but show both a leading title and trailing icon in menus. Defining labels this way also helps with accessibility — for example, applying the `labelStyle(_:)` modifier with an `iconOnly` style to the button will cause it to only visually display its icon, but still use its title to describe the button in accessibility modes like VoiceOver:

Button("Sign In", systemImage: "arrow.up", action: signIn)
.labelStyle(.iconOnly)

Avoid labels that only use images or exclusively visual components without an accessibility label.

How the user activates the button varies by platform:

- In iOS and watchOS, the user taps the button.

- In macOS, the user clicks the button.

- In tvOS, the user presses “select” on an external remote, like the Siri Remote, while focusing on the button.

The appearance of the button depends on factors like where you place it, whether you assign it a role, and how you style it.

### Adding buttons to containers

Use buttons for any user interface element that initiates an action. Buttons automatically adapt their visual style to match the expected style within these different containers and contexts. For example, to create a `List` cell that initiates an action when selected by the user, add a button to the list’s content:

List {
// Cells that show all the current folders.
ForEach(folders) { folder in
Text(folder.title)
}

// A cell that, when selected, adds a new folder.
Button(action: addItem) {
Label("Add Folder", systemImage: "folder.badge.plus")
}
}

Similarly, to create a context menu item that initiates an action, add a button to the `contextMenu(_:)` modifier’s content closure:

.contextMenu {
Button("Cut", action: cut)
Button("Copy", action: copy)
Button("Paste", action: paste)
}

This pattern extends to most other container views in SwiftUI that have customizable, interactive content, like `Form` instances.

### Assigning a role

You can optionally initialize a button with a `ButtonRole` that characterizes the button’s purpose. For example, you can create a `destructive` button for a deletion action:

Button("Delete", role: .destructive, action: delete)

The system uses the button’s role to style the button appropriately in every context. For example, a destructive button in a contextual menu appears with a red foreground color:

If you don’t specify a role for a button, the system applies an appropriate default appearance.

### Styling buttons

You can customize a button’s appearance using one of the standard button styles, like `bordered`, and apply the style with the `buttonStyle(_:)` modifier:

HStack {
Button("Sign In", action: signIn)
Button("Register", action: register)
}
.buttonStyle(.bordered)

If you apply the style to a container view, as in the example above, all the buttons in the container use the style:

You can also create custom styles. To add a custom appearance with standard interaction behavior, create a style that conforms to the `ButtonStyle` protocol. To customize both appearance and interaction behavior, create a style that conforms to the `PrimitiveButtonStyle` protocol. Custom styles can also read the button’s role and use it to adjust the button’s appearance.

## Topics

### Creating a button

Creates a button that displays a custom label.

`init(_:action:)`

Creates a button that generates its label from a localized string key.

`init(_:image:action:)`

Creates a button that generates its label from a localized string key and image resource.

`init(_:systemImage:action:)`

Creates a button that generates its label from a localized string key and system image name.

### Creating a button with a role

Creates a button with a specified role that displays a custom label.

`init(_:role:action:)`

Creates a button with a specified role that generates its label from a localized string key.

`init(_:image:role:action:)`

Creates a button with a specified role that generates its label from a localized string key and an image resource.

`init(_:systemImage:role:action:)`

Creates a button with a specified role that generates its label from a localized string key and a system image.

### Creating a button from a configuration

`init(PrimitiveButtonStyleConfiguration)`

Creates a button based on a configuration for a style with a custom appearance and custom interaction behavior.

### Creating a button to perform an App Intent

`init(_:intent:)`

Creates a button that performs an `AppIntent` and generates its label from a localized string key.

Creates a button that performs an `AppIntent`.

`init(_:role:intent:)`

Creates a button with a specified role that performs an `AppIntent` and generates its label from a string.

Creates a button with a specified role that performs an `AppIntent`.

`init(_:image:role:intent:)`

Creates a button with a specified role that generates its label from a string and an image resource.

`init(_:systemImage:role:intent:)`

Creates a button with a specified role that generates its label from a string and a system image.

### Initializers

Creates a button that displays a default label.

## Relationships

### Conforms To

- `View`

## See Also

### Creating buttons

`func buttonStyle(_:)`

Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.

Sets the border shape for buttons in this view.

Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.

`var buttonRepeatBehavior: ButtonRepeatBehavior`

Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.

`struct ButtonBorderShape`

A shape used to draw a button’s border.

`struct ButtonRole`

A value that describes the purpose of a button.

`struct ButtonRepeatBehavior`

The options for controlling the repeatability of button actions.

`struct ButtonSizing`

The sizing behavior of `Button`s and other button-like controls.

---

# https://developer.apple.com/documentation/SwiftUI/Toggle

- SwiftUI
- Toggle

Structure

# Toggle

A control that toggles between on and off states.

## Mentioned in

Building and customizing the menu bar with SwiftUI

Declaring a custom view

Laying out a simple view

Populating SwiftUI menus with adaptive controls

## Overview

You create a toggle by providing an `isOn` binding and a label. Bind `isOn` to a Boolean property that determines whether the toggle is on or off. Set the label to a view that visually describes the purpose of switching between toggle states. For example:

@State private var vibrateOnRing = false

var body: some View {
Toggle(isOn: $vibrateOnRing) {
Text("Vibrate on Ring")
}
}

For the common case of `Label` based labels, you can use the convenience initializer that takes a title string (or localized string key) and the name of a system image:

@State private var vibrateOnRing = true

var body: some View {
Toggle(
"Vibrate on Ring",
systemImage: "dot.radiowaves.left.and.right",
isOn: $vibrateOnRing
)
}

For text-only labels, you can use the convenience initializer that takes a title string (or localized string key) as its first parameter, instead of a trailing closure:

var body: some View {
Toggle("Vibrate on Ring", isOn: $vibrateOnRing)
}

For cases where adding a subtitle to the label is desired, use a view builder that creates multiple `Text` views where the first text represents the title and the second text represents the subtitle:

var body: some View {
Toggle(isOn: $vibrateOnRing) {
Text("Vibrate on Ring")
Text("Enable vibration when the phone rings")
}
}

### Styling toggles

Toggles use a default style that varies based on both the platform and the context. For more information, read about the `automatic` toggle style.

You can customize the appearance and interaction of toggles by applying styles using the `toggleStyle(_:)` modifier. You can apply built-in styles, like `switch`, to either a toggle, or to a view hierarchy that contains toggles:

VStack {
Toggle("Vibrate on Ring", isOn: $vibrateOnRing)
Toggle("Vibrate on Silent", isOn: $vibrateOnSilent)
}
.toggleStyle(.switch)

You can also define custom styles by creating a type that conforms to the `ToggleStyle` protocol.

## Topics

### Creating a toggle

`init(_:isOn:)`

Creates a toggle that generates its label from a localized string key.

Creates a toggle that displays a custom label.

`init(_:image:isOn:)`

Creates a toggle that generates its label from a localized string key and image resource.

`init(_:systemImage:isOn:)`

Creates a toggle that generates its label from a localized string key and system image.

### Creating a toggle for a collection

`init(_:sources:isOn:)`

Creates a toggle representing a collection of values that generates its label from a localized string key.

`init<C>(sources: C, isOn: KeyPath<C.Element, Binding<Bool>>, label: () -> Label)`

Creates a toggle representing a collection of values with a custom label.

`init(_:image:sources:isOn:)`

Creates a toggle representing a collection of values that generates its label from a localized string key and image resource.

`init(_:systemImage:sources:isOn:)`

Creates a toggle representing a collection of values that generates its label from a localized string key and system image.

### Creating a toggle from a configuration

`init(ToggleStyleConfiguration)`

Creates a toggle based on a toggle style configuration.

### Creating a toggle for an App Intent

Creates a toggle performing an `AppIntent`.

`init(_:isOn:intent:)`

Creates a toggle performing an `AppIntent` and generates its label from a localized string key.

## Relationships

### Conforms To

- `View`

## See Also

### Getting numeric inputs

`struct Slider`

A control for selecting a value from a bounded linear range of values.

`struct Stepper`

A control that performs increment and decrement actions.

Sets the style for toggles in a view hierarchy.

---

# https://developer.apple.com/documentation/SwiftUI/Slider

- SwiftUI
- Slider

Structure

# Slider

A control for selecting a value from a bounded linear range of values.

## Mentioned in

Populating SwiftUI menus with adaptive controls

## Overview

A slider consists of a “thumb” image that the user moves between two extremes of a linear “track”. The ends of the track represent the minimum and maximum possible values. As the user moves the thumb, the slider updates its bound value.

The following example shows a slider bound to the value `speed`. As the slider updates this value, a bound `Text` view shows the value updating. The `onEditingChanged` closure passed to the slider receives callbacks when the user drags the slider. The example uses this to change the color of the value text.

@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
VStack {
Slider(
value: $speed,
in: 0...100,
onEditingChanged: { editing in
isEditing = editing
}
)
Text("\(speed)")
.foregroundColor(isEditing ? .red : .blue)
}
}

You can also use a `step` parameter to provide incremental steps along the path of the slider. For example, if you have a slider with a range of `0` to `100`, and you set the `step` value to `5`, the slider’s increments would be `0`, `5`, `10`, and so on. The following example shows this approach, and also adds optional minimum and maximum value labels.

var body: some View {
Slider(
value: $speed,
in: 0...100,
step: 5
) {
Text("Speed")
} minimumValueLabel: {
Text("0")
} maximumValueLabel: {
Text("100")
} onEditingChanged: { editing in
isEditing = editing
}
Text("\(speed)")
.foregroundColor(isEditing ? .red : .blue)
}

The slider also uses the `step` to increase or decrease the value when a VoiceOver user adjusts the slider with voice commands.

## Topics

### Creating a slider

Creates a slider to select a value from a given range.

Creates a slider to select a value from a given range, subject to a step increment.

### Creating a slider with labels

Creates a slider to select a value from a given range, which displays the provided label.

Creates a slider to select a value from a given range, subject to a step increment, which displays the provided label.

Creates a slider to select a value from a given range, which displays the provided labels.

Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels.

### Adding ticks to a slider

`struct SliderTick`

A representation of a tick in a slider, with associated value and optional label.

`struct SliderTickBuilder`

A result builder that constructs `SliderTick`s for use when creating a `Slider`.

`struct SliderTickContentForEach`

A type of slider content that creates content by iterating over a collection.

`struct TupleSliderTickContent`

Slider content created from a Swift tuple of slider content.

`protocol SliderTickContent`

A type that provides content for a `SliderTickBuilder`.

### Deprecated initializers

Deprecated

### Initializers

Creates a slider to select a value from a given range, which displays the provided labels and customized ticks.

Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels and customizable ticks.

## Relationships

### Conforms To

- `View`

## See Also

### Getting numeric inputs

`struct Stepper`

A control that performs increment and decrement actions.

`struct Toggle`

A control that toggles between on and off states.

Sets the style for toggles in a view hierarchy.

---

# https://developer.apple.com/documentation/SwiftUI/Stepper

- SwiftUI
- Stepper

Structure

# Stepper

A control that performs increment and decrement actions.

## Overview

Use a stepper control when you want the user to have granular control while incrementing or decrementing a value. For example, you can use a stepper to:

- Change a value up or down by `1`.

- Operate strictly over a prescribed range.

- Step by specific amounts over a stepper’s range of possible values.

The example below uses an array that holds a number of `Color` values, a local state variable, `value`, to set the control’s background color, and title label. When the user clicks or taps the stepper’s increment or decrement buttons, SwiftUI executes the relevant closure that updates `value`, wrapping the `value` to prevent overflow. SwiftUI then re-renders the view, updating the text and background color to match the current index:

struct StepperView: View {
@State private var value = 0
let colors: [Color] = [.orange, .red, .gray, .blue,\
.green, .purple, .pink]

func incrementStep() {
value += 1

}

func decrementStep() {
value -= 1
if value < 0 { value = colors.count - 1 }
}

var body: some View {
Stepper {
Text("Value: \(value) Color: \(colors[value].description)")
} onIncrement: {
incrementStep()
} onDecrement: {
decrementStep()
}
.padding(5)
.background(colors[value])
}
}

The following example shows a stepper that displays the effect of incrementing or decrementing a value with the step size of `step` with the bounds defined by `range`:

struct StepperView: View {
@State private var value = 0
let step = 5
let range = 1...50

var body: some View {
Stepper(
value: $value,
in: range,
step: step
) {
Text("Current: \(value) in \(range.description) " +
"stepping by \(step)")
}
.padding(10)
}
}

## Topics

### Creating a stepper

Creates a stepper configured to increment or decrement a binding to a value using a step value you provide.

Creates a stepper configured to increment or decrement a binding to a value using a step value you provide, displaying its value with an applied format style.

`init(_:value:step:onEditingChanged:)`

Creates a stepper with a title and configured to increment and decrement a binding to a value and step amount you provide.

`init(_:value:step:format:onEditingChanged:)`

Creates a stepper with a title key and configured to increment and decrement a binding to a value and step amount you provide, displaying its value with an applied format style.

### Creating a stepper over a range

Creates a stepper configured to increment or decrement a binding to a value using a step value and within a range of values you provide.

Creates a stepper configured to increment or decrement a binding to a value using a step value and within a range of values you provide, displaying its value with an applied format style.

`init(_:value:in:step:onEditingChanged:)`

Creates a stepper instance that increments and decrements a binding to a value, by a step size and within a closed range that you provide.

`init(_:value:in:step:format:onEditingChanged:)`

Creates a stepper instance that increments and decrements a binding to a value, by a step size and within a closed range that you provide, displaying its value with an applied format style.

### Creating a stepper with change behavior

Creates a stepper instance that performs the closures you provide when the user increments or decrements the stepper.

`init(_:onIncrement:onDecrement:onEditingChanged:)`

Creates a stepper that uses a title key and executes the closures you provide when the user clicks or taps the stepper’s increment and decrement buttons.

### Deprecated initializers

Deprecated

## Relationships

### Conforms To

- `View`

## See Also

### Getting numeric inputs

`struct Slider`

A control for selecting a value from a bounded linear range of values.

`struct Toggle`

A control that toggles between on and off states.

Sets the style for toggles in a view hierarchy.

---

# https://developer.apple.com/documentation/SwiftUI/Picker

- SwiftUI
- Picker

Structure

# Picker

A control for selecting from a set of mutually exclusive values.

## Mentioned in

Picking container views for your content

Performing a search operation

Populating SwiftUI menus with adaptive controls

Scoping a search operation

## Overview

You create a picker by providing a selection binding, a label, and the content for the picker to display. Set the `selection` parameter to a bound property that provides the value to display as the current selection. Set the label to a view that visually describes the purpose of selecting content in the picker, and then provide the content for the picker to display.

For example, consider an enumeration of ice cream flavors and a `State` variable to hold the selected flavor:

enum Flavor: String, CaseIterable, Identifiable {
case chocolate, vanilla, strawberry
var id: Self { self }
}

@State private var selectedFlavor: Flavor = .chocolate

You can create a picker to select among the values by providing a label, a binding to the current selection, and a collection of views for the picker’s content. Append a tag to each of these content views using the `View/tag(_:)` view modifier so that the type of each selection matches the type of the bound state variable:

List {
Picker("Flavor", selection: $selectedFlavor) {
Text("Chocolate").tag(Flavor.chocolate)
Text("Vanilla").tag(Flavor.vanilla)
Text("Strawberry").tag(Flavor.strawberry)
}
}

If you provide a string label for the picker, as the example above does, the picker uses it to initialize a `Text` view as a label. Alternatively, you can use the `init(selection:content:label:)` initializer to compose the label from other views. The exact appearance of the picker depends on the context. If you use a picker in a `List` in iOS, it appears in a row with the label and selected value, and a chevron to indicate that you can tap the row to select a new value:

For cases where adding a subtitle to the label is desired, use a view builder that creates multiple `Text` views where the first text represents the title and the second text represents the subtitle:

List {
Picker(selection: $selectedFlavor) {
Text("Chocolate").tag(Flavor.chocolate)
Text("Vanilla").tag(Flavor.vanilla)
Text("Strawberry").tag(Flavor.strawberry)
} label: {
Text("Flavor")
Text("Choose your favorite flavor")
}
}

### Iterating over a picker’s options

To provide selection values for the `Picker` without explicitly listing each option, you can create the picker with a `ForEach`:

Picker("Flavor", selection: $selectedFlavor) {
ForEach(Flavor.allCases) { flavor in
Text(flavor.rawValue.capitalized)
}
}

`ForEach` automatically assigns a tag to the selection views using each option’s `id`. This is possible because `Flavor` conforms to the `Identifiable` protocol.

The example above relies on the fact that `Flavor` defines the type of its `id` parameter to exactly match the selection type. If that’s not the case, you need to override the tag. For example, consider a `Topping` type and a suggested topping for each flavor:

enum Topping: String, CaseIterable, Identifiable {
case nuts, cookies, blueberries
var id: Self { self }
}

extension Flavor {
var suggestedTopping: Topping {
switch self {
case .chocolate: return .nuts
case .vanilla: return .cookies
case .strawberry: return .blueberries
}
}
}

@State private var suggestedTopping: Topping = .nuts

The following example shows a picker that’s bound to a `Topping` type, while the options are all `Flavor` instances. Each option uses the tag modifier to associate the suggested topping with the flavor it displays:

List {
Picker("Flavor", selection: $suggestedTopping) {
ForEach(Flavor.allCases) { flavor in
Text(flavor.rawValue.capitalized)
.tag(flavor.suggestedTopping)
}
}
HStack {
Text("Suggested Topping")
Spacer()
Text(suggestedTopping.rawValue.capitalized)
.foregroundStyle(.secondary)
}
}

When the user selects chocolate, the picker sets `suggestedTopping` to the value in the associated tag:

Another example of when the views in a picker’s `ForEach` need an explicit tag modifier is when you select over the cases of an enumeration that conforms to the `Identifiable` protocol by using anything besides `Self` as the `id` parameter type. For example, a string enumeration might use the case’s `rawValue` string as the `id`. That identifier type doesn’t match the selection type, which is the type of the enumeration itself.

### Styling pickers

You can customize the appearance and interaction of pickers using styles that conform to the `PickerStyle` protocol, like `segmented` or `menu`. To set a specific style for all picker instances within a view, use the `pickerStyle(_:)` modifier. The following example applies the `segmented` style to two pickers that independently select a flavor and a topping:

VStack {
Picker("Flavor", selection: $selectedFlavor) {
ForEach(Flavor.allCases) { flavor in
Text(flavor.rawValue.capitalized)
}
}
Picker("Topping", selection: $selectedTopping) {
ForEach(Topping.allCases) { topping in
Text(topping.rawValue.capitalized)
}
}
}
.pickerStyle(.segmented)

## Topics

### Creating a picker

`init(_:selection:content:)`

Creates a picker that generates its label from a localized string key.

Creates a picker that displays a custom label.

### Creating a picker for a collection

`init(_:sources:selection:content:)`

Creates a picker bound to a collection of bindings that generates its label from a string.

`init<C>(sources: C, selection: KeyPath<C.Element, Binding<SelectionValue>>, content: () -> Content, label: () -> Label)`

### Creating a picker with an image label

`init(_:image:selection:content:)`

Creates a picker that generates its label from a localized string key and image resource

`init(_:image:sources:selection:content:)`

Creates a picker bound to a collection of bindings that generates its label from a string and image resource.

`init(_:systemImage:selection:content:)`

Creates a picker that generates its label from a localized string key and system image.

`init(_:systemImage:sources:selection:content:)`

### Deprecated initializers

Deprecated

### Initializers

`init(_:image:selection:content:currentValueLabel:)`

Creates a picker that accepts a custom current value label and generates its label from a localized string key and image resource

`init(_:image:sources:selection:content:currentValueLabel:)`

Creates a picker bound to a collection of bindings that accepts a custom current value label and generates its label from a string and image resource.

`init(_:selection:content:currentValueLabel:)`

Creates a picker that generates its label from a localized string key and accepts a custom current value label.

`init(_:sources:selection:content:currentValueLabel:)`

Creates a picker bound to a collection of bindings that generates its label from a string and accepts a custom current value label.

`init(_:systemImage:selection:content:currentValueLabel:)`

Creates a picker that accepts a custom current value label and generates its label from a localized string key and system image.

`init(_:systemImage:sources:selection:content:currentValueLabel:)`

Creates a picker bound to a collection of bindings that accepts a custom current value label and generates its label from a string.

Creates a picker that displays a custom label and a custom value label where applicable.

`init<C>(sources: C, selection: KeyPath<C.Element, Binding<SelectionValue>>, content: () -> Content, label: () -> Label, currentValueLabel: () -> some View)`

Creates a picker that displays a custom label and current value label where applicable.

## Relationships

### Conforms To

- `View`

## See Also

### Choosing from a set of options

Sets the style for pickers within this view.

Sets the style for radio group style pickers within this view to be horizontally positioned with the radio buttons inside the layout.

Sets the default wheel-style picker item height.

`var defaultWheelPickerItemHeight: CGFloat`

The default height of an item in a wheel-style picker, such as a date picker.

Specifies the selection effect to apply to a palette item.

`struct PaletteSelectionEffect`

The selection effect to apply to a palette item.

---

# https://developer.apple.com/documentation/SwiftUI/TextField

- SwiftUI
- TextField

Structure

# TextField

A control that displays an editable text interface.

## Overview

You create a text field with a label and a binding to a value. If the value is a string, the text field updates this value continuously as the user types or otherwise edits the text in the field. For non-string types, it updates the value when the user commits their edits, such as by pressing the Return key.

The following example shows a text field to accept a username, and a `Text` view below it that shadows the continuously updated value of `username`. The `Text` view changes color as the user begins and ends editing. When the user submits their completed entry to the text field, the `onSubmit(of:_:)` modifier calls an internal `validate(name:)` method.

@State private var username: String = ""
@FocusState private var emailFieldIsFocused: Bool = false

var body: some View {
TextField(
"User name (email address)",
text: $username
)
.focused($emailFieldIsFocused)
.onSubmit {
validate(name: username)
}
.textInputAutocapitalization(.never)
.disableAutocorrection(true)
.border(.secondary)

Text(username)
.foregroundColor(emailFieldIsFocused ? .red : .blue)
}

The bound value doesn’t have to be a string. By using a `FormatStyle`, you can bind the text field to a nonstring type, using the format style to convert the typed text into an instance of the bound type. The following example uses a `PersonNameComponents.FormatStyle` to convert the name typed in the text field to a `PersonNameComponents` instance. A `Text` view below the text field shows the debug description string of this instance.

@State private var nameComponents = PersonNameComponents()

var body: some View {
TextField(
"Proper name",
value: $nameComponents,
format: .name(style: .medium)
)
.onSubmit {
validate(components: nameComponents)
}
.disableAutocorrection(true)
.border(.secondary)
Text(nameComponents.debugDescription)
}

### Text field prompts

You can set an explicit prompt on the text field to guide users on what text they should provide. Each text field style determines where and when the text field uses a prompt and label. For example, a form on macOS always places the label at the leading edge of the field and uses a prompt, when available, as placeholder text within the field itself. In the same context on iOS, the text field uses either the prompt or label as placeholder text, depending on whether the initializer provided a prompt.

The following example shows a `Form` with two text fields, each of which provides a prompt to indicate that the field is required, and a view builder to provide a label:

Form {
TextField(text: $username, prompt: Text("Required")) {
Text("Username")
}
SecureField(text: $password, prompt: Text("Required")) {
Text("Password")
}
}

### Styling text fields

SwiftUI provides a default text field style that reflects an appearance and behavior appropriate to the platform. The default style also takes the current context into consideration, like whether the text field is in a container that presents text fields with a special style. Beyond this, you can customize the appearance and interaction of text fields using the `textFieldStyle(_:)` modifier, passing in an instance of `TextFieldStyle`. The following example applies the `roundedBorder` style to both text fields within a `VStack`.

@State private var givenName: String = ""
@State private var familyName: String = ""

var body: some View {
VStack {
TextField(
"Given Name",
text: $givenName
)
.disableAutocorrection(true)
TextField(
"Family Name",
text: $familyName
)
.disableAutocorrection(true)
}
.textFieldStyle(.roundedBorder)
}

## Topics

### Creating a text field with a string

`init(_:text:)`

Creates a text field with a text label generated from a localized title string.

`init(_:text:prompt:)`

Creates a text field with a prompt generated from a `Text`.

### Creating a scrollable text field

`init(_:text:axis:)`

Creates a text field with a preferred axis and a text label generated from a localized title string.

`init(_:text:prompt:axis:)`

Creates a text field with a preferred axis and a prompt generated from a `Text`.

### Creating a text field with a value

Use these initializers to create a text field that binds to a value of an arbitrary type.

`init(_:value:format:prompt:)`

Creates a text field that applies a format style to a bound value, with a label generated from a localized title string.

`init(value:format:prompt:label:)`

Creates a text field that applies a format style to a bound value, with a label generated from a view builder.

`init(_:value:formatter:)`

Create an instance which binds over an arbitrary type, `V`.

`init(_:value:formatter:prompt:)`

Creates a text field that applies a formatter to a bound value, with a label generated from a title string.

Creates a text field that applies a formatter to a bound optional value, with a label generated from a view builder.

### Deprecated initializers

Review deprecated text field initializers.

### Initializers

`init(_:text:selection:prompt:axis:)`

Creates a text field with a binding to the current selection and a text label generated from a localized title string.

Creates a text field with a binding to the current selection and a prompt generated from a `Text`.

## Relationships

### Conforms To

- `View`

## See Also

### Getting text input

Building rich SwiftUI text experiences

Build an editor for formatted text using SwiftUI text editor views and attributed strings.

Sets the style for text fields within this view.

`struct SecureField`

A control into which people securely enter private text.

`struct TextEditor`

A view that can display and edit long-form text.

---

# https://developer.apple.com/documentation/SwiftUI/TextEditor

- SwiftUI
- TextEditor

Structure

# TextEditor

A view that can display and edit long-form text.

struct TextEditor

## Overview

A text editor view allows you to display and edit multiline, scrollable text in your app’s user interface. By default, the text editor view styles the text using characteristics inherited from the environment, like `font(_:)`, `foregroundColor(_:)`, and `multilineTextAlignment(_:)`.

You create a text editor by adding a `TextEditor` instance to the body of your view, and initialize it by passing in a `Binding` to a string variable in your app:

struct TextEditingView: View {
@State private var fullText: String = "This is some editable text..."

var body: some View {
TextEditor(text: $fullText)
}
}

To style the text, use the standard view modifiers to configure a system font, set a custom font, or change the color of the view’s text.

In this example, the view renders the editor’s text in gray with a custom font:

var body: some View {
TextEditor(text: $fullText)
.foregroundColor(Color.gray)
.font(.custom("HelveticaNeue", size: 13))
}
}

If you want to change the spacing or font scaling aspects of the text, you can use modifiers like `lineLimit(_:)`, `lineSpacing(_:)`, and `minimumScaleFactor(_:)` to configure how the view displays text depending on the space constraints. For example, here the `lineSpacing(_:)` modifier sets the spacing between lines to 5 points:

var body: some View {
TextEditor(text: $fullText)
.foregroundColor(Color.gray)
.font(.custom("HelveticaNeue", size: 13))
.lineSpacing(5)
}
}

## Topics

### Creating a text editor

Creates a plain text editor.

### Initializers

`init(text:selection:)`

Creates a styled text editor.

## Relationships

### Conforms To

- `View`

## See Also

### Getting text input

Building rich SwiftUI text experiences

Build an editor for formatted text using SwiftUI text editor views and attributed strings.

`struct TextField`

A control that displays an editable text interface.

Sets the style for text fields within this view.

`struct SecureField`

A control into which people securely enter private text.

---

# https://developer.apple.com/documentation/SwiftUI/Slider

- SwiftUI
- Slider

Structure

# Slider

A control for selecting a value from a bounded linear range of values.

## Mentioned in

Populating SwiftUI menus with adaptive controls

## Overview

A slider consists of a “thumb” image that the user moves between two extremes of a linear “track”. The ends of the track represent the minimum and maximum possible values. As the user moves the thumb, the slider updates its bound value.

The following example shows a slider bound to the value `speed`. As the slider updates this value, a bound `Text` view shows the value updating. The `onEditingChanged` closure passed to the slider receives callbacks when the user drags the slider. The example uses this to change the color of the value text.

@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
VStack {
Slider(
value: $speed,
in: 0...100,
onEditingChanged: { editing in
isEditing = editing
}
)
Text("\(speed)")
.foregroundColor(isEditing ? .red : .blue)
}
}

You can also use a `step` parameter to provide incremental steps along the path of the slider. For example, if you have a slider with a range of `0` to `100`, and you set the `step` value to `5`, the slider’s increments would be `0`, `5`, `10`, and so on. The following example shows this approach, and also adds optional minimum and maximum value labels.

var body: some View {
Slider(
value: $speed,
in: 0...100,
step: 5
) {
Text("Speed")
} minimumValueLabel: {
Text("0")
} maximumValueLabel: {
Text("100")
} onEditingChanged: { editing in
isEditing = editing
}
Text("\(speed)")
.foregroundColor(isEditing ? .red : .blue)
}

The slider also uses the `step` to increase or decrease the value when a VoiceOver user adjusts the slider with voice commands.

## Topics

### Creating a slider

Creates a slider to select a value from a given range.

Creates a slider to select a value from a given range, subject to a step increment.

### Creating a slider with labels

Creates a slider to select a value from a given range, which displays the provided label.

Creates a slider to select a value from a given range, subject to a step increment, which displays the provided label.

Creates a slider to select a value from a given range, which displays the provided labels.

Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels.

### Adding ticks to a slider

`struct SliderTick`

A representation of a tick in a slider, with associated value and optional label.

`struct SliderTickBuilder`

A result builder that constructs `SliderTick`s for use when creating a `Slider`.

`struct SliderTickContentForEach`

A type of slider content that creates content by iterating over a collection.

`struct TupleSliderTickContent`

Slider content created from a Swift tuple of slider content.

`protocol SliderTickContent`

A type that provides content for a `SliderTickBuilder`.

### Deprecated initializers

Deprecated

### Initializers

Creates a slider to select a value from a given range, which displays the provided labels and customized ticks.

Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels and customizable ticks.

## Relationships

### Conforms To

- `View`

## See Also

### Getting numeric inputs

`struct Stepper`

A control that performs increment and decrement actions.

`struct Toggle`

A control that toggles between on and off states.

Sets the style for toggles in a view hierarchy.

---

# https://developer.apple.com/documentation/swiftui/image

- SwiftUI
- Image

Structure

# Image

A view that displays an image.

@frozen
struct Image

## Mentioned in

Building layouts with stack views

Configuring views

Creating performant scrollable stacks

Displaying data in lists

Fitting images into available space

## Overview

Use an `Image` instance when you want to add images to your SwiftUI app. You can create images from many sources:

- Image files in your app’s asset library or bundle. Supported types include PNG, JPEG, HEIC, and more.

- Instances of platform-specific image types, like `UIImage` and `NSImage`.

- A bitmap stored in a Core Graphics `CGImage` instance.

- System graphics from the SF Symbols set.

The following example shows how to load an image from the app’s asset library or bundle and scale it to fit within its container:

Image("Landscape_4")
.resizable()
.aspectRatio(contentMode: .fit)
Text("Water wheel")

You can use methods on the `Image` type as well as standard view modifiers to adjust the size of the image to fit your app’s interface. Here, the `Image` type’s `resizable(capInsets:resizingMode:)` method scales the image to fit the current view. Then, the `aspectRatio(_:contentMode:)` view modifier adjusts this resizing behavior to maintain the image’s original aspect ratio, rather than scaling the x- and y-axes independently to fill all four sides of the view. The article Fitting images into available space shows how to apply scaling, clipping, and tiling to `Image` instances of different sizes.

An `Image` is a late-binding token; the system resolves its actual value only when it’s about to use the image in an environment.

### Making images accessible

To use an image as a control, use one of the initializers that takes a `label` parameter. This allows the system’s accessibility frameworks to use the label as the name of the control for users who use features like VoiceOver. For images that are only present for aesthetic reasons, use an initializer with the `decorative` parameter; the accessibility systems ignore these images.

## Topics

### Creating an image

`init(String, bundle: Bundle?)`

Creates a labeled image that you can use as content for controls.

`init(String, variableValue: Double?, bundle: Bundle?)`

Creates a labeled image that you can use as content for controls, with a variable value.

`init(ImageResource)`

Initialize an `Image` with an image resource.

### Creating an image for use as a control

`init(String, bundle: Bundle?, label: Text)`

Creates a labeled image that you can use as content for controls, with the specified label.

`init(String, variableValue: Double?, bundle: Bundle?, label: Text)`

Creates a labeled image that you can use as content for controls, with the specified label and variable value.

`init(CGImage, scale: CGFloat, orientation: Image.Orientation, label: Text)`

Creates a labeled image based on a Core Graphics image instance, usable as content for controls.

### Creating an image for decorative use

`init(decorative: String, bundle: Bundle?)`

Creates an unlabeled, decorative image.

`init(decorative: String, variableValue: Double?, bundle: Bundle?)`

Creates an unlabeled, decorative image, with a variable value.

`init(decorative: CGImage, scale: CGFloat, orientation: Image.Orientation)`

Creates an unlabeled, decorative image based on a Core Graphics image instance.

### Creating a system symbol image

`init(systemName: String)`

Creates a system symbol image.

`init(systemName: String, variableValue: Double?)`

Creates a system symbol image with a variable value.

### Creating an image from another image

`init(uiImage: UIImage)`

Creates a SwiftUI image from a UIKit image instance.

`init(nsImage: NSImage)`

Creates a SwiftUI image from an AppKit image instance.

### Creating an image from drawing instructions

Initializes an image of the given size, with contents provided by a custom rendering closure.

### Resizing images

Sets the mode by which SwiftUI resizes an image to fit its space.

### Specifying rendering behavior

Specifies whether SwiftUI applies antialiasing when rendering the image.

Sets the rendering mode for symbol images within this view.

Indicates whether SwiftUI renders an image as-is, or by using a different mode.

Specifies the current level of quality for rendering an image that requires interpolation.

`enum TemplateRenderingMode`

A type that indicates how SwiftUI renders images.

`enum Interpolation`

The level of quality for rendering an image that requires interpolation, such as a scaled image.

### Specifying dynamic range

Returns a new image configured with the specified allowed dynamic range.

`var allowedDynamicRange: Image.DynamicRange?`

The allowed dynamic range for the view, or nil.

`struct DynamicRange`

### Instance Methods

Sets the color rendering mode of the image.

Sets the variable value mode mode for symbol images within this view.

Specifies the how to render an `Image` when using the `WidgetKit/WidgetRenderingMode/accented` mode.

### Enumerations

`enum Orientation`

The orientation of an image.

`enum ResizingMode`

The modes that SwiftUI uses to resize an image to fit within its containing view.

`enum Scale`

A scale to apply to vector images relative to text.

## Relationships

### Conforms To

- `Copyable`
- `Equatable`
- `Escapable`
- `JournalingSuggestionAsset`
- `Sendable`
- `SendableMetatype`
- `Transferable`
- `View`

---

# https://developer.apple.com/documentation/SwiftUI/PrimitiveButtonStyle/glass

- SwiftUI
- PrimitiveButtonStyle
- glass

Type Property

# glass

A button style that applies a Liquid Glass effect based on the button’s context.

@MainActor @preconcurrency
static var glass: GlassButtonStyle { get }

Available when `Self` is `GlassButtonStyle`.

## Mentioned in

Applying Liquid Glass to custom views

## Discussion

In tvOS, this button style applies a Liquid Glass effect regardless of whether the button has focus.

To apply this style to a button, or to a view that contains buttons, use the `buttonStyle(_:)` modifier.

## See Also

### Getting built-in button styles

`static var automatic: DefaultButtonStyle`

The default button style, based on the button’s context.

`static var accessoryBar: AccessoryBarButtonStyle`

A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.

`static var accessoryBarAction: AccessoryBarActionButtonStyle`

A button style that you use for extra actions in an accessory toolbar.

`static var bordered: BorderedButtonStyle`

A button style that applies the standard border style based on the button’s context.

`static var borderedProminent: BorderedProminentButtonStyle`

A button style that applies the standard bordered prominent style based on the button’s context.

`static var borderless: BorderlessButtonStyle`

A button style that doesn’t apply a border.

`static var card: CardButtonStyle`

A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.

`static var glassProminent: GlassProminentButtonStyle`

A button style that applies a prominent Liquid Glass effect based on the button’s context.

A button style that applies a configurable Liquid Glass effect based on the button’s context.

`static var link: LinkButtonStyle`

A button style for buttons that emulate links.

`static var plain: PlainButtonStyle`

A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.

---

# https://developer.apple.com/documentation/SwiftUI/PrimitiveButtonStyle/glassProminent

- SwiftUI
- PrimitiveButtonStyle
- glassProminent

Type Property

# glassProminent

A button style that applies a prominent Liquid Glass effect based on the button’s context.

@MainActor @preconcurrency
static var glassProminent: GlassProminentButtonStyle { get }

Available when `Self` is `GlassProminentButtonStyle`.

## Discussion

In tvOS, this button style applies a Liquid Glass effect regardless of whether the button has focus. This style is similar to the `borderedProminent` style.

To apply this style to a button, or to a view that contains buttons, use the `buttonStyle(_:)` modifier.

## See Also

### Getting built-in button styles

`static var automatic: DefaultButtonStyle`

The default button style, based on the button’s context.

`static var accessoryBar: AccessoryBarButtonStyle`

A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.

`static var accessoryBarAction: AccessoryBarActionButtonStyle`

A button style that you use for extra actions in an accessory toolbar.

`static var bordered: BorderedButtonStyle`

A button style that applies the standard border style based on the button’s context.

`static var borderedProminent: BorderedProminentButtonStyle`

A button style that applies the standard bordered prominent style based on the button’s context.

`static var borderless: BorderlessButtonStyle`

A button style that doesn’t apply a border.

`static var card: CardButtonStyle`

A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.

`static var glass: GlassButtonStyle`

A button style that applies a Liquid Glass effect based on the button’s context.

A button style that applies a configurable Liquid Glass effect based on the button’s context.

`static var link: LinkButtonStyle`

A button style for buttons that emulate links.

`static var plain: PlainButtonStyle`

A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.

---

# https://developer.apple.com/documentation/SwiftUI/PrimitiveButtonStyle/glass(_:)

#app-main)

- SwiftUI
- PrimitiveButtonStyle
- glass(\_:)

Type Method

# glass(\_:)

A button style that applies a configurable Liquid Glass effect based on the button’s context.

@MainActor @preconcurrency

Available when `Self` is `GlassButtonStyle`.

## Discussion

This button style applies a Liquid Glass effect that you can customize by specifying a tint or variant. In the following example, the button renders using the clear variant of Liquid Glass:

Button("Button") {}
.buttonStyle(.glass(.clear))

In tvOS, this button style applies a Liquid Glass effect regardless of whether the button has focus. This style is similar to the `bordered` style.

To apply this style to a button, or to a view that contains buttons, use the `buttonStyle(_:)` modifier.

## See Also

### Getting built-in button styles

`static var automatic: DefaultButtonStyle`

The default button style, based on the button’s context.

`static var accessoryBar: AccessoryBarButtonStyle`

A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.

`static var accessoryBarAction: AccessoryBarActionButtonStyle`

A button style that you use for extra actions in an accessory toolbar.

`static var bordered: BorderedButtonStyle`

A button style that applies the standard border style based on the button’s context.

`static var borderedProminent: BorderedProminentButtonStyle`

A button style that applies the standard bordered prominent style based on the button’s context.

`static var borderless: BorderlessButtonStyle`

A button style that doesn’t apply a border.

`static var card: CardButtonStyle`

A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.

`static var glass: GlassButtonStyle`

A button style that applies a Liquid Glass effect based on the button’s context.

`static var glassProminent: GlassProminentButtonStyle`

A button style that applies a prominent Liquid Glass effect based on the button’s context.

`static var link: LinkButtonStyle`

A button style for buttons that emulate links.

`static var plain: PlainButtonStyle`

A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.

---

# https://developer.apple.com/documentation/AppKit/NSButton/BezelStyle-swift.enum/glass

- AppKit
- NSButton
- NSButton.BezelStyle
- NSButton.BezelStyle.glass

Case

# NSButton.BezelStyle.glass

A bezel style with a glass effect

case glass

---

# https://developer.apple.com/documentation/SwiftUI/PrimitiveButtonStyle/glass

- SwiftUI
- PrimitiveButtonStyle
- glass

Type Property

# glass

A button style that applies a Liquid Glass effect based on the button’s context.

@MainActor @preconcurrency
static var glass: GlassButtonStyle { get }

Available when `Self` is `GlassButtonStyle`.

## Mentioned in

Applying Liquid Glass to custom views

## Discussion

In tvOS, this button style applies a Liquid Glass effect regardless of whether the button has focus.

To apply this style to a button, or to a view that contains buttons, use the `buttonStyle(_:)` modifier.

## See Also

### Getting built-in button styles

`static var automatic: DefaultButtonStyle`

The default button style, based on the button’s context.

`static var accessoryBar: AccessoryBarButtonStyle`

A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.

`static var accessoryBarAction: AccessoryBarActionButtonStyle`

A button style that you use for extra actions in an accessory toolbar.

`static var bordered: BorderedButtonStyle`

A button style that applies the standard border style based on the button’s context.

`static var borderedProminent: BorderedProminentButtonStyle`

A button style that applies the standard bordered prominent style based on the button’s context.

`static var borderless: BorderlessButtonStyle`

A button style that doesn’t apply a border.

`static var card: CardButtonStyle`

A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.

`static var glassProminent: GlassProminentButtonStyle`

A button style that applies a prominent Liquid Glass effect based on the button’s context.

A button style that applies a configurable Liquid Glass effect based on the button’s context.

`static var link: LinkButtonStyle`

A button style for buttons that emulate links.

`static var plain: PlainButtonStyle`

A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.

---

# https://developer.apple.com/documentation/SwiftUI/View/buttonStyle(_:)-66fbx

-66fbx#app-main)

- SwiftUI
- View
- buttonStyle(\_:)

Instance Method

# buttonStyle(\_:)

Sets the style for buttons within this view to a button style with a custom appearance and custom interaction behavior.

nonisolated

Show all declarations

## Discussion

Use this modifier to set a specific style for button instances within a view:

HStack {
Button("Sign In", action: signIn)
Button("Register", action: register)
}
.buttonStyle(.bordered)

---

