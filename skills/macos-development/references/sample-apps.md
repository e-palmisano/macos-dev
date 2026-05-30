# Worked Sample Apps

> Full Apple sample-app walkthroughs that show the frameworks in combination: Hello World, a document-based app, and the Food Truck multiplatform app.

---

# https://developer.apple.com/documentation/swiftui/building-a-document-based-app-with-swiftui

- SwiftUI
- Documents
- Building a document-based app with SwiftUI

Sample Code

# Building a document-based app with SwiftUI

Create, save, and open documents in a multiplatform app.

Download

Xcode 16.0+

## Overview

The Writing App sample builds a document-based app for iOS, iPadOS, and macOS. In the app definition, it has a `DocumentGroup` scene, and its document type conforms to the `FileDocument` protocol. People can create a writing app document, modify the title and contents of the document, and read the story in focus mode.

## Configure the sample code project

To build and run this sample on your device, select your development team for the project’s target using these steps:

1. Open the sample with the latest version of Xcode.

2. Select the top-level project.

3. For the project’s target, choose your team from the Team pop-up menu in the Signing & Capabilities pane to let Xcode automatically manage your provisioning profile.

## Define the app’s scene

A document-based SwiftUI app returns a `DocumentGroup` scene from its `body` property. The `newDocument` parameter that an app supplies to the document group’s `init(newDocument:editor:)` initializer conforms to either `FileDocument` or `ReferenceFileDocument`. In this sample, the document type conforms to `FileDocument`. The trailing closure of the initializer returns a view that renders the document’s contents:

@main
struct WritingApp: App {
var body: some Scene {
DocumentGroup(newDocument: WritingAppDocument()) { file in
StoryView(document: file.$document)
}
}
}

## Customize the iOS and iPadOS launch experience

You can update the default launch experience on iOS and iPadOS with a custom title, action buttons, and screen background. To add an action button with a custom label, use `NewDocumentButton` to replace the default label. You can customize the background in many ways such as adding a view or a `backgroundStyle` with an initializer, for example `init(_:backgroundStyle:_:backgroundAccessoryView:overlayAccessoryView:)`. This sample customizes the background of the title view, using the `init(_:_:background:)` initializer:

DocumentGroupLaunchScene("Writing App") {
NewDocumentButton("Start Writing")
} background: {
Image(.pinkJungle)
.resizable()
.scaledToFill()
.ignoresSafeArea()
}

You can also add accessories to the scene using initializers such as `init(_:_:background:backgroundAccessoryView:)` and `init(_:_:background:overlayAccessoryView:)` depending on the positioning.

overlayAccessoryView: { _ in
AccessoryView()
}

This sample contains two accessories in the overlay position that it defines in `AccessoryView`. It customizes the accessories by applying modifiers, including `offset(x:y:)` and `frame(width:height:alignment:)`.

ZStack {
Image(.robot)
.resizable()
.offset(x: size.width / 2 - 450, y: size.height / 2 - 300)
.scaledToFit()
.frame(width: 200)
.opacity(horizontal == .compact ? 0 : 1)
Image(.plant)
.resizable()
.offset(x: size.width / 2 + 250, y: size.height / 2 - 225)
.scaledToFit()
.frame(width: 200)
.opacity(horizontal == .compact ? 0 : 1)
}

To add both background and overlay accessories, use an initializer, such as `init(_:_:background:backgroundAccessoryView:overlayAccessoryView:)`. If you don’t provide any accessories, the system displays two faded sheets below the title view by default. In macOS, this sample displays the default system document browser on launch. You may wish to add an additional experience on launch.

## Create the data model

This sample has a data model that defines a story as a `String`, it initializes `story` with an empty string:

var story: String

init(text: String = "") {
self.story = text
}

## Adopt the file document protocol

The `WritingAppDocument` structure adopts the `FileDocument` protocol to serialize documents to and from files. The `readableContentTypes` property defines the types that the sample can read and write, specifically, the `.writingAppDocument` type:

static var readableContentTypes: [UTType] { [.writingAppDocument] }

The `init(configuration:)` initializer loads documents from a file. After reading the file’s data using the `file` property of the `configuration` input, it deserializes the data and stores it in the document’s data model:

init(configuration: ReadConfiguration) throws {
guard let data = configuration.file.regularFileContents,
let string = String(data: data, encoding: .utf8)
else {
throw CocoaError(.fileReadCorruptFile)
}
story = string
}

When a person writes a document, SwiftUI calls the `fileWrapper(configuration:)` function to serialize the data model into a `FileWrapper` value that represents the data in the file system:

let data = Data(story.utf8)
return .init(regularFileWithContents: data)
}

Because the document type conforms to `FileDocument`, this sample handles undo actions automatically.

## Export a custom document type

The app defines and exports a custom content type for the documents it creates. It declares this custom type in the project’s `Information Property List` file under the `UTExportedTypeDeclarations` key. This sample uses `com.example.writingAppDocument` as the identifier in the `Info.plist` file:

For convenience, you can also define the content type in code. For example:

extension UTType {
static var writingapp: UTType {
UTType(exportedAs: "com.example.writingAppDocument")
}
}

To make sure that the operating system knows that your application can open files with the format described in the `Info.plist`, it defines the file extension `story` for the content type. For more information about custom file and data types, see Defining file and data types for your app.

## See Also

#### Related samples

Building a document-based app using SwiftData

Code along with the WWDC presenter to transform an app with SwiftData.

#### Related articles

Defining file and data types for your app

Declare uniform type identifiers to support your app’s proprietary data formats.

Customizing a document-based app’s launch experience

Add unique elements to your app’s document launch scene.

#### Related videos

![\\
\\
Evolve your document launch experience](https://developer.apple.com/videos/play/wwdc2024/10132)

---

# https://developer.apple.com/documentation/swiftui/food-truck-building-a-swiftui-multiplatform-app

- SwiftUI
- App organization
- Food Truck: Building a SwiftUI multiplatform app

Sample Code

# Food Truck: Building a SwiftUI multiplatform app

Create a single codebase and app target for Mac, iPad, and iPhone.

Download

Xcode 14.3+

## Overview

Using the Food Truck app, someone who operates a food truck can keep track of orders, discover the most-popular menu items, and check the weather at their destination. The sample implements the new `NavigationSplitView` to manage the app’s views, `Layout` to show the main interface and pending orders, Swift Charts to show trends, and `WeatherService` to get weather data. Food Truck also implements Live Activities to show the remaining order preparation time with ActivityKit on the lock screen, and with `DynamicIsland` on the home screen.

You can access the source code for this sample on GitHub.

The Food Truck sample project contains two types of app targets:

- Simple app target you can build using personal team signing. This app runs in Simulator, and only requires a standard Apple ID to install on a device. It includes in-app purchase, and a widget extension that enable users to add a widget to their iOS Home Screen or the macOS Notification Center.

- Full-featured Food Truck All app target. The full app runs in Simulator, and on devices with an Apple Developer membership. It also allows you to create and sign in with passkeys.

### Configure the sample code project

To configure the Food Truck app without an Apple Developer account, follow these steps:

1. In the Food Truck target’s Signing & Capabilities panes click Add Account, and log in with your Apple ID.

2. Chose Your Name (Personal Team) from the team menu for the Food Truck and Widgets targets.

3. Build and run your app.

To configure the Food Truck All app to run on your devices, follow these steps:

1. Open the sample with Xcode 14.3 or later.

2. Select the top-level Food Truck project.

3. For all targets, choose your team from the Team menu in the Signing & Capabilities pane, so Xcode can automatically manage your provisioning profile.

4. Add the Associated Domains capability, and specify your domain with the `webcredentials` service. For more information about the `webcredentials` service, see `Associated Domains Entitlement`.

5. Ensure an `apple-app-site-association` (AASA) file is present on your domain, in the `.well-known` directory, and it contains an entry for this app’s App ID for the `webcredentials` service. For more information about the `apple-app-site-association` file, see Supporting associated domains.

6. In the `AccountManager.swift` file, replace all occurrences of `example.com` with the name of your domain.

### Create a multiplatform app

Food Truck is a multiplatform app, and there are no separate targets to run on macOS or iOS. Instead, there is only one app target that builds for macOS, iPadOS, and iOS.

### Define a default navigation destination

The sample’s navigation interface consists of a `NavigationSplitView` with a `Sidebar` view, and a `NavigationStack`:

NavigationSplitView {
Sidebar(selection: $selection)
} detail: {
NavigationStack(path: $path) {
DetailColumn(selection: $selection, model: model)
}
}

At app launch, the sample presents the `TruckView` as the default view. The `Panel` enum encodes the views the user can select in the sidebar, and hence appear in the detail view. The value corresponding to `TruckView` is `.truck`, and the app sets this to be the default selection.

@State private var selection: Panel? = Panel.truck

### Construct a dynamic layout

In the Truck view, the New Orders panel shows the five most-recent orders, and each order shows a `DonutStackView`, which is a diagonal stack of donut thumbnails. The `Layout` protocol allows the app to define a `DiagonalDonutStackLayout` that arranges the donut thumbnails into the diagonal layout. The layout’s `placeSubviews(in:proposal:subviews:cache:)` implementation calculates the donuts’ positions.

for index in subviews.indices {
switch (index, subviews.count) {
case (_, 1):
subviews[index].place(
at: center,
anchor: .center,
proposal: ProposedViewSize(size)
)

case (_, 2):
let direction = index == 0 ? -1.0 : 1.0
let offsetX = minBound * direction * 0.15
let offsetY = minBound * direction * 0.20
subviews[index].place(
at: CGPoint(x: center.x + offsetX, y: center.y + offsetY),
anchor: .center,
proposal: ProposedViewSize(CGSize(width: size.width * 0.7, height: size.height * 0.7))
)
case (1, 3):
subviews[index].place(
at: center,
anchor: .center,
proposal: ProposedViewSize(CGSize(width: size.width * 0.65, height: size.height * 0.65))
)

case (_, 3):
let direction = index == 0 ? -1.0 : 1.0
let offsetX = minBound * direction * 0.15
let offsetY = minBound * direction * 0.23
subviews[index].place(
at: CGPoint(x: center.x + offsetX, y: center.y + offsetY),
anchor: .center,
proposal: ProposedViewSize(CGSize(width: size.width * 0.7, height: size.height * 0.65))
)

### Display a chart of popular items

The sample contains several charts. The most popular items are shown on the `TopFiveDonutsView`. This chart is implemented in `TopDonutSalesChart`, which uses a `BarMark` to construct a bar chart.

Chart {
ForEach(sortedSales) { sale in
BarMark(
x: .value("Donut", sale.donut.name),
y: .value("Sales", sale.sales)
)
.cornerRadius(6, style: .continuous)
.foregroundStyle(.linearGradient(colors: [Color("BarBottomColor"), .accentColor], startPoint: .bottom, endPoint: .top))
.annotation(position: .top, alignment: .top) {
Text(sale.sales.formatted())
.padding(.vertical, 4)
.padding(.horizontal, 8)
.background(.quaternary.opacity(0.5), in: Capsule())
.background(in: Capsule())
.font(.caption)
}
}
}

The _x_ axis of the chart shows labels with the names and thumbnails of the items that correspond to each data point.

.chartXAxis {
AxisMarks { value in
AxisValueLabel {
let donut = donutFromAxisValue(for: value)
VStack {
DonutView(donut: donut)
.frame(height: 35)

Text(donut.name)
.lineLimit(2, reservesSpace: true)
.multilineTextAlignment(.center)
}
.frame(idealWidth: 80)
.padding(.horizontal, 4)

}
}
}

### Obtain a weather forecast

The app shows a forecasted temperature graph in the Forecast panel in the Truck view. The app obtains this data from the WeatherKit framework.

.task(id: city.id) {
for parkingSpot in city.parkingSpots {
do {
let weather = try await WeatherService.shared.weather(for: parkingSpot.location)
condition = weather.currentWeather.condition

cloudCover = weather.currentWeather.cloudCover
temperature = weather.currentWeather.temperature
symbolName = weather.currentWeather.symbolName

let attribution = try await WeatherService.shared.attribution
attributionLink = attribution.legalPageURL
attributionLogo = colorScheme == .light ? attribution.combinedMarkLightURL : attribution.combinedMarkDarkURL

if willRainSoon == false {
spot = parkingSpot
break
}
} catch {
print("Could not gather weather information...", error.localizedDescription)
condition = .clear
willRainSoon = false
cloudCover = 0.15
}
}
}

### Configure the project for WeatherKit

The data from the `WeatherService` instance in WeatherKit requires additional configuration for the Food Truck All target. If you don’t configure WeatherKit, the sample will detect an error and use static data in the project instead.

1. Create a unique App ID on the Provisioning Portal, and select the WeatherKit service on the App Services tab.

2. In Xcode, for the Food Truck All target on the Signing & Capabilities tab, change the bundle ID to be the same as the App ID from step 1, and add the WeatherKit capability.

3. For the Widgets target on the Signing & Capabilities tab, change the bundle ID to make the part before `.Widgets` the same as the bundle ID for the Food Truck All target.

4. Wait 30 minutes while the service registers your app’s bundle ID.

5. Build and run the Food Truck All target.

### Track preparation time with Live Activity

The app allows the food truck operator to keep track of order preparation time, which is guaranteed to be 60 seconds or less. To facilitate this, the app implements a toolbar button on the order details screen for orders with `placed` status. Tapping this button changes the order status to `preparing`, and creates an `Activity` instance to start a Live Activity, which shows the countdown timer and order details on an iPhone lock screen.

let timerSeconds = 60
let activityAttributes = TruckActivityAttributes(
orderID: String(order.id.dropFirst(6)),
order: order.donuts.map(\.id),
sales: order.sales,
activityName: "Order preparation activity."
)

let future = Date(timeIntervalSinceNow: Double(timerSeconds))

let initialContentState = TruckActivityAttributes.ContentState(timerRange: Date.now...future)

let activityContent = ActivityContent(state: initialContentState, staleDate: Calendar.current.date(byAdding: .minute, value: 2, to: Date())!)

do {

pushType: nil)
print(" Requested MyActivity live activity. ID: \(myActivity.id)")
postNotification()
} catch let error {
print("Error requesting live activity: \(error.localizedDescription)")
}

The app also implements `DynamicIsland` to show the same information as on the lock screen in the Dynamic Island on iPhone 14 Pro devices.

DynamicIsland {
DynamicIslandExpandedRegion(.leading) {
ExpandedLeadingView()
}

DynamicIslandExpandedRegion(.trailing, priority: 1) {
ExpandedTrailingView(orderNumber: context.attributes.orderID, timerInterval: context.state.timerRange)
.dynamicIsland(verticalPlacement: .belowIfTooWide)
}
} compactLeading: {
Image("IslandCompactIcon")
.padding(4)
.background(.indigo.gradient, in: ContainerRelativeShape())

} compactTrailing: {
Text(timerInterval: context.state.timerRange, countsDown: true)
.monospacedDigit()
.foregroundColor(Color("LightIndigo"))
.frame(width: 40)
} minimal: {
Image("IslandCompactIcon")
.padding(4)
.background(.indigo.gradient, in: ContainerRelativeShape())
}
.contentMargins(.trailing, 32, for: .expanded)
.contentMargins([.leading, .top, .bottom], 6, for: .compactLeading)
.contentMargins(.all, 6, for: .minimal)
.widgetURL(URL(string: "foodtruck://order/\(context.attributes.orderID)"))

Tapping the same button again changes the status to `complete`, and ends the Live Activity. This removes the Live Activity from the lock screen and from the Dynamic Island.

Task {

// Check if this is the activity associated with this order.
if activity.attributes.orderID == String(order.id.dropFirst(6)) {
await activity.end(nil, dismissalPolicy: .immediate)
}
}
}

## See Also

### Creating an app

Destination Video

Leverage SwiftUI to build an immersive media experience in a multiplatform app.

Hello World

Use windows, volumes, and immersive spaces to teach people about the Earth.

Backyard Birds: Building an app with SwiftData and widgets

Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

Fruta: Building a feature-rich app with SwiftUI

Create a shared codebase to build a multiplatform app that offers widgets and an App Clip.

Migrating to the SwiftUI life cycle

Use a scene-based life cycle in SwiftUI while keeping your existing codebase.

`protocol App`

A type that represents the structure and behavior of an app.

---

# https://developer.apple.com/documentation/swiftui/wishlist-planning-travel-in-a-swiftui-app

- SwiftUI
- Wishlist: Planning travel in a SwiftUI app

Sample Code

# Wishlist: Planning travel in a SwiftUI app

Build a travel planning app that organizes trips into collections and tracks activity completion.

Download

Xcode 26.0+

## Overview

The Wishlist sample app helps people organize travel plans by grouping trips into seasonal collections. Within each trip, people can create activities and mark them complete as they explore. The app rewards progress with achievement badges, tracking milestones like completing a first trip or reaching an activity milestone across all adventures.

The sample project demonstrates how to:

- Compose custom views.

- Manage state with the `Observable()` macro.

- Customize navigation title appearance.

- Animate view changes.

- Create zoom transitions to navigation destinations and between buttons and sheets.

### Compose custom views

SwiftUI views conform to the `View` protocol and define their content through a computed `body` property. Each view returns a description of what appears on screen, and SwiftUI handles the rendering.

Wishlist builds custom views by combining built-in components like `VStack`, `HStack`, `Text`, `Image`, and `Button`:

struct TripCard: View {
var trip: Trip
var size: Size

var body: some View {
VStack(alignment: .leading, spacing: 5) {
TripImageView(url: trip.photoURL)
.scaledToFill()
.frame(width: size.width, height: size.height)
.clipShape(.rect(cornerRadius: 16))

VStack(alignment: .leading, spacing: 0) {
Text(trip.name)
.font(.body)

if let subtitle = trip.subtitle {
Text(subtitle)
.font(.subheadline)
.foregroundStyle(.secondary)
}
}
}
}
}

The outer `VStack` stacks the image and text vertically, aligning content to the leading edge. Apply transformations sequentially by stacking modifiers, with each modifier wrapping the previous view in a new view with modified behavior.

### Manage state with an observable macro

SwiftUI updates views automatically when their dependencies change. Mark model classes with `Observable()` to opt into automatic change tracking. In Wishlist, the `@Observable` macro synthesizes the necessary code to publish changes made to any stored property:

@Observable
class DataSource {
var trips: [Trip.ID: Trip] {
didSet {
updateGoalAchievements()
}
}
var searchText = ""
}

The `DataSource` class stores trips in a `Dictionary` keyed by trip ID for efficient lookup. The `didSet` property observer calls `updateGoalAchievements()` whenever the `trips` dictionary changes, keeping goal progress synchronized with trip completion. Any views that read from the `trips` dictionary, like `RecentTripsPageView`, automatically update when the dictionary changes, such as when adding or removing a trip.

To share this data across the sample app, Wishlist creates a state with the `State` property wrapper inside the `App` struct, then injects the data into the view hierarchy with the `environment(_:)` modifier:

@main
struct WishlistApp: App {
@State private var dataSource = DataSource()

var body: some Scene {
WindowGroup {
ContentView()
.environment(dataSource)
}
}
}

Inside a view, Wishlist gets the observable object using its type, then creates a property and provides the object’s type to the `Environment` property wrapper:

struct WishlistView: View {
@Environment(DataSource.self) private var dataSource

var body: some View {
NavigationStack {
ScrollView {
VStack(alignment: .leading, spacing: 10) {
RecentTripsPageView()
ForEach(TripCollection.allCases) { tripCollection in
TripCollectionView(
tripCollection: tripCollection,
cardSize: tripCollection.cardSize,
namespace: namespace
)
}
}
}
}
}
}

The `@Environment` property wrapper retrieves the data source from the environment and establishes a dependency relationship between the view and the observable model. By default, reading an object from the environment returns a non-optional object when using the object type as the key. This default behavior assumes that a view in the current hierarchy previously stored a non-optional instance of the type using the `environment(_:)` modifier. If a view attempts to retrieve an object using its type and that object isn’t in the environment, SwiftUI throws an exception.

SwiftUI automatically tracks property access within the view’s body. When any observed property changes, SwiftUI updates any parts of the view that depend on the value.

Some built-in views and modifiers in SwiftUI, like `Toggle` and `searchable(text:placement:prompt:)`, take a `Binding` to a property. This lets these views and modifiers write back changes to the property. Use the `Bindable` property wrapper to create bindings to properties of an `Observable` object. This includes global variables, properties that exist outside of SwiftUI types, or even local variables. For example, the sample app creates a `@Bindable` variable within a view’s body:

struct SearchView: View {
@Environment(DataSource.self) private var dataSource

var body: some View {
@Bindable var dataSource = dataSource

NavigationStack {
SearchResultsListView()
.searchable(text: $dataSource.searchText)
}
}
}

### Customize navigation title appearance

SwiftUI separates visual presentation from semantic meaning when displaying navigation titles.

In the sample app, the `WishlistView` view uses a `ToolbarItem` and `title``toolbarItem` placement to customize the title’s visual appearance.

NavigationStack {
ScrollView {
// Content
}
.toolbar {
ToolbarItem(placement: .title) {
ExpandedNavigationTitle(title: "Wishlist")
}
}
.navigationTitle("Wishlist")
.toolbarTitleDisplayMode(.inline)
}

The `ExpandedNavigationTitle` view renders the title with a custom font. Always add a navigation title using `navigationTitle(_:)`, which the system uses for the accessibility label when someone navigates back from a detail view. The `toolbarTitleDisplayMode(_:)` modifier that specifies `inline` tells SwiftUI to display the title in the navigation bar’s inline position rather than as a large title.

For content that extends into the safe area, use `largeTitle` placement instead.

### Animate view changes

To direct people’s attention to state changes, add animation in one of the following ways:

- Animate all of the visual changes for a state change by changing the state inside a call to the `withAnimation(_:_:)` global function.

- Add animation to a particular view when a specific value changes by applying the `animation(_:value:)` view modifier to the view.

SwiftUI animates the effects that many built-in view modifiers produce, like those that set a scale or opacity value. You can animate other values by making your custom views conform to the `Animatable` protocol. Use the `Animatable()` macro to do this.

Choose the right approach based on whether you’re animating a discrete action or responding to specific property changes.

In Wishlist, when a person deletes an activity, `withAnimation` ensures the removal animates smoothly:

Button("Delete", role: .destructive) {
withAnimation {
model.removeActivity(activity)
}
}

The `withAnimation` block establishes an animation transaction. Any view changes that `removeActivity(_:)` triggers animate automatically, sharing the same animation curve and timing.

For finer control, apply animations to specific views using the `animation(_:value:)` modifier. This value-based approach creates a targeted animation that only triggers when the specified value changes, affecting only the view hierarchy where the modifier appears. In the activity completion button in Wishlist, the checkmark icon animates its appearance only when `isComplete` toggles, leaving other view changes unanimated:

Image(systemName: activity.isComplete ? "checkmark.circle.fill" : "circle")
.foregroundStyle(activity.isComplete ? Color.accentColor : .gray)
.contentTransition(.symbolEffect)
.animation(.snappy, value: activity.isComplete)

The `animation(.snappy, value: activity.isComplete)` modifier tells SwiftUI to animate this image when `activity.isComplete` changes, using a snappy spring curve. If other properties change, like the view’s position or opacity, those changes won’t animate unless they also depend on `isComplete`.

To learn more about animations, check out WWDC23 session 10156: Explore SwiftUI animation.

### Create zoom transitions between navigation destinations

To customize animated transitions between views, apply `matchedTransitionSource(id:in:)` to the source view and `navigationTransition(_:)` with the transition `zoom(sourceID:in:)` to the destination view using matching identifiers. Use the `Namespace` property wrapper to create a unique value that associates the source and destination.

In Wishlist, when someone taps a trip card, it smoothly zooms and expands into the trip detail screen, maintaining visual continuity throughout the navigation. Dismissing the detail view reverses the animation, zooming back down into the original card position.

struct WishlistView: View {
@Namespace private var namespace

var body: some View {
NavigationStack {
...
ForEach(TripCollection.allCases) { tripCollection in
TripCollectionView(
tripCollection: tripCollection,
namespace: namespace
)
}
}
}
}

struct TripCollectionView: View {
var tripCollection: TripCollection
var namespace: Namespace.ID

var body: some View {
...
ForEach(dataSource.trips(in: tripCollection)) { trip in
NavigationLink {
TripDetailView(trip: trip)
.navigationTransition(.zoom(sourceID: trip.id, in: namespace))
} label: {
TripCard(trip: trip, size: cardSize)
.matchedTransitionSource(id: trip.id, in: namespace)
}
}
...
}
}

The `@Namespace` property wrapper creates a unique identifier space that SwiftUI uses to coordinate the transition. Pass the same namespace to both the source and destination views to establish their relationship.

Each `TripCard` in the trip collection receives `matchedTransitionSource(id:in:)` with the trip’s ID as the identifier. When someone taps a card, SwiftUI captures its position, size, and corner radius as the transition’s starting point. The trip detail view applies `navigationTransition(.zoom(sourceID:in:))` with the matching identifier, declaring itself as the zoom target. SwiftUI interpolates between the two geometries, seamlessly morphing one into the other.

Check out WWDC24 session 10145: Enhance your UI animations and transitions to explore how to adopt the zoom transition in navigation and presentations in your app.

---

