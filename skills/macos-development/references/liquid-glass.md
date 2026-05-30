# Liquid Glass (macOS / SwiftUI / AppKit)

> Source: Apple Developer docs snapshot 2026-05-30. The flagship material of the 2025/2026 OS releases. Adoption guides, the glassEffect API, GlassEffectContainer, background extension effect, and Icon Composer.

---

# https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass

- Technology Overviews
- App design and UI
- Liquid Glass
- Adopting Liquid Glass

# Adopting Liquid Glass

Find out how to bring the new material to your app.

## Overview

If you have an existing app, adopting Liquid Glass doesn’t mean reinventing your app from the ground up. Start by building your app in the latest version of Xcode to see the changes. As you review your app, use the following sections to understand the scope of changes and learn how you can adopt these best practices in your interface.

* * *

#### See your app with Liquid Glass

If your app uses standard components from SwiftUI, UIKit, or AppKit, your interface picks up the latest look and feel on the latest platform releases for iOS, iPadOS, macOS, tvOS, and watchOS. In Xcode, build your app with the latest SDKs, and run it on the latest platform releases to see the changes in your interface.

## Visual refresh

Interfaces across Apple platforms feature a new dynamic material called Liquid Glass, which combines the optical properties of glass with a sense of fluidity. This material forms a distinct functional layer for controls and navigation elements. It affects how the interface looks, feels, and moves, adapting in response to a variety of factors to help bring focus to the underlying content.

**Leverage system frameworks to adopt Liquid Glass automatically.** In system frameworks, standard components like bars, sheets, popovers, and controls automatically adopt this material. System frameworks also dynamically adapt these components in response to factors like element overlap and focus state. Take advantage of this material with minimal code by using standard components from SwiftUI, UIKit, and AppKit.

**Reduce your use of custom backgrounds in controls and navigation elements.** Any custom backgrounds and appearances you use in these elements might overlay or interfere with Liquid Glass or other effects that the system provides, such as the scroll edge effect. Make sure to check any custom backgrounds in elements like split views, tab bars, and toolbars. Prefer to remove custom effects and let the system determine the background appearance, especially for the following elements:

`NavigationStack`

`NavigationSplitView`

`titleBar`

`toolbar(content:)`

`UINavigationBar`

`UITabBar`

`UIToolbar`

`UISplitViewController`

`NSToolbar`

`NSSplitView`

**Test your interface with a variety of display and accessibility settings.** Translucency and fluid morphing animations contribute to the look and feel of Liquid Glass, but can adapt to people’s needs. For example, people can choose a preferred look for Liquid Glass in their device’s settings, or turn on accessibility settings that reduce transparency or motion in the interface. These settings can remove or modify certain effects. If you use standard components from system frameworks, this experience adapts automatically. Ensure you test your app’s custom elements, colors, and animations with different configurations of these settings.

**Avoid overusing Liquid Glass effects.** If you apply Liquid Glass effects to a custom control, do so sparingly. Liquid Glass seeks to bring attention to the underlying content, and overusing this material in multiple custom controls can provide a subpar user experience by distracting from that content. Limit these effects to the most important functional elements in your app. To learn more, read Applying Liquid Glass to custom views.

`glassEffect(_:in:)`

`UIGlassEffect`

`NSGlassEffectView`

## App icons

App icons take on a design that’s dynamic and expressive. Updates to the icon grid result in a standardized iconography that’s visually consistent across devices and concentric with hardware and other elements across the system. App icons now contain layers, which dynamically respond to lighting and other visual effects the system provides. iOS, iPadOS, and macOS all now offer default (light), dark, clear, and tinted appearance variants, empowering people to personalize the look and feel of their Home Screen.

**Reimagine your app icon for Liquid Glass.** Apply key design principles to help your app icon shine:

- Provide a visually consistent, optically balanced design across the platforms your app supports.

- Consider a simplified design comprised of solid, filled, overlapping semi-transparent shapes.

- Let the system handle applying masking, blurring, and other visual effects, rather than factoring them into your design.

**Design using layers.** The system automatically applies effects like reflection, refraction, shadow, blur, and highlights to your icon layers. Determine which elements of your design make sense as foreground, middle, and background elements, then define separate layers for them. You can perform this task in the design app of your choice.

**Compose and preview in Icon Composer.** Drag and drop app icon layers that you export from your design app directly into the Icon Composer app. Icon Composer lets you add a background, create layer groupings, adjust layer attributes like opacity, and preview your design with system effects and appearances. Icon Composer is available in the latest version of Xcode and for download from Apple Design Resources. To learn more, read Creating your app icon using Icon Composer.

**Preview against the updated grids.** The system applies masking to produce your final icon shape — rounded rectangle for iOS, iPadOS, and macOS, and circular for watchOS. Keep elements centered to avoid clipping. Irregularly shaped icons receive a system-provided background. See how your app icon looks with the updated grids to determine whether you need to make adjustments. Download these grids from Apple Design Resources.

## Controls

Controls have a refreshed look across platforms, and come to life when a person interacts with them. For controls like sliders and toggles, the knob transforms into Liquid Glass during interaction, and buttons fluidly morph into menus and popovers. The shape of the hardware informs the curvature of controls, so many controls adopt rounder forms to elegantly nestle into the corners of windows and displays. Controls also feature an option for an extra-large size, allowing more space for labels and accents.

Video with custom controls.

Content description: A video showing a slider as its value changes during interaction.

Play

Slider

Content description: A video showing a segmented control as its selection changes during interaction between two segments: For You and Library.

Segmented control

**Review updates to control appearance and dimensions.** If you use standard controls from system frameworks and don’t hard-code their layout metrics, your app adopts changes to shapes and sizes automatically when you rebuild your app with the latest version of Xcode. Review changes to the following controls and any others and make sure they continue to look at home with the rest of your interface:

`Button`

`Toggle`

`Slider`

`Stepper`

`Picker`

`TextField`

`UIButton`

`UISwitch`

`UISlider`

`UIStepper`

`UISegmentedControl`

`UITextField`

`NSButton`

`NSSwitch`

`NSSlider`

`NSStepper`

`NSSegmentedControl`

`NSTextField`

**Review your use of color in controls.** Be judicious with your use of color in controls and navigation so they stay legible. If you do apply color to these elements, leverage system colors, or define a custom color with light and dark variants, and an increased contrast option for each variant.

**Check for crowding or overlapping of controls.** Prefer to use standard spacing metrics instead of overriding them, and avoid overcrowding or layering Liquid Glass elements on top of each other.

**Optimize for legibility when content scrolls beneath controls.** Scroll views offer a scroll edge effect that helps maintain sufficient legibility and contrast for controls by obscuring content that scrolls beneath them. System bars like toolbars adopt this behavior by default. If you use a custom bar with elements like controls, text, or icons that have content scrolling beneath them, you can register those views to use a scroll edge effect with these APIs:

`safeAreaBar(edge:alignment:spacing:content:)`

`UIScrollEdgeElementContainerInteraction`

**Consider aligning the shape of controls with other rounded elements throughout the interface.** Across Apple platforms, the shape of the hardware informs the curvature, size, and shape of nested interface elements, including controls, sheets, popovers, windows, and more. Help maintain a sense of visual continuity in your interface by using rounded shapes that are concentric to their containers using these APIs:

`rect(corners:isUniform:)`

`ConcentricRectangle`

`cornerConfiguration`

`UICornerConfiguration`

**Leverage new button styles**. Instead of creating buttons with custom Liquid Glass effects, you can adopt the look and feel of the material with minimal code by using one of the following button style APIs:

`glass`

`glassProminent`

`glass(_:)`

`glass()`

`prominentGlass()`

`clearGlass()`

`prominentClearGlass()`

`NSButton.BezelStyle.glass`

## Navigation

Liquid Glass applies to the topmost layer of the interface, where you define your navigation. Key navigation elements like tab bars and sidebars float in this Liquid Glass layer to help people focus on the underlying content.

Before

After

**Establish a clear navigation hierarchy.** It’s more important than ever for your app to have a clear and consistent navigation structure that’s distinct from the content you provide. Ensure that you clearly separate your content from navigation elements, like tab bars and sidebars, to establish a distinct functional layer above the content layer.

**Consider adapting your tab bar into a sidebar automatically.** If your app uses a tab-based navigation, you can allow the tab bar to adapt into a sidebar depending on the context by using the following APIs:

`sidebarAdaptable`

`UITabBarController.Mode.tabSidebar`

**Consider using split views to build sidebar layouts with an inspector panel.** Split views are optimized to create a consistent and familiar experience for sidebar and inspector layouts across platforms. You can use the following standard system APIs for split views to build these types of layouts with minimal code:

`inspector(isPresented:content:)`

`UISplitViewController.Column.inspector`

`NSSplitViewController`

`init(inspectorWithViewController:)`

**Check content safe areas for sidebars and inspectors.** If you have these types of components in your app’s navigation structure, audit the safe area compatibility of content next to the sidebar and inspector to help make sure underlying content is peeking through appropriately.

**Extend content beneath sidebars and inspectors.** A background extension effect creates a sense of extending a background under a sidebar or inspector, without actually scrolling or placing content under it. A background extension effect mirrors the adjacent content to give the impression of stretching it under the sidebar, and applies a blur to maintain legibility of the sidebar or inspector. This effect is perfect for creating a full, edge-to-edge content experience in apps that use split views, such as for hero images on product pages.

`backgroundExtensionEffect()`

`UIBackgroundExtensionView`

`NSBackgroundExtensionView`

**Choose whether to automatically minimize your tab bar in iOS.** Tab bars can help elevate the underlying content by receding when a person scrolls up or down. You can opt into this behavior and configure the tab bar to minimize when a person scrolls down or up. The tab bar expands when a person scrolls in the opposite direction.

TabView {
// ...
}
.tabBarMinimizeBehavior(.onScrollDown)
tabBarMinimizeBehavior = .onScrollDown

## Menus and toolbars

Menus have a refreshed look across platforms. They adopt Liquid Glass, and menu items for common actions use icons to help people quickly scan and identify those actions. New to iPadOS, apps also have a menu bar for faster access to common commands.

**Adopt standard icons in menu items.** For menu items that perform standard actions like Cut, Copy, and Paste, the system uses the menu item’s selector to determine which icon to apply. To adopt icons in those menu items with minimal code, make sure to use standard selectors.

**Match top menu actions to swipe actions.** For consistency and predictability, make sure the actions you surface at the top of your contextual menu match the swipe actions you provide for the same item.

Toolbars take on a Liquid Glass appearance, and provide a grouping mechanism for toolbar items, letting you choose which actions to display together.

**Determine which toolbar items to group together.** Group items that perform similar actions or affect the same part of the interface, and maintain consistent groupings and placement across platforms.

You can create a fixed spacer to separate items that share a background using these APIs:

`fixed`

`ToolbarSpacer`

`fixedSpace(_:)`

`space`

**Find icons to represent common actions.** Consider representing common actions in toolbars with standard icons instead of text. This approach helps declutter the interface and increase the ease of use for common actions. For consistency, don’t mix text and icons across items that share a background.

**Provide an accessibility label for every icon.** Regardless of what you show in the interface, always specify an accessibility label for each icon. This way, people who prefer a text label can opt into this information by turning on accessibility features like VoiceOver or Voice Control.

**Audit toolbar customizations.** Review anything custom you do to display items in your toolbars, like your use of fixed spacers or custom items, as these can appear inconsistent with system behavior.

**Check how you hide toolbar items.** If you see an empty toolbar item without any content, your app might be hiding the view in the toolbar item instead of the item itself. Instead, hide the entire toolbar item, using these APIs:

`hidden(_:)`

`isHidden`

## Windows and modals

Windows adopt rounder corners to fit controls and navigation elements. In iPadOS, apps show window controls and support continuous window resizing. Instead of transitioning between specific preset sizes, windows resize fluidly down to a minimum size.

**Support arbitrary window sizes.** Allow people to resize their window to the width and height that works for them, and adjust your content accordingly.

**Use split views to allow fluid resizing of columns.** To support continuous window resizing, split views automatically reflow content for every size using beautiful, fluid transitions. Make sure to use standard system APIs for split views to get these animations with minimal code:

**Use layout guides and safe areas.** Make sure you specify safe areas for your content so the system can automatically adjust the window controls and title bar in relation to your content.

Modal views like sheets and action sheets adopt Liquid Glass. Sheets feature an increased corner radius, and half sheets are inset from the edge of the display to allow content to peek through from beneath them. When a half sheet expands to full height, it transitions to a more opaque appearance to help maintain focus on the task.

**Check the content around the edges of sheets.** Inside the sheet, check for content and controls that might appear too close to rounder sheet corners. Outside the sheet, check that any content peeking through between the inset sheet and display edge looks as you expect.

**Audit the backgrounds of sheets and popovers.** Check whether you add a visual effect view to your popover’s content view, and remove those custom background views to provide a consistent experience with other sheets across the system.

An action sheet originates from the element that initiates the action, instead of from the bottom edge of the display. When active, an action sheet also lets people interact with other parts of the interface.

**Specify the source of an action sheet.** Position an action sheet’s anchor next to the control it originates from. Make sure to set the source view or item to indicate where to originate the action sheet and create the inline appearance.

`confirmationDialog(_:isPresented:titleVisibility:presenting:actions:)`

`sourceView`

`sourceItem`

`beginSheetModal(for:completionHandler:)`

## Organization and layout

Style updates to list-based layouts help you organize and showcase your content so it can shine through the Liquid Glass layer. To give content room to breathe, organizational components like lists, tables, and forms have a larger row height and padding. Sections have an increased corner radius to match the curvature of controls across the system.

**Check capitalization in section headers.** Lists, tables, and forms optimize for legibility by adopting title-style capitalization for section headers. This means section headers no longer render entirely in capital letters regardless of the capitalization you provide. Make sure to update your section headers to title-style capitalization to match your app’s text to this systemwide convention.

**Adopt forms to take advantage of layout metrics across platform.** Use SwiftUI forms with the grouped form style to automatically update your form layouts.

## Search

Platform conventions for location and behavior of search optimize the experience for each device and use case. To provide an engaging search experience in your app, review these search design conventions.

**Check the keyboard layout when activating your search interface.** In iOS, when a person taps a search field to give it focus, it slides upwards as the keyboard appears. Test this experience in your app to make sure the search field moves consistently with other apps and system experiences.

**Use semantic search tabs.** If your app’s search appears as part of a tab bar, make sure to use the standard system APIs for indicating which tab is the search tab. The system automatically separates the search tab from other tabs and places it at the trailing end to make your search experience consistent with other apps and help people find content faster.

Tab(role: .search) {
// ...
}
UISearchTab { _ in
// ...
}

## Platform considerations

Liquid Glass can have a distinct appearance and behavior across different platforms, contexts, and input methods. Test your app across devices to understand how the material looks and feels across platforms.

**In watchOS, adopt standard button styles and toolbar APIs.** Liquid Glass changes are minimal in watchOS, so they appear automatically when you open your app on the latest release even if you don’t build against the latest SDK. However, to make sure your app picks up this appearance, adopt standard toolbar APIs and button styles from watchOS 10.

**In tvOS, adopt standard focus APIs.** Across apps and system experiences in tvOS, standard buttons and controls take on a Liquid Glass appearance when focus moves to them. For consistency with the system experience, consider applying these effects to custom controls in your app when they gain focus by adopting the standard focus APIs. Apple TV 4K (2nd generation) and newer models support Liquid Glass effects. On older devices, your app maintains its current appearance.

`focusable(_:)`

`isFocused`

`UIFocusItem`

`focused`

**Combine custom Liquid Glass effects to improve rendering performance.** If you apply these effects to custom elements, make sure to combine them using a `GlassEffectContainer`, which helps optimize performance while fluidly morphing Liquid Glass shapes into each other.

**Performance test your app across platforms.** It’s a good idea to regularly assess and improve your app’s performance, and building your app with the latest SDKs provides an opportunity to check in. Profile your app to gather information about its current performance and find any opportunities for improving the user experience. To learn more, read Improving your app’s performance.

To update and ship your app with the latest SDKs while keeping your app as it looks when built against previous versions of the SDKs, you can add the `UIDesignRequiresCompatibility` key to your project’s Info pane.

- Adopting Liquid Glass
- Overview
- Visual refresh
- App icons
- Controls
- Navigation
- Menus and toolbars
- Windows and modals
- Organization and layout
- Search
- Platform considerations

---

# https://developer.apple.com/documentation/technologyoverviews/liquid-glass

Collection

- Technology Overviews
- App design and UI
- Liquid Glass

# Liquid Glass

Learn how to design and develop beautiful interfaces that leverage Liquid Glass.

## Introduction to Liquid Glass

Interfaces across Apple platforms feature a new dynamic material called Liquid Glass, which combines the optical properties of glass with a sense of fluidity. Learn how to adopt this material and embrace the design principles of Apple platforms to create beautiful interfaces that establish hierarchy, create harmony, and maintain consistency across devices and platforms.

Standard components from SwiftUI, UIKit, and AppKit like controls and navigation elements pick up the appearance and behavior of this material automatically. You can also implement these effects in custom interface elements.

## Adopting Liquid Glass

If you have an existing app, adopting Liquid Glass doesn’t mean reinventing your app from the ground up. Start by building your app in the latest version of Xcode to see the changes. Then, follow best practices in your interface to help your app look right at home on Apple platforms.

- Embrace the visual refresh for materials, controls, and app icons.

- Provide a universal navigation and search experience across platforms.

- Ensure your interface’s organization and layout looks consistent with other apps and system experiences.

- Adopt best practices for windows, modals, menus, and toolbars.

- Test your app to ensure it provides a great experience across platforms.

To learn more, read Adopting Liquid Glass.

## Sample code

The Landmarks app showcases how to create a beautiful and engaging user experience using SwiftUI and Liquid Glass. Explore how the Landmarks app implements the look and feel of the Liquid Glass material throughout its interface.

- Configure an app icon with Icon Composer.

- Create an edge-to-edge content experience with the background extension effect.

- Enhance the edge-to-edge content experience by extending horizontal scroll views under a sidebar or inspector.

- Make your interface adaptable to changing window sizes.

- Explore search conventions across platforms.

- Apply Liquid Glass effects to custom interface elements and animations.

To learn more, see Landmarks: Building an app with Liquid Glass.

## Design principles

The Human Interface Guidelines contains guidance and best practices that can help you design a great experience for any Apple platform. Browse the HIG to discover more about adapting your interface for Liquid Glass.

- Define a layout and choose a navigation structure that puts the most important content in focus.

- Reimagine your app icon with simple, bold layers that offer dimensionality and consistency across devices and appearances.

- Be judicious with your use of color in controls and navigation so they stay legible and allow your content to infuse them and shine through.

- Ensure interface elements fit in with software and hardware design across devices.

- Adopt standard iconography and predictable action placement across platforms.

To learn more, read the Human Interface Guidelines.

## Videos

![\\
\\
Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219)

![\\
\\
Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356)

![\\
\\
Build a SwiftUI app with the new design](https://developer.apple.com/videos/play/wwdc2025/323)

![\\
\\
Build a UIKit app with the new design](https://developer.apple.com/videos/play/wwdc2025/284)

![\\
\\
Build an AppKit app with the new design](https://developer.apple.com/videos/play/wwdc2025/310)

---

# https://developer.apple.com/documentation/swiftui/landmarks-building-an-app-with-liquid-glass

- SwiftUI
- Landmarks: Building an app with Liquid Glass

Sample Code

# Landmarks: Building an app with Liquid Glass

Enhance your app experience with system-provided and custom Liquid Glass.

Download

Xcode 26.0+

## Overview

Landmarks is a SwiftUI app that demonstrates how to use the new dynamic and expressive design feature, Liquid Glass. The Landmarks app lets people explore interesting sites around the world. Whether it’s a national park near their home or a far-flung location on a different continent, the app provides a way for people to organize and mark their adventures and receive custom activity badges along the way. Landmarks runs on iPad, iPhone, and Mac.

Landmarks uses a `NavigationSplitView` to organize and navigate to content in the app, and demonstrates several key concepts to optimize the use of Liquid Glass:

- Stretching content behind the sidebar and inspector with the background extension effect.

- Extending horizontal scroll views under a sidebar or inspector.

- Leveraging the system-provided glass effect in toolbars.

- Applying Liquid Glass effects to custom interface elements and animations.

- Building a new app icon with Icon Composer.

The sample also demonstrates several techniques to use when changing window sizes, and for adding global search.

## Apply a background extension effect

The sample applies a background extension effect to the featured landmark header in the top view, and the main image in the landmark detail view. This effect extends and blurs the image under the sidebar and inspector when they’re open, creating a full edge-to-edge experience.

To achieve this effect, the sample creates and configures an `Image` that extends to both the leading and trailing edges of the containing view, and applies the `backgroundExtensionEffect()` modifier to the image. For the featured image, the sample adds an overlay with a headline and button after the modifier, so that only the image extends under the sidebar and inspector.

For more information, see Landmarks: Applying a background extension effect.

## Extend horizontal scrolling under the sidebar

Within each continent section in `LandmarksView`, an instance of `LandmarkHorizontalListView` shows a horizontally scrolling list of landmark views. When open, the landmark views can scroll underneath the sidebar or inspector.

To achieve this effect, the app aligns the scroll views next to the leading and trailing edges of the containing view.

For more information, see Landmarks: Extending horizontal scrolling under a sidebar or inspector.

## Refine the Liquid Glass in the toolbar

In `LandmarkDetailView`, the sample adds toolbar items for:

- sharing a landmark

- adding or removing a landmark from a list of Favorites

- adding or removing a landmark from Collections

- showing or hiding the inspector

The system applies Liquid Glass to toolbar items automatically:

The sample also organizes the toolbar into related groups, instead of having all the buttons in one group. For more information, see Landmarks: Refining the system provided Liquid Glass effect in toolbars.

## Display badges with Liquid Glass

Badges provide people with a visual indicator of the activities they’ve recorded in the Landmarks app. When a person completes all four activities for a landmark, they earn that landmark’s badge. The sample uses custom Liquid Glass elements with badges, and shows how to coordinate animations with Liquid Glass.

To create a custom Liquid Glass badge, Landmarks uses a view with an `Image` to display a system symbol image for the badge. The badge has a background hexagon `Image` filled with a custom color. The badge view uses the `glassEffect(_:in:)` modifier to apply Liquid Glass to the badge.

To demonstrate the morphing effect that the system provides with Liquid Glass animations, the sample organizes the badges and the toggle button into a `GlassEffectContainer`, and assigns each badge a unique `glassEffectID(_:in:)`.

For more information, see Landmarks: Displaying custom activity badges. For information about building custom views with Liquid Glass, see Applying Liquid Glass to custom views.

## Create the app icon with Icon Composer

Landmarks includes a dynamic and expressive app icon composed in Icon Composer. You build app icons with four layers that the system uses to produce specular highlights when a person moves their device, so that the icon responds as if light was reflecting off the glass. The Settings app allows people to personalize the icon by selecting light, dark, clear, or tinted variants of your app icon as well.

For more information on creating a new app icon, see Creating your app icon using Icon Composer.

## Topics

### App features

Landmarks: Applying a background extension effect

Configure an image to blur and extend under a sidebar or inspector panel.

Landmarks: Extending horizontal scrolling under a sidebar or inspector

Improve your horizontal scrollbar’s appearance by extending it under a sidebar or inspector.

Landmarks: Refining the system provided Liquid Glass effect in toolbars

Organize toolbars into related groupings to improve their appearance and utility.

Landmarks: Displaying custom activity badges

Provide people with a way to mark their adventures by displaying animated custom activity badges.

## See Also

### Essentials

Adopting Liquid Glass

Find out how to bring the new material to your app.

Develop in Swift

Develop in Swift Tutorials introduce app development with Swift and Xcode to anyone learning to build apps for Apple platforms.

SwiftUI updates

Learn about important changes to SwiftUI.

---

# https://developer.apple.com/documentation/swiftui/applying-liquid-glass-to-custom-views

- SwiftUI
- View styles
- Applying Liquid Glass to custom views

Article

# Applying Liquid Glass to custom views

Configure, combine, and morph views using Liquid Glass effects.

## Overview

Interfaces across Apple platforms feature a new dynamic material called Liquid Glass, which combines the optical properties of glass with a sense of fluidity. Liquid Glass is a material that blurs content behind it, reflects color and light of surrounding content, and reacts to touch and pointer interactions in real time. Standard components in SwiftUI use Liquid Glass. Adopt Liquid Glass on custom components to move, combine, and morph them into one another with unique animations and transitions.

To learn about Liquid Glass and more, see Landmarks: Building an app with Liquid Glass.

## Apply and configure Liquid Glass effects

Use the `glassEffect(_:in:)` modifier to add Liquid Glass effects to a view. By default, the modifier uses the `regular` variant of `Glass` and applies the given effect within a `Capsule` shape behind the view’s content.

Configure the effect to customize your components in a variety of ways:

- Use different shapes to have a consistent look and feel across custom components in your app. For example, use a rounded rectangle if you’re applying the effect to larger components that would look odd as a `Capsule` or `Circle`.

- Assign a tint color to suggest prominence.

- Add `interactive(_:)` to custom components to make them react to touch and pointer interactions. This applies the same responsive and fluid reactions that `glass` provides to standard buttons.

In the examples below, observe how to apply Liquid Glass effects to a view, use an alternate shape with a specific corner radius, and create a tinted view that responds to interactivity:

Play

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect()

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect(in: .rect(cornerRadius: 16.0))

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect(.regular.tint(.orange).interactive())

## Combine multiple views with Liquid Glass containers

Use `GlassEffectContainer` when applying Liquid Glass effects on multiple views to achieve the best rendering performance. A container also allows views with Liquid Glass effects to blend their shapes together and to morph in and out of each other during transitions. Inside a container, each view with the `glassEffect(_:in:)` modifier renders with the effects behind it.

Customize the spacing on the container to control how the Liquid Glass effects behind views interact with one another. The larger the spacing value on the container, the sooner the Liquid Glass effects behind views blend together and merge the shapes during a transition. A spacing value on the container that’s larger than the spacing of an interior `HStack`, `VStack`, or other layout container causes Liquid Glass effects to blend together at rest because the views are too close to each other. Animating views in or out causes the shapes to morph apart or together as the space in the container changes.

The `glassEffect(_:in:)` modifier captures the content to send to the container to render. Apply the `glassEffect(_:in:)` modifier after other modifiers that affect the appearance of the view.

In the example below, two images are placed close to each other and the Liquid Glass effects begin to blend their shapes together. This creates a fluid animation as components move around each other within a container:

GlassEffectContainer(spacing: 40.0) {
HStack(spacing: 40.0) {
Image(systemName: "scribble.variable")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()

Image(systemName: "eraser.fill")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()

// An `offset` shows how Liquid Glass effects react to each other in a container.
// Use animations and components appearing and disappearing to obtain effects that look purposeful.
.offset(x: -40.0, y: 0.0)
}
}

In some cases, you want the geometries of multiple views to contribute to a single Liquid Glass effect capsule, even when your content is at rest. Use the `glassEffectUnion(id:namespace:)` modifier to specify that a view contributes to a unified effect with a particular ID. This combines all effects with a similar shape, Liquid Glass effect, and ID into a single shape with the applied Liquid Glass material. This is especially useful when creating views dynamically, or with views that live outside of a layout container, like an `HStack` or `VStack`.

let symbolSet: [String] = ["cloud.bolt.rain.fill", "sun.rain.fill", "moon.stars.fill", "moon.fill"]

GlassEffectContainer(spacing: 20.0) {
HStack(spacing: 20.0) {
ForEach(symbolSet.indices, id: \.self) { item in
Image(systemName: symbolSet[item])
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()
.glassEffectUnion(id: item < 2 ? "1" : "2", namespace: namespace)
}
}
}

## Morph Liquid Glass effects during transitions

Morphing effects occur during transitions or animations between views with Liquid Glass effects. Coordinate transitions between views with effects in a container by using the `glassEffectID(_:in:)` modifier. `GlassEffectTransition` allows you to specify the type of transition to use when you want to add or remove effects within a container. For effects you want to add or remove that are positioned within the container’s assigned spacing, the default transition type is `matchedGeometry`.

If you prefer to have a simpler transition or to create a custom transition, use the `materialize` transition and `withAnimation(_:_:)`. Use the `materialize` transition for effects you want to add or remove that are farther from each other than the container’s assigned spacing. To provide people with a consistent experience, use `matchedGeometry` and `materialize` transitions across your apps. The system applies more than opacity changes with the available transition types.

Associate each Liquid Glass effect with a unique identifier within a namespace that the `Namespace` property wrapper provides. These IDs ensure SwiftUI animates the same shapes correctly when a shape appears or disappears due to view hierarchy changes. SwiftUI uses the spacing provided to the effect container along with the geometry of the shapes themselves to determine when and which appropriate shapes to morph into and out of.

The `glassEffectID(_:in:)` and `glassEffectTransition(_:)` modifiers only affect their content during view hierarchy transitions or animations.

In the example below, the eraser image transitions into and out of the pencil image when the `isExpanded` variable changes. The `GlassEffectContainer` has a spacing value of `40.0`, and the `HStack` within it has a spacing of `40.0`. This morphs the eraser image into the pencil image when the eraser’s nearest edge is less than or equal to the container’s spacing.

@State private var isExpanded: Bool = false
@Namespace private var namespace

var body: some View {
GlassEffectContainer(spacing: 40.0) {
HStack(spacing: 40.0) {
Image(systemName: "scribble.variable")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()
.glassEffectID("pencil", in: namespace)

if isExpanded {
Image(systemName: "eraser.fill")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()
.glassEffectID("eraser", in: namespace)
}
}
}

Button("Toggle") {
withAnimation {
isExpanded.toggle()
}
}
.buttonStyle(.glass)
}

## Optimize performance when using Liquid Glass effects

Creating too many Liquid Glass effect containers and applying too many effects to views outside of containers can degrade performance. Limit the use of Liquid Glass effects onscreen at the same time. Additionally, optimize how your app spends rendering time as people use it. To learn how to improve the performance of your UI, see Explore UI animation hitches and the render loop and Optimize SwiftUI performance with Instruments.

## See Also

### Styling views with Liquid Glass

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

---

# https://developer.apple.com/documentation/SwiftUI/Applying-Liquid-Glass-to-custom-views

- SwiftUI
- View styles
- Applying Liquid Glass to custom views

Article

# Applying Liquid Glass to custom views

Configure, combine, and morph views using Liquid Glass effects.

## Overview

Interfaces across Apple platforms feature a new dynamic material called Liquid Glass, which combines the optical properties of glass with a sense of fluidity. Liquid Glass is a material that blurs content behind it, reflects color and light of surrounding content, and reacts to touch and pointer interactions in real time. Standard components in SwiftUI use Liquid Glass. Adopt Liquid Glass on custom components to move, combine, and morph them into one another with unique animations and transitions.

To learn about Liquid Glass and more, see Landmarks: Building an app with Liquid Glass.

## Apply and configure Liquid Glass effects

Use the `glassEffect(_:in:)` modifier to add Liquid Glass effects to a view. By default, the modifier uses the `regular` variant of `Glass` and applies the given effect within a `Capsule` shape behind the view’s content.

Configure the effect to customize your components in a variety of ways:

- Use different shapes to have a consistent look and feel across custom components in your app. For example, use a rounded rectangle if you’re applying the effect to larger components that would look odd as a `Capsule` or `Circle`.

- Assign a tint color to suggest prominence.

- Add `interactive(_:)` to custom components to make them react to touch and pointer interactions. This applies the same responsive and fluid reactions that `glass` provides to standard buttons.

In the examples below, observe how to apply Liquid Glass effects to a view, use an alternate shape with a specific corner radius, and create a tinted view that responds to interactivity:

Play

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect()

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect(in: .rect(cornerRadius: 16.0))

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect(.regular.tint(.orange).interactive())

## Combine multiple views with Liquid Glass containers

Use `GlassEffectContainer` when applying Liquid Glass effects on multiple views to achieve the best rendering performance. A container also allows views with Liquid Glass effects to blend their shapes together and to morph in and out of each other during transitions. Inside a container, each view with the `glassEffect(_:in:)` modifier renders with the effects behind it.

Customize the spacing on the container to control how the Liquid Glass effects behind views interact with one another. The larger the spacing value on the container, the sooner the Liquid Glass effects behind views blend together and merge the shapes during a transition. A spacing value on the container that’s larger than the spacing of an interior `HStack`, `VStack`, or other layout container causes Liquid Glass effects to blend together at rest because the views are too close to each other. Animating views in or out causes the shapes to morph apart or together as the space in the container changes.

The `glassEffect(_:in:)` modifier captures the content to send to the container to render. Apply the `glassEffect(_:in:)` modifier after other modifiers that affect the appearance of the view.

In the example below, two images are placed close to each other and the Liquid Glass effects begin to blend their shapes together. This creates a fluid animation as components move around each other within a container:

GlassEffectContainer(spacing: 40.0) {
HStack(spacing: 40.0) {
Image(systemName: "scribble.variable")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()

Image(systemName: "eraser.fill")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()

// An `offset` shows how Liquid Glass effects react to each other in a container.
// Use animations and components appearing and disappearing to obtain effects that look purposeful.
.offset(x: -40.0, y: 0.0)
}
}

In some cases, you want the geometries of multiple views to contribute to a single Liquid Glass effect capsule, even when your content is at rest. Use the `glassEffectUnion(id:namespace:)` modifier to specify that a view contributes to a unified effect with a particular ID. This combines all effects with a similar shape, Liquid Glass effect, and ID into a single shape with the applied Liquid Glass material. This is especially useful when creating views dynamically, or with views that live outside of a layout container, like an `HStack` or `VStack`.

let symbolSet: [String] = ["cloud.bolt.rain.fill", "sun.rain.fill", "moon.stars.fill", "moon.fill"]

GlassEffectContainer(spacing: 20.0) {
HStack(spacing: 20.0) {
ForEach(symbolSet.indices, id: \.self) { item in
Image(systemName: symbolSet[item])
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()
.glassEffectUnion(id: item < 2 ? "1" : "2", namespace: namespace)
}
}
}

## Morph Liquid Glass effects during transitions

Morphing effects occur during transitions or animations between views with Liquid Glass effects. Coordinate transitions between views with effects in a container by using the `glassEffectID(_:in:)` modifier. `GlassEffectTransition` allows you to specify the type of transition to use when you want to add or remove effects within a container. For effects you want to add or remove that are positioned within the container’s assigned spacing, the default transition type is `matchedGeometry`.

If you prefer to have a simpler transition or to create a custom transition, use the `materialize` transition and `withAnimation(_:_:)`. Use the `materialize` transition for effects you want to add or remove that are farther from each other than the container’s assigned spacing. To provide people with a consistent experience, use `matchedGeometry` and `materialize` transitions across your apps. The system applies more than opacity changes with the available transition types.

Associate each Liquid Glass effect with a unique identifier within a namespace that the `Namespace` property wrapper provides. These IDs ensure SwiftUI animates the same shapes correctly when a shape appears or disappears due to view hierarchy changes. SwiftUI uses the spacing provided to the effect container along with the geometry of the shapes themselves to determine when and which appropriate shapes to morph into and out of.

The `glassEffectID(_:in:)` and `glassEffectTransition(_:)` modifiers only affect their content during view hierarchy transitions or animations.

In the example below, the eraser image transitions into and out of the pencil image when the `isExpanded` variable changes. The `GlassEffectContainer` has a spacing value of `40.0`, and the `HStack` within it has a spacing of `40.0`. This morphs the eraser image into the pencil image when the eraser’s nearest edge is less than or equal to the container’s spacing.

@State private var isExpanded: Bool = false
@Namespace private var namespace

var body: some View {
GlassEffectContainer(spacing: 40.0) {
HStack(spacing: 40.0) {
Image(systemName: "scribble.variable")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()
.glassEffectID("pencil", in: namespace)

if isExpanded {
Image(systemName: "eraser.fill")
.frame(width: 80.0, height: 80.0)
.font(.system(size: 36))
.glassEffect()
.glassEffectID("eraser", in: namespace)
}
}
}

Button("Toggle") {
withAnimation {
isExpanded.toggle()
}
}
.buttonStyle(.glass)
}

## Optimize performance when using Liquid Glass effects

Creating too many Liquid Glass effect containers and applying too many effects to views outside of containers can degrade performance. Limit the use of Liquid Glass effects onscreen at the same time. Additionally, optimize how your app spends rendering time as people use it. To learn how to improve the performance of your UI, see Explore UI animation hitches and the render loop and Optimize SwiftUI performance with Instruments.

## See Also

### Styling views with Liquid Glass

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

---

# https://developer.apple.com/documentation/swiftui/view/glasseffect(_:in:)

#app-main)

- SwiftUI
- View
- glassEffect(\_:in:)

Instance Method

# glassEffect(\_:in:)

Applies the Liquid Glass effect to a view.

nonisolated
func glassEffect(
_ glass: Glass = .regular,
in shape: some Shape = DefaultGlassEffectShape()

## Mentioned in

Applying Liquid Glass to custom views

## Discussion

When you use this effect, the system:

- Renders a shape anchored behind a view with the Liquid Glass material.

- Applies the foreground effects of Liquid Glass over a view.

For example, to add this effect to a `Text`:

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect()

SwiftUI uses the `regular` variant by default along with a `Capsule` shape.

SwiftUI anchors the Liquid Glass to a view’s bounds. For the example above, the material fills the entirety of the `Text` frame, which includes the padding.

You typically use this modifier with a `GlassEffectContainer` to combine multiple Liquid Glass shapes into a single shape that can morph into one another.

## See Also

### Styling views with Liquid Glass

Configure, combine, and morph views using Liquid Glass effects.

Landmarks: Building an app with Liquid Glass

Enhance your app experience with system-provided and custom Liquid Glass.

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

---

# https://developer.apple.com/documentation/SwiftUI/View/glassEffect(_:in:)

#app-main)

- SwiftUI
- View
- glassEffect(\_:in:)

Instance Method

# glassEffect(\_:in:)

Applies the Liquid Glass effect to a view.

nonisolated
func glassEffect(
_ glass: Glass = .regular,
in shape: some Shape = DefaultGlassEffectShape()

## Mentioned in

Applying Liquid Glass to custom views

## Discussion

When you use this effect, the system:

- Renders a shape anchored behind a view with the Liquid Glass material.

- Applies the foreground effects of Liquid Glass over a view.

For example, to add this effect to a `Text`:

Text("Hello, World!")
.font(.title)
.padding()
.glassEffect()

SwiftUI uses the `regular` variant by default along with a `Capsule` shape.

SwiftUI anchors the Liquid Glass to a view’s bounds. For the example above, the material fills the entirety of the `Text` frame, which includes the padding.

You typically use this modifier with a `GlassEffectContainer` to combine multiple Liquid Glass shapes into a single shape that can morph into one another.

## See Also

### Styling views with Liquid Glass

Configure, combine, and morph views using Liquid Glass effects.

Landmarks: Building an app with Liquid Glass

Enhance your app experience with system-provided and custom Liquid Glass.

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

---

# https://developer.apple.com/documentation/AppKit/NSGlassEffectView

- AppKit
- NSGlassEffectView

Class

# NSGlassEffectView

A view that embeds its content view in a dynamic glass effect.

class NSGlassEffectView

## Topics

### Instance Properties

`var contentView: NSView?`

The view to embed in glass.

`var cornerRadius: CGFloat`

The amount of curvature for all corners of the glass.

`var style: NSGlassEffectView.Style`

The style of glass this view uses.

`var tintColor: NSColor?`

The color the glass effect view uses to tint the background and glass effect toward.

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

### Liquid Glass effects

`enum Style`

`class NSGlassEffectContainerView`

A view that efficiently merges descendant glass effect views together when they are within a specified proximity to each other.

---

# https://developer.apple.com/documentation/swiftui/glasseffectcontainer

- SwiftUI
- GlassEffectContainer

Structure

# GlassEffectContainer

A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.

@MainActor @preconcurrency

## Mentioned in

Applying Liquid Glass to custom views

## Overview

Use a container with the `glassEffect(_:in:)` modifier. Each view with a Liquid Glass effect contributes a shape rendered with the effect to a set of shapes. SwiftUI renders the effects together, improving rendering performance and allowing the effects to interact with and morph into one another.

Configure how shapes interact with one another by customizing the default spacing value of the container. As shapes near one another, their paths start to blend into one another. The higher the spacing, the sooner blending begins as the shapes approach each other.

## Topics

### Initializers

Creates a glass effect container with the provided spacing, extracting glass shapes from the provided content.

## Relationships

### Conforms To

- `Sendable`
- `SendableMetatype`
- `View`

## See Also

### Styling views with Liquid Glass

Configure, combine, and morph views using Liquid Glass effects.

Landmarks: Building an app with Liquid Glass

Enhance your app experience with system-provided and custom Liquid Glass.

Applies the Liquid Glass effect to a view.

Returns a copy of the structure configured to be interactive.

`struct GlassEffectTransition`

A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.

`struct GlassButtonStyle`

A button style that applies glass border artwork based on the button’s context.

`struct GlassProminentButtonStyle`

A button style that applies prominent glass border artwork based on the button’s context.

`struct DefaultGlassEffectShape`

The default shape applied by glass effects, a capsule.

---

# https://developer.apple.com/documentation/swiftui/view/glasseffectid(_:in:)

#app-main)

- SwiftUI
- View
- glassEffectID(\_:in:)

Instance Method

# glassEffectID(\_:in:)

Associates an identity value to Liquid Glass effects defined within this view.

nonisolated
func glassEffectID(
_ id: (some Hashable & Sendable)?,
in namespace: Namespace.ID

## Mentioned in

Applying Liquid Glass to custom views

## Discussion

You use this modifier with the `glassEffect(_:in:)` view modifier and a `GlassEffectContainer` view. When used together, SwiftUI uses the identifier to animate shapes to and from each other during transitions.

---

# https://developer.apple.com/documentation/SwiftUI/GlassEffectContainer

- SwiftUI
- GlassEffectContainer

Structure

# GlassEffectContainer

A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.

@MainActor @preconcurrency

## Mentioned in

Applying Liquid Glass to custom views

## Overview

Use a container with the `glassEffect(_:in:)` modifier. Each view with a Liquid Glass effect contributes a shape rendered with the effect to a set of shapes. SwiftUI renders the effects together, improving rendering performance and allowing the effects to interact with and morph into one another.

Configure how shapes interact with one another by customizing the default spacing value of the container. As shapes near one another, their paths start to blend into one another. The higher the spacing, the sooner blending begins as the shapes approach each other.

## Topics

### Initializers

Creates a glass effect container with the provided spacing, extracting glass shapes from the provided content.

## Relationships

### Conforms To

- `Sendable`
- `SendableMetatype`
- `View`

## See Also

### Styling views with Liquid Glass

Configure, combine, and morph views using Liquid Glass effects.

Landmarks: Building an app with Liquid Glass

Enhance your app experience with system-provided and custom Liquid Glass.

Applies the Liquid Glass effect to a view.

Returns a copy of the structure configured to be interactive.

`struct GlassEffectTransition`

A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.

`struct GlassButtonStyle`

A button style that applies glass border artwork based on the button’s context.

`struct GlassProminentButtonStyle`

A button style that applies prominent glass border artwork based on the button’s context.

`struct DefaultGlassEffectShape`

The default shape applied by glass effects, a capsule.

---

# https://developer.apple.com/documentation/swiftui/view/backgroundextensioneffect()

#app-main)

- SwiftUI
- View
- backgroundExtensionEffect()

Instance Method

# backgroundExtensionEffect()

Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.

@MainActor @preconcurrency

## Discussion

Use this modifier when you want to extend the view beyond its bounds so the copies can function as backgrounds for other elements on top. The most common use case is to apply this to a view in the detail column of a navigation split view so it can extend under the sidebar or inspector region to provide seamless immersive visuals.

NavigationSplitView {
// sidebar content
} detail: {
ZStack {
BannerView()
.backgroundExtensionEffect()
}
}
.inspector(isPresented: $showInspector) {
// inspector content
}

Apply this modifier with discretion. This should often be used with only a single instance of background content with consideration of visual clarity and performance.

---

# https://developer.apple.com/documentation/AppKit/NSBackgroundExtensionView

- AppKit
- NSBackgroundExtensionView

Class

# NSBackgroundExtensionView

A view that extends content to fill its own bounds.

class NSBackgroundExtensionView

## Overview

A background extension view can be laid out to extend outside the safe area, such as under the titlebar, sidebar, or inspector. By default it lays out its content to stay within the safe area, and uses modifications of the content along the edges to fill the container view.

## Topics

### Instance Properties

`var automaticallyPlacesContentView: Bool`

Controls the automatic safe area placement of the `contentView` within the container.

`var contentView: NSView?`

The content view to extend to fill the `NSBackgroundExtensionView`.

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

---

# https://developer.apple.com/documentation/swiftui/landmarks-applying-a-background-extension-effect

- SwiftUI
- Landmarks: Building an app with Liquid Glass
- Landmarks: Applying a background extension effect

Sample Code

# Landmarks: Applying a background extension effect

Configure an image to blur and extend under a sidebar or inspector panel.

Download

Xcode 26.0+

## Overview

The Landmarks app lets people explore interesting sites around the world. Whether it’s a national park near their home or a far-flung location on a different continent, the app provides a way for people to organize and mark their adventures and receive custom activity badges along the way.

This sample demonstrates how to apply a background extension effect. In the top Landmarks view, the sample applies a background extension effect to the featured image in `LandmarksView`, and to the main image in `LandmarkDetailView`. The background extension effect blurs and extends the image under the sidebar or inspector panel when open. The following images show the main image in `LandmarkDetailView` both with and without the background extension effect.

To apply the background extension effect, the sample:

1. Aligns the view to the leading and trailing edges of the containing view.

2. Applies the `backgroundExtensionEffect()` modifier to the view.

3. Configures only the image in the background extension, and avoids applying the effect to the title and button in the overlay.

### Align the view to the leading and trailing edges

To apply the `backgroundExtensionEffect()` to a view, align the leading edge of the view next to the sidebar, and align the trailing edge of the view to the trailing edge of the containing view.

In `LandmarksView`, the `LandmarkFeaturedItemView` and the containing `LazyVStack` and `ScrollView` don’t have padding. This allows the `LandmarkFeaturedItemView` to align with the leading edge of the view next to the sidebar.

ScrollView(showsIndicators: false) {
LazyVStack(alignment: .leading, spacing: Constants.standardPadding) {
LandmarkFeaturedItemView(landmark: modelData.featuredLandmark!)
.flexibleHeaderContent()
//...
}
}

In `LandmarkDetailView`, the `ScrollView` and `VStack` that contain the main image also don’t have any padding. This allows the main image to align against the leading edge of the containing view.

### Apply the background extension effect to the image

In `LandmarkDetailView`, the sample applies the background extension effect to the main image by adding the `backgroundExtensionEffect()` modifier:

Image(landmark.backgroundImageName)
//...
.backgroundExtensionEffect()

When the sidebar is open, the system extends the image in the leading direction as follows:

- The system takes a section of the leading end of the image that matches the width of the sidebar.

- The system flips that portion of the image horizontally toward the leading edge and applies a blur to the flipped section.

- The system places the modified section of the image under the sidebar, immediately before the leading edge of the image.

When the inspector is open, the system extends the image in the trailing direction as follows:

- The system takes a section of the trailing end of the image that matches the width of the sidebar.

- The system flips that portion of the image horizontally toward the trailing edge and applies a blur to the flipped section.

- The system places the modified section of the image under the inspector, immediately after the trailing edge of the image.

### Configure only the image

In `LandmarksView`, the `LandmarkFeaturedItemView` has an image from the featured landmark, and includes a title for the landmark and a button you can click or tap to learn more about that location.

To avoid having the landmark’s title and button appear under the sidebar in macOS, the sample applies the `backgroundExtensionEffect()` modifier to the image before adding the overlay that includes the title and button:

Image(decorative: landmark.backgroundImageName)
//...
.backgroundExtensionEffect()
.overlay(alignment: .bottom) {
VStack {
Text("Featured Landmark", comment: "Big headline in the main image of featured landmarks.")
//...
Text(landmark.name)
//...
Button("Learn More") {
modelData.path.append(landmark)
}
//...
}
.padding([.bottom], Constants.learnMoreBottomPadding)
}

## See Also

### App features

Landmarks: Extending horizontal scrolling under a sidebar or inspector

Improve your horizontal scrollbar’s appearance by extending it under a sidebar or inspector.

Landmarks: Refining the system provided Liquid Glass effect in toolbars

Organize toolbars into related groupings to improve their appearance and utility.

Landmarks: Displaying custom activity badges

Provide people with a way to mark their adventures by displaying animated custom activity badges.

---

# https://developer.apple.com/documentation/swiftui/landmarks-refining-the-system-provided-glass-effect-in-toolbars

- SwiftUI
- Landmarks: Building an app with Liquid Glass
- Landmarks: Refining the system provided Liquid Glass effect in toolbars

Sample Code

# Landmarks: Refining the system provided Liquid Glass effect in toolbars

Organize toolbars into related groupings to improve their appearance and utility.

Download

Xcode 26.0+

## Overview

The Landmarks app lets people explore interesting sites around the world. Whether it’s a national park near their home or a far-flung location on a different continent, the app provides a way for people to organize and mark their adventures and receive custom activity badges along the way.

This sample demonstrates how to refine the system provided glass effect in toolbars. In `LandmarkDetailView`, the sample adds toolbar items for:

- sharing a landmark

- adding or removing a landmark from a list of Favorites

- adding or removing a landmark from Collections

- showing or hiding the inspector

The system applies Liquid Glass to the toolbar items automatically.

## Organize the toolbar items into logical groupings

To organize the toolbar items into logical groupings, the sample adds `ToolbarSpacer` items and passes `fixed` as the `sizing` parameter to divide the toolbar into sections:

.toolbar {
ToolbarSpacer(.flexible)

ToolbarItem {
ShareLink(item: landmark, preview: landmark.sharePreview)
}

ToolbarSpacer(.fixed)

ToolbarItemGroup {
LandmarkFavoriteButton(landmark: landmark)
LandmarkCollectionsMenu(landmark: landmark)
}

ToolbarItem {
Button("Info", systemImage: "info") {
modelData.selectedLandmark = landmark
modelData.isLandmarkInspectorPresented.toggle()
}
}
}

## See Also

### App features

Landmarks: Applying a background extension effect

Configure an image to blur and extend under a sidebar or inspector panel.

Landmarks: Extending horizontal scrolling under a sidebar or inspector

Improve your horizontal scrollbar’s appearance by extending it under a sidebar or inspector.

Landmarks: Displaying custom activity badges

Provide people with a way to mark their adventures by displaying animated custom activity badges.

---

# https://developer.apple.com/documentation/swiftui/landmarks-displaying-custom-activity-badges

- SwiftUI
- Landmarks: Building an app with Liquid Glass
- Landmarks: Displaying custom activity badges

Sample Code

# Landmarks: Displaying custom activity badges

Provide people with a way to mark their adventures by displaying animated custom activity badges.

Download

Xcode 26.0+

## Overview

The Landmarks app lets people track their adventures as they explore sites around the world. Whether it’s a national park near their home or a far-flung location on a different continent, the app provides a way for people to mark their adventures and receive custom activity badges along the way.

This sample displays the badges in a vertical view that includes a toggle button for showing or hiding the badges. The Landmarks app includes a custom modifier that makes it easier for other views to adopt the badge view. By configuring the badges to use Liquid Glass, the badges gain the advantage of using the morphing animation when you show or hide the badges.

## Add a modifier to show badges in other views

To make the badges available in other views, like `CollectionsView`, the sample uses a custom modifier, `ShowBadgesViewModifier`, as a `ViewModifier`. The sample layers the badges over another view using a `ZStack`, and positions the badge view in the lower trailing corner:

private struct ShowsBadgesViewModifier: ViewModifier {

ZStack {
content
HStack {
Spacer()
VStack {
Spacer()
BadgesView()
.padding()
}
}
}
}
}

The sample extends `View` by adding the `showBadges` modifier:

extension View {

modifier(ShowsBadgesViewModifier())
}
}

## Apply Liquid Glass to the toggle button

To create the toggle button, the sample configures a `Button` using `ToggleBadgesLabel` which has different system images for the Show and Hide toggle states. To apply Liquid Glass, style the button with the `glass` modifier:

Button {
//...
} label: {
//...
}
.buttonStyle(.glass)

## Add Liquid Glass to the badges

To add Liquid Glass to each badge, the sample uses the `glassEffect(_:in:)` modifier. To make a custom glass view appearance, the sample specifies a rectangular option with a corner radius:

BadgeLabel(badge: $0)
.glassEffect(.regular, in: .rect(cornerRadius: Constants.badgeCornerRadius))

## Animate the badges using the morph effect

The morph effect is an animation for Liquid Glass views. During this animation, the toggle button and each badge start as a combined view. Then, the button and badges change shape like a liquid as they separate and move from one location to another. In reverse, the toggle button and badges change shape and combine back into one view.

To achieve the Liquid Glass morph effect, the app:

- organizes the badges and toggle button into a `GlassEffectContainer`

- adds `glassEffectID(_:in:)` to each badge

- adds `glassEffectID(_:in:)` to the toggle button

- wraps the command that toggles the `isExpanded` property in `withAnimation(_:_:)`

// Organizes the badges and toggle button to animate together.
GlassEffectContainer(spacing: Constants.badgeGlassSpacing) {
VStack(alignment: .center, spacing: Constants.badgeButtonTopSpacing) {
if isExpanded {
VStack(spacing: Constants.badgeSpacing) {
ForEach(modelData.earnedBadges) {
BadgeLabel(badge: $0)
// Adds Liquid Glass to the badge.
.glassEffect(.regular, in: .rect(cornerRadius: Constants.badgeCornerRadius))
// Adds an identifier to the badge for animation.
.glassEffectID($0.id, in: namespace)
}
}
}

Button {
// Animates this button and badges when `isExpanded` changes values.
withAnimation {
isExpanded.toggle()
}
} label: {
ToggleBadgesLabel(isExpanded: isExpanded)
.frame(width: Constants.badgeShowHideButtonWidth,
height: Constants.badgeShowHideButtonHeight)
}
// Adds Liquid Glass to the button.
.buttonStyle(.glass)
#if os(macOS)
.tint(.clear)
#endif
// Adds an identifier to the button for animation.
.glassEffectID("togglebutton", in: namespace)
}
.frame(width: Constants.badgeFrameWidth)
}

## See Also

### App features

Landmarks: Applying a background extension effect

Configure an image to blur and extend under a sidebar or inspector panel.

Landmarks: Extending horizontal scrolling under a sidebar or inspector

Improve your horizontal scrollbar’s appearance by extending it under a sidebar or inspector.

Landmarks: Refining the system provided Liquid Glass effect in toolbars

Organize toolbars into related groupings to improve their appearance and utility.

---

# https://developer.apple.com/documentation/Xcode/creating-your-app-icon-using-icon-composer

- Xcode
- Asset management
- Creating your app icon using Icon Composer

Article

# Creating your app icon using Icon Composer

Use Icon Composer to stylize your app icon for different platforms and appearances.

## Overview

Use Icon Composer to create a single multilayer file that you can add to your Xcode project to represent your Liquid Glass app icon everywhere your app icon appears across iOS, iPadOS, macOS, watchOS, and the App Store. Use your favorite design tool to create the artwork for your app icon, but save some design decisions for Icon Composer, where you can refine the dynamic properties of Liquid Glass and customize variants of your app icon for different platforms and appearances.

Before building your app, add the Icon Composer file to your Xcode project to include it in your app’s bundle. The system automatically renders your app icon for the different platforms, appearances, and sizes from your single Icon Composer file. If your app supports previous releases (in the Minimum Deployments settings in the target’s General pane) that don’t have the same icon and widget style appearances and Liquid Glass material, Xcode automatically generates app icon images at build time for those releases from the Icon Composer file.

To learn more, see the following resources:

- For more information on Liquid Glass and Icon Composer, watch Say hello to the new look of app icons and Create icons with Icon Composer.

- For tvOS and visionOS targets that still use an `AppIcon` asset catalog, see Configuring your app icon using an asset catalog.

### Prepare your artwork for export

To design your Liquid Glass app icon, use a third-party vector graphics editor of your choice that exports your layers as graphic files in SVG or PNG format. To give you the most scalability, use vector graphics to draw shapes and export SVG files.

While you design your app icon and before you export layers, follow these guidelines for best results:

- Start with an app icon template that you download from Apple Design Resources that has the latest grid, shape, and canvas size.

- Otherwise, change the canvas size to match the size that you use in Icon Composer, such as 1024 x 1024 pixels for iPhone, iPad, and Mac, and 1088 x 1088 pixels for Apple Watch.

- Design your app icon in layers that the system renders in the z-plane from

You use the sidebar on the left to organize layers into groups, the canvas in the middle to preview variants, and the inspectors on the right to modify appearances. In the canvas area, you use the controls at the bottom to select combinations of platforms and appearances, and the controls at the top to apply a grid or simulate device conditions.

You can continue using Icon Composer to fine-tune your app icon and add it to your Xcode project later. To add your app icon to an Xcode project and associate it with your app target, see Add your Icon Composer file to an Xcode project.

If your Icon Composer file is in your Xcode project, you can select it in the Project navigator and see a preview in the canvas area. To open an Icon Composer file that’s in your Xcode project, click Open with Icon Composer under the preview, or Control-click the file in the Project navigator and choose Open with External Editor.

### Import your graphic files

After you export your artwork from your design tool, import the graphic files, in SVG or PNG format, into your Icon Composer file.

Drag one or more graphic files from the Finder to the sidebar and each becomes a layer in a default group that Icon Composer creates. Alternatively, drag folders containing graphic files to the sidebar. Then the folders become groups and the files in the folders become layers in those groups. Icon Composer organizes the groups and layers alphabetically using the same names as the folders and files.

Alternatively, click the Add button (+) under the sidebar and choose New Image from the pop-up menu. In the dialog that appears, select one or more files (use Command-click to select multiple files) and click Open.

Later, if you want to change the graphic file associated with a layer, select the layer in the sidebar and choose Replace from the Image pop-up menu under Composition in the Appearance inspector. Then, from the dialog that appears, select the new graphic file.

### Organize layers into groups

After you import the graphic files, organize the layers that appear in the default group into a maximum of four groups to reduce complexity. The groups become the layers in the app icon image the platform renders to give the icon its depth. The system renders the layers in the z-plane from the bottom to the top as they appear in the sidebar. Groups also allow you to apply common settings to multiple layers.

You can use the sidebar to make the following edits:

- To create a group, click the Add button at the bottom of the sidebar and choose New Group from the pop-up menu.

- To change the name of a group or layer, double-click it and enter a name.

- To move layers into groups, drag them to the groups you want them to be in.

- To add another layer, click the Add button and choose Image.

For more edits, Control-click a layer or group and choose an action from the contextual menu.

To collapse groups in the outline, click the disclosure triangle to the left of the group. To hide or show layers and groups in the canvas, click the eye icon to the right of the group or layer in the sidebar when you hold the pointer over it. Alternatively, hide or show layers and groups using the Visible toggle under Composition in the Appearance inspector.

### Customize the Icon Composer interface

Before you begin previewing variants and adding effects to your app icon, consider customizing the Icon Composer interface to show only the platforms that your app supports. Click the Document button in the upper-right corner and choose the platforms from the Document inspector.

For example, if your app runs in iOS only, choose iOS Only from the iOS, macOS pop-up menu and toggle watchOS to off. Icon Composer hides the macOS and watchOS controls so that you can focus on the iOS app icon design.

### Preview variants of your app icon

Icon Composer shows you a preview of your app icon on different platforms (iOS, macOS, and watchOS) and, for iOS and macOS, different appearances (default, dark, and mono). For mono, you can preview clear and tinted variants as well. For watchOS, there are no appearances to preview.

Below the image of your icon in the canvas area, click a platform on the left and appearance on the right to preview or edit that variant. For example, to preview the dark appearance in iOS, select iOS on the left and Dark on the right.

To preview clear and tinted variants, click Mono and then click Options. From the dialog, select Light or Dark, toggle Tinted on or off, and select a tint color using the sliders.

### Simulate device backgrounds and lighting

To preview your app icon in a different context, use the controls in the toolbar above the canvas area. These controls only change the simulated device where your app icon appears; they don’t edit your app icon.

You can use the toolbar controls to set the following:

- To change the background color, choose a color from the color well on the left.

- To change the background image, choose a background image from the Background Image pop-up menu. To use your own image, click Add Background in the pop-up menu.

- To switch between the background color and image, click the background toggle.

- To add grid lines, choose Light or Dark from the Grid pop-up menu.

- To toggle the grid lines on or off, click the Grid button.

- To view the app icon in different lighting directions, rotate the lighting angle dial.

- To view a specific size of the app icon, choose the size from the “Select preview size” pop-up menu.

- To zoom in or out, choose a percentage from the “Change zoom level” pop-up menu.

You can use these controls to see the transparency in the clear and tinted modes using your own backgrounds. For example, to preview the clear dark variant over a sample image, select iOS or macOS as the platform and Mono as the appearance. From the Mono options dialog, toggle Tinted off. Then choose Add Background from the Background Image pop-up menu at the top of the canvas and select the screenshot in the dialog that appears.

### Apply effects to the background, groups, and layers

As you preview the variants of your app icon on different platforms and device settings, apply effects and fix any problems you see using the Appearance inspector. Explore the different settings for groups and layers within a group.

In general, settings under Color are useful for creating variants for dark and mono appearances. For groups and layers, you customize the dynamic material under Liquid Glass. Then use the controls under Composition for varying your design on different platforms.

For any text fields where you enter numbers, you can enter an equation and Xcode calculates the value for you. For example, enter `35*3` or to double an existing value, `*2`.

### Apply a gradient fill and opacity

Under Color in the Appearance inspector, you can change a layer’s fill from the default value (Automatic) that Icon Composer gets from the graphic file. Select the layer in the sidebar, and from the Fill pop-up menu in the Appearance inspector, choose None, Solid, or Gradient.

For example, apply a gradient to your app icon’s background following these steps:

1. In the sidebar, click the icon filename.

2. In the canvas, select a platform and, optionally, an appearance.

3. To show the settings, click the Appearance inspector in the upper-right corner of the window.

4. From the Color pop-up menu, choose All to change all variants.

5. From the Fill pop-up menu, choose Gradient.

6. From the two color wells that appear below, select the “From” and “To” colors.

To switch the colors, click the arrows to the left of the Gradient color wells when you hold the pointer over them. For layers, you can use the dots in the canvas that appear on the layer to change the “From” and “To” locations of the gradient.

You can also make a group or layer transparent to reveal details behind using the Opacity setting under Color.

### Apply Liquid Glass effects to groups and layers

Icon Composer automatically adds the Liquid Glass material to layers when you import graphics files, and it applies other default Liquid Glass settings to groups when you create them.

For a group, you have all the options to customize the Liquid Glass material. Select a group in the sidebar and choose Individual or Combined from the Mode pop-up menu in the inspector. Individual applies the effect to every layer in the group separately. Combined applies the effect to the layers in the group as one object.

The specular material is on by default. If you toggle Specular off, the slight blur to the background and a light highlight around the edges disappears. The following screenshot shows a group that contains a sun and mountains with Specular off.

Below Specular, you can apply the rest of the Liquid Glass settings (Blur, Translucency, and Shadow) to the group.

To turn Liquid Glass off for an individual layer, select the layer in the sidebar, and in the inspector, toggle the Effects switch under Liquid Glass off.

### Change the position and scale of graphics

You can reposition and scale graphics in your layers using Icon Composer. Just drag the graphics you want to move within the canvas area.

Video with custom controls.

Content description: A video that shows how to select a layer and drag it in the canvas to change its position.

Play

Content description: A video that shows how to select a group and drag it within the canvas to change its position.

To move multiple groups, layers, or individual graphics, Command-click them in the sidebar or canvas first, or select them by dragging a bounding box in the canvas. Icon Composer highlights the selection in both the sidebar and canvas. To unselect all graphics, press the Escape key.

Use the guidelines that appear while dragging to align the selection with other graphics. To make more precise edits, you can enter an x, y, and scale in the Layout section of the Appearance inspector under Composition. To make single point changes, use the Up Arrow and Down Arrow keys

Optionally, turn the grid on so you can see where to place your graphics. In the toolbar, click the Grid button or choose Light or Dark from the Grid pop-up menu. Icon Composer overlays grid lines on the preview of your app icon in the color that you choose. To remove the grid lines, toggle Grid off.

### Customize variants of your app icon

You can customize specific platform and appearance variants of your app icon using the Appearance inspector.

To see settings that you customize, select the icon, a group, or a layer in the sidebar and choose All from the Color, Liquid Glass, or Composition pop-up menu in the Appearance inspector. The custom settings appear below the main setting. For example, if you change the Blend Mode setting for the dark and mono appearances in iOS, then a Dark and Mono setting appears below the Blend Mode setting. The main setting applies to the variants that you don’t customize.

The Appearance inspector enables the controls for the platform or appearance that you select in the canvas. For example, to enable the Dark setting that appears below Blend Mode, select the dark appearance in the canvas.

To add another custom setting, select the platform or appearance in the canvas that you want to vary and in the Appearance inspector, click the icon next to the setting. Choose Vary for \[appearance \| platform\] from the Add button pop-up menu. For example, select iOS / macOS and Default in the canvas and choose Vary for iOS / macOS from the Blur pop-up menu under Liquid Glass.

To remove custom settings, click the X next to the platform or appearance. For example, to remove the Dark setting under the Blend Mode setting, click the X next to Dark.

Alternatively, choose the appearance that you select in the canvas from the Color or Liquid Glass pop-up menu. Then the controls in that section only apply to that appearance. Similarly, choose the platform that you select in the canvas from the Composition pop-up menu and the controls in that section apply only to that platform. The controls behave in this way so that the appearance of your app icon remains consistent and only the geometry varies across platforms.

Then you can switch

If you create your Icon Composer file outside of Xcode, you can add it to your Xcode project anytime to view your icon in Simulator and on real devices.

Just drag the Icon Composer file from Finder to the Project navigator, and Xcode provides feedback on where to drop it in a target folder. Alternatively, choose Add Files from the Add button at the bottom of the Project navigator and select your Icon Composer file in the dialog that appears.

In the project editor, select the target and the General tab. Under App Icons and Launch Screen, ensure that the name in the App Icon text field matches the name of the Icon Composer file without the extension. You can have multiple Icon Composer files in your project but only one that matches the name in the App Icon text field.

### Test your app icon on simulated and real devices

In Xcode, choose a simulated or real device from the run destination menu and click the Run button. Verify that your app icon appears correctly on different platforms and appearances. Use the Appearance system settings in Simulator or on a real device to test appearances.

For more information on running your app in Xcode, see Running your app in Simulator or on a device.

## See Also

### App icons and launch screen

Configuring your app to use alternate app icons

Add alternate app icons to your app, and let people choose which icon to display.

Configuring your app icon using an asset catalog

Add app icon variations to an asset catalog that represents your app in places such as the App Store, the Home Screen, Settings, and search results.

Specifying your app’s launch screen

Make your iOS app launch experience faster and more responsive by customizing a launch screen.

---

# https://developer.apple.com/documentation/technologyoverviews/app-design-and-ui

Collection

- Technology Overviews
- App design and UI

# App design and UI

Choose a programming approach to build your app, create your app’s interface, and implement the fundamental behaviors that your app requires.

At the start of every new project, you need to choose an app-builder technology to use for your initial code. App-builder technologies define the programming approach you take for your app’s interface, event-handling code, and other behaviors. You can choose one of these programming approaches for your app, or combine the approaches.

Each platform defines the overall look for views and controls, and your app-builder technology determines how you create and manage your interface. Build your interface with standard views and controls, a mixture of standard and custom views, or entirely custom content.

## SwiftUI apps

SwiftUI is the best option when you’re learning to program for Apple platforms, or when you want to create a new app. With SwiftUI, you build your app’s interface and content using a declarative programming model. With this model, you describe the behaviors and appearance you want, and SwiftUI creates and manages the interface for you. Changes are data driven, so when you update variables that affect the state of a view, SwiftUI refreshes your interface for you.

Use SwiftUI to build apps for iOS, iPadOS, macOS, tvOS, visionOS, and watchOS and the Swift programming language.

- Build apps and widgets using a declarative programming model and data-driven changes.

- Build your interface, and incorporate features like custom drawing and text editing.

- See live previews of your interface as you write the code for your views.

- Incorporate existing UIKit or AppKit views and view controllers into your interface.

To learn more, read SwiftUI apps.

## UIKit and AppKit apps

UIKit and AppKit offer a more traditional, object-oriented approach to building apps. These frameworks provide a library of objects that you assemble and customize to achieve the behavior you want. For example, you assemble your interface from standard and custom views and place the logic for managing view interactions in custom controller objects. Each object manages its own behavior, and your custom code defines the overall behavior of your app.

Use UIKit to build apps for iOS, iPadOS, tvOS, visionOS, and Mac Catalyst. Use AppKit to build apps for macOS. Build your app using either Swift or the Objective-C programming language.

- Build apps using a library of objects and a model-view-controller architecture.

- Build your interface, and incorporate features like custom drawing and rich-text editing.

- Assemble your app’s view hierarchies using Xcode’s visual editor.

- Adopt SwiftUI views incrementally in your view hierarchies.

To learn more, read UIKit and AppKit apps.

## Interface fundamentals

No matter which app-builder technology you choose, most of the components you use to build your interface are the same. Before you build your interface, learn about the different components available to you, and learn how different platforms use those components. You can also learn about other technologies that impact the design of your interface and how you display content.

- Learn about the windows, views, and other visual elements available to you.

- Explore the design approaches for each platform, and learn how to make your app stand out.

- Manage app-related assets, and learn how to load them locally or from a remote server.

- Support common features like internationalization, accessibility, undo and redo, and the pasteboard.

To learn more, read Interface fundamentals.

## Liquid Glass

Interfaces across Apple platforms feature a new dynamic material called Liquid Glass, which combines the optical properties of glass with a sense of fluidity. Learn how to leverage Liquid Glass to make sure your interface looks right at home on Apple platforms.

- Embrace the visual refresh for materials, controls, and app icons.

- Provide a universal navigation and search experience across platforms.

- Ensure your interface’s organization and layout looks consistent with other apps and system experiences.

- Adopt best practices for windows, modals, menus, and toolbars.

- Test your app to provide a great experience across platforms.

To learn more, read Liquid Glass.

---

