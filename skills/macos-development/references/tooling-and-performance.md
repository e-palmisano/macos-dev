# Xcode Previews, Performance & Compatibility

> Xcode previews and library customization, performance analysis/Instruments, and the UIDesignRequiresCompatibility opt-out for the new design system.

---

# https://developer.apple.com/documentation/swiftui/previews-in-xcode

Collection

- SwiftUI
- Previews in Xcode

API Collection

# Previews in Xcode

Generate dynamic, interactive previews of your custom views.

## Overview

When you create a custom `View` with SwiftUI, Xcode can display a preview of the view’s content that stays up-to-date as you make changes to the view’s code. You use one of the preview macros — like `Preview(_:body:)` — to tell Xcode what to display. Xcode shows the preview in a canvas beside your code.

Different preview macros enable different kinds of configuration. For example, you can add traits that affect the preview’s appearance using the `Preview(_:traits:_:body:)` macro or add custom viewpoints for the preview using the `Preview(_:traits:body:cameras:)` macro. You can also check how your view behaves inside a specific scene type. For example, in visionOS you can use the `Preview(_:immersionStyle:traits:body:)` macro to preview your view inside an `ImmersiveSpace`.

You typically rely on preview macros to create previews in your code. However, if you can’t get the behavior you need using a preview macro, you can use the `PreviewProvider` protocol and its associated supporting types to define and configure a preview.

## Topics

### Essentials

Previewing your app’s interface in Xcode

Iterate designs quickly and preview your apps’ displays across different Apple devices.

### Creating a preview

Creates a preview of a SwiftUI view.

Creates a preview of a SwiftUI view using the specified traits.

Creates a preview of a SwiftUI view using the specified traits and custom viewpoints.

### Creating a preview in the context of a scene

Creates a preview of a SwiftUI view in an immersive space.

Creates a preview of a SwiftUI view in an immersive space with custom viewpoints.

Creates a preview of a SwiftUI view in a window.

Creates a preview of a SwiftUI view in a window with custom viewpoints.

### Defining a preview

`macro Previewable()`

Tag allowing a dynamic property to appear inline in a preview.

`protocol PreviewProvider`

A type that produces view previews in Xcode.

`enum PreviewPlatform`

Platforms that can run the preview.

Sets a user visible name to show in the canvas for a preview.

`protocol PreviewModifier`

A type that defines an environment in which previews can appear.

`struct PreviewModifierContent`

The type-erased content of a preview.

### Customizing a preview

Overrides the device for a preview.

`struct PreviewDevice`

A simulator device that runs a preview.

Overrides the size of the container for the preview.

Overrides the orientation of the preview.

`struct InterfaceOrientation`

The orientation of the interface from the user’s perspective.

### Setting a context

Declares a context for the preview.

`protocol PreviewContext`

A context type for use with a preview.

`protocol PreviewContextKey`

A key type for a preview context.

### Building in debug mode

`struct DebugReplaceableView`

Erases view opaque result types in debug builds.

## See Also

### Tool support

Expose custom views and modifiers in the Xcode library.

Measure and improve your app’s responsiveness.

---

# https://developer.apple.com/documentation/swiftui/xcode-library-customization

Collection

- SwiftUI
- Xcode library customization

# Xcode library customization

Expose custom views and modifiers in the Xcode library.

## Overview

You can add your custom SwiftUI views and view modifiers to Xcode’s library. This allows anyone developing your app or adopting your framework to access them by clicking the Library button (+) in Xcode’s toolbar. You can select and drag the custom library items into code, just like you would for system-provided items.

To add items to the library, create a structure that conforms to the `LibraryContentProvider` protocol and encapsulate any items you want to add as `LibraryItem` instances. Implement the `views` computed property to add library items containing views. Implement the `modifiers(base:)` method to add items containing view modifiers. Xcode harvests items from all of the library content providers in your project as you work, and makes them available to you in its library.

## Topics

### Creating library items

`protocol LibraryContentProvider`

A source of Xcode library and code completion content.

`struct LibraryItem`

A single item to add to the Xcode library.

## See Also

### Tool support

Generate dynamic, interactive previews of your custom views.

Measure and improve your app’s responsiveness.

---

# https://developer.apple.com/documentation/swiftui/performance-analysis

Collection

- SwiftUI
- Performance analysis

# Performance analysis

Measure and improve your app’s responsiveness.

## Overview

Use Instruments to detect hangs and hitches in your app, and to analyze long view body updates and frequently occurring SwiftUI updates that can contribute to hangs and hitches.

## Topics

### Essentials

Understanding user interface responsiveness

Make your app more responsive by examining the event-handling and rendering loop.

Understanding hangs in your app

Determine the cause for delays in user interactions by examining the main thread and the main run loop.

Understanding hitches in your app

Determine the cause of interruptions in motion by examining the render loop.

### Analyzing SwiftUI performance

Understanding and improving SwiftUI performance

Identify and address long-running view updates, and reduce the frequency of updates.

## See Also

### Tool support

Generate dynamic, interactive previews of your custom views.

Expose custom views and modifiers in the Xcode library.

---

# https://developer.apple.com/documentation/Xcode/improving-your-app-s-performance

- Xcode
- Performance and metrics
- Improving your app’s performance

Article

# Improving your app’s performance

Model, measure, and boost the performance of your app by using a continuous-improvement cycle.

## Overview

People using your app expect it to perform well. An app that takes a long time to launch, or responds slowly to input, may appear as if it isn’t working or is sluggish. An app that makes a lot of large network requests may increase a person’s data charges and drain the device battery. Similarly, an app that consumes a lot of disk space leaves a person’s device with less space for other content or apps. Any of these behaviors can frustrate people and lead them to uninstall your app.

Plan and implement performance improvements by approaching the problem scientifically:

1. Gather information about the problems your users are experiencing.

2. Measure your app’s behavior to find the causes of the problems.

3. Plan one change to improve the situation.

4. Implement the change.

5. Observe whether the app’s performance improves.

These activities form a cycle of continuous improvement, as the following illustration shows:

Minimizing resource use benefits your users and improves their perceptions of your app. Here are some specific benefits:

- Decreasing app launch time improves the user experience, and reduces the chances of the iOS watchdog timer terminating the app.

- Decreasing overall memory use reduces the likelihood of iOS freeing your app’s memory in the background, and improves responsiveness when a user switches so that the system can purge it when needed. Doing so speeds up app and system upgrades, and reduces the iCloud storage space the system requires to create an iCloud backup of the device. For more information, see Optimizing Your App’s Data for iCloud Backup.

Even when your measurements and observations show no pressing performance problems, it’s a good idea to run through the performance-improvement cycle and do preventive work to keep your app’s performance from regressing.

### Gather data about your app’s current performance

To thoroughly understand your app’s performance, combine information from multiple sources:

- Use the Xcode Organizer to view metrics for launch time, user-interface responsiveness, writes to storage, memory use, and energy use, as well as diagnostic reports for disk writes, crashes, and energy. The Organizer lets you break down measurements by device model, app version, and user percentile. For more information, see Analyzing the performance of your shipping app.

- Use MetricKit to gather metrics and record them in your own tools. These metrics are in the form of histograms that record the frequency of observed values over a day. MetricKit goes beyond the metrics in the Metrics organizer to include average pixel luminance, cellular network conditions, and durations associated with custom `OSSignpost` events in your app.

- Get feedback from TestFlight testers about their experiences with beta versions of your app. Fill out the Test Information page for your beta version, and request that testers provide feedback about the performance of your app. Include an email address so that testers can report their findings.

- Investigate feedback from your users about their experiences with released versions of your app. Invite users to send their feedback through email or a dedicated interface within your app. Ask them about their experiences using the app — both what works well and any problems they encounter.

### Determine the most important aspect to improve

Use the information from your observations and your understanding of your app’s purpose and expected use patterns to spot the greatest opportunities for improvement. Some performance issues are independent of the type of app under investigation. An app that takes a long time to launch, or is unresponsive to users’ attempts to manipulate the interface, results in users feeling they have no control over the app.

The largest value for a metric you see in the Metrics organizer or in MetricKit may not indicate the most important issue to address if that value represents expected app usage. For example, energy use associated with background-audio playing is probably not a problem for a podcast player, which users expect to play in the background. However, it would be surprising to see that metric dominate if your app is a game that has no background component to its gameplay.

Seeing that value dominate the metric reports can indicate that efficiency savings are possible, but the most impactful changes may be in the use of auxiliary services that don’t impact the app’s main features. The podcast player might infrequently need to use coarse-grained location services to recommend local-interest podcasts to the listener, but the high-energy consumption associated with the frequent tracking of the user’s precise location may be a sign that a change is necessary.

### Profile your app

Use Instruments to profile your app with a profiling template that’s relevant to the metric you’re considering:

- Unresponsiveness and hangs: Use the Time Profiler template.

- Memory issues: Use the Allocations and Leaks templates.

- Power-consumption issues: Use the Energy Log template.

- I/O issues: Use the File Activity template.

- Network-related issues: Use the Network template.

You get higher-fidelity measurements by profiling on a device instead of the simulator. If the information you gather shows that your app performs poorly on a particular class or model of device, profile on that device.

Find the code that’s causing the performance problem, and create a plan for improving it. Keep in mind that your change may not be localized to a particular line or even function, and you may need to make significant architectural changes to your app. For example, to mitigate a hang that results from synchronously downloading network resources, introduce background operations to handle the networking (see Downloading files in the background), and perform a UI update on the main thread when the downloads are complete.

### Make the next change

Implement the change you plan as a result of your investigation. Create an _after_ profile in Instruments that you can compare with the _before_ profile to ensure your change results in an improvement. Consider writing a performance test in XCTest to protect against future regressions in performance, and to serve as a record that the problem existed and you fixed it.

### Compare the changed behavior with your original data

After you change your app to address the most important performance issue you observe, confirm that the change has the desired effect and that the level of improvement is sufficient. Use the graphs of performance metrics for each version of your app in Xcode’s Metrics organizer to see whether the change results in an improvement or a regression.

Finally, decide whether the metric you’re working on is still the most important to address, or whether the data points to another metric for the next iteration of the performance improvement cycle.

### Additional resources

The following articles, Xcode Help topics, and WWDC session videos contain more information about using Xcode and Instruments for measuring and improving app performance:

#### Performance tools and techniques

- Diagnose Performance Issues With the Xcode Organizer

- Eliminate Animation Hitches With XCTest

- Instruments Help

- Logging

- Performance on iOS and watchOS

- Practical Approaches to Great App Performance

- Profile your app’s performance

- Visual Debugging with Xcode

- What’s New in MetricKit

- Writing and running performance tests

#### Energy consumption

- Achieving All-day Battery Life

- Debugging Energy Issues

- Energy Efficiency and the User Experience

- Energy Efficiency Guide for iOS Apps

- Energy Efficiency Guide for Mac Apps

- Identify Trends With the Power and Performance API

- Monitor a running app using debug gauges

- Monitor your app’s energy usage

- Profile your app’s energy use

- What’s New in Energy Debugging

- Writing Energy Efficient Apps

- Xcode Energy Organizer

## See Also

### Related Documentation

Improve your app’s performance by analyzing memory-use metrics and making changes to maximize memory efficiency.

Reducing your app’s launch time

Create a more responsive experience with your app by minimizing time spent in startup.

Reducing disk writes

Improve your app’s responsiveness by optimizing how it writes data to permanent storage.

### Essentials

Profiling apps using Instruments

Use Instruments to analyze the performance, resource usage, and behavior of your apps. Learn how to improve responsiveness, reduce memory usage, and analyze complex behavior over time.

Analyzing the performance of your shipping app

View power and performance metrics for apps you distribute through the App Store.

Creating a performance plan for your visionOS app

Identify your app’s performance and power goals and create a plan to measure and assess them.

---

# https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility

- Bundle Resources
- Information Property List
- UIDesignRequiresCompatibility

Property List Key

# UIDesignRequiresCompatibility

A Boolean value that indicates whether the system runs the app using a compatibility mode for UI.

## Details

Type

boolean

## Discussion

If `YES`, the system runs the app using a compatibility mode for UI elements. The compatibility mode displays the app as it looks when built against previous versions of the SDKs.

If `NO`, the system uses the UI design of the running OS, with no compatibility mode. Absence of the key, or `NO`, is the default value for apps linking against the latest SDKs.

## See Also

### Styling

`UIUserInterfaceStyle`

The user interface style for the app.

**Name:** User Interface Style

`UIViewEdgeAntialiasing`

A Boolean value that indicates whether Core Animation layers use antialiasing when drawing a layer that isn’t aligned to pixel boundaries.

**Name:** Renders with edge antialiasing

`UIWhitePointAdaptivityStyle`

The app’s white-point adaptivity style, enabled on devices with True Tone displays.

**Name:** White Point Adaptivity Style

`UIViewGroupOpacity`

A Boolean value that indicates whether Core Animation sublayers inherit the opacity of their superlayer.

**Name:** Renders with group opacity

`UIRequiresFullScreenIgnoredStartingWithVersion`

A string value that specifies a system version after which the system ignores the requires full screen key.

`UISupportsAssistiveAccess`

A Boolean value that indicates if an iOS or iPadOS app supports Assistive Access.

**Name:** Supports Assistive Access

`UISupportsFullScreenInAssistiveAccess`

A Boolean value that indicates if an iOS or iPadOS app appears as full screen in Assistive Access.

**Name:** Supports full screen in Assistive Access

`NSPrefersDisplaySafeAreaCompatibilityMode`

A Boolean value that indicates whether the app prefers to run in compatibility mode when necessary.

`NSAccentColorName`

The name of a color in an asset catalog to use for a target’s global accent color.

`NSWidgetBackgroundColorName`

The name of a color in an asset catalog to use for a widget’s configuration interface.

---

