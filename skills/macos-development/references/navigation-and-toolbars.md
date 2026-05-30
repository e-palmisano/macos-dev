# Navigation, Split Views, Toolbars & Inspectors

> Cross-framework navigation: SwiftUI NavigationStack/NavigationSplitView and AppKit NSToolbar/NSSplitView/NSSplitViewController, plus toolbars, inspectors, spacers, and the new tab-bar minimize behavior.

---

# https://developer.apple.com/documentation/swiftui/navigation

Collection

- SwiftUI
- Navigation

API Collection

# Navigation

Enable people to move between different parts of your app’s view hierarchy within a scene.

## Overview

Use navigation containers to provide structure to your app’s user interface, enabling people to easily move among the parts of your app.

For example, people can move forward and backward through a stack of views using a `NavigationStack`, or choose which view to display from a tab bar using a `TabView`.

Configure navigation containers by adding view modifiers like `navigationSplitViewStyle(_:)` to the container. Use other modifiers on the views inside the container to affect the container’s behavior when showing that view. For example, you can use `navigationTitle(_:)` on a view to provide a toolbar title to display when showing that view.

## Topics

### Essentials

Understanding the navigation stack

Learn about the navigation stack, links, and how to manage navigation types in your app’s structure.

### Presenting views in columns

Bringing robust navigation structure to your SwiftUI app

Use navigation links, stacks, destinations, and paths to provide a streamlined experience for all platforms, as well as behaviors such as deep linking and state restoration.

Migrating to new navigation types

Improve navigation behavior in your app by replacing navigation views with navigation stacks and navigation split views.

`struct NavigationSplitView`

A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.

Sets the style for navigation split views within this view.

Sets a fixed, preferred width for the column containing this view.

Sets a flexible, preferred width for the column containing this view.

`struct NavigationSplitViewVisibility`

The visibility of the leading columns in a navigation split view.

`struct NavigationLink`

A view that controls a navigation presentation.

### Stacking views in one column

`struct NavigationStack`

A view that displays a root view and enables you to present additional views over the root view.

`struct NavigationPath`

A type-erased list of data representing the content of a navigation stack.

Associates a destination view with a presented data type for use within a navigation stack.

Associates a destination view with a binding that can be used to push the view onto a `NavigationStack`.

`func navigationDestination<D, C>(item: Binding<Optional<D>>, destination: (D) -> C) -> some View`

Associates a destination view with a bound value for use within a navigation stack or navigation split view

### Managing column collapse

`struct NavigationSplitViewColumn`

A view that represents a column in a navigation split view.

### Setting titles for navigation content

`func navigationTitle(_:)`

Configures the view’s title for purposes of navigation, using a string binding.

`func navigationSubtitle(_:)`

Configures the view’s subtitle for purposes of navigation.

`func navigationDocument(_:)`

Configures the view’s document for purposes of navigation.

`func navigationDocument(_:preview:)`

### Configuring the navigation bar

Hides the navigation bar back button for the view.

Configures the title display mode for this view.

`struct NavigationBarItem`

A configuration for a navigation bar that represents a view at the top of a navigation stack.

### Configuring the sidebar

`var sidebarRowSize: SidebarRowSize`

The current size of sidebar rows.

`enum SidebarRowSize`

The standard sizes of sidebar rows.

### Presenting views in tabs

Enhancing your app’s content with tab navigation

Keep your app content front and center while providing quick access to navigation using the tab bar.

`struct TabView`

A view that switches between multiple child views using interactive user interface elements.

`struct Tab`

The content for a tab and the tab’s associated tab item in a tab view.

`struct TabRole`

A value that defines the purpose of the tab.

`struct TabSection`

A container that you can use to add hierarchy within a tab view.

Sets the style for the tab view within the current environment.

### Configuring a tab bar

Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.

Adds a custom header to the sidebar of a tab view.

Adds a custom footer to the sidebar of a tab view.

Adds a custom bottom bar to the sidebar of a tab view.

`struct AdaptableTabBarPlacement`

A placement for tabs in a tab view using the adaptable sidebar style.

`var tabBarPlacement: TabBarPlacement?`

The current placement of the tab bar.

`struct TabBarPlacement`

A placement for tabs in a tab view.

`var isTabBarShowingSections: Bool`

A Boolean value that determines whether a tab view shows the expanded contents of a tab section.

`struct TabBarMinimizeBehavior`

`enum TabViewBottomAccessoryPlacement`

A placement of the bottom accessory in a tab view. You can use this to adjust the content of the accessory view based on the placement.

### Configuring a tab

Adds custom actions to a section.

`struct TabPlacement`

A place that a tab can appear.

`struct TabContentBuilder`

A result builder that constructs tabs for a tab view that supports programmatic selection. This builder requires that all tabs in the tab view have the same selection type.

`protocol TabContent`

A type that provides content for programmatically selectable tabs in a tab view.

`struct AnyTabContent`

Type erased tab content.

### Enabling tab customization

Specifies the customizations to apply to the sidebar representation of the tab view.

`struct TabViewCustomization`

The customizations a person makes to an adaptable sidebar tab view.

`struct TabCustomizationBehavior`

The customization behavior of customizable tab view content.

### Displaying views in multiple panes

`struct HSplitView`

A layout container that arranges its children in a horizontal line and allows the user to resize them using dividers placed between them.

`struct VSplitView`

A layout container that arranges its children in a vertical line and allows the user to resize them using dividers placed between them.

### Deprecated Types

`struct NavigationView`

A view for presenting a stack of views that represents a visible path in a navigation hierarchy.

Deprecated

Sets the tab bar item associated with this view.

## See Also

### App structure

Define the entry point and top-level structure of your app.

Declare the user interface groupings that make up the parts of your app.

Display user interface content in a window or a collection of windows.

Display unbounded content in a person’s surroundings.

Enable people to open and manage documents.

Present content in a separate view that offers focused interaction.

Provide immediate access to frequently used commands and controls.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

---

# https://developer.apple.com/documentation/SwiftUI/NavigationStack

- SwiftUI
- NavigationStack

Structure

# NavigationStack

A view that displays a root view and enables you to present additional views over the root view.

@MainActor @preconcurrency

## Mentioned in

Migrating to new navigation types

Adding a search interface to your app

Displaying data in lists

Understanding the navigation stack

## Overview

Use a navigation stack to present a stack of views over a root view. People can add views to the top of the stack by clicking or tapping a `NavigationLink`, and remove views using built-in, platform-appropriate controls, like a Back button or a swipe gesture. The stack always displays the most recently added view that hasn’t been removed, and doesn’t allow the root view to be removed.

To create navigation links, associate a view with a data type by adding a `navigationDestination(for:destination:)` modifier inside the stack’s view hierarchy. Then initialize a `NavigationLink` that presents an instance of the same kind of data. The following stack displays a `ParkDetails` view for navigation links that present data of type `Park`:

NavigationStack {
List(parks) { park in
NavigationLink(park.name, value: park)
}
.navigationDestination(for: Park.self) { park in
ParkDetails(park: park)
}
}

In this example, the `List` acts as the root view and is always present. Selecting a navigation link from the list adds a `ParkDetails` view to the stack, so that it covers the list. Navigating back removes the detail view and reveals the list again. The system disables backward navigation controls when the stack is empty and the root view, namely the list, is visible.

### Manage navigation state

By default, a navigation stack manages state to keep track of the views on the stack. However, your code can share control of the state by initializing the stack with a binding to a collection of data values that you create. The stack adds items to the collection as it adds views to the stack and removes items when it removes views. For example, you can create a `State` property to manage the navigation for the park detail view:

@State private var presentedParks: [Park] = []

Initializing the state as an empty array indicates a stack with no views. Provide a `Binding` to this state property using the dollar sign (`$`) prefix when you create a stack using the `init(path:root:)` initializer:

NavigationStack(path: $presentedParks) {
List(parks) { park in
NavigationLink(park.name, value: park)
}
.navigationDestination(for: Park.self) { park in
ParkDetails(park: park)
}
}

Like before, when someone taps or clicks the navigation link for a park, the stack displays the `ParkDetails` view using the associated park data. However, now the stack also puts the park data in the `presentedParks` array. Your code can observe this array to read the current stack state. It can also modify the array to change the views on the stack. For example, you can create a method that configures the stack with a specific set of parks:

func showParks() {
presentedParks = [Park("Yosemite"), Park("Sequoia")]
}

The `showParks` method replaces the stack’s display with a view that shows details for Sequoia, the last item in the new `presentedParks` array. Navigating back from that view removes Sequoia from the array, which reveals a view that shows details for Yosemite. Use a path to support deep links, state restoration, or other kinds of programmatic navigation.

### Navigate to different view types

To create a stack that can present more than one kind of view, you can add multiple `navigationDestination(for:destination:)` modifiers inside the stack’s view hierarchy, with each modifier presenting a different data type. The stack matches navigation links with navigation destinations based on their respective data types.

To create a path for programmatic navigation that contains more than one kind of data, you can use a `NavigationPath` instance as the path.

## Topics

### Creating a navigation stack

Creates a navigation stack that manages its own navigation state.

### Creating a navigation stack with a path

`init(path:root:)`

Creates a navigation stack with homogeneous navigation state that you can control.

## Relationships

### Conforms To

- `View`

## See Also

### Stacking views in one column

`struct NavigationPath`

A type-erased list of data representing the content of a navigation stack.

Associates a destination view with a presented data type for use within a navigation stack.

Associates a destination view with a binding that can be used to push the view onto a `NavigationStack`.

`func navigationDestination<D, C>(item: Binding<Optional<D>>, destination: (D) -> C) -> some View`

Associates a destination view with a bound value for use within a navigation stack or navigation split view

---

# https://developer.apple.com/documentation/SwiftUI/NavigationSplitView

- SwiftUI
- NavigationSplitView

Structure

# NavigationSplitView

A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.

## Mentioned in

Migrating to new navigation types

Adding a search interface to your app

## Overview

You create a navigation split view with two or three columns, and typically use it as the root view in a `Scene`. People choose one or more items in a leading column to display details about those items in subsequent columns.

To create a two-column navigation split view, use the `init(sidebar:detail:)` initializer:

var body: some View {
NavigationSplitView {
List(model.employees, selection: $employeeIds) { employee in
Text(employee.name)
}
} detail: {
EmployeeDetails(for: employeeIds)
}
}

In the above example, the navigation split view coordinates with the `List` in its first column, so that when people make a selection, the detail view updates accordingly. Programmatic changes that you make to the selection property also affect both the list appearance and the presented detail view.

To create a three-column view, use the `init(sidebar:content:detail:)` initializer. The selection in the first column affects the second, and the selection in the second column affects the third. For example, you can show a list of departments, the list of employees in the selected department, and the details about all of the selected employees:

@State private var departmentId: Department.ID? // Single selection.

var body: some View {
NavigationSplitView {
List(model.departments, selection: $departmentId) { department in
Text(department.name)
}
} content: {
if let department = model.department(id: departmentId) {
List(department.employees, selection: $employeeIds) { employee in
Text(employee.name)
}
} else {
Text("Select a department")
}
} detail: {
EmployeeDetails(for: employeeIds)
}
}

You can also embed a `NavigationStack` in a column. Tapping or clicking a `NavigationLink` that appears in an earlier column sets the view that the stack displays over its root view. Activating a link in the same column adds a view to the stack. Either way, the link must present a data type for which the stack has a corresponding `navigationDestination(for:destination:)` modifier.

On watchOS and tvOS, and with narrow sizes like on iPhone or on iPad in Slide Over, the navigation split view collapses all of its columns into a stack, and shows the last column that displays useful information. For example, the three-column example above shows the list of departments to start, the employees in the department after someone selects a department, and the employee details when someone selects an employee. For rows in a list that have `NavigationLink` instances, the list draws disclosure chevrons while in the collapsed state.

### Control column visibility

You can programmatically control the visibility of navigation split view columns by creating a `State` value of type `NavigationSplitViewVisibility`. Then pass a `Binding` to that state to the appropriate initializer — such as `init(columnVisibility:sidebar:detail:)` for two columns, or the `init(columnVisibility:sidebar:content:detail:)` for three columns.

The following code updates the first example above to always hide the first column when the view appears:

@State private var columnVisibility =
NavigationSplitViewVisibility.detailOnly

var body: some View {
NavigationSplitView(columnVisibility: $columnVisibility) {
List(model.employees, selection: $employeeIds) { employee in
Text(employee.name)
}
} detail: {
EmployeeDetails(for: employeeIds)
}
}

The split view ignores the visibility control when it collapses its columns into a stack.

### Collapsed split views

At narrow size classes, such as on iPhone or Apple Watch, a navigation split view collapses into a single stack. Typically SwiftUI automatically chooses the view to show on top of this single stack, based on the content of the split view’s columns.

For custom navigation experiences, you can provide more information to help SwiftUI choose the right column. Create a `State` value of type `NavigationSplitViewColumn`. Then pass a `Binding` to that state to the appropriate initializer, such as `init(preferredCompactColumn:sidebar:detail:)` or `init(preferredCompactColumn:sidebar:content:detail:)`.

The following code shows the blue detail view when run on iPhone. When the person using the app taps the back button, they’ll see the yellow view. The value of `preferredPreferredCompactColumn` will change from `.detail` to `.sidebar`:

@State private var preferredColumn =
NavigationSplitViewColumn.detail

var body: some View {
NavigationSplitView(preferredCompactColumn: $preferredColumn) {
Color.yellow
} detail: {
Color.blue
}
}

### Customize a split view

To specify a preferred column width in a navigation split view, use the `navigationSplitViewColumnWidth(_:)` modifier. To set minimum, maximum, and ideal sizes for a column, use `navigationSplitViewColumnWidth(min:ideal:max:)`. You can specify a different modifier in each column. The navigation split view does its best to accommodate the preferences that you specify, but might make adjustments based on other constraints.

To specify how columns in a navigation split view interact, use the `navigationSplitViewStyle(_:)` modifier with a `NavigationSplitViewStyle` value. For example, you can specify whether to emphasize the detail column or to give all of the columns equal prominence.

On some platforms, `NavigationSplitView` adds a `sidebarToggle` toolbar item. Use the `toolbar(removing:)` modifier to remove the default item.

## Topics

### Creating a navigation split view

Creates a two-column navigation split view.

Creates a three-column navigation split view.

### Hiding columns in a navigation split view

Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility.

Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility.

### Specifying a preferred compact column

Creates a two-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.

Creates a three-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.

### Specifying a preferred compact column and column visibility

Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility in regular sizes and which column appears on top when the view collapses into a single column in narrow sizes.

Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility in regular sizes and which column appears on top when the view collapses into a single column in narrow sizes.

## Relationships

### Conforms To

- `View`

## See Also

### Presenting views in columns

Bringing robust navigation structure to your SwiftUI app

Use navigation links, stacks, destinations, and paths to provide a streamlined experience for all platforms, as well as behaviors such as deep linking and state restoration.

Improve navigation behavior in your app by replacing navigation views with navigation stacks and navigation split views.

Sets the style for navigation split views within this view.

Sets a fixed, preferred width for the column containing this view.

Sets a flexible, preferred width for the column containing this view.

`struct NavigationSplitViewVisibility`

The visibility of the leading columns in a navigation split view.

`struct NavigationLink`

A view that controls a navigation presentation.

---

# https://developer.apple.com/documentation/swiftui/navigationsplitview

- SwiftUI
- NavigationSplitView

Structure

# NavigationSplitView

A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.

## Mentioned in

Migrating to new navigation types

Adding a search interface to your app

## Overview

You create a navigation split view with two or three columns, and typically use it as the root view in a `Scene`. People choose one or more items in a leading column to display details about those items in subsequent columns.

To create a two-column navigation split view, use the `init(sidebar:detail:)` initializer:

var body: some View {
NavigationSplitView {
List(model.employees, selection: $employeeIds) { employee in
Text(employee.name)
}
} detail: {
EmployeeDetails(for: employeeIds)
}
}

In the above example, the navigation split view coordinates with the `List` in its first column, so that when people make a selection, the detail view updates accordingly. Programmatic changes that you make to the selection property also affect both the list appearance and the presented detail view.

To create a three-column view, use the `init(sidebar:content:detail:)` initializer. The selection in the first column affects the second, and the selection in the second column affects the third. For example, you can show a list of departments, the list of employees in the selected department, and the details about all of the selected employees:

@State private var departmentId: Department.ID? // Single selection.

var body: some View {
NavigationSplitView {
List(model.departments, selection: $departmentId) { department in
Text(department.name)
}
} content: {
if let department = model.department(id: departmentId) {
List(department.employees, selection: $employeeIds) { employee in
Text(employee.name)
}
} else {
Text("Select a department")
}
} detail: {
EmployeeDetails(for: employeeIds)
}
}

You can also embed a `NavigationStack` in a column. Tapping or clicking a `NavigationLink` that appears in an earlier column sets the view that the stack displays over its root view. Activating a link in the same column adds a view to the stack. Either way, the link must present a data type for which the stack has a corresponding `navigationDestination(for:destination:)` modifier.

On watchOS and tvOS, and with narrow sizes like on iPhone or on iPad in Slide Over, the navigation split view collapses all of its columns into a stack, and shows the last column that displays useful information. For example, the three-column example above shows the list of departments to start, the employees in the department after someone selects a department, and the employee details when someone selects an employee. For rows in a list that have `NavigationLink` instances, the list draws disclosure chevrons while in the collapsed state.

### Control column visibility

You can programmatically control the visibility of navigation split view columns by creating a `State` value of type `NavigationSplitViewVisibility`. Then pass a `Binding` to that state to the appropriate initializer — such as `init(columnVisibility:sidebar:detail:)` for two columns, or the `init(columnVisibility:sidebar:content:detail:)` for three columns.

The following code updates the first example above to always hide the first column when the view appears:

@State private var columnVisibility =
NavigationSplitViewVisibility.detailOnly

var body: some View {
NavigationSplitView(columnVisibility: $columnVisibility) {
List(model.employees, selection: $employeeIds) { employee in
Text(employee.name)
}
} detail: {
EmployeeDetails(for: employeeIds)
}
}

The split view ignores the visibility control when it collapses its columns into a stack.

### Collapsed split views

At narrow size classes, such as on iPhone or Apple Watch, a navigation split view collapses into a single stack. Typically SwiftUI automatically chooses the view to show on top of this single stack, based on the content of the split view’s columns.

For custom navigation experiences, you can provide more information to help SwiftUI choose the right column. Create a `State` value of type `NavigationSplitViewColumn`. Then pass a `Binding` to that state to the appropriate initializer, such as `init(preferredCompactColumn:sidebar:detail:)` or `init(preferredCompactColumn:sidebar:content:detail:)`.

The following code shows the blue detail view when run on iPhone. When the person using the app taps the back button, they’ll see the yellow view. The value of `preferredPreferredCompactColumn` will change from `.detail` to `.sidebar`:

@State private var preferredColumn =
NavigationSplitViewColumn.detail

var body: some View {
NavigationSplitView(preferredCompactColumn: $preferredColumn) {
Color.yellow
} detail: {
Color.blue
}
}

### Customize a split view

To specify a preferred column width in a navigation split view, use the `navigationSplitViewColumnWidth(_:)` modifier. To set minimum, maximum, and ideal sizes for a column, use `navigationSplitViewColumnWidth(min:ideal:max:)`. You can specify a different modifier in each column. The navigation split view does its best to accommodate the preferences that you specify, but might make adjustments based on other constraints.

To specify how columns in a navigation split view interact, use the `navigationSplitViewStyle(_:)` modifier with a `NavigationSplitViewStyle` value. For example, you can specify whether to emphasize the detail column or to give all of the columns equal prominence.

On some platforms, `NavigationSplitView` adds a `sidebarToggle` toolbar item. Use the `toolbar(removing:)` modifier to remove the default item.

## Topics

### Creating a navigation split view

Creates a two-column navigation split view.

Creates a three-column navigation split view.

### Hiding columns in a navigation split view

Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility.

Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility.

### Specifying a preferred compact column

Creates a two-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.

Creates a three-column navigation split view that enables programmatic control over which column appears on top when the view collapses into a single column in narrow sizes.

### Specifying a preferred compact column and column visibility

Creates a two-column navigation split view that enables programmatic control of the sidebar’s visibility in regular sizes and which column appears on top when the view collapses into a single column in narrow sizes.

Creates a three-column navigation split view that enables programmatic control of leading columns’ visibility in regular sizes and which column appears on top when the view collapses into a single column in narrow sizes.

## Relationships

### Conforms To

- `View`

## See Also

### Presenting views in columns

Bringing robust navigation structure to your SwiftUI app

Use navigation links, stacks, destinations, and paths to provide a streamlined experience for all platforms, as well as behaviors such as deep linking and state restoration.

Improve navigation behavior in your app by replacing navigation views with navigation stacks and navigation split views.

Sets the style for navigation split views within this view.

Sets a fixed, preferred width for the column containing this view.

Sets a flexible, preferred width for the column containing this view.

`struct NavigationSplitViewVisibility`

The visibility of the leading columns in a navigation split view.

`struct NavigationLink`

A view that controls a navigation presentation.

---

# https://developer.apple.com/documentation/swiftui/toolbars

Collection

- SwiftUI
- Toolbars

API Collection

# Toolbars

Provide immediate access to frequently used commands and controls.

## Overview

The system might present toolbars above or below your app’s content, depending on the platform and the context.

Add items to a toolbar by applying the `toolbar(content:)` view modifier to a view in your app. You can also configure the toolbar using view modifiers. For example, you can set the visibility of a toolbar with the `toolbar(_:for:)` modifier.

For design guidance, see Toolbars in the Human Interface Guidelines.

## Topics

### Populating a toolbar

`func toolbar(content:)`

Populates the toolbar or navigation bar with the specified items.

`struct ToolbarItem`

A model that represents an item which can be placed in the toolbar or navigation bar.

`struct ToolbarItemGroup`

A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.

`struct ToolbarItemPlacement`

A structure that defines the placement of a toolbar item.

`protocol ToolbarContent`

Conforming types represent items that can be placed in various locations in a toolbar.

`struct ToolbarContentBuilder`

Constructs a toolbar item set from multi-expression closures.

`struct ToolbarSpacer`

A standard space item in toolbars.

`struct DefaultToolbarItem`

A toolbar item that represents a system component.

### Populating a customizable toolbar

Populates the toolbar or navigation bar with the specified items, allowing for user customization.

`protocol CustomizableToolbarContent`

Conforming types represent items that can be placed in various locations in a customizable toolbar.

`struct ToolbarCustomizationBehavior`

The customization behavior of customizable toolbar content.

`struct ToolbarCustomizationOptions`

Options that influence the default customization behavior of customizable toolbar content.

`struct SearchToolbarBehavior`

The behavior of a search field in a toolbar.

### Removing default items

Remove a toolbar item present by default

`struct ToolbarDefaultItemKind`

A kind of toolbar item a `View` adds by default.

### Setting toolbar visibility

Specifies the visibility of a bar managed by SwiftUI.

Specifies the preferred visibility of backgrounds on a bar managed by SwiftUI.

`struct ToolbarPlacement`

The placement of a toolbar.

`struct ContentToolbarPlacement`

### Specifying the role of toolbar content

Configures the semantic role for the content populating the toolbar.

`struct ToolbarRole`

The purpose of content that populates the toolbar.

### Styling a toolbar

`func toolbarBackground(_:for:)`

Specifies the preferred shape style of the background of a bar managed by SwiftUI.

Specifies the preferred color scheme of a bar managed by SwiftUI.

Specifies the preferred foreground style of bars managed by SwiftUI.

Sets the style for the toolbar defined within this scene.

`protocol WindowToolbarStyle`

A specification for the appearance and behavior of a window’s toolbar.

`var toolbarLabelStyle: ToolbarLabelStyle?`

The label style to apply to controls within a toolbar.

`struct ToolbarLabelStyle`

The label style of a toolbar.

`struct SpacerSizing`

A type which defines how spacers should size themselves.

### Configuring the toolbar title display mode

Configures the toolbar title display mode for this view.

`struct ToolbarTitleDisplayMode`

A type that defines the behavior of title of a toolbar.

### Setting the toolbar title menu

Configure the title menu of a toolbar.

`struct ToolbarTitleMenu`

The title menu of a toolbar.

### Creating an ornament

`func ornament(visibility:attachmentAnchor:contentAlignment:ornament:)`

Presents an ornament.

`struct OrnamentAttachmentAnchor`

An attachment anchor for an ornament.

## See Also

### App structure

Define the entry point and top-level structure of your app.

Declare the user interface groupings that make up the parts of your app.

Display user interface content in a window or a collection of windows.

Display unbounded content in a person’s surroundings.

Enable people to open and manage documents.

Enable people to move between different parts of your app’s view hierarchy within a scene.

Present content in a separate view that offers focused interaction.

Enable people to search for text or other content within your app.

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

---

# https://developer.apple.com/documentation/SwiftUI/View/toolbar(content:)

#app-main)

- SwiftUI
- View
- toolbar(content:)

Instance Method

# toolbar(content:)

Populates the toolbar or navigation bar with the specified items.

nonisolated

Show all declarations

## Parameters

`content`

The items representing the content of the toolbar.

## Discussion

Use this method to populate a toolbar with a collection of views that you provide to a toolbar view builder.

The toolbar modifier expects a collection of toolbar items which you can provide either by supplying a collection of views with each view wrapped in a `ToolbarItem`, or by providing a collection of views as a `ToolbarItemGroup`. The example below uses a collection of `ToolbarItem` views to create a macOS toolbar that supports text editing features:

struct StructToolbarItemGroupView: View {
@State private var text = ""
@State private var bold = false
@State private var italic = false
@State private var fontSize = 12.0

var displayFont: Font {
let font = Font.system(size: CGFloat(fontSize),
weight: bold == true ? .bold : .regular)
return italic == true ? font.italic() : font
}

var body: some View {
TextEditor(text: $text)
.font(displayFont)
.toolbar {
ToolbarItemGroup {
Slider(
value: $fontSize,
in: 8...120,
minimumValueLabel:
Text("A").font(.system(size: 8)),
maximumValueLabel:
Text("A").font(.system(size: 16))
) {
Text("Font Size (\(Int(fontSize)))")
}
.frame(width: 150)
Toggle(isOn: $bold) {
Image(systemName: "bold")
}
Toggle(isOn: $italic) {
Image(systemName: "italic")
}
}
}
.navigationTitle("My Note")
}
}

Although it’s not mandatory, wrapping a related group of toolbar items together in a `ToolbarItemGroup` provides a one-to-one mapping between controls and toolbar items which results in the correct layout and spacing on each platform. For design guidance on toolbars, see Toolbars in the Human Interface Guidelines.

## See Also

### Populating a toolbar

`struct ToolbarItem`

A model that represents an item which can be placed in the toolbar or navigation bar.

`struct ToolbarItemGroup`

A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.

`struct ToolbarItemPlacement`

A structure that defines the placement of a toolbar item.

`protocol ToolbarContent`

Conforming types represent items that can be placed in various locations in a toolbar.

`struct ToolbarContentBuilder`

Constructs a toolbar item set from multi-expression closures.

`struct ToolbarSpacer`

A standard space item in toolbars.

`struct DefaultToolbarItem`

A toolbar item that represents a system component.

---

# https://developer.apple.com/documentation/AppKit/NSToolbar

- AppKit
- NSToolbar

Class

# NSToolbar

An object that manages the space above your app’s custom content and either below or integrated with the window’s title bar.

macOS

@MainActor
class NSToolbar

## Overview

An `NSToolbar` object manages the controls and views that apply to the main window’s content area. Toolbars provide convenient access to the commands and features people use most often. Toolbars are also user-configurable and support the display of an interactive customization palette.

Create and configure your toolbar programmatically or using Interface Builder. Add items to the toolbar that correspond to the commands you want to feature in your window. Each item has a corresponding `NSToolbarItem` object, which you use to make changes. Each toolbar manages a unique set of items, but you can synchronize the items and state of multiple toolbars by assigning the same value to their `identifier` properties.

For more information about how to use toolbars, see Integrating a Toolbar and Touch Bar into Your App.

## Topics

### Creating an toolbar object

`init(identifier: NSToolbar.Identifier)`

Creates a newly allocated toolbar with the specified identifier.

`convenience init()`

Creates a new toolbar with an empty identifier string.

### Configuring the toolbar contents

`var delegate: (any NSToolbarDelegate)?`

The object you use to customize the toolbar contents and configuration.

`protocol NSToolbarDelegate`

A set of optional methods you use to configure the toolbar and respond to changes.

### Getting the toolbar’s identity

`var identifier: NSToolbar.Identifier`

The value you use to identify the toolbar in your app.

`typealias Identifier`

A string value that you use to differentiate your app’s toolbars.

### Configuring the toolbar’s behavior

`var isVisible: Bool`

A Boolean value that indicates whether the toolbar is visible.

`var displayMode: NSToolbar.DisplayMode`

A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.

`enum DisplayMode`

Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.

`var showsBaselineSeparator: Bool`

A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.

Deprecated

`var allowsUserCustomization: Bool`

A Boolean value that indicates whether users can modify the contents of the toolbar.

`var allowsExtensionItems: Bool`

A Boolean value that indicates whether the toolbar can add items for Action extensions.

### Managing items on the toolbar

[`var items: [NSToolbarItem]`](https://developer.apple.com/documentation/appkit/nstoolbar/items)

An array containing the toolbar’s current items, in order.

[`var visibleItems: [NSToolbarItem]?`](https://developer.apple.com/documentation/appkit/nstoolbar/visibleitems)

An array containing the toolbar’s currently visible items.

The set of custom items to display in the center of the toolbar.

`var selectedItemIdentifier: NSToolbarItem.Identifier?`

The identifier of the toolbar’s currently selected item.

`class let willAddItemNotification: NSNotification.Name`

Posts before the toolbar adds a new item.

`class let didRemoveItemNotification: NSNotification.Name`

Posted after an item is removed from a toolbar.

`func insertItem(withItemIdentifier: NSToolbarItem.Identifier, at: Int)`

Inserts an item into the toolbar at the specified index.

`func removeItem(at: Int)`

Removes the item at the specified index in the toolbar.

### Autosaving the configuration

`var autosavesConfiguration: Bool`

A Boolean value that indicates whether the toolbar autosaves its configuration.

[`var configuration: [String : Any]`](https://developer.apple.com/documentation/appkit/nstoolbar/configuration)

A dictionary containing the current configuration details for the toolbar.

[`func setConfiguration([String : Any])`](https://developer.apple.com/documentation/appkit/nstoolbar/setconfiguration(_:))

Specifies the new configuration details for the toolbar.

### Displaying the customization palette

`func runCustomizationPalette(Any?)`

Displays the toolbar’s customization palette and handles any user-initiated customizations.

`var customizationPaletteIsRunning: Bool`

A Boolean value that indicates whether the toolbar’s customization palette is in use.

### Validating visible items

`func validateVisibleItems()`

Validates the toolbar’s visible items during a window update.

### Deprecated

`var centeredItemIdentifier: NSToolbarItem.Identifier?`

The item to display in the center of the toolbar.

`var fullScreenAccessoryView: NSView?`

The toolbar’s full screen accessory view.

`var fullScreenAccessoryViewMinHeight: CGFloat`

The minimum height of the toolbar’s full screen accessory view.

`var fullScreenAccessoryViewMaxHeight: CGFloat`

The maximum height of the toolbar’s full screen accessory view, in points.

`var sizeMode: NSToolbar.SizeMode`

The toolbar’s size mode.

`enum SizeMode`

Constants that specify toolbar display modes.

### Instance Properties

`var allowsDisplayModeCustomization: Bool`

Whether or not the user is allowed to change display modes at run time. This functionality is independent of customizing the order of the items themselves. Only disable when the functionality or legibility of your toolbar could not be improved by another display mode. The user’s selection will be persisted using the toolbar’s `identifier` when `autosavesConfiguration` is enabled. The default is YES for apps linked on macOS 15.0 and above.

[`var itemIdentifiers: [NSToolbarItem.Identifier]`](https://developer.apple.com/documentation/appkit/nstoolbar/itemidentifiers)

An array of itemIdentifiers that represent the current items in the toolbar. Setting this property will set the current items in the toolbar by diffing against items that already exist. Use this with great caution if `allowsUserCustomization` is enabled as it will override any customizations the user has made. This property is key value observable.

### Instance Methods

`func removeItem(identifier: NSToolbarItem.Identifier)`

Removes the item with matching `itemIdentifier` in the receiving toolbar. If multiple items share the same identifier (as is the case with space items) all matching items will be removed. To remove only a single space item, use `-removeItemAtIndex:` instead.

## Relationships

### Inherits From

- `NSObject`

### Conforms To

- `CVarArg`
- `CustomDebugStringConvertible`
- `CustomStringConvertible`
- `Equatable`
- `Hashable`
- `NSObjectProtocol`
- `Sendable`

## See Also

### View

Integrating a Toolbar and Touch Bar into Your App

Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.

`protocol NSToolbarItemValidation`

Validation of a toolbar item.

---

# https://developer.apple.com/documentation/AppKit/NSSplitView

- AppKit
- NSSplitView

Class

# NSSplitView

A view that arranges two or more views in a linear stack running horizontally or vertically.

macOS

class NSSplitView

## Overview

A split view manages the dividers and orientation for a split view controller ( `NSSplitViewController`). By default, dividers have a horizontal orientation so that the split view arranges its panes vertically from top to bottom.

Divider indices are zero-based. If the `isVertical` property is `false`, which is the default value, the top divider has an index of `0`. If `isVertical` is `true`, the leading divider has an index of `0`.

## Topics

### Customizing the Split View Behavior

`var delegate: (any NSSplitViewDelegate)?`

The split view’s delegate.

`protocol NSSplitViewDelegate`

A set of optional methods that a delegate of a split view implements.

### Arranging Subviews

`var arrangesAllSubviews: Bool`

A Boolean value that determines whether the split view arranges all of its subviews as split panes.

[`var arrangedSubviews: [NSView]`](https://developer.apple.com/documentation/appkit/nssplitview/arrangedsubviews)

The array of views that the split view arranges as its split panes.

`func addArrangedSubview(NSView)`

Adds a view as an arranged split pane.

`func insertArrangedSubview(NSView, at: Int)`

Adds a view as an arranged split pane at the specified index.

`func removeArrangedSubview(NSView)`

Removes a view as an arranged split pane.

### Managing Subviews

`func adjustSubviews()`

Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.

Returns whether the specified view is in a collapsed state.

Returns the priority of the subview’s width or height when resizing.

`func setHoldingPriority(NSLayoutConstraint.Priority, forSubviewAt: Int)`

Sets the priority for split view subviews to maintain their width or height.

### Managing Divider Orientation

`var isVertical: Bool`

A Boolean value that determines the geometric orientation of the split view’s dividers.

### Configuring and Drawing Dividers

`var dividerStyle: NSSplitView.DividerStyle`

The style of divider between views.

`enum DividerStyle`

Constants that specify the style of the split view’s dividers.

`var dividerColor: NSColor`

The color of the dividers that the split view draws between subviews.

`var dividerThickness: CGFloat`

The thickness of the dividers for the split view.

`func drawDivider(in: NSRect)`

Draws a divider between two of the split view’s subviews.

### Saving Subview Positions

`var autosaveName: NSSplitView.AutosaveName?`

The name to use when the system automatically saves the split view’s divider configuration.

`typealias AutosaveName`

The type that specifies the split view’s autosave name.

### Constraining Split Position

Returns the minimum possible position of the divider at the specified index.

Returns the maximum possible position of the divider at the specified index.

`func setPosition(CGFloat, ofDividerAt: Int)`

Updates the location of a divider you specify by index.

### Managing Notifications

`class let willResizeSubviewsNotification: NSNotification.Name`

A notification that posts before a change to the size of some or all subviews of a split view.

`class let didResizeSubviewsNotification: NSNotification.Name`

A notification that posts after a change to the size of some or all subviews of a split view.

## Relationships

### Inherits From

- `NSView`

### Conforms To

- `CVarArg`
- `CustomDebugStringConvertible`
- `CustomStringConvertible`
- `Equatable`
- `Hashable`
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
- `NSUserInterfaceItemIdentification`
- `Sendable`
- `SendableMetatype`

## See Also

### Split View Interface

`class NSSplitViewController`

An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.

`class NSSplitViewItem`

An item in a split view controller.

---

# https://developer.apple.com/documentation/AppKit/NSSplitViewController

- AppKit
- NSSplitViewController

Class

# NSSplitViewController

An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.

class NSSplitViewController

## Overview

A split view controller manages a set of child views that it displays next to each other in a side-by-side or top-to-bottom arrangement.

A split view controller owns an array of split view items ( `NSSplitViewItem`), each of which has a view controller ( `NSViewController`) and corresponding view. The split view controller’s `splitView` object manages those child views and the dividers between them.

By default, a split view arranges its child views vertically from top to bottom. To specify a horizontal (side-by-side) arrangement, implement the `isVertical` property of the `splitView` object to return `true`.

The split view controller serves as the delegate of its `splitView` object. If you override a split view delegate method, your override must call `super`.

To use a split view controller, you must use Auto Layout for the child views and to support animations that collapse and reveal child views. For example, if you design a layout that contains two views, a content area and an optional sidebar, you employ Auto Layout constraints to specify whether the content area shrinks or remains the same size when the sidebar becomes visible.

A split view controller employs lazy loading of its views. For example, adding a collapsed split view item as a new child doesn’t load the associated view until it shows.

For more information about using `NSSplitViewController` in your app, see Navigating Hierarchical Data Using Outline and Split Views.

## Topics

### Configuring and Managing a Split View Controller

`var splitView: NSSplitView`

The split view that the split view controller manages.

Returns the corresponding split view item for the specified child view controller of the split view controller.

[`var splitViewItems: [NSSplitViewItem]`](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitviewitems)

The array of split view items that correspond to the split view controller’s child view controllers.

`class NSSplitViewItem`

An item in a split view controller.

### Modifying a Split View Controller

`func addSplitViewItem(NSSplitViewItem)`

Adds a split view item to the end of the array of split view items.

`func insertSplitViewItem(NSSplitViewItem, at: Int)`

Adds a split view item to the array of split view items at the specified index position.

`func removeSplitViewItem(NSSplitViewItem)`

Removes a specified split view item from the split view controller.

### Managing Sidebars

`func toggleSidebar(Any?)`

Collapses or expands the first sidebar in the split view controller using an animation.

`var minimumThicknessForInlineSidebars: CGFloat`

The minimum thickness for a sidebar before it automatically collapses.

`class let automaticDimension: CGFloat`

The default value to apply to a dimension.

### Managing Inspectors

`func toggleInspector(Any?)`

Collapses or expands the first inspector in the split view controller using an animation.

### Responding to View Events

`func viewDidLoad()`

Configures the split view controller after its view loads into memory.

### Supporting Protocol Requirements

Access the split view controller’s implementations of protocol methods.

## Relationships

### Inherits From

- `NSViewController`

### Conforms To

- `CVarArg`
- `CustomDebugStringConvertible`
- `CustomStringConvertible`
- `Equatable`
- `Hashable`
- `NSCoding`
- `NSEditor`
- `NSExtensionRequestHandling`
- `NSObjectProtocol`
- `NSSeguePerforming`
- `NSSplitViewDelegate`
- `NSStandardKeyBindingResponding`
- `NSTouchBarProvider`
- `NSUserActivityRestoring`
- `NSUserInterfaceItemIdentification`
- `NSUserInterfaceValidations`
- `Sendable`
- `SendableMetatype`

## See Also

### Split View Interface

`class NSSplitView`

A view that arranges two or more views in a linear stack running horizontally or vertically.

---

# https://developer.apple.com/documentation/AppKit/NSSplitViewItem/init(inspectorWithViewController:)

#app-main)

- AppKit
- NSSplitViewItem
- init(inspectorWithViewController:)

Initializer

# init(inspectorWithViewController:)

Creates a split view item that represents an inspector for the specified view controller.

convenience init(inspectorWithViewController viewController: NSViewController)

## Discussion

In macOS 14.0 and later, inspectors use standard system default values for these properties:

- `canCollapse` is `true`.

- `minimumThickness` and `maximumThickness` are the standard inspector size (270) and aren’t resizable by default.

## See Also

### Creating a split view item

`convenience init(sidebarWithViewController: NSViewController)`

Creates a split view item that represents a sidebar for the specified view controller.

`convenience init(contentListWithViewController: NSViewController)`

Creates a split view item that represents a content list for the specified view controller.

`convenience init(viewController: NSViewController)`

Creates a split view item that represents the specified view controller.

---

# https://developer.apple.com/documentation/SwiftUI/View/inspector(isPresented:content:)

#app-main)

- SwiftUI
- View
- inspector(isPresented:content:)

Instance Method

# inspector(isPresented:content:)

Inserts an inspector at the applied position in the view hierarchy.

nonisolated

## Parameters

`isPresented`

A binding to `Bool` controlling the presented state.

`content`

The inspector content.

## Discussion

Apply this modifier to declare an inspector with a context-dependent presentation. For example, an inspector can present as a trailing column in a horizontally regular size class, but adapt to a sheet in a horizontally compact size class.

struct ShapeEditor: View {
@State var presented: Bool = false
var body: some View {
MyEditorView()
.inspector(isPresented: $presented) {
TextTraitsInspectorView()
}
}
}

## See Also

### Presenting an inspector

Sets a fixed, preferred width for the inspector containing this view when presented as a trailing column.

Sets a flexible, preferred width for the inspector in a trailing-column presentation.

---

# https://developer.apple.com/documentation/SwiftUI/ToolbarSpacer

- SwiftUI
- ToolbarSpacer

Structure

# ToolbarSpacer

A standard space item in toolbars.

struct ToolbarSpacer

## Overview

A space item creates visual breaks in the toolbar between items. Spacers can have a standard fixed size or be flexible and push items apart.

Spacers can also be used in customizable toolbars:

ContentView()
.toolbar(id: "main-toolbar") {
ToolbarItem(id: "tag") {
TagButton()
}
ToolbarItem(id: "share") {
ShareButton()
}
ToolbarSpacer(.fixed)
ToolbarItem(id: "more") {
MoreButton()
}
}

Space items are customizable and can be added, removed, and rearranged by users. If a customizable toolbar supports a spacer of a given type, users can also add in multiple copies of that spacer from the customization panel.

## Topics

### Initializers

`init(SpacerSizing, placement: ToolbarItemPlacement)`

Creates a toolbar spacer item with the specified sizing behavior and placement.

## Relationships

### Conforms To

- `CustomizableToolbarContent`
- `ToolbarContent`

## See Also

### Populating a toolbar

`func toolbar(content:)`

Populates the toolbar or navigation bar with the specified items.

`struct ToolbarItem`

A model that represents an item which can be placed in the toolbar or navigation bar.

`struct ToolbarItemGroup`

A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.

`struct ToolbarItemPlacement`

A structure that defines the placement of a toolbar item.

`protocol ToolbarContent`

Conforming types represent items that can be placed in various locations in a toolbar.

`struct ToolbarContentBuilder`

Constructs a toolbar item set from multi-expression closures.

`struct DefaultToolbarItem`

A toolbar item that represents a system component.

---

# https://developer.apple.com/documentation/SwiftUI/SpacerSizing/fixed

- SwiftUI
- SpacerSizing
- fixed

Type Property

# fixed

The fixed spacer sizing behavior. The spacer will use a pre-defined size determined by the system and the context in which the spacer is used.

static let fixed: SpacerSizing

---

# https://developer.apple.com/documentation/SwiftUI/ToolbarSpacer

- SwiftUI
- ToolbarSpacer

Structure

# ToolbarSpacer

A standard space item in toolbars.

struct ToolbarSpacer

## Overview

A space item creates visual breaks in the toolbar between items. Spacers can have a standard fixed size or be flexible and push items apart.

Spacers can also be used in customizable toolbars:

ContentView()
.toolbar(id: "main-toolbar") {
ToolbarItem(id: "tag") {
TagButton()
}
ToolbarItem(id: "share") {
ShareButton()
}
ToolbarSpacer(.fixed)
ToolbarItem(id: "more") {
MoreButton()
}
}

Space items are customizable and can be added, removed, and rearranged by users. If a customizable toolbar supports a spacer of a given type, users can also add in multiple copies of that spacer from the customization panel.

## Topics

### Initializers

`init(SpacerSizing, placement: ToolbarItemPlacement)`

Creates a toolbar spacer item with the specified sizing behavior and placement.

## Relationships

### Conforms To

- `CustomizableToolbarContent`
- `ToolbarContent`

## See Also

### Populating a toolbar

`func toolbar(content:)`

Populates the toolbar or navigation bar with the specified items.

`struct ToolbarItem`

A model that represents an item which can be placed in the toolbar or navigation bar.

`struct ToolbarItemGroup`

A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.

`struct ToolbarItemPlacement`

A structure that defines the placement of a toolbar item.

`protocol ToolbarContent`

Conforming types represent items that can be placed in various locations in a toolbar.

`struct ToolbarContentBuilder`

Constructs a toolbar item set from multi-expression closures.

`struct DefaultToolbarItem`

A toolbar item that represents a system component.

---

# https://developer.apple.com/documentation/AppKit/NSToolbarItem/Identifier/space

- AppKit
- NSToolbarItem
- NSToolbarItem.Identifier
- space

Type Property

# space

The identifier for a toolbar item that displays an empty space with a standard fixed size.

macOS

static let space: NSToolbarItem.Identifier

## See Also

### Getting the standard item identifiers

`static let flexibleSpace: NSToolbarItem.Identifier`

The identifier for a toolbar item that displays an empty space with a flexible width.

`static let cloudSharing: NSToolbarItem.Identifier`

The identifier for a toolbar item that tells your app to display the iCloud sharing interface.

`static let print: NSToolbarItem.Identifier`

The identifier for a toolbar item that tells your app to print the current document.

`static let showColors: NSToolbarItem.Identifier`

The identifier for a toolbar item that shows the standard color panel.

`static let showFonts: NSToolbarItem.Identifier`

The identifier for a toolbar item that shows the standard font panel.

`static let toggleSidebar: NSToolbarItem.Identifier`

The identifier for a toolbar item that displays a sidebar.

`static let sidebarTrackingSeparator: NSToolbarItem.Identifier`

The identifier for a toolbar item that displays a tracking separator aligned with the sidebar divider in a split view.

`static let primarySidebarTrackingSeparatorItemIdentifier: NSToolbarItem.Identifier`

The identifier for a toolbar item that displays a tracking separator aligned with the primary divider in a split view.

`static let supplementarySidebarTrackingSeparatorItemIdentifier: NSToolbarItem.Identifier`

The identifier for a toolbar item that displays a tracking separator aligned with the secondary divider in a split view.

`static let inspectorTrackingSeparator: NSToolbarItem.Identifier`

Creates a new `NSTrackingSeparatorToolbarItem` and automatically configures it to track the divider of the inspector if one is discovered.

`static let toggleInspector: NSToolbarItem.Identifier`

The identifier for a toolbar item that displays an inspector.

---

# https://developer.apple.com/documentation/SwiftUI/ToolbarContent/hidden(_:)

#app-main)

- SwiftUI
- ToolbarContent
- hidden(\_:)

Instance Method

# hidden(\_:)

Hides a toolbar item within its toolbar.

nonisolated

## Parameters

`hidden`

Whether the toolbar item is hidden.

## Discussion

Use this modifier to conditionally display a toolbar item in the toolbar.

struct ContentView {
@State private var showDownloads = false

var body: some View {
BrowserView()
.toolbar {
ToolbarItem {
DownloadsButton()
}
.hidden(!showDownloads)
}
}
}

---

# https://developer.apple.com/documentation/UIKit/UIBarButtonItem/isHidden

- UIKit
- UIBarButtonItem
- isHidden

Instance Property

# isHidden

A Boolean that determines the visibility of the item.

var isHidden: Bool { get set }

## Discussion

Set this property to `true` to hide the item, or `false` to display the item.

## See Also

### Customizing item appearance

`var style: UIBarButtonItem.Style`

The style of the item.

`enum Style`

Constants that specify the style of an item.

`var tintColor: UIColor?`

The tint color to apply to the button item.

`var isSelected: Bool`

A Boolean value that indicates whether the button is in a selected state.

`var width: CGFloat`

The width of the item.

The set of possible titles to display on the bar button.

---

# https://developer.apple.com/documentation/AppKit/NSToolbarItem/isHidden

- AppKit
- NSToolbarItem
- isHidden

Instance Property

# isHidden

Determines whether an item is visible in the toolbar.

var isHidden: Bool { get set }

## Discussion

The item will still be visible in the customization panel. Because hidden items may be visible during user customization, use the `visible` property to determine if an item is currently displayed. Note that even hidden toolbar items are sync’d to other toolbars with a shared identifier, but its `hidden` state can be unique to each instance. Use this property to show a toolbar item in one toolbar instance but not another.

## See Also

### Getting the item’s configuration

`var isVisible: Bool`

A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.

`var isBordered: Bool`

A Boolean value that indicates whether the toolbar item has a bordered style.

`var isNavigational: Bool`

A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.

`var isEnabled: Bool`

A Boolean value that indicates whether the item is enabled.

`var badge: NSItemBadge?`

A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.

`struct NSItemBadge`

`NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.

`var style: NSToolbarItem.Style`

Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.

`enum Style`

`var visibilityPriority: NSToolbarItem.VisibilityPriority`

The display priority associated with the toolbar item.

`struct VisibilityPriority`

Constants that indicate which toolbar items to keep in the toolbar when space is limited.

`var tag: Int`

An integer tag you can use to identify the toolbar item.

---

# https://developer.apple.com/documentation/SwiftUI/View/tabBarMinimizeBehavior(_:)

#app-main)

- SwiftUI
- View
- tabBarMinimizeBehavior(\_:)

Instance Method

# tabBarMinimizeBehavior(\_:)

Sets the behavior for tab bar minimization.

nonisolated

## Parameters

`behavior`

The minimize behavior.

## Discussion

The following TabView minimizes its tab bar when scrolling in the ‘Numbers’ or ‘Alerts’ tabs on iPhone.

struct ContentView: View {
var body: some View {
TabView {
Tab("Numbers", systemImage: "number") {
ScrollView {
ForEach(0 ..< 50) { index in
Text("\(index)")
.padding()
}
}
}
Tab("Alerts", systemImage: "bell") {
AlertsView()
}
}
.tabBarMinimizeBehavior(.onScrollDown)
}
}

---

# https://developer.apple.com/documentation/SwiftUI/TabViewBottomAccessoryPlacement

- SwiftUI
- TabViewBottomAccessoryPlacement

Enumeration

# TabViewBottomAccessoryPlacement

A placement of the bottom accessory in a tab view. You can use this to adjust the content of the accessory view based on the placement.

enum TabViewBottomAccessoryPlacement

## Overview

The following example shows playback controls when the view is inline, and an expanded slider player view when the view is expanded.

struct MusicPlaybackView: View {
@Environment(\.tabViewBottomAccessoryPlacement) var placement

var body: some View {
switch placement {
case .inline:
ControlsPlaybackView()
case .expanded:
SliderPlaybackView()
}
}

You can set the `TabView` bottom accessory using `tabViewBottomAccessory(content:)`

TabView {
Tab("Home", systemImage: "house") {
HomeView()
}

Tab("Alerts", systemImage: "bell") {
AlertsView()
}

TabSection("Categories") {
Tab("Climate", systemImage: "fan") {
ClimateView()
}

Tab("Lights", systemImage: "lightbulb") {
LightsView()
}
}
}
.tabViewBottomAccessory {
HomeStatusView()
}

## Topics

### Enumeration Cases

`case expanded`

The bar is expanded on top of the bottom tab bar, if there is a bottom tab bar, or at the bottom of the tab’s content view.

`case inline`

The view is displayed in line with the bottom tab bar.

## Relationships

### Conforms To

- `Equatable`
- `Hashable`
- `Sendable`
- `SendableMetatype`

## See Also

### Configuring a tab bar

Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.

Adds a custom header to the sidebar of a tab view.

Adds a custom footer to the sidebar of a tab view.

Adds a custom bottom bar to the sidebar of a tab view.

`struct AdaptableTabBarPlacement`

A placement for tabs in a tab view using the adaptable sidebar style.

`var tabBarPlacement: TabBarPlacement?`

The current placement of the tab bar.

`struct TabBarPlacement`

A placement for tabs in a tab view.

`var isTabBarShowingSections: Bool`

A Boolean value that determines whether a tab view shows the expanded contents of a tab section.

`struct TabBarMinimizeBehavior`

---

# https://developer.apple.com/documentation/SwiftUI/TabViewStyle/sidebarAdaptable

- SwiftUI
- TabViewStyle
- sidebarAdaptable

Type Property

# sidebarAdaptable

A tab bar style that adapts to each platform.

@MainActor @preconcurrency
static var sidebarAdaptable: SidebarAdaptableTabViewStyle { get }

Available when `Self` is `SidebarAdaptableTabViewStyle`.

## Discussion

Tab views using the sidebar adaptable style have an appearance that varies depending on the platform:

- iPadOS displays a top tab bar that can adapt into a sidebar.

- iOS displays a bottom tab bar.

- macOS and tvOS always show a sidebar.

- visionOS shows an ornament and also shows a sidebar for secondary tabs within a `TabSection`.

To apply this style to a tab view, or to a view that contains tab views, use the `tabViewStyle(_:)` modifier.

## See Also

### Getting built-in tab view styles

`static var automatic: DefaultTabViewStyle`

The default tab view style.

`static var tabBarOnly: TabBarOnlyTabViewStyle`

A tab view style that displays a tab bar when possible.

`static var grouped: GroupedTabViewStyle`

A tab view style that displays a tab bar that groups its tabs together.

`static var page: PageTabViewStyle`

A `TabViewStyle` that displays a paged scrolling `TabView`.

A `TabViewStyle` that implements a paged scrolling `TabView` with an index display mode.

`static var verticalPage: VerticalPageTabViewStyle`

A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.

A `TabViewStyle` that implements the vertical page `TabView` interaction and appearance, and performs the specified transition.

`static var carousel: CarouselTabViewStyle`

A style that implements the carousel interaction and appearance.

Deprecated

---

