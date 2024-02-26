# Cinephile's Choice

An example of a cross-platform native app created with React Native and Expo.

## Tips

Install the **ES 7+ React/Redux/GraphQL/React-Native snippets** extension in VSCode to ease the use of programming components in this project.

## Branch 04

To manage navigation features, use a navigation library. The most well-known ones are **React Navigation** and **Expo Router**. Currently (February/2024), the most used and considered standard library is React Navigation.

Official Website:

- React Navigation: https://reactnavigation.org
- Expo Router: https://docs.expo.dev/router/introduction

### How to use React Navigation with navigation stack

#### Installation Packages

React Navigation : `npm install @react-navigation/native`

Dependencies for navigation:
`npx expo install react-native-screens react-native-safe-area-context`

stack navigation mechanism: `npm install @react-navigation/native-stack`

## Branch 03

- Creation of basic Screens: About and Privacy
- Component `ScrollView` for content larger than the screen with support for scrolling.
- Component `Linking` for the creation of links to the web

## Branch 02

### Utilizationo of additional fonts

- Download the font's archives (format TFF or OTF)
- Place them in the folder `assets/fonts`.
- Install the `expo-fonts` and `expo-splash-screen` libraries.
- Import fonts using the `usefonts` and `usecallback` hooks.
- Apply fonts using the StyleSheet rules.

For more details about the process see the documentation of Expo fonts and Expo splash Screen

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/
