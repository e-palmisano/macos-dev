# AppKit Controls, Text, TextKit & Graphics

> AppKit controls (NSButton, NSSwitch, NSTextField), text display, TextKit, fonts, Writing Tools, images/PDF, drawing, color, and printing.

---

# https://developer.apple.com/documentation/AppKit/NSButton

- AppKit
- NSButton

Class

# NSButton

A control that defines an area on the screen that a user clicks to trigger an action.

macOS

class NSButton

## Overview

Buttons are a standard control for initiating actions within your app. You can configure buttons with many different visual styles, but the behavior is the same. When a user clicks it, a button calls the action method of its associated target object. (If you configure a button as continuous, it calls its action method at timed intervals until the user releases the mouse button or the cursor leaves the button boundaries). You use the action method to perform your app-specific tasks.

There are multiple types of buttons, each with a different user interface and behavior. The `NSButtonCell` class defines the button types, and calling the `setButtonType(_:)` method configures them.

If you configure it as an accelerator button (type `NSAcceleratorButton` or `NSMultiLevelAcceleratorButton`), you can set a button to send action messages when changes in pressure occur when the user clicks the button.

Buttons can either have two states (on and off) or three states (on, off, and mixed). You enable a three-state button by calling the `allowsMixedState` method. On and off (also referred to as alternate and normal) states indicate that the user clicked or didn’t click the button. Mixed is typically used for checkboxes or radio buttons, which allow for an additional intermediate state. For example, suppose the state of a checkbox denotes whether a text field contains bold text. If all text in the text field is bold, then the checkbox is on. If none of the text is bold, then the checkbox is off. If some of the text is bold, then the checkbox is mixed.

For most types of buttons, the value of the button matches its state—the value is `1` for on, `0` for off, or `-1` for mixed. For pressure-sensitive buttons, the value of the button indicates pressure level instead.

`NSButton` and `NSMatrix` both provide a control view, which displays an `NSButtonCell` object. However, while a matrix requires you to access the button cell objects directly, most button class methods act as “covers” for identically declared button cell methods. In other words, the implementation of the button method invokes the corresponding button cell method for you, allowing you to be unconcerned with the existence of the button cell. The only button cell methods that don’t have covers relate to the font you use to display the key equivalent and to specific methods for highlighting or showing the state of the button.

## Topics

### Creating standard buttons

`convenience init(checkboxWithTitle: String, target: Any?, action: Selector?)`

Creates a standard checkbox with the title you specify.

`convenience init(image: NSImage, target: Any?, action: Selector?)`

Creates a standard push button with the image you specify.

`convenience init(radioButtonWithTitle: String, target: Any?, action: Selector?)`

Creates a standard radio button with the title you specify.

`convenience init(title: String, image: NSImage, target: Any?, action: Selector?)`

Creates a standard push button with a title and image.

`convenience init(title: String, target: Any?, action: Selector?)`

Creates a standard push button with the title you specify.

### Configuring the cell

`class NSButtonCell`

An object that defines the user interface of a button or other clickable region of a view.

### Configuring buttons

`func setButtonType(NSButton.ButtonType)`

Sets the button’s type, which affects its user interface and behavior when clicked.

Returns by reference the delay and interval periods for a continuous button.

`func setPeriodicDelay(Float, interval: Float)`

Sets the message delay and interval periods for a continuous button.

`var contentTintColor: NSColor?`

A tint color to use for the template image and text content.

`var hasDestructiveAction: Bool`

A Boolean value that defines whether a button’s action has a destructive effect.

`var alternateTitle: String`

The title that the button displays when the button is in an on state.

`var attributedTitle: NSAttributedString`

The title that the button displays in an off state, as an attributed string.

`var attributedAlternateTitle: NSAttributedString`

The title that the button displays as an attributed string when the button is in an on state.

`var title: String`

The title displayed on the button when it’s in an off state.

`var symbolConfiguration: NSImage.SymbolConfiguration?`

The combination of point size, weight, and scale to use when sizing and displaying symbol images.

`var sound: NSSound?`

The sound that plays when the user clicks the button.

`var isSpringLoaded: Bool`

A Boolean value that indicates whether spring loading is enabled for the button.

`var maxAcceleratorLevel: Int`

An integer value indicating the maximum pressure level for a button of type `NSMultiLevelAcceleratorButton`.

`var tintProminence: NSTintProminence`

The tint prominence of the button. Use tint prominence to gently suggest a hierarchy when multiple buttons perform similar actions. A button with primary tint prominence suggests the most preferred option, while secondary prominence indicates a reasonable alternative. See `NSTintProminence` for a list of possible values.

`enum NSTintProminence`

Controls how strongly the tint color applies in a view.

`var borderShape: NSControl.BorderShape`

`enum BorderShape`

### Configuring button images

`var image: NSImage?`

The image that appears on the button when it’s in an off state, or `nil` if there is no such image.

`var alternateImage: NSImage?`

An alternate image that appears on the button when the button is in an on state.

`var imagePosition: NSControl.ImagePosition`

The position of the button’s image relative to its title.

`enum ImagePosition`

A constant for specifying the position of a button’s image relative to its title.

`var isBordered: Bool`

A Boolean value that determines whether the button has a border.

`var isTransparent: Bool`

A Boolean value that indicates whether the button is transparent.

`var bezelStyle: NSButton.BezelStyle`

The appearance of the button’s border.

`var bezelColor: NSColor?`

The color of the button’s bezel, in appearances that support it.

`var showsBorderOnlyWhileMouseInside: Bool`

A Boolean value that determines whether the button displays its border only when the pointer is over it.

`var imageHugsTitle: Bool`

A Boolean value that determines how the button’s image and title are positioned together within the button bezel.

`var imageScaling: NSImageScaling`

The scaling mode applied to make the cell’s image fit the frame of the image view.

### Managing button compression

`var activeCompressionOptions: NSUserInterfaceCompressionOptions`

The compression options active for this button.

[`func compress(withPrioritizedCompressionOptions: [NSUserInterfaceCompressionOptions])`](https://developer.apple.com/documentation/appkit/nsbutton/compress(withprioritizedcompressionoptions:))

Sets the priority compression options for this button.

Returns the minimum size of the button by using the compression options.

### Managing button state

`var allowsMixedState: Bool`

A Boolean value that indicates whether the button allows a mixed state.

`var state: NSControl.StateValue`

The button’s state.

`func setNextState()`

Sets the button to its next state.

`func highlight(Bool)`

Highlights (or unhighlights) the button.

### Accessing key equivalents

`var keyEquivalent: String`

The key-equivalent character of the button.

`var keyEquivalentModifierMask: NSEvent.ModifierFlags`

The mask specifying the modifier keys for the button’s key equivalent.

### Handling keyboard events

Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.

## Relationships

### Inherits From

- `NSControl`

### Inherited By

- `NSPopUpButton`
- `NSStatusBarButton`

### Conforms To

- `CVarArg`
- `CustomDebugStringConvertible`
- `CustomStringConvertible`
- `Equatable`
- `Hashable`
- `NSAccessibilityButton`
- `NSAccessibilityElementProtocol`
- `NSAccessibilityProtocol`
- `NSAnimatablePropertyContainer`
- `NSAppearanceCustomization`
- `NSCoding`
- `NSDraggingDestination`
- `NSObjectProtocol`
- `NSStandardKeyBindingResponding`
- `NSTouchBarProvider`
- `NSUserActivityRestoring`
- `NSUserInterfaceCompression`
- `NSUserInterfaceItemIdentification`
- `NSUserInterfaceValidations`
- `Sendable`
- `SendableMetatype`

## See Also

### Controls

Responding to control-based events using target-action

Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.

`class NSColorWell`

A control that displays a color value and lets the user change that color value.

Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.

`class NSComboButton`

A button with a pull-down menu and a default action.

Display a calendar date and provide controls for editing the date value.

`class NSImageView`

A display of image data in a frame.

`class NSLevelIndicator`

A visual representation of a level or quantity, using discrete values.

A display of a file system path or virtual path information.

`class NSPopUpButton`

A control for selecting an item from a list.

`class NSProgressIndicator`

An interface that provides visual feed

An interface for configuring a rule-based list of options.

`class NSPredicateEditor`

A defined set of rules that allows the editing of predicate objects.

Provide a text field that is optimized for text-based search interfaces.

`class NSSegmentedControl`

Display one or more buttons in a single horizontal group.

Display a range of values from which the user selects a single value.

---

# https://developer.apple.com/documentation/AppKit/NSSwitch

- AppKit
- NSSwitch

Class

# NSSwitch

A control that offers a binary choice.

class NSSwitch

## Overview

The `NSSwitch` class provides a simple interface for displaying and toggling a Boolean state, such as on/off. A switch toggles its `state` and sends its `action` when clicked, activated through the keyboard, or tapped in the Touch Bar. `NSSwitch` also allows dragging between states, and if `isContinuous` is `true`, the switch sends its `action` for each change in position during the drag.

`NSSwitch` doesn’t use an instance of `NSCell` to provide its functionality. The `cellClass` class property and `cell` instance property both return `nil`, and they ignore attempts to set a non- `nil` value.

## Topics

### Managing Switch State

`var state: NSControl.StateValue`

The current position of the switch.

## Relationships

### Inherits From

- `NSControl`

### Conforms To

- `CVarArg`
- `CustomDebugStringConvertible`
- `CustomStringConvertible`
- `Equatable`
- `Hashable`
- `NSAccessibilityButton`
- `NSAccessibilityElementProtocol`
- `NSAccessibilityProtocol`
- `NSAccessibilitySwitch`
- `NSAnimatablePropertyContainer`
- `NSAppearanceCustomization`
- `NSCoding`
- `NSDraggingDestination`
- `NSObjectProtocol`
- `NSStandardKeyBindingResponding`
- `NSTouchBarProvider`
- `NSUserActivityRestoring`
- `NSUserInterfaceItemIdentification`
- `Sendable`
- `SendableMetatype`

## See Also

### Controls

Responding to control-based events using target-action

Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.

`class NSButton`

A control that defines an area on the screen that a user clicks to trigger an action.

`class NSColorWell`

A control that displays a color value and lets the user change that color value.

Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.

`class NSComboButton`

A button with a pull-down menu and a default action.

Display a calendar date and provide controls for editing the date value.

`class NSImageView`

A display of image data in a frame.

`class NSLevelIndicator`

A visual representation of a level or quantity, using discrete values.

A display of a file system path or virtual path information.

`class NSPopUpButton`

A control for selecting an item from a list.

`class NSProgressIndicator`

An interface that provides visual feed

An interface for configuring a rule-based list of options.

`class NSPredicateEditor`

A defined set of rules that allows the editing of predicate objects.

Provide a text field that is optimized for text-based search interfaces.

`class NSSegmentedControl`

Display one or more buttons in a single horizontal group.

---

# https://developer.apple.com/documentation/AppKit/NSTextField

- AppKit
- NSTextField

Class

# NSTextField

Text the user can select or edit to send an action message to a target when the user presses the Return key.

macOS

class NSTextField

## Mentioned in

Adding Writing Tools support to a custom AppKit view

Adopting the system text cursor in custom text views

Customizing Writing Tools behavior for AppKit views

## Overview

The `NSTextField` class uses the `NSTextFieldCell` class to implement its user interface. Text fields display text either as a static label or as an editable input field. The content of a text field is either plain text or a rich-text attributed string. Text fields also support line wrapping to display multiline text, and a variety of truncation styles if the content doesn’t fit the available space.

The parent class, `NSControl`, provides the methods for setting the values of the text field, such as `stringValue` and `doubleValue`. There are corresponding methods to retrieve values.

In macOS 12 and later, if you explicitly call the `layoutManager` property on your text field, the framework will revert to a compatibility mode that uses `NSLayoutManager`. The text view also switches to this compatibility mode when it encounters text content that’s not yet supported.

## Topics

### Creating Text Fields

`convenience init(labelWithAttributedString: NSAttributedString)`

Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.

`convenience init(labelWithString: String)`

Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.

`convenience init(string: String)`

Initializes a single-line editable text field for user input using the system default font and standard visual appearance.

`convenience init(wrappingLabelWithString: String)`

Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

### Controlling Selection and Editing

`var isSelectable: Bool`

A Boolean value that determines whether the user can select the content of the text field.

`var isEditable: Bool`

A Boolean value that controls whether the user can edit the value in the text field.

### Controlling Rich Text Behavior

`var allowsEditingTextAttributes: Bool`

A Boolean value that controls whether the user can change font attributes of the text field’s string.

`var importsGraphics: Bool`

A Boolean value that controls whether the user can drag image files into the text field.

### Setting Placeholder Text

`var placeholderString: String?`

The string the text field displays when empty to help the user understand the text field’s purpose.

`var placeholderAttributedString: NSAttributedString?`

The attributed string the text field displays when empty to help the user understand the text field’s purpose.

### Configuring Line Wrapping

`var lineBreakStrategy: NSParagraphStyle.LineBreakStrategy`

The strategy that the system uses to break lines when laying out multiple lines of text.

`var allowsDefaultTighteningForTruncation: Bool`

A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.

`var maximumNumberOfLines: Int`

The maximum number of lines a wrapping text field displays before clipping or truncating the text.

### Sizing with Auto Layout

`var preferredMaxLayoutWidth: CGFloat`

The maximum width of the text field’s intrinsic content size.

### Setting the Text Color

`var textColor: NSColor?`

The color of the text field’s content.

### Controlling the Background

`var backgroundColor: NSColor?`

The color of the background the text field’s cell draws behind the text.

`var drawsBackground: Bool`

A Boolean value that controls whether the text field’s cell draws a background color behind the text.

`var isBezeled: Bool`

A Boolean value that controls whether the text field draws a bezeled background around its contents.

`var bezelStyle: NSTextField.BezelStyle`

The text field’s bezel style, square or rounded.

`enum BezelStyle`

The style of bezel the text field displays.

### Setting a Border

`var isBordered: Bool`

A Boolean value that controls whether the text field draws a solid black border around its contents.

### Selecting the Text

`func selectText(Any?)`

Ends editing in the text field and, if it’s selectable, selects the entire text content.

### Working with the Responder Chain

`var acceptsFirstResponder: Bool`

A Boolean value that indicates whether the text field is editable and accepts first responder status.

### Using Keyboard Interface Control

`var allowsCharacterPickerTouchBarItem: Bool`

A Boolean value that controls whether the Touch Bar displays the character picker item for rich text fields.

### Supporting Text Completion and Suggestions

`var isAutomaticTextCompletionEnabled: Bool`

A Boolean value that indicates whether the text field automatically completes text as the user types.

`protocol NSTextSuggestionsDelegate`

A protocol for suggestion delegates of text fields to conform to in order to provide text suggestions in response to the user typing.

`struct NSSuggestionItem`

The items that appear in suggestion menus.

`struct NSSuggestionItemResponse`

Describes the result of a batch of suggestion items from a search

`struct NSSuggestionItemSection`

Describes a section of suggestions items in a suggestions menu

### Setting the Delegate

`var delegate: (any NSTextFieldDelegate)?`

The text field’s delegate.

### Implementing Delegate Methods

Requests permission to begin editing a text object.

`func textDidBeginEditing(Notification)`

Posts a notification to the default notification center that the text is about to go into edit mode.

`func textDidChange(Notification)`

Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.

Performs validation on the text field’s new value.

`func textDidEndEditing(Notification)`

Posts a notification when the text is no longer in edit mode.

### Instance Properties

`var allowsWritingTools: Bool`

`var allowsWritingToolsAffordance: Bool`

[`var placeholderAttributedStrings: [NSAttributedString]`](https://developer.apple.com/documentation/appkit/nstextfield/placeholderattributedstrings)

[`var placeholderStrings: [String]`](https://developer.apple.com/documentation/appkit/nstextfield/placeholderstrings)

`var resolvesNaturalAlignmentWithBaseWritingDirection: Bool`

Specifies the behavior for resolving `NSTextAlignment.natural` to the visual alignment.

`var suggestionsDelegate: (any NSTextSuggestionsDelegate)?`

The delegate that provides text suggestions for the receiving text field and responds to the user highlighting and selecting items.

## Relationships

### Inherits From

- `NSControl`

### Inherited By

- `NSComboBox`
- `NSSearchField`
- `NSSecureTextField`
- `NSTokenField`

### Conforms To

- `CVarArg`
- `CustomDebugStringConvertible`
- `CustomStringConvertible`
- `Equatable`
- `Hashable`
- `NSAccessibilityElementProtocol`
- `NSAccessibilityNavigableStaticText`
- `NSAccessibilityProtocol`
- `NSAccessibilityStaticText`
- `NSAnimatablePropertyContainer`
- `NSAppearanceCustomization`
- `NSCoding`
- `NSDraggingDestination`
- `NSObjectProtocol`
- `NSStandardKeyBindingResponding`
- `NSTextContent`
- `NSTouchBarProvider`
- `NSUserActivityRestoring`
- `NSUserInterfaceItemIdentification`
- `NSUserInterfaceValidations`
- `Sendable`
- `SendableMetatype`

## See Also

### Text views

`protocol NSTextFieldDelegate`

A protocol that a text field delegate can use to control its field editor action menu.

`class NSTextView`

A view that draws text and handles user interactions with that text.

`protocol NSTextViewDelegate`

A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.

`protocol NSTextDelegate`

A set of optional methods implemented by the delegate of an `NSText` object to edit text and change text formats.

`class NSText`

The most general programmatic interface for objects that manage text.

---

# https://developer.apple.com/documentation/appkit/text-display

Collection

- AppKit
- Text Display

API Collection

# Text Display

Display text and check spelling.

## Overview

In most cases, you can lay out your app’s text using the `NSTextField` or `NSTextView` classes (or their subclasses). Use the `NSTextField` class to add either a label or a simple text input. Use the `NSTextView` class to provide more comprehensive layout and editing features for larger bodies of text.

For example, `NSTextView` supports rich text, attachments (graphics, file, and other), input management and key binding, and marked text attributes. `NSTextView` works with the font panel and menu, rulers and paragraph styles, the Services facility (for example, the spell-checking service), and the pasteboard.

`NSTextView` also allows customizing through delegation and notifications—you rarely need to subclass `NSTextView`. You rarely create instances of `NSTextView` programmatically either, because objects on Interface Builder’s palettes, such as `NSTextField`, `NSForm`, and `NSScrollView`, already contain `NSTextView` objects.

For even more powerful and more creative text manipulation (such as displaying text in a circle) see TextKit.

### Spell-checking

The `NSSpellServer` class lets you define a spell-checking service and provide it as a service to other apps. To connect your app to a spell-checking service, use the `NSSpellChecker` class. The `NSIgnoreMisspelledWords` and `NSChangeSpelling` protocols support the spell-checking mechanism.

## Topics

### Text views

`class NSTextField`

Text the user can select or edit to send an action message to a target when the user presses the Return key.

`protocol NSTextFieldDelegate`

A protocol that a text field delegate can use to control its field editor action menu.

`class NSTextView`

A view that draws text and handles user interactions with that text.

`protocol NSTextViewDelegate`

A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.

`protocol NSTextDelegate`

A set of optional methods implemented by the delegate of an `NSText` object to edit text and change text formats.

`class NSText`

The most general programmatic interface for objects that manage text.

### Text input

Adopting the system text cursor in custom text views

Incorporate the system text cursor into your custom text UI in AppKit.

`class NSTextInputContext`

An object that represents the Cocoa text input system.

`protocol NSTextInputClient`

A set of methods that text views need to implement to interact properly with the text input management system.

`class NSTextAlternatives`

A list of alternative strings for a piece of text.

`protocol NSTextContent`

A protocol that describes specific kinds of input content types.

`class NSTextInsertionIndicator`

A view that represents the insertion indicator in text.

`enum DisplayMode`

Constants that determine how to display the system text cursor in a custom text UI.

`struct AutomaticModeOptions`

Options that affect the automatic display mode.

### Text-checking

`class NSTextCheckingController`

`protocol NSTextCheckingClient`

`protocol NSTextInputTraits`

`enum NSTextInputTraitType`

### Spell-checking

`class NSSpellChecker`

An interface to the Cocoa spell-checking service.

`protocol NSChangeSpelling`

A protocol that responder objects can implement to correct a misspelled word.

`protocol NSIgnoreMisspelledWords`

A protocol that enables the Ignore button in the Spelling panel to function properly.

### Deprecated

`protocol NSTextInput`

## See Also

### Text

Manage text storage and perform custom layout of text-based content in your app’s views.

Manage the fonts used to display text.

Add support for Writing Tools to your app’s text views.

---

# https://developer.apple.com/documentation/appkit/textkit

Collection

- AppKit
- TextKit

API Collection

# TextKit

Manage text storage and perform custom layout of text-based content in your app’s views.

## Overview

TextKit provides several classes to control the layout of text, such as `NSTextContentStorage`, `NSTextLayoutManager`, and `NSTextContainer`.

Additionally, TextKit uses `NSAttributedString` objects extensively. The `NSTextStorage` class is a subclass of `NSMutableAttributedString`, and many of the TextKit classes, for example, the classes listed in `Formatted content`, focus on creating complex `NSAttributedString` instances. Use these classes to specify your text’s format.

Most of the time, you can use TextKit to fine tune the formatting and layout of a `NSTextView` by modifying various properties of your view’s layout manager, text container, or text storage objects in your app. If you need more control, you can also use TextKit to build your text controls.

## Topics

### Text management

`class NSTextContentStorage`

A concrete object for managing your view’s text content and generating the text elements necessary for layout.

`class NSTextContentManager`

An abstract class that defines the interface and a default implementation for managing the text document contents.

`class NSAttributedString`

A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.

`class NSMutableAttributedString`

A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

### Formatting and attributes

`class NSParagraphStyle`

The paragraph or ruler attributes for an attributed string.

`class NSMutableParagraphStyle`

An object for changing the values of the subattributes in a paragraph style attribute.

`class NSTextTab`

A tab in a paragraph.

`class NSTextList`

A section of text that forms a single list.

`class NSTextTable`

An object that represents a text table as a whole.

`class NSTextTableBlock`

A text block that appears as a cell in a text table.

`class NSTextBlock`

A block of text laid out in a subregion of the text container.

### Content elements

Enriching your text in text views

Add exclusion paths, text attachments, and text lists to your text, and render it with text views.

`class NSTextParagraph`

A class that represents a single paragraph backed by an attributed string as the contents.

`class NSTextListElement`

A class that represents a text list node.

`class NSTextElement`

An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.

`protocol NSTextElementProvider`

A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.

### Location and selection

`class NSTextRange`

A class that represents a contiguous range between two locations inside document contents.

`class NSTextSelection`

A class that represents a single logical selection context that corresponds to an insertion point.

`class NSTextSelectionNavigation`

An interface you use to expose methods for obtaining results from actions performed on text selections.

`protocol NSTextLocation`

An interface you implement that represents an abstract location inside your document’s content.

### Layout

Using TextKit 2 to interact with text

Interact with text by managing text selection and inserting custom text elements.

`class NSTextLayoutManager`

The primary class that you use to manage text layout and presentation for custom text displays.

`class NSTextContainer`

A region where text layout occurs.

`class NSTextLayoutFragment`

A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.

`class NSTextLineFragment`

A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.

`class NSTextViewportLayoutController`

Manages the layout process inside the viewport interacting with its delegate.

`protocol NSTextLayoutOrientationProvider`

A set of methods that define the orientation of text for an object.

### Attachments

`class NSTextAttachment`

The values for the attachment characteristics of attributed strings and related objects.

`class NSTextAttachmentViewProvider`

A container object that associates a text attachment at a particular document location with a view object.

`class NSAdaptiveImageGlyph`

A data object for an emoji-like image that can appear in attributed text.

`protocol NSTextAttachmentContainer`

A set of methods that defines the interface to text attachment objects from a layout manager.

`protocol NSTextAttachmentLayout`

A set of methods that defines the interface to attachment objects from a text layout manager.

`class NSTextAttachmentCell`

An object that implements the functionality of the text attachment cell protocol.

`protocol NSTextAttachmentCellProtocol`

A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

### Glyphs

`typealias NSGlyph`

The type used to specify glyphs.

`protocol NSGlyphStorage`

A set of methods that a glyph storage object must implement to interact properly with `NSGlyphGenerator`.

`class NSGlyphGenerator`

An object that performs the initial, nominal glyph generation phase in the layout process.

`class NSGlyphInfo`

A glyph attribute in an attributed string.

These constants define reserved glyph codes.

`enum NSFontRenderingMode`

The font rendering mode.

### TextKit 1

`class NSTextStorage`

The fundamental storage mechanism of TextKit that contains the text managed by the system.

`class NSLayoutManager`

An object that coordinates the layout and display of text characters.

`class NSATSTypesetter`

A concrete typesetter object that places glyphs during the text layout process.

`class NSTypesetter`

An abstract class that performs various type layout tasks.

## See Also

### Text

Display text and check spelling.

Manage the fonts used to display text.

Add support for Writing Tools to your app’s text views.

---

# https://developer.apple.com/documentation/appkit/fonts

Collection

- AppKit
- Fonts

API Collection

# Fonts

Manage the fonts used to display text.

## Overview

The `NSFont` and `NSFontManager` classes encapsulate and manage font families, sizes, and variations. The `NSFont` class defines a single object for each distinct font; for efficiency, these objects, which can be rather large, are shared by all the objects in your app. The `NSFontPanel` class defines the font specification panel that’s presented to the user.

## Topics

### Font Data

`class NSFont`

The representation of a font in an app.

`class NSFontDescriptor`

A dictionary of attributes that describe a font.

`struct NSFontTraitMask`

Constants for isolating specific traits of a font.

`typealias NSFontFamilyClass`

Constants that classify certain stylistic qualities of the font.

`struct SymbolicTraits`

A symbolic description of the stylistic aspects of a font.

`class NSFontAssetRequest`

`typealias NSFontSymbolicTraits`

A symbolic description of stylistic aspects of a font.

### Management

`class NSFontManager`

The center of activity for the font-conversion system.

`class NSFontCollection`

A font collection, which is a group of font descriptors taken together as a single object.

`class NSMutableFontCollection`

A mutable collection of font descriptors taken together as a single object.

`struct NSFontCollectionOptions`

Constants that support font collection management.

## See Also

### Text

Display text and check spelling.

Manage text storage and perform custom layout of text-based content in your app’s views.

Add support for Writing Tools to your app’s text views.

---

# https://developer.apple.com/documentation/appkit/writing-tools

Collection

- AppKit
- Writing Tools

API Collection

# Writing Tools

Add support for Writing Tools to your app’s text views.

## Overview

Writing Tools provides a simple way for people to improve what they write using your app. Text views that support Writing Tools gain the ability to proofread, rewrite, summarize, or compose content with the help of system-provided large language models (LLMs) and Apple Intelligence.

Writing Tools supports both the standard system views and custom text views you create. The `NSTextView` and `NSTextField` classes automatically support Writing Tools, but you can customize that support to suit your app’s requirements. You can also add Writing Tools support to any `NSView` in your app that contains text.

## Topics

### Configuration

Customizing Writing Tools behavior for AppKit views

Modify the behavior of Writing Tools in standard macOS text views, and adjust your app’s behavior while the feature is active.

`enum NSWritingToolsBehavior`

Constants that specify the Writing Tools experience for the underlying view.

`struct NSWritingToolsResultOptions`

Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

### Writing Tools for custom views

Supporting Writing Tools via the pasteboard

Adopt a simplified version of the Writing Tools experience in a custom view using the pasteboard and macOS services.

Adding Writing Tools support to a custom AppKit view

Integrate Writing Tools support, including support for inline replacement animations, to your custom text views on macOS.

`class NSWritingToolsCoordinator`

An object that manages interactions between Writing Tools and your custom text view.

`protocol Delegate`

An interface that you use to manage interactions between Writing Tools and your custom text view.

`class Context`

A data object that you use to share your custom view’s text with Writing Tools.

`class AnimationParameters`

An object you use to configure additional tasks or animations to run alongside the Writing Tools animations.

Enhancing your custom text engine with Writing Tools

Add Writing Tools support to your custom text engine to enhance the text editing experience.

### Text previews

`class NSTextPreview`

A snapshot of the text in your view, which the system uses to create user-visible effects.

### Toolbar configuration

`static let writingToolsItemIdentifier: NSToolbarItem.Identifier`

A standard item that is configured to send -showWritingTools: to the firstResponder when invoked.

## See Also

### Text

Display text and check spelling.

Manage text storage and perform custom layout of text-based content in your app’s views.

Manage the fonts used to display text.

---

# https://developer.apple.com/documentation/appkit/images-and-pdf

Collection

- AppKit
- Images and PDF

API Collection

# Images and PDF

Create and manage images, in bitmap, PDF, and other formats.

## Topics

### Images

Providing images for different appearances

Supply image resources appropriate for light and dark appearances and for high-contrast environments.

Supporting Continuity Camera in Your Mac App

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

Supporting HDR images in your app

​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​

Applying Apple HDR effect to your photos

You can decode and apply Apple’s HDR gain map to your own images.

`class NSImage`

A high-level interface for manipulating image data.

`protocol NSImageDelegate`

A set of optional methods that you can use to respond to drawing failures and manage incremental loads.

`class NSImageRep`

A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.

### Bitmap Formats

`class NSBitmapImageRep`

An object that renders an image from bitmap data.

`class NSCIImageRep`

An object that can render an image from a Core Image object.

`class NSPICTImageRep`

An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.

### Vector Formats

`class NSPDFImageRep`

An object that can render an image from a PDF format data stream.

`class NSPDFInfo`

An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.

`class NSEPSImageRep`

An object that can render an image from encapsulated PostScript (EPS) code.

Deprecated

### Custom Formats

`class NSCustomImageRep`

An object that uses a delegate object to render an image from a custom format.

## See Also

### Graphics, Drawing, Color, and Printing

Draw shapes, images, and other content on the screen.

Represent colors using built-in or custom formats, and give users options for selecting and applying colors.

Display the system print panels and manage the printing process.

---

# https://developer.apple.com/documentation/appkit/drawing

Collection

- AppKit
- Drawing

API Collection

# Drawing

Draw shapes, images, and other content on the screen.

## Topics

### Drawing Contexts

`class NSGraphicsContext`

An object that represents a graphics context.

### Shapes and Paths

`class NSBezierPath`

An object that can create paths using PostScript-style commands.

Draw rectangles and other primitive shapes using these convenience functions.

### Strings

`class NSStringDrawingContext`

An object that manages metrics for drawing attributed strings.

`struct NSStringDrawingOptions`

Constants that specify the rendering options for drawing a string.

### Gradients

`class NSGradient`

An object that can draw gradient fill colors

### Shadows

`class NSShadow`

An object you use to specify attributes to create and style a drop shadow during drawing operations.

## See Also

### Graphics, Drawing, Color, and Printing

Create and manage images, in bitmap, PDF, and other formats.

Represent colors using built-in or custom formats, and give users options for selecting and applying colors.

Display the system print panels and manage the printing process.

---

# https://developer.apple.com/documentation/appkit/color

Collection

- AppKit
- Color

API Collection

# Color

Represent colors using built-in or custom formats, and give users options for selecting and applying colors.

## Overview

For design guidance, see Human Interface Guidelines.

## Topics

### Colors

`class NSColor`

An object that stores color data and sometimes opacity (alpha value).

`class NSColorList`

An ordered list of color objects, identified by keys.

`class NSColorSpace`

An object that represents a custom color space.

### Color Selection

`class NSColorPicker`

An abstract superclass that implements the default color picking protocol.

`class NSColorWell`

A control that displays a color value and lets the user change that color value.

`class NSColorPickerTouchBarItem`

A bar item that provides a system-defined color picker.

### Color Sampler

`class NSColorSampler`

An object that displays the system’s color-sampling interface and returns the selected color to your app.

## See Also

### Graphics, Drawing, Color, and Printing

Create and manage images, in bitmap, PDF, and other formats.

Draw shapes, images, and other content on the screen.

Display the system print panels and manage the printing process.

---

# https://developer.apple.com/documentation/appkit/printing

Collection

- AppKit
- Printing

API Collection

# Printing

Display the system print panels and manage the printing process.

## Overview

For design guidance, see Human Interface Guidelines.

## Topics

### Print Panels

`class NSPrintPanel`

The Print panel that queries the user for information about a print job.

`class NSPageLayout`

A panel that queries the user for information such as paper type and orientation.

### Print Information

`class NSPrinter`

An object that describes a printer’s capabilities.

`class NSPrintInfo`

An object that stores information that’s used to generate printed output.

`class NSPrintOperation`

An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.

## See Also

### Graphics, Drawing, Color, and Printing

Create and manage images, in bitmap, PDF, and other formats.

Draw shapes, images, and other content on the screen.

Represent colors using built-in or custom formats, and give users options for selecting and applying colors.

---

# https://developer.apple.com/documentation/appkit/drag-and-drop

Collection

- AppKit
- Drag and Drop

API Collection

# Drag and Drop

Support the direct manipulation of your app’s content using drag and drop.

## Overview

With very little programming on your part, custom-view objects can be dragged and dropped anywhere. Objects become part of this dragging mechanism by conforming to dragging protocols: Draggable objects conform to the `NSDraggingSource` protocol, and destination objects (that is, receivers of a drop) conform to the `NSDraggingDestination` protocol. AppKit hides all the details of tracking the cursor and displaying the dragged image.

To learn how to use drag and drop for an image view, see Supporting Drag and Drop Through File Promises. To use drag and drop in a table view, see Supporting Table View Drag and Drop Through File Promises. For an example of drag and drop in a collection view, see Supporting Collection View Drag and Drop Through File Promises, and for an outline view: Navigating Hierarchical Data Using Outline and Split Views.

## Topics

### Drag Sources

Originate content from a drag source by creating items to represent that content.

`protocol NSDraggingSource`

A set of methods that are implemented by the source object in a dragging session.

`class NSDraggingItem`

A single dragged item within a dragging session.

`class NSDraggingSession`

The encapsulation of a drag-and-drop action that supports modification of the drag while in progress.

`class NSDraggingImageComponent`

A single object in a dragging item.

### Drop Targets

Receive dragged content in your app’s objects.

`protocol NSDraggingDestination`

A set of methods that the destination object (or recipient) of a dragged image must implement.

`protocol NSDraggingInfo`

A set of methods that supply information about a dragging session.

`protocol NSSpringLoadingDestination`

A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.

## See Also

### User Interactions

Handle events related to mouse, keyboard, and trackpad input.

Implement menus and cursors to facilitate interactions with your app, and use your app’s Dock tile to convey updated information.

Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.

Display interactive content and controls in the Touch Bar.

Make your AppKit apps accessible to everyone who uses macOS.

---

