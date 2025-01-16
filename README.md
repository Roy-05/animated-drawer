# Drawer Animation Component

## 1. Environment

- **React Native**: `0.76.6` (New Architecture)

## 2. Primary Libraries Used

- `@react-navigation/native`: `^7.0.14`
- `react-native-reanimated`: `^3.16.7`

## 3. Folder Structure

All business logic exists within the `src` folder. The `src` folder contains the following sub-folders:

- **components**: Contains unit-level reusable components.
- **widgets**: Contains composite elements made from multiple unit-level components.
- **screens**: Contains components that compose entire screen UIs, passed to a navigator screen.
- **navigation**: Exposes navigators for different navigation contexts. It is further divided into the `bottomTabs`, `drawers`, and `stacks` folders for modularity and readability.
- **utils**: Stores utility functions and constant/static data.
- **types**: Exposes reusable types and interfaces.

### UI Composition

- **components** compose **widgets**.
- **widgets** compose **screens**.
- **screens** are consumed by navigators.

## 4. Navigation Structure

We use navigators provided by the `react-navigation` library to handle navigation.

### Navigation Hierarchy

- **DrawerNavigator**
  - **TabNavigator** (`Drawer.Screen`)
    - **Home Screen** (`StackNavigator`)
      - `GetStartedScreen` (`Stack.Screen`)
      - `YourOrdersScreen` (`Stack.Screen`)
      - `FavouritesScreen` (`Stack.Screen`)
    - **My Cart Screen** (`Tab.Screen`)

### Explanation

The `DrawerNavigator` is the parent component containing one `Drawer.Screen` which maps to the `TabNavigator`. The `TabNavigator` itself contains two screens:

1. `Home` (mapped to a `StackNavigator`).
2. `My Cart` (renders a Screen Component).

The `Home` screen’s `StackNavigator` contains three screens: `GetStartedScreen`, `YourOrdersScreen`, and `FavouritesScreen`.

This design achieves the required nested navigation structure while providing extensibility for adding new screens in the hierarchy.

## 5. Animation Implementation

Animations are driven by `react-native-reanimated`, primarily by interpolating the `sharedValue` exposed by the `useDrawerProgress()` hook.

### Animated Components Used

1. **AnimatedDrawer**  
   Passed as a custom Drawer component to the `DrawerNavigator`. Using the shared value of the drawer, this component animates the drawer content by transforming the `translateY` and `borderRadius` properties through an interpolation of the `sharedValue`.

2. **AnimatedScreenWrapper**  
   Wraps around the screen component passed to the `DrawerNavigator` (in this case, the `TabNavigator`). Similar to `AnimatedDrawer`, this component animates the screen content by transforming the `translateY`, `translateX`, `rotateZ`, and `borderRadius` properties through an interpolation of the `sharedValue`.

### Animation Demos

[![Animation via Touch](https://github.com/user-attachments/assets/65151d15-918f-4cc4-83c9-02aa0d7186dd)](https://github.com/user-attachments/assets/65151d15-918f-4cc4-83c9-02aa0d7186dd)

[![Animation via Swipe](https://github.com/user-attachments/assets/e286284d-0287-40b1-b695-fc699417f601)](https://github.com/user-attachments/assets/e286284d-0287-40b1-b695-fc699417f601)

## 6. Performance

Performance, in the context of animations, refers to a fluid frame rate, i.e. a near 60 FPS on both the JS and UI threads.

### Observations

Using the **Perf Monitor** bundled with React Native to track FPS on both threads, stress testing with frequent navigations and multiple drawer actions showed the application consistently maintaining near 60 FPS.

### Performance Demo

[![Performance](https://github.com/user-attachments/assets/7d92009f-a93e-4541-9c06-e08a28746ab5)](https://github.com/user-attachments/assets/7d92009f-a93e-4541-9c06-e08a28746ab5)
