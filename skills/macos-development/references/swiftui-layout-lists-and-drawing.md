# SwiftUI Layout, Lists, Tables, Drawing & Animation

> Layout fundamentals and adjustments, custom Layout protocol, lists, tables, view groupings, scroll views, shapes, drawing/graphics, and animation.

---

# https://developer.apple.com/documentation/swiftui/layout-fundamentals

Collection

- SwiftUI
- Layout fundamentals

API Collection

# Layout fundamentals

Arrange views inside built-in layout containers like stacks and grids.

## Overview

Use layout containers to arrange the elements of your user interface. Stacks and grids update and adjust the positions of the subviews they contain in response to changes in content or interface dimensions. You can nest layout containers inside other layout containers to any depth to achieve complex layout effects.

To fine-tune the position, alignment, and other elements of a layout that you build with layout container views, see Layout adjustments. To define custom layout containers, see Custom layout. For design guidance, see Layout in the Human Interface Guidelines.

## Topics

### Choosing a layout

Picking container views for your content

Build flexible user interfaces by using stacks, grids, lists, and forms.

### Statically arranging views in one dimension

Building layouts with stack views

Compose complex layouts from primitive container views.

`struct HStack`

A view that arranges its subviews in a horizontal line.

`struct VStack`

A view that arranges its subviews in a vertical line.

### Dynamically arranging views in one dimension

Grouping data with lazy stack views

Split content into logical sections inside lazy stack views.

Creating performant scrollable stacks

Display large numbers of repeated views efficiently with scroll views, stack views, and lazy stacks.

`struct LazyHStack`

A view that arranges its children in a line that grows horizontally, creating items only as needed.

`struct LazyVStack`

A view that arranges its children in a line that grows vertically, creating items only as needed.

`struct PinnedScrollableViews`

A set of view types that may be pinned to the bounds of a scroll view.

### Statically arranging views in two dimensions

`struct Grid`

A container view that arranges other views in a two dimensional layout.

`struct GridRow`

A horizontal row in a two dimensional grid container.

Tells a view that acts as a cell in a grid to span the specified number of columns.

Specifies a custom alignment anchor for a view that acts as a grid cell.

Asks grid layouts not to offer the view extra size in the specified axes.

Overrides the default horizontal alignment of the grid column that the view appears in.

### Dynamically arranging views in two dimensions

`struct LazyHGrid`

A container view that arranges its child views in a grid that grows horizontally, creating items only as needed.

`struct LazyVGrid`

A container view that arranges its child views in a grid that grows vertically, creating items only as needed.

`struct GridItem`

A description of a row or a column in a lazy grid.

### Layering views

Adding a background to your view

Compose a background behind your view and extend it beyond the safe area insets.

`struct ZStack`

A view that overlays its subviews, aligning them in both axes.

Controls the display order of overlapping views.

Layers the views that you specify behind this view.

Sets the view’s background to a style.

Sets the view’s background to the default background style.

`func background(_:in:fillStyle:)`

Sets the view’s background to an insettable shape filled with a style.

`func background(in:fillStyle:)`

Sets the view’s background to an insettable shape filled with the default background style.

Layers the views that you specify in front of this view.

Layers the specified style in front of this view.

Layers a shape that you specify in front of this view.

`var backgroundMaterial: Material?`

The material underneath the current view.

Sets the container background of the enclosing container using a view.

`struct ContainerBackgroundPlacement`

The placement of a container background.

### Automatically choosing the layout that fits

`struct ViewThatFits`

A view that adapts to the available space by providing the first child view that fits.

### Separators

`struct Spacer`

A flexible space that expands along the major axis of its containing stack layout, or on both axes if not contained in a stack.

`struct Divider`

A visual element that can be used to separate other content.

## See Also

### View layout

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

Place views in custom arrangements and create animated transitions between layout types.

Display a structured, scrollable column of information.

Display selectable, sortable data arranged in rows and columns.

Present views in different kinds of purpose-driven containers, like forms or control groups.

Enable people to scroll to content that doesn’t fit in the current display.

---

# https://developer.apple.com/documentation/swiftui/layout-adjustments

Collection

- SwiftUI
- Layout adjustments

API Collection

# Layout adjustments

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

## Overview

Layout containers like stacks and grids provide a great starting point for arranging views in your app’s user interface. When you need to make fine adjustments, use layout view modifiers. You can adjust or constrain the size, position, and alignment of a view. You can also add padding around a view, and indicate how the view interacts with system-defined safe areas.

To get started with a basic layout, see Layout fundamentals. For design guidance, see Layout in the Human Interface Guidelines.

## Topics

### Fine-tuning a layout

Laying out a simple view

Create a view layout by adjusting the size of views.

Inspecting view layout

Determine the position and extent of a view using Xcode previews or by adding temporary borders.

### Adding padding around a view

`func padding(_:)`

Adds a different padding amount to each edge of this view.

Adds an equal padding amount to specific edges of this view.

`func padding3D(_:)`

Pads this view using the edge insets you specify.

Adds padding to the specified edges of this view using an amount that’s appropriate for the current scene.

Adds a specified kind of padding to the specified edges of this view using an amount that’s appropriate for the current scene.

`struct ScenePadding`

The padding used to space a view from its containing scene.

### Influencing a view’s size

Positions this view within an invisible frame with the specified size.

Positions this view within an invisible frame with the specified depth.

Positions this view within an invisible frame having the specified size constraints.

Positions this view within an invisible frame having the specified depth constraints.

Positions this view within an invisible frame with a size relative to the nearest container.

Fixes this view at its ideal size.

Fixes this view at its ideal size in the specified dimensions.

Sets the priority by which a parent layout should apportion space to this child.

### Adjusting a view’s position

Making fine adjustments to a view’s position

Shift the position of a view by applying the offset or position modifier.

Positions the center of this view at the specified point in its parent’s coordinate space.

Positions the center of this view at the specified coordinates in its parent’s coordinate space.

Offset this view by the horizontal and vertical amount specified in the offset parameter.

Offset this view by the specified horizontal and vertical distances.

Brings a view forward in Z by the provided distance in points.

### Aligning views

Aligning views within a stack

Position views inside a stack using alignment guides.

Aligning views across stacks

Create a custom alignment and use it to align views across multiple stacks.

`func alignmentGuide(_:computeValue:)`

Sets the view’s horizontal alignment.

`struct Alignment`

An alignment in both axes.

`struct HorizontalAlignment`

An alignment position along the horizontal axis.

`struct VerticalAlignment`

An alignment position along the vertical axis.

`struct DepthAlignment`

An alignment position along the depth axis.

`protocol AlignmentID`

A type that you use to create custom alignment guides.

`struct ViewDimensions`

A view’s size and alignment guides in its own coordinate space.

`struct ViewDimensions3D`

A view’s 3D size and alignment guides in its own coordinate space.

`struct SpatialContainer`

A layout container that aligns overlapping content in 3D space.

### Setting margins

Configures the content margin for a provided placement.

`func contentMargins(_:_:for:)`

`struct ContentMarginPlacement`

The placement of margins.

### Staying in the safe areas

Expands the safe area of a view.

`func safeAreaInset(edge:alignment:spacing:content:)`

Shows the specified content beside the modified view.

`func safeAreaPadding(_:)`

Adds the provided insets into the safe area of this view.

`struct SafeAreaRegions`

A set of symbolic safe area regions.

### Setting a layout direction

Sets the behavior of this view for different layout directions.

`enum LayoutDirectionBehavior`

A description of what should happen when the layout direction changes.

`var layoutDirection: LayoutDirection`

The layout direction associated with the current environment.

`enum LayoutDirection`

A direction in which SwiftUI can lay out content.

`struct LayoutRotationUnaryLayout`

### Reacting to interface characteristics

`var isLuminanceReduced: Bool`

A Boolean value that indicates whether the display or environment currently requires reduced luminance.

`var displayScale: CGFloat`

The display scale of this environment.

`var pixelLength: CGFloat`

The size of a pixel on the screen.

`var horizontalSizeClass: UserInterfaceSizeClass?`

The horizontal size class of this environment.

`var verticalSizeClass: UserInterfaceSizeClass?`

The vertical size class of this environment.

`enum UserInterfaceSizeClass`

A set of values that indicate the visual size available to the view.

### Accessing edges, regions, and layouts

`enum Edge`

An enumeration to indicate one edge of a rectangle.

`enum Edge3D`

An edge or face of a 3D volume.

`enum HorizontalEdge`

An edge on the horizontal axis.

`enum VerticalEdge`

An edge on the vertical axis.

`struct EdgeInsets`

The inset distances for the sides of a rectangle.

`struct EdgeInsets3D`

The inset distances for the faces of a 3D volume.

## See Also

### View layout

Arrange views inside built-in layout containers like stacks and grids.

Place views in custom arrangements and create animated transitions between layout types.

Display a structured, scrollable column of information.

Display selectable, sortable data arranged in rows and columns.

Present views in different kinds of purpose-driven containers, like forms or control groups.

Enable people to scroll to content that doesn’t fit in the current display.

---

# https://developer.apple.com/documentation/swiftui/custom-layout

Collection

- SwiftUI
- Custom layout

API Collection

# Custom layout

Place views in custom arrangements and create animated transitions between layout types.

## Overview

You can create complex view layouts using the built-in layout containers and layout view modifiers that SwiftUI provides. However, if you need behavior that you can’t achieve with the built-in layout tools, create a custom layout container type using the `Layout` protocol. A container that you define asks for the sizes of all its subviews, and then indicates where to place the subviews within its own bounds.

You can also create animated transitions among layout types that conform to the `Layout` procotol, including both built-in and custom layouts.

For design guidance, see Layout in the Human Interface Guidelines.

## Topics

### Creating a custom layout container

Composing custom layouts with SwiftUI

Arrange views in your app’s interface using layout tools that SwiftUI provides.

`protocol Layout`

A type that defines the geometry of a collection of views.

`struct LayoutSubview`

A proxy that represents one subview of a layout.

`struct LayoutSubviews`

A collection of proxy values that represent the subviews of a layout view.

### Configuring a custom layout

`struct LayoutProperties`

Layout-specific properties of a layout container.

`struct ProposedViewSize`

A proposal for the size of a view.

`struct ViewSpacing`

A collection of the geometric spacing preferences of a view.

### Associating values with views in a custom layout

Associates a value with a custom layout property.

`protocol LayoutValueKey`

A key for accessing a layout value of a layout container’s subviews.

### Transitioning between layout types

`struct AnyLayout`

A type-erased instance of the layout protocol.

`struct HStackLayout`

A horizontal container that you can use in conditional layouts.

`struct VStackLayout`

A vertical container that you can use in conditional layouts.

`struct ZStackLayout`

An overlaying container that you can use in conditional layouts.

`struct GridLayout`

A grid that you can use in conditional layouts.

## See Also

### View layout

Arrange views inside built-in layout containers like stacks and grids.

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

Display a structured, scrollable column of information.

Display selectable, sortable data arranged in rows and columns.

Present views in different kinds of purpose-driven containers, like forms or control groups.

Enable people to scroll to content that doesn’t fit in the current display.

---

# https://developer.apple.com/documentation/swiftui/lists

Collection

- SwiftUI
- Lists

API Collection

# Lists

Display a structured, scrollable column of information.

## Overview

Use a list to display a one-dimensional vertical collection of views.

The list is a complex container type that automatically provides scrolling when it grows too large for the current display. You build a list by providing it with individual views for the rows in the list, or by using a `ForEach` to enumerate a group of rows. You can also mix these strategies, blending any number of individual views and `ForEach` constructs.

Use view modifiers to configure the appearance and behavior of a list and its rows, headers, sections, and separators. For example, you can apply a style to the list, add swipe gestures to individual rows, or make the list refreshable with a pull-down gesture. You can also use the configuration associated with Scroll views to control the list’s implicit scrolling behavior.

For design guidance, see Lists and tables in the Human Interface Guidelines.

## Topics

### Creating a list

Displaying data in lists

Visualize collections of data with platform-appropriate appearance.

`struct List`

A container that presents rows of data arranged in a single column, optionally providing the ability to select one or more members.

Sets the style for lists within this view.

### Disclosing information progressively

`struct OutlineGroup`

A structure that computes views and disclosure groups on demand from an underlying collection of tree-structured, identified data.

`struct DisclosureGroup`

A view that shows or hides another content view, based on the state of a disclosure control.

Sets the style for disclosure groups within this view.

### Configuring a list’s layout

Applies an inset to the rows in a list.

`var defaultMinListRowHeight: CGFloat`

The default minimum height of rows in a list.

`var defaultMinListHeaderHeight: CGFloat?`

The default minimum height of a header in a list.

Sets the vertical spacing between two adjacent rows in a List.

`func listSectionSpacing(_:)`

Sets the spacing between adjacent sections in a `List` to a custom value.

`struct ListSectionSpacing`

The spacing options between two adjacent sections in a list.

Set the section margins for the specific edges.

### Configuring rows

`func listItemTint(_:)`

Sets a fixed tint color for content in a list.

`struct ListItemTint`

A tint effect configuration that you can apply to content in a list.

### Configuring headers

Sets the header prominence for this view.

`var headerProminence: Prominence`

The prominence to apply to section headers within a view.

`enum Prominence`

A type indicating the prominence of a view hierarchy.

### Configuring separators

Sets the tint color associated with a row.

Sets the tint color associated with a section.

Sets the display mode for the separator associated with this specific row.

Sets whether to hide the separator associated with a list section.

### Configuring backgrounds

Places a custom background view behind a list row item.

Overrides whether lists and tables in this view have alternating row backgrounds.

`struct AlternatingRowBackgroundBehavior`

The styling of views with respect to alternating row backgrounds.

`var backgroundProminence: BackgroundProminence`

The prominence of the background underneath views associated with this environment.

`struct BackgroundProminence`

The prominence of backgrounds underneath other views.

### Displaying a badge on a list item

`func badge(_:)`

Generates a badge for the view from an integer value.

Specifies the prominence of badges created by this view.

`var badgeProminence: BadgeProminence`

The prominence to apply to badges associated with this environment.

`struct BadgeProminence`

The visual prominence of a badge.

### Configuring interaction

Adds custom swipe actions to a row in a list.

Adds a condition that controls whether users can select this view.

Requests that the containing list row use the provided hover effect.

Requests that the containing list row have its hover effect disabled.

### Refreshing a list’s content

Adds an asynchronous handler that can update the data the view displays when a person initiates a request, such as by pulling to refresh.

`var refresh: RefreshAction?`

A refresh action stored in a view’s environment.

`struct RefreshAction`

An action that initiates a refresh operation.

### Editing a list

Adds a condition for whether the view’s view hierarchy is movable.

Adds a condition for whether the view’s view hierarchy is deletable.

An indication of whether the user can edit the contents of a view associated with this environment.

`enum EditMode`

A mode that indicates whether the user can edit a view’s content.

`struct EditActions`

A set of edit actions on a collection of data that a view can offer to a user.

`struct EditableCollectionContent`

An opaque wrapper view that adds editing capabilities to a row in a list.

`struct IndexedIdentifierCollection`

A collection wrapper that iterates over the indices and identifiers of a collection together.

### Configuring a section index

Changes the visibility of the list section index.

`func sectionIndexLabel(_:)`

Sets the label that is used in a section index to point to this section, typically only a single character long.

## See Also

### View layout

Arrange views inside built-in layout containers like stacks and grids.

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

Place views in custom arrangements and create animated transitions between layout types.

Display selectable, sortable data arranged in rows and columns.

Present views in different kinds of purpose-driven containers, like forms or control groups.

Enable people to scroll to content that doesn’t fit in the current display.

---

# https://developer.apple.com/documentation/swiftui/tables

Collection

- SwiftUI
- Tables

API Collection

# Tables

Display selectable, sortable data arranged in rows and columns.

## Overview

Use a table to display multiple values across a collection of elements. Each element in the collection appears in a different row of the table, while each value for a given element appears in a different column. Narrow displays may adapt to show only the first column of the table.

When you create a table, you provide a collection of elements, and then tell the table how to find the needed value for each column. In simple cases, SwiftUI infers the element for each row, but you can also specify the row elements explicitly in more complex scenarios. With a small amount of additional configuration, you can also make the items in the table selectable, and the columns sortable.

Like a `List`, a table includes implicit vertical scrolling that you can configure using the view modifiers described in Scroll views. For design guidance, see Lists and tables in the Human Interface Guidelines.

## Topics

### Creating a table

Building a great Mac app with SwiftUI

Create engaging SwiftUI Mac apps by incorporating side bars, tables, toolbars, and several other popular user interface elements.

`struct Table`

A container that presents rows of data arranged in one or more columns, optionally providing the ability to select one or more members.

Sets the style for tables within this view.

### Creating columns

`struct TableColumn`

A column that displays a view for each row in a table.

`protocol TableColumnContent`

A type used to represent columns within a table.

`struct TableColumnAlignment`

Describes the alignment of the content of a table column.

`struct TableColumnBuilder`

A result builder that creates table column content from closures.

`struct TableColumnForEach`

A structure that computes columns on demand from an underlying collection of identified data.

### Customizing columns

Controls the visibility of a `Table`’s column header views.

`struct TableColumnCustomization`

A representation of the state of the columns in a table.

`struct TableColumnCustomizationBehavior`

A set of customization behaviors of a column that a table can offer to a user.

### Creating rows

`struct TableRow`

A row that represents a data value in a table.

`protocol TableRowContent`

A type used to represent table rows.

`struct TableHeaderRowContent`

A table row that displays a single view instead of columned content.

`struct TupleTableRowContent`

A type of table column content that creates table rows created from a Swift tuple of table rows.

`struct TableForEachContent`

A type of table row content that creates table rows created by iterating over a collection.

`struct EmptyTableRowContent`

A table row content that doesn’t produce any rows.

`protocol DynamicTableRowContent`

A type of table row content that generates table rows from an underlying collection of data.

`struct TableRowBuilder`

A result builder that creates table row content from closures.

### Adding progressive disclosure

`struct DisclosureTableRow`

A kind of table row that shows or hides additional rows based on the state of a disclosure control.

`struct TableOutlineGroupContent`

An opaque table row type created by a table’s hierarchical initializers.

## See Also

### View layout

Arrange views inside built-in layout containers like stacks and grids.

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

Place views in custom arrangements and create animated transitions between layout types.

Display a structured, scrollable column of information.

Present views in different kinds of purpose-driven containers, like forms or control groups.

Enable people to scroll to content that doesn’t fit in the current display.

---

# https://developer.apple.com/documentation/swiftui/view-groupings

Collection

- SwiftUI
- View groupings

API Collection

# View groupings

Present views in different kinds of purpose-driven containers, like forms or control groups.

## Overview

You can create groups of views that serve different purposes.

For example, a `Group` construct treats the specified views as a unit without imposing any additional layout or appearance characteristics. A `Form` presents a group of elements with a platform-specific appearance that’s suitable for gathering input from people.

For design guidance, see Layout in the Human Interface Guidelines.

## Topics

### Grouping views into a container

Creating custom container views

Access individual subviews to compose flexible container views.

`struct Group`

A type that collects multiple instances of a content type — like views, scenes, or commands — into a single unit.

`struct GroupElementsOfContent`

Transforms the subviews of a given view into a resulting content view.

`struct GroupSectionsOfContent`

Transforms the sections of a given view into a resulting content view.

### Organizing views into sections

`struct Section`

A container view that you can use to add hierarchy within certain views.

`struct SectionCollection`

An opaque collection representing the sections of view.

`struct SectionConfiguration`

Specifies the contents of a section.

### Iterating over dynamic data

`struct ForEach`

A structure that computes views on demand from an underlying collection of identified data.

`struct ForEachSectionCollection`

A collection which allows a view to be treated as a collection of its sections in a for each loop.

`struct ForEachSubviewCollection`

A collection which allows a view to be treated as a collection of its subviews in a for each loop.

`protocol DynamicViewContent`

A type of view that generates views from an underlying collection of data.

### Accessing a container’s subviews

`struct Subview`

An opaque value representing a subview of another view.

`struct SubviewsCollection`

An opaque collection representing the subviews of view.

`struct SubviewsCollectionSlice`

A slice of a SubviewsCollection.

Sets a particular container value of a view.

`struct ContainerValues`

A collection of container values associated with a given view.

`protocol ContainerValueKey`

A key for accessing container values.

### Grouping views into a box

`struct GroupBox`

A stylized view, with an optional label, that visually collects a logical grouping of content.

Sets the style for group boxes within this view.

### Grouping inputs

`struct Form`

A container for grouping controls used for data entry, such as in settings or inspectors.

Sets the style for forms in a view hierarchy.

`struct LabeledContent`

A container for attaching a label to a value-bearing view.

Sets a style for labeled content.

### Presenting a group of controls

`struct ControlGroup`

A container view that displays semantically-related controls in a visually-appropriate manner for the context

Sets the style for control groups within this view.

## See Also

### View layout

Arrange views inside built-in layout containers like stacks and grids.

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

Place views in custom arrangements and create animated transitions between layout types.

Display a structured, scrollable column of information.

Display selectable, sortable data arranged in rows and columns.

Enable people to scroll to content that doesn’t fit in the current display.

---

# https://developer.apple.com/documentation/swiftui/scroll-views

Collection

- SwiftUI
- Scroll views

API Collection

# Scroll views

Enable people to scroll to content that doesn’t fit in the current display.

## Overview

When the content of a view doesn’t fit in the display, you can wrap the view in a `ScrollView` to enable people to scroll on one or more axes. Configure the scroll view using view modifiers. For example, you can set the visibility of the scroll indicators or the availability of scrolling in a given dimension.

You can put any view type in a scroll view, but you most often use a scroll view for a layout container with too many elements to fit in the display. For some container views that you put in a scroll view, like lazy stacks, the container doesn’t load views until they are visible or almost visible. For others, like regular stacks and grids, the container loads the content all at once, regardless of the state of scrolling.

Lists and Tables implicitly include a scroll view, so you don’t need to add scrolling to those container types. However, you can configure their implicit scroll views with the same view modifiers that apply to explicit scroll views.

For design guidance, see Scroll views in the Human Interface Guidelines.

## Topics

### Creating a scroll view

`struct ScrollView`

A scrollable view.

`struct ScrollViewReader`

A view that provides programmatic scrolling, by working with a proxy to scroll to known child views.

`struct ScrollViewProxy`

A proxy value that supports programmatic scrolling of the scrollable views within a view hierarchy.

### Managing scroll position

Associates a binding to a scroll position with a scroll view within this view.

Associates a binding to be updated when a scroll view within this view scrolls.

Associates an anchor to control which part of the scroll view’s content should be rendered by default.

Associates an anchor to control the position of a scroll view in a particular circumstance.

`struct ScrollAnchorRole`

A type defining the role of a scroll anchor.

`struct ScrollPosition`

A type that defines the semantic position of where a scroll view is scrolled within its content.

### Defining scroll targets

Sets the scroll behavior of views scrollable in the provided axes.

Configures the outermost layout as a scroll target layout.

`struct ScrollTarget`

A type defining the target in which a scroll view should try and scroll to.

`protocol ScrollTargetBehavior`

A type that defines the scroll behavior of a scrollable view.

`struct ScrollTargetBehaviorContext`

The context in which a scroll target behavior updates its scroll target.

`struct PagingScrollTargetBehavior`

The scroll behavior that aligns scroll targets to container-based geometry.

`struct ViewAlignedScrollTargetBehavior`

The scroll behavior that aligns scroll targets to view-based geometry.

`struct AnyScrollTargetBehavior`

A type-erased scroll target behavior.

`struct ScrollTargetBehaviorProperties`

Properties influencing the scroll view a scroll target behavior applies to.

`struct ScrollTargetBehaviorPropertiesContext`

The context in which a scroll target behavior can decide its properties.

### Animating scroll transitions

Applies the given transition, animating between the phases of the transition as this view appears and disappears within the visible region of the containing scroll view.

`enum ScrollTransitionPhase`

The phases that a view transitions between when it scrolls among other views.

`struct ScrollTransitionConfiguration`

The configuration of a scroll transition that controls how a transition is applied as a view is scrolled through the visible region of a containing scroll view or other container.

### Responding to scroll view changes

Adds an action to be performed when a value, created from a scroll geometry, changes.

Adds an action to be called with information about what views would be considered visible.

Adds an action to be called when the view crosses the threshold to be considered on/off screen.

`func onScrollPhaseChange(_:)`

Adds an action to perform when the scroll phase of the first scroll view in the hierarchy changes.

`struct ScrollGeometry`

A type that defines the geometry of a scroll view.

`enum ScrollPhase`

A type that describes the state of a scroll gesture of a scrollable view like a scroll view.

`struct ScrollPhaseChangeContext`

A type that provides you with more content when the phase of a scroll view changes.

### Showing scroll indicators

Flashes the scroll indicators of a scrollable view when it appears.

Flashes the scroll indicators of scrollable views when a value changes.

Sets the visibility of scroll indicators within this view.

`var horizontalScrollIndicatorVisibility: ScrollIndicatorVisibility`

The visibility to apply to scroll indicators of any horizontally scrollable content.

`var verticalScrollIndicatorVisibility: ScrollIndicatorVisibility`

The visiblity to apply to scroll indicators of any vertically scrollable content.

`struct ScrollIndicatorVisibility`

The visibility of scroll indicators of a UI element.

### Managing content visibility

Specifies the visibility of the background for scrollable views within this view.

Sets whether a scroll view clips its content to its bounds.

`struct ScrollContentOffsetAdjustmentBehavior`

A type that defines the different kinds of content offset adjusting behaviors a scroll view can have.

### Disabling scrolling

Disables or enables scrolling in scrollable views.

`var isScrollEnabled: Bool`

A Boolean value that indicates whether any scroll views associated with this environment allow scrolling to occur.

### Configuring scroll bounce behavior

Configures the bounce behavior of scrollable views along the specified axis.

`var horizontalScrollBounceBehavior: ScrollBounceBehavior`

The scroll bounce mode for the horizontal axis of scrollable views.

`var verticalScrollBounceBehavior: ScrollBounceBehavior`

The scroll bounce mode for the vertical axis of scrollable views.

`struct ScrollBounceBehavior`

The ways that a scrollable view can bounce when it reaches the end of its content.

### Configuring scroll edge effects

Configures the scroll edge effect style for scroll views within this hierarchy.

Hides any scroll edge effects for scroll views within this hierarchy.

`struct ScrollEdgeEffectStyle`

A structure that defines the style of pocket a scroll view will have.

`func safeAreaBar(edge:alignment:spacing:content:)`

Shows the specified content as a custom bar beside the modified view.

### Interacting with a software keyboard

Configures the behavior in which scrollable content interacts with the software keyboard.

`var scrollDismissesKeyboardMode: ScrollDismissesKeyboardMode`

The way that scrollable content interacts with the software keyboard.

`struct ScrollDismissesKeyboardMode`

The ways that scrollable content can interact with the software keyboard.

### Managing scrolling for different inputs

Enables or disables scrolling in scrollable views when using particular inputs.

`struct ScrollInputKind`

Inputs used to scroll views.

`struct ScrollInputBehavior`

A type that defines whether input should scroll a view.

## See Also

### View layout

Arrange views inside built-in layout containers like stacks and grids.

Make fine adjustments to alignment, spacing, padding, and other layout parameters.

Place views in custom arrangements and create animated transitions between layout types.

Display a structured, scrollable column of information.

Display selectable, sortable data arranged in rows and columns.

Present views in different kinds of purpose-driven containers, like forms or control groups.

---

# https://developer.apple.com/documentation/swiftui/shapes

Collection

- SwiftUI
- Shapes

API Collection

# Shapes

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

## Overview

Draw shapes like circles and rectangles, as well as custom paths that define shapes of your own design. Apply styles that include environment-aware colors, rich gradients, and material effects to the foreground, background, and outline of your shapes.

If you need the efficiency or flexibility of immediate mode drawing — for example, to create particle effects — use a `Canvas` view instead.

## Topics

### Creating rectangular shapes

`struct Rectangle`

A rectangular shape aligned inside the frame of the view containing it.

`struct RoundedRectangle`

A rectangular shape with rounded corners, aligned inside the frame of the view containing it.

`enum RoundedCornerStyle`

Defines the shape of a rounded rectangle’s corners.

`protocol RoundedRectangularShape`

A protocol of `InsettableShape` that describes a rounded rectangular shape.

`struct RoundedRectangularShapeCorners`

A type describing the corner styles of a `RoundedRectangularShape`.

`struct UnevenRoundedRectangle`

A rectangular shape with rounded corners with different values, aligned inside the frame of the view containing it.

`struct RectangleCornerRadii`

Describes the corner radius values of a rounded rectangle with uneven corners.

`struct RectangleCornerInsets`

The inset sizes for the corners of a rectangle.

`struct ConcentricRectangle`

A shape that is replaced by a concentric version of the current container shape. If the container shape is a rectangle derived shape with four corners, this shape could choose to respect corners individually.

### Creating circular shapes

`struct Circle`

A circle centered on the frame of the view containing it.

`struct Ellipse`

An ellipse aligned inside the frame of the view containing it.

`struct Capsule`

A capsule shape aligned inside the frame of the view containing it.

### Drawing custom shapes

`struct Path`

The outline of a 2D shape.

### Defining shape behavior

`protocol ShapeView`

A view that provides a shape that you can use for drawing operations.

`protocol Shape`

A 2D shape that you can use when drawing a view.

`struct AnyShape`

A type-erased shape value.

`enum ShapeRole`

Ways of styling a shape.

`struct StrokeStyle`

The characteristics of a stroke that traces a path.

`struct StrokeShapeView`

A shape provider that strokes its shape.

`struct StrokeBorderShapeView`

A shape provider that strokes the border of its shape.

`struct FillStyle`

A style for rasterizing vector shapes.

`struct FillShapeView`

A shape provider that fills its shape.

### Transforming a shape

`struct ScaledShape`

A shape with a scale transform applied to it.

`struct RotatedShape`

A shape with a rotation transform applied to it.

`struct OffsetShape`

A shape with a translation offset transform applied to it.

`struct TransformedShape`

A shape with an affine transform applied to it.

### Setting a container shape

`func containerShape(_:)`

Sets the container shape to use for any container relative shape or concentric rectangle within this view.

`protocol InsettableShape`

A shape type that is able to inset itself to produce another shape.

`struct ContainerRelativeShape`

A shape that is replaced by an inset version of the current container shape. If no container shape was defined, is replaced by a rectangle.

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Create smooth visual updates in response to state changes.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/swiftui/drawing-and-graphics

Collection

- SwiftUI
- Drawing and graphics

API Collection

# Drawing and graphics

Enhance your views with graphical effects and customized drawings.

## Overview

You create rich, dynamic user interfaces with the built-in views and Shapes that SwiftUI provides. To enhance any view, you can apply many of the graphical effects typically associated with a graphics context, like setting colors, adding masks, and creating composites.

When you need the flexibility of immediate mode drawing in a graphics context, use a `Canvas` view. This can be particularly helpful when you want to draw an extremely large number of dynamic shapes — for example, to create particle effects.

For design guidance, see Materials and Color in the Human Interface Guidelines.

## Topics

### Immediate mode drawing

Add rich graphics to your SwiftUI app

Make your apps stand out by adding background materials, vibrancy, custom graphics, and animations.

`struct Canvas`

A view type that supports immediate mode drawing.

`struct GraphicsContext`

An immediate mode drawing destination, and its current state.

### Setting a color

`func tint(_:)`

Sets the tint color within this view.

`struct Color`

A representation of a color that adapts to a given context.

### Styling content

Adds a border to this view with the specified style and width.

Sets a view’s foreground elements to use a given style.

Sets the primary and secondary levels of the foreground style in the child view.

Sets the primary, secondary, and tertiary levels of the foreground style.

Sets the specified style to render backgrounds within the view.

`var backgroundStyle: AnyShapeStyle?`

An optional style that overrides the default system background style when set.

`protocol ShapeStyle`

A color or pattern to use when rendering a shape.

`struct AnyShapeStyle`

A type-erased ShapeStyle value.

`struct Gradient`

A color gradient represented as an array of color stops, each having a parametric location value.

`struct MeshGradient`

A two-dimensional gradient defined by a 2D grid of positioned colors.

`struct AnyGradient`

A color gradient.

`struct ShadowStyle`

A style to use when rendering shadows.

`struct Glass`

A structure that defines the configuration of the Liquid Glass material.

### Transforming colors

Brightens this view by the specified amount.

Sets the contrast and separation between similar colors in this view.

Inverts the colors in this view.

Adds a color multiplication effect to this view.

Adjusts the color saturation of this view.

Adds a grayscale effect to this view.

Applies a hue rotation effect to this view.

Adds a luminance to alpha effect to this view.

Sets an explicit active appearance for materials in this view.

`var materialActiveAppearance: MaterialActiveAppearance`

The behavior materials should use for their active state, defaulting to `automatic`.

`struct MaterialActiveAppearance`

The behavior for how materials appear active and inactive.

### Scaling, rotating, or transforming a view

Scales this view to fill its parent.

Scales this view to fit its parent.

`func scaleEffect(_:anchor:)`

Scales this view’s rendered output by the given amount in both the horizontal and vertical directions, relative to an anchor point.

Scales this view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.

Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.

`func aspectRatio(_:contentMode:)`

Constrains this view’s dimensions to the specified aspect ratio.

Rotates a view’s rendered output in two dimensions around the specified point.

Renders a view’s content as if it’s rotated in three dimensions around the specified axis.

Rotates the view’s content by the specified 3D rotation value.

`func rotation3DEffect(_:axis:anchor:)`

Rotates the view’s content by an angle about an axis that you specify as a tuple of elements.

Applies an affine transformation to this view’s rendered output.

Applies a 3D transformation to this view’s rendered output.

Applies a projection transformation to this view’s rendered output.

`struct ProjectionTransform`

`enum ContentMode`

Constants that define how a view’s content fills the available space.

### Masking and clipping

Masks this view using the alpha channel of the given view.

Clips this view to its bounding rectangular frame.

Sets a clipping shape for this view.

### Applying blur and shadows

Applies a Gaussian blur to this view.

Adds a shadow to this view.

`struct ColorMatrix`

A matrix to use in an RGBA color transformation.

### Applying effects based on geometry

Applies effects to this view, while providing access to layout information through a geometry proxy.

Applies effects to this view, while providing access to layout information through a 3D geometry proxy.

`protocol VisualEffect`

Visual Effects change the visual appearance of a view without changing its ancestors or descendents.

`struct EmptyVisualEffect`

The base visual effect that you apply additional effect to.

### Compositing views

Sets the blend mode for compositing this view with overlapping views.

Wraps this view in a compositing group.

Composites this view’s contents into an offscreen image before final display.

`enum BlendMode`

Modes for compositing a view with overlapping content.

`enum ColorRenderingMode`

The set of possible working color spaces for color-compositing operations.

`protocol CompositorContent`

`struct CompositorContentBuilder`

A result builder for composing a collection of `CompositorContent` elements.

`struct AnyCompositorContent`

Type erased compositor content.

### Measuring a view

`struct GeometryReader`

A container view that defines its content as a function of its own size and coordinate space.

`struct GeometryReader3D`

`struct GeometryProxy`

A proxy for access to the size and coordinate space (for anchor resolution) of the container view.

`struct GeometryProxy3D`

A proxy for access to the size and coordinate space of the container view.

Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.

`enum CoordinateSpace`

A resolved coordinate space created by the coordinate space protocol.

`protocol CoordinateSpaceProtocol`

A frame of reference within the layout system.

`struct PhysicalMetric`

Provides access to a value in points that corresponds to the specified physical measurement.

`struct PhysicalMetricsConverter`

A physical metrics converter provides conversion between point values and their extent in 3D space, in the form of physical length measurements.

### Responding to a geometry change

`func onGeometryChange(for:of:action:)`

Adds an action to be performed when a value, created from a geometry proxy, changes.

### Accessing Metal shaders

Returns a new view that applies `shader` to `self` as a filter effect on the color of each pixel.

Returns a new view that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.

Returns a new view that applies `shader` to `self` as a filter on the raster layer created from `self`.

`struct Shader`

A reference to a function in a Metal shader library, along with its bound uniform argument values.

`struct ShaderFunction`

A reference to a function in a Metal shader library.

`struct ShaderLibrary`

A Metal shader library.

### Accessing geometric constructs

`enum Axis`

The horizontal or vertical dimension in a 2D coordinate system.

`struct Angle`

A geometric angle whose value you access in either radians or degrees.

`struct UnitPoint`

A normalized 2D point in a view’s coordinate space.

`struct UnitPoint3D`

A normalized 3D point in a view’s coordinate space.

`struct Anchor`

An opaque value derived from an anchor source and a particular view.

`protocol DepthAlignmentID`

`struct Alignment3D`

An alignment in all three axes.

`struct GeometryProxyCoordinateSpace3D`

A representation of a `GeometryProxy3D` which can be used for `CoordinateSpace3D` based conversions.

## See Also

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

---

# https://developer.apple.com/documentation/swiftui/animations

Collection

- SwiftUI
- Animations

API Collection

# Animations

Create smooth visual updates in response to state changes.

## Overview

You tell SwiftUI how to draw your app’s user interface for different states, and then rely on SwiftUI to make interface updates when the state changes.

To avoid abrupt visual transitions when the state changes, add animation in one of the following ways:

- Animate all of the visual changes for a state change by changing the state inside a call to the `withAnimation(_:_:)` global function.

- Add animation to a particular view when a specific value changes by applying the `animation(_:value:)` view modifier to the view.

- Animate changes to a `Binding` by using the binding’s `animation(_:)` method.

SwiftUI animates the effects that many built-in view modifiers produce, like those that set a scale or opacity value. You can animate other values by making your custom views conform to the `Animatable` protocol, and telling SwiftUI about the value you want to animate.

When an animated state change results in adding or removing a view to or from the view hierarchy, you can tell SwiftUI how to transition the view into or out of place using built-in transitions that `AnyTransition` defines, like `slide` or `scale`. You can also create custom transitions.

For design guidance, see Motion in the Human Interface Guidelines.

## Topics

### Adding state-based animation to an action

Returns the result of recomputing the view’s body with the provided animation.

Returns the result of recomputing the view’s body with the provided animation, and runs the completion when all animations are complete.

`struct AnimationCompletionCriteria`

The criteria that determines when an animation is considered finished.

`struct Animation`

The way a view changes over time to create a smooth visual transition from one state to another.

### Adding state-based animation to a view

`func animation(_:)`

Applies the given animation to this view when this view changes.

Applies the given animation to this view when the specified value changes.

Applies the given animation to all animatable values within the `body` closure.

### Creating phase-based animation

Controlling the timing and movements of your animations

Build sophisticated animations that you control using phase and keyframe animators.

Animates effects that you apply to a view over a sequence of phases that change continuously.

Animates effects that you apply to a view over a sequence of phases that change based on a trigger.

`struct PhaseAnimator`

A container that animates its content by automatically cycling through a collection of phases that you provide, each defining a discrete step within an animation.

### Creating keyframe-based animation

Loops the given keyframes continuously, updating the view using the modifiers you apply in `body`.

Plays the given keyframes when the given trigger value changes, updating the view using the modifiers you apply in `body`.

`struct KeyframeAnimator`

A container that animates its content with keyframes.

`protocol Keyframes`

A type that defines changes to a value over time.

`struct KeyframeTimeline`

A description of how a value changes over time, modeled using keyframes.

`struct KeyframeTrack`

A sequence of keyframes animating a single property of a root type.

`struct KeyframeTrackContentBuilder`

The builder that creates keyframe track content from the keyframes that you define within a closure.

`struct KeyframesBuilder`

A builder that combines keyframe content values into a single value.

`protocol KeyframeTrackContent`

A group of keyframes that define an interpolation curve of an animatable value.

`struct CubicKeyframe`

A keyframe that uses a cubic curve to smoothly interpolate between values.

`struct LinearKeyframe`

A keyframe that uses simple linear interpolation.

`struct MoveKeyframe`

A keyframe that immediately moves to the given value without interpolating.

`struct SpringKeyframe`

A keyframe that uses a spring function to interpolate to the given value.

### Creating custom animations

`protocol CustomAnimation`

A type that defines how an animatable value changes over time.

`struct AnimationContext`

Contextual values that a custom animation can use to manage state and access a view’s environment.

`struct AnimationState`

A container that stores the state for a custom animation.

`protocol AnimationStateKey`

A key for accessing animation state values.

`struct UnitCurve`

A function defined by a two-dimensional curve that maps an input progress in the range \[0,1\] to an output progress that is also in the range \[0,1\]. By changing the shape of the curve, the effective speed of an animation or other interpolation can be changed.

`struct Spring`

A representation of a spring’s motion.

### Making data animatable

`protocol Animatable`

A type that describes how to animate a property of a view.

`struct AnimatableValues`

`struct AnimatablePair`

A pair of animatable values, which is itself animatable.

`protocol VectorArithmetic`

A type that can serve as the animatable data of an animatable type.

`struct EmptyAnimatableData`

An empty type for animatable data.

### Updating a view on a schedule

Updating watchOS apps with timelines

Seamlessly schedule updates to your user interface, even while it’s inactive.

`struct TimelineView`

A view that updates according to a schedule that you provide.

`protocol TimelineSchedule`

A type that provides a sequence of dates for use as a schedule.

`typealias TimelineViewDefaultContext`

Information passed to a timeline view’s content callback.

### Synchronizing geometries

Defines a group of views with synchronized geometry using an identifier and namespace that you provide.

`struct MatchedGeometryProperties`

A set of view properties that may be synchronized between views using the `View.matchedGeometryEffect()` function.

`protocol GeometryEffect`

An effect that changes the visual appearance of a view, largely without changing its ancestors or descendants.

`struct Namespace`

A dynamic property type that allows access to a namespace defined by the persistent identity of the object containing the property (e.g. a view).

Isolates the geometry (e.g. position and size) of the view from its parent view.

### Defining transitions

`func transition(_:)`

Associates a transition with the view.

`protocol Transition`

A description of view changes to apply when a view is added to and removed from the view hierarchy.

`struct TransitionProperties`

The properties a `Transition` can have.

`enum TransitionPhase`

An indication of which the current stage of a transition.

`struct AsymmetricTransition`

A composite `Transition` that uses a different transition for insertion versus removal.

`struct AnyTransition`

A type-erased transition.

Modifies the view to use a given transition as its method of animating changes to the contents of its views.

`var contentTransition: ContentTransition`

The current method of animating the contents of views.

`var contentTransitionAddsDrawingGroup: Bool`

A Boolean value that controls whether views that render content transitions use GPU-accelerated rendering.

`struct ContentTransition`

A kind of transition that applies to the content within a single view, rather than to the insertion or removal of a view.

`struct PlaceholderContentView`

A placeholder used to construct an inline modifier, transition, or other helper type.

Sets the navigation transition style for this view.

`protocol NavigationTransition`

A type that defines the transition to use when navigating to a view.

Identifies this view as the source of a navigation transition, such as a zoom transition.

`protocol MatchedTransitionSourceConfiguration`

A configuration that defines the appearance of a matched transition source.

`struct EmptyMatchedTransitionSourceConfiguration`

An unstyled matched transition source configuration.

### Moving an animation to another view

Executes a closure with the specified transaction and returns the result.

Executes a closure with the specified transaction key path and value and returns the result.

Applies the given transaction mutation function to all animations used within the view.

Applies the given transaction mutation function to all animations used within the `body` closure.

`struct Transaction`

The context of the current state-processing update.

`macro Entry()`

Creates an environment values, transaction, container values, or focused values entry.

`protocol TransactionKey`

A key for accessing values in a transaction.

### Deprecated types

`protocol AnimatableModifier`

A modifier that can create another modifier with animation.

Deprecated

## See Also

### Views

Define the visual elements of your app using a hierarchy of views.

Adjust the characteristics of views in a hierarchy.

Apply built-in and custom appearances and behaviors to different types of views.

Display formatted text and get text input from the user.

Add images and symbols to your app’s user interface.

Display values and get user selections.

Provide space-efficient, context-dependent access to commands and controls.

Trace and fill built-in and custom shapes with a color, gradient, or other pattern.

Enhance your views with graphical effects and customized drawings.

---

# https://developer.apple.com/documentation/SwiftUI/Animatable()

#app-main)

- SwiftUI
- Animatable()

Macro

# Animatable()

A member and extension macro that, when applied to a struct, class or enum declaration, synthesizes the conformance to `Animatable` and its requirement, the `animatableData` property using the existing animatable properties of the type this macro is applied to.

@attached(extension, conformances: Animatable) @attached(member, names: named(animatableData))
macro Animatable()

## Overview

@Animatable
struct CoolShape: Shape {
var width: CGFloat
var angle: Angle
@AnimatableIgnored var isOpaque: Bool

// ...
}

In the above code, `animatableData` will be synthesized using `width` and `angle` properties of `CoolShape` structure. Since changes to `isOpaque` property cannot be animated, it is annotated with `@AnimatableIgnored`.

## See Also

### Animating data

`macro AnimatableIgnored()`

An accessor macro that marks a property of a type to be excluded from the `animatableData` synthesis:

`var animatableData: Self.AnimatableData`

The data to animate.

**Required** Default implementations provided.

`associatedtype AnimatableData : VectorArithmetic`

The type defining the data to animate.

**Required**

---

