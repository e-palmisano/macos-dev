# AppKit Essentials

> The AppKit framework: app and environment objects, documents/data/pasteboard, Cocoa Bindings, the view system (NSView, view management & layout), appearance, animation, windows/panels/screens, and menus/cursors/dock.

---

# https://developer.apple.com/documentation/AppKit

Framework

# AppKit

Construct and manage a graphical, event-driven user interface for your macOS app.

## Overview

AppKit contains the objects you need to build the user interface for a macOS app. In addition to drawing windows, buttons, panels, and text fields, it handles all the event management and interaction between your app, people, and macOS.

Aside from drawing and managing interactions, AppKit handles printing, animating, as well as creating documents with large amounts of data efficiently. The framework also contains built-in support for localization and accessibility to ensure that your app reaches as many people as possible.

AppKit also works with SwiftUI, so you can implement parts of your AppKit app in SwiftUI or mix interface elements between the two frameworks. For example, you can place AppKit views and view controllers inside SwiftUI views, and vice versa.

## Topics

### Essentials

Adopting Liquid Glass

Find out how to bring the new material to your app.

AppKit updates

Learn about important changes to AppKit.

Secure personal data, and respect user preferences for how data is used.

Create a version of your macOS app that runs on both Apple silicon and Intel-based Mac computers.

### App Structure

Learn about the objects that you use to interact with the system.

Organize your app’s data and preferences, and share that data on the pasteboard or in iCloud.

Automatically synchronize your data model with your app’s interface using Cocoa Bindings.

Manage the storyboards and nib files containing your app’s user interface, and learn how to load data that is stored in resource files.

Extend your app’s basic functionality to other parts of the system.

### User Interface

Your app’s user interface provides visual, audible, and tactile feed

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

### User Interactions

Handle events related to mouse, keyboard, and trackpad input.

Implement menus and cursors to facilitate interactions with your app, and use your app’s Dock tile to convey updated information.

Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.

Display interactive content and controls in the Touch Bar.

Support the direct manipulation of your app’s content using drag and drop.

Make your AppKit apps accessible to everyone who uses macOS.

### Graphics, Drawing, Color, and Printing

Create and manage images, in bitmap, PDF, and other formats.

Draw shapes, images, and other content on the screen.

Represent colors using built-in or custom formats, and give users options for selecting and applying colors.

Display the system print panels and manage the printing process.

### Text

Display text and check spelling.

Manage text storage and perform custom layout of text-based content in your app’s views.

Manage the fonts used to display text.

Add support for Writing Tools to your app’s text views.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

Review symbols that are no longer supported, and find the replacements to use instead.

### Reference

Enumerations for use with multiple classes.

Constants for use with multiple classes.

Data types for use with multiple classes.

Macros for use with multiple classes.

---

# https://developer.apple.com/documentation/appkit/app-and-environment

Collection

- AppKit
- App and Environment

API Collection

# App and Environment

Learn about the objects that you use to interact with the system.

## Topics

### Life Cycle

`class NSApplication`

An object that manages an app’s main event loop and resources used by all of that app’s objects.

`class NSRunningApplication`

An object that can manipulate and provide information for a single instance of an app.

`protocol NSApplicationDelegate`

A set of methods that manage your app’s life cycle and its interaction with common system services.

Called by the main function to create and run the application.

### Environment

`class NSWorkspace`

A workspace that can launch other apps and perform a variety of file-handling services.

`class OpenConfiguration`

The configuration options for opening URLs or launching apps.

`struct NSAppKitVersion`

Constants for determining which version of AppKit is available.

`LSMinimumSystemVersion`

The minimum version of the operating system required for the app to run in macOS.

### Handoff

`class NSUserActivity`

A representation of the state of your app at a moment in time.

`protocol NSUserActivityRestoring`

A protocol that marks classes to restore the state of your app to continue a user activity.

### App Services

`class NSSharingService`

An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.

`class NSSharingServicePicker`

A list of sharing services that the user can choose from.

`protocol NSPreviewRepresentableActivityItem`

An interface you adopt in custom objects that you want to share using the macOS share sheet.

`class NSSharingServicePickerToolbarItem`

A toolbar item that displays the macOS share sheet.

`protocol NSServicesMenuRequestor`

A set of methods that support interaction with items users can share through a sharing service.

`protocol NSCloudSharingServiceDelegate`

A set of methods for responding to the life cycle events of the cloud-sharing service.

Configure the contents of your app’s Services menu.

### App Help

`class NSHelpManager`

An object for displaying online help for an app.

`protocol NSUserInterfaceItemSearching`

A set of methods an app can implement to provide Spotlight for Help for its own custom help data.

### Errors

These constants represent errors generated by AppKit.

## See Also

### App Structure

Organize your app’s data and preferences, and share that data on the pasteboard or in iCloud.

Automatically synchronize your data model with your app’s interface using Cocoa Bindings.

Manage the storyboards and nib files containing your app’s user interface, and learn how to load data that is stored in resource files.

Extend your app’s basic functionality to other parts of the system.

---

# https://developer.apple.com/documentation/appkit/documents-data-and-pasteboard

Collection

- AppKit
- Documents, Data, and Pasteboard

API Collection

# Documents, Data, and Pasteboard

Organize your app’s data and preferences, and share that data on the pasteboard or in iCloud.

## Topics

### Documents

Developing a Document-Based App

Write an app that creates, manages, edits, and saves text documents.

`class NSDocument`

An abstract class that defines the interface for macOS documents.

`class NSDocumentController`

An object that manages an app’s documents.

`class NSPersistentDocument`

A document object that can integrate with Core Data.

### User Preferences

`class NSUserDefaultsController`

A controller that accesses user preference information for your app from the user’s defaults database.

`class NSUbiquitousKeyValueStore`

An iCloud-based container of key-value pairs you share among instances of your app running on a person’s devices.

### Pasteboard

`class NSPasteboard`

An object that transfers data to and from the pasteboard server.

`class NSPasteboardItem`

An item on a pasteboard.

`protocol NSPasteboardReading`

A set of methods that defines the interface for initializing an object from a pasteboard.

`protocol NSPasteboardWriting`

A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.

`protocol NSPasteboardItemDataProvider`

A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.

`struct ContentsOptions`

Options for preparing the pasteboard.

`protocol NSPasteboardTypeOwner`

An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

### File Promises

File promises support UTI-based drag and drop functions, including drag flocking. When possible, they’re pasteboard compliant and file coordinated.

Supporting Drag and Drop Through File Promises

Receive and provide file promises to support dragged app files and pasteboard operations.

Supporting Table View Drag and Drop Through File Promises

Share data between macOS apps during drag and drop by using an item provider.

Supporting Collection View Drag and Drop Through File Promises

`class NSFilePromiseProvider`

An object that provides a promise for the pasteboard.

`protocol NSFilePromiseProviderDelegate`

A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.

`class NSFilePromiseReceiver`

An object that receives a file promise from the pasteboard.

### Object Editing

`protocol NSEditor`

`protocol NSEditorRegistration`

A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.

## See Also

### App Structure

Learn about the objects that you use to interact with the system.

Automatically synchronize your data model with your app’s interface using Cocoa Bindings.

Manage the storyboards and nib files containing your app’s user interface, and learn how to load data that is stored in resource files.

Extend your app’s basic functionality to other parts of the system.

---

# https://developer.apple.com/documentation/appkit/cocoa-bindings

Collection

- AppKit
- Cocoa Bindings

API Collection

# Cocoa Bindings

Automatically synchronize your data model with your app’s interface using Cocoa Bindings.

## Topics

### Core Controllers

`class NSObjectController`

A controller that can manage an object’s properties referenced by key-value paths.

`class NSController`

An abstract class that implements the `NSEditor` and `NSEditorRegistration` informal protocols required for controller classes.

### Tree-Based Data

Navigating Hierarchical Data Using Outline and Split Views

Build a structured user interface that simplifies navigation in your app.

`class NSTreeController`

A bindings-compatible controller that manages a tree of objects.

`class NSTreeNode`

A node in a tree of nodes.

### Array-Based Data

`class NSArrayController`

A bindings-compatible controller that manages a collection of objects.

### Key-Value Data

`class NSDictionaryController`

A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.

`class NSDictionaryControllerKeyValuePair`

A set of methods implemented by arranged objects to give access to information about those objects.

`struct NSBindingName`

Values that specify a binding for certain methods.

`struct NSBindingOption`

`struct NSBindingInfoKey`

Tests whether a given object is special marker object used for indicating the state of a selection in relation to a key.

A set of methods that you can use to create and remove bindings between view objects and controllers, or between controllers and model objects.

These constants define keys in the binding information dictionary.

### Data Placeholders

`class NSBindingSelectionMarker`

A set of methods that an object can implement to register default placeholders to be displayed for a binding, when no other placeholder is specified.

## See Also

### App Structure

Learn about the objects that you use to interact with the system.

Organize your app’s data and preferences, and share that data on the pasteboard or in iCloud.

Manage the storyboards and nib files containing your app’s user interface, and learn how to load data that is stored in resource files.

Extend your app’s basic functionality to other parts of the system.

---

# https://developer.apple.com/documentation/appkit/app-extensions

Collection

- AppKit
- App Extensions

API Collection

# App Extensions

Extend your app’s basic functionality to other parts of the system.

## Topics

### Extension Support

`class NSExtensionContext`

The host app context from which an app extension is invoked.

`protocol NSExtensionRequestHandling`

The interface an app extension uses to respond to a request from a host app.

### Quick Actions

Quick Actions allow your app extension to appear in the Finder Preview pane, Quick Actions menu, and Touch Bar.

Add Functionality to Finder with Action Extensions

Implement Action Extensions to provide quick access to commonly used features of your app.

`NSExtensionServiceAllowsFinderPreviewItem`

A Boolean value indicating whether the extension appears in the Finder Preview pane and Quick Actions menu.

`NSExtensionServiceFinderPreviewLabel`

A name for display when the extension appears in the Finder Preview pane and Quick Actions menu.

`NSExtensionServiceFinderPreviewIconName`

The name of an icon for display when the extension appears in the Finder Preview pane and Quick Actions menu.

`NSExtensionServiceAllowsTouchBarItem`

A Boolean value indicating whether the extension appears as a Quick Action in the Touch Bar.

`NSExtensionServiceTouchBarLabel`

A name for display when the extension appears as a Quick Action in the Touch Bar.

`NSExtensionServiceTouchBarIconName`

The name of an icon for display when the extension appears as a Quick Action in the Touch Bar

`NSExtensionServiceTouchBarBezelColorName`

The color to use for the bezel around the extension when it appears as a Quick Action in the Touch Bar.

### Mail Extensions

Build Mail App Extensions

Create app extensions that block content, perform message and composing actions, and help message security.

### UTI Subtypes for Data Detector Types

`let NSTypeIdentifierAddressText: String`

`let NSTypeIdentifierDateText: String`

`let NSTypeIdentifierPhoneNumberText: String`

`let NSTypeIdentifierTransitInformationText: String`

## See Also

### App Structure

Learn about the objects that you use to interact with the system.

Organize your app’s data and preferences, and share that data on the pasteboard or in iCloud.

Automatically synchronize your data model with your app’s interface using Cocoa Bindings.

Manage the storyboards and nib files containing your app’s user interface, and learn how to load data that is stored in resource files.

---

# https://developer.apple.com/documentation/appkit/views-and-controls

Collection

- AppKit
- Views and Controls

API Collection

# Views and Controls

Present your content onscreen and handle user input and events.

## Overview

Views and controls are the building blocks of your app’s user interface.

Views can host other views. Embedding one view inside another creates a containment relationship between the host view (known as the _superview_) and the embedded view (known as the _subview_). View hierarchies make it easier to manage views.

You can also use views to do any of the following:

- Respond to touches and other events (either directly or in coordination with gesture recognizers).

- Draw custom content using Core Graphics.

- Respond to focus changes.

- Animate the size, position, and appearance attributes of the view using Core Animation.

Favor AppKit views and controls whenever possible. These components adapt automatically to system changes, and many support appearance customizations to support the look and feel you want in your app. When AppKit doesn’t provide the exact view or control you need, you can create a custom view.

`NSView` is the root class for all views and defines their common behavior. `NSControl` defines additional behaviors that are specific to buttons, switches, and other views designed for user interactions.

For additional information about how to use views and controls, see Human Interface Guidelines.

## Topics

### View fundamentals

`class NSView`

The infrastructure for drawing, printing, and handling events in an app.

`class NSControl`

A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.

`class NSCell`

A mechanism for displaying text or images in a view object without the overhead of a full `NSView` subclass.

`class NSActionCell`

An active area inside a control.

### Container views

Use container views to arrange the views of your interface and to facilitate navigation among those views.

Localization-friendly layouts in macOS

This project demonstrates localization-friendly auto layout constraints.

Arrange views in a flexible grid, and handle the layout associated with those views.

`class NSSplitView`

A view that arranges two or more views in a linear stack running horizontally or vertically.

Organize Your User Interface with a Stack View

Group individual views in your app’s user interface into a scrollable stack view.

`class NSStackView`

A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.

`class NSTabView`

A multipage interface that displays one page at a time.

Provide an interface for navigating content that is too large to fit in the available space.

### Content views

Use content views to organize and display your app’s data.

Provide a column-based interface for viewing and navigating hierarchical information.

Display one or more subviews in a highly configurable arrangement.

Display a list-based interface for hierarchical data, where each level of hierarchy is indented from the previous one.

Display custom data in rows and columns.

`class NSTextView`

A view that draws text and handles user interactions with that text.

### Controls

Use controls to handle specific types of user interactions. Controls are specialized views that use the target-action design pattern to notify your app of interactions with their content.

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

Display a range of values from which the user selects a single value.

`class NSStepper`

An interface with up and down arrow buttons for incrementing or decrementing a value.

Provide a simple interface for displaying and editing text, including support for password fields and secure forms of text entry.

Provide a text field whose text can be rendered in a visually distinct way so that users can recognize portions more easily.

Provide a space for controls under a window’s title bar and above your custom content.

`class NSSwitch`

A control that offers a binary choice.

`class NSMatrix`

A legacy interface for grouping radio buttons or other types of cells together.

### Liquid Glass effects

`class NSGlassEffectView`

A view that embeds its content view in a dynamic glass effect.

`enum Style`

`class NSGlassEffectContainerView`

A view that efficiently merges descendant glass effect views together when they are within a specified proximity to each other.

### Interacting with adjacent views

`class NSBackgroundExtensionView`

A view that extends content to fill its own bounds.

### Visual adornments

Add purely decorative elements to your user interface.

`class NSVisualEffectView`

A view that adds translucency and vibrancy effects to the views in your interface.

`class NSBox`

A stylized rectangular box with an optional title.

### UI validation

`protocol NSUserInterfaceValidations`

A protocol that a custom class can adopt to manage the enabled state of a UI element.

`protocol NSValidatedUserInterfaceItem`

A protocol that a custom class can adopt to manage the automatic enablement of a UI control.

### Tool tips

`protocol NSViewToolTipOwner`

A set of methods for dynamically associating a tool tip with a view.

### Related types

`enum NSRectAlignment`

Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.

`struct NSDirectionalEdgeInsets`

The inset distances for views, taking the user interface layout direction into account.

`struct NSDirectionalRectEdge`

## See Also

### User Interface

Manage your user interface, including the size and position of views in a window.

Position and size views using a stack view or Auto Layout constraints.

Add Dark Mode support to your app, and use appearance proxies to modify your UI.

Animate your views and other content to create a more engaging experience for users.

Organize your view hierarchies and facilitate their display onscreen.

Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.

Supporting Continuity Camera in Your Mac App

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

---

# https://developer.apple.com/documentation/appkit/view-management

Collection

- AppKit
- View Management

API Collection

# View Management

Manage your user interface, including the size and position of views in a window.

## Topics

### Content Controllers

`class NSWindowController`

A controller that manages a window, usually a window stored in a nib file.

`class NSViewController`

A controller that manages a view, typically loaded from a nib file.

`class NSTitlebarAccessoryViewController`

An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.

### Split View Interface

`class NSSplitViewController`

An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.

`class NSSplitView`

A view that arranges two or more views in a linear stack running horizontally or vertically.

`class NSSplitViewItem`

An item in a split view controller.

### Stack View Interface

`class NSStackView`

A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.

### Tab View Interface

`class NSTabViewController`

A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.

`class NSTabView`

A multipage interface that displays one page at a time.

`class NSTabViewItem`

An item in a tab view.

### Paged Interface

`class NSPageController`

An object that controls swipe navigation and animations between views or view content.

### Media Library Interface

`class NSMediaLibraryBrowserController`

An object that configures and displays a Media Library Browser panel.

## See Also

### User Interface

Present your content onscreen and handle user input and events.

Position and size views using a stack view or Auto Layout constraints.

Add Dark Mode support to your app, and use appearance proxies to modify your UI.

Animate your views and other content to create a more engaging experience for users.

Organize your view hierarchies and facilitate their display onscreen.

Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.

Supporting Continuity Camera in Your Mac App

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

---

# https://developer.apple.com/documentation/appkit/view-layout

Collection

- AppKit
- View Layout

API Collection

# View Layout

Position and size views using a stack view or Auto Layout constraints.

## Overview

When you design your app’s interface, you position views and other interface elements in your app’s windows and size them appropriately. However, the size and position of those views may need to change at runtime for a few reasons:

- The user resizes the window containing your views.

- The user’s language choice requires size changes for labels and text-based views.

`NSStackView` objects adjust the position of their contained views automatically when interface dimensions change. Alternatively, Auto Layout constraints let you specify the rules that determine the precise size and position of the views in your interface

## Topics

### Stack View

`class NSStackView`

A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.

### Auto Layout Constraints

`class NSLayoutConstraint`

The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

### Layout Guides

`class NSLayoutGuide`

A rectangular area that can interact with Auto Layout.

`class NSLayoutDimension`

A factory class for creating size-based layout constraint objects using a fluent API.

### Anchors

`class NSLayoutAnchor`

A factory class for creating layout constraint objects using a fluent API.

`class NSLayoutXAxisAnchor`

A factory class for creating horizontal layout constraint objects using a fluent API.

`class NSLayoutYAxisAnchor`

A factory class for creating vertical layout constraint objects using a fluent API.

### View Compression

`protocol NSUserInterfaceCompression`

A protocol that describes how a UI control should redisplay when space is restricted.

## See Also

### User Interface

Present your content onscreen and handle user input and events.

Manage your user interface, including the size and position of views in a window.

Add Dark Mode support to your app, and use appearance proxies to modify your UI.

Animate your views and other content to create a more engaging experience for users.

Organize your view hierarchies and facilitate their display onscreen.

Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.

Supporting Continuity Camera in Your Mac App

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

---

# https://developer.apple.com/documentation/appkit/appearance-customization

Collection

- AppKit
- Appearance Customization

API Collection

# Appearance Customization

Add Dark Mode support to your app, and use appearance proxies to modify your UI.

## Topics

### Dark Mode

Update colors, images, and behaviors so that your app adapts automatically when Dark Mode is active.

### Appearance System

Apply standard themes to the views in your interface.

`class NSAppearance`

An object that manages standard appearance attributes for UI elements in an app.

`protocol NSAppearanceCustomization`

A set of methods for getting and setting the appearance attributes of a view.

## See Also

### User Interface

Present your content onscreen and handle user input and events.

Manage your user interface, including the size and position of views in a window.

Position and size views using a stack view or Auto Layout constraints.

Animate your views and other content to create a more engaging experience for users.

Organize your view hierarchies and facilitate their display onscreen.

Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.

Supporting Continuity Camera in Your Mac App

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

---

# https://developer.apple.com/documentation/appkit/animation

Collection

- AppKit
- Animation

API Collection

# Animation

Animate your views and other content to create a more engaging experience for users.

## Topics

### View-Based Animations

`class NSViewAnimation`

An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.

`protocol NSAnimatablePropertyContainer`

A set of methods that defines a way to add animation to an existing class with a minimum of API impact.

`class NSAnimationContext`

An animation context, which contains information about environment and state.

`typealias Progress`

The animation progress, as a floating-point number between `0.0` and `1.0`.

`enum NSAnimationEffect`

The type for standard system animation effects, which include both display and sound.

Deprecated

### Presentations

`protocol NSViewControllerPresentationAnimator`

A set of methods that let you define animations to play when transitioning between two view controllers.

### Custom Animations

`class NSAnimation`

An object that manages the timing and progress of animations in the user interface.

`protocol NSAnimationDelegate`

A set of optional methods implemented by delegates of `NSAnimation` objects.

## See Also

### User Interface

Present your content onscreen and handle user input and events.

Manage your user interface, including the size and position of views in a window.

Position and size views using a stack view or Auto Layout constraints.

Add Dark Mode support to your app, and use appearance proxies to modify your UI.

Organize your view hierarchies and facilitate their display onscreen.

Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.

Supporting Continuity Camera in Your Mac App

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

---

# https://developer.apple.com/documentation/appkit/windows-panels-and-screens

Collection

- AppKit
- Windows, Panels, and Screens

API Collection

# Windows, Panels, and Screens

Organize your view hierarchies and facilitate their display onscreen.

## Topics

### Windows

`class NSWindow`

A window that an app displays on the screen.

`class NSPanel`

A special kind of window that typically performs a function that is auxiliary to the main window.

`protocol NSWindowDelegate`

A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.

`class NSWindowTab`

A tab associated with a window that is part of a tabbing group.

`class NSWindowTabGroup`

A group of windows that display together as a single tabbed window.

### Window Restoration

Restoring your app’s state with AppKit

Provide continuity for people using your app by preserving current activities on macOS.

`protocol NSWindowRestoration`

A set of methods that restoration classes must implement to handle the recreation of windows.

`protocol NSUserInterfaceItemIdentification`

A set of methods used to associate a unique identifier with objects in your user interface.

### Screens

`class NSScreen`

An object that describes the attributes of a computer’s monitor or screen.

### Popovers

`class NSPopover`

A means to display additional content related to existing content on the screen.

`protocol NSPopoverDelegate`

A set of optional methods that a popover delegate can implement to provide additional or custom functionality.

### Alerts

`class NSAlert`

A modal dialog or sheet attached to a document window.

`protocol NSAlertDelegate`

A set of optional methods implemented by the delegate of an `NSAlert` object to respond to a user’s request for help.

### Open and Save Panels

`class NSOpenPanel`

A panel that prompts the user to select a file to open.

`class NSSavePanel`

A panel that prompts the user for information about where to save a file.

`protocol NSOpenSavePanelDelegate`

A set of methods for managing interactions with an open or save panel.

### Share Panel

`class NSSharingServicePicker`

A list of sharing services that the user can choose from.

`protocol NSPreviewRepresentableActivityItem`

An interface you adopt in custom objects that you want to share using the macOS share sheet.

`class NSPreviewRepresentingActivityItem`

A type that adds metadata to an item you share using the macOS share sheet.

### Print and PDF Panels

`class NSPDFPanel`

A Save or Export as PDF panel that’s consistent with the macOS user interface.

`protocol NSPrintPanelAccessorizing`

A set of methods that a Print panel object can use to get information from a printing accessory controller.

### Color Panels

`class NSColorPanel`

A standard user interface for selecting color in an app.

`protocol NSColorPickingCustom`

A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel.

`protocol NSColorPickingDefault`

A set of methods that provides basic behavior for a color picker.

`class NSColorPicker`

An abstract superclass that implements the default color picking protocol.

### Font Panels

`class NSFontPanel`

The Font panel—a user interface object that displays a list of available fonts, letting the user preview them and change the font used to display text.

`struct ModeMask`

A set of methods you use to tell the Font panel to display some or all of its elements.

`protocol NSFontChanging`

## See Also

### User Interface

Present your content onscreen and handle user input and events.

Manage your user interface, including the size and position of views in a window.

Position and size views using a stack view or Auto Layout constraints.

Add Dark Mode support to your app, and use appearance proxies to modify your UI.

Animate your views and other content to create a more engaging experience for users.

Play sounds and haptic feedback, and incorporate speech recognition and synthesis into your interface.

Supporting Continuity Camera in Your Mac App

Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.

---

# https://developer.apple.com/documentation/appkit/menus-cursors-and-the-dock

Collection

- AppKit
- Menus, Cursors, and the Dock

API Collection

# Menus, Cursors, and the Dock

Implement menus and cursors to facilitate interactions with your app, and use your app’s Dock tile to convey updated information.

## Topics

### Menus

`class NSMenu`

An object that manages an app’s menus.

`class NSMenuItem`

A command item in an app menu.

`class NSMenuItemBadge`

A control that provides additional quantitative information specific to a menu item, such as the number of available updates.

`protocol NSMenuDelegate`

The optional methods implemented by delegates of `NSMenu` objects to manage menu display and handle some events.

### Menu Validation

`protocol NSMenuItemValidation`

### Menu Bar Items

`class NSStatusBar`

An object that manages a collection of status items displayed within the system-wide menu bar.

`class NSStatusItem`

An individual element displayed in the system menu bar.

`class NSStatusBarButton`

The appearance and behavior of an item in the systemwide menu bar.

### Cursors

`class NSCursor`

A pointer (also called a cursor).

`class NSTrackingArea`

A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.

### The Dock

`class NSDockTile`

The visual representation of your app’s miniaturized windows and app icon as they appear in the Dock.

`protocol NSDockTilePlugIn`

A set of methods implemented by plug-ins that allow an app’s Dock tile to be customized while the app is not running.

## See Also

### User Interactions

Handle events related to mouse, keyboard, and trackpad input.

Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.

Display interactive content and controls in the Touch Bar.

Support the direct manipulation of your app’s content using drag and drop.

Make your AppKit apps accessible to everyone who uses macOS.

---

