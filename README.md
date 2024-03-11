# Cinephile's Choice

An example of a cross-platform native app created with React Native and Expo.

## Tips

Install the **ES 7+ React/Redux/GraphQL/React-Native snippets** extension in VSCode to ease the use of programming components in this project.

## Branch 07

- Loading using `ActivyIndicator`
- In the Results component, I applied a personalized FlatList component to handle scenarios where the searched movie is not found (notfound/ListEmptyComponent), as well as to separate each element within the FlatList (Separator/ItemSeparatorComponent).
- In the `CardMovie` component, we implemented a conditional check to load an alternative image if a movie doesn't have one available, along with adding icons to the buttons.

## Branch 06

- Signing up in the Api TheMovieDB
- Creation of an API Key
- Configuration of an enviroment variable in the file `.env` containing the API Key Provided by Expo.

### Consume of Api's data

- Installation of the lib **oxios**
- Configuration/Exportating of `services/api-moviedb.js` containing the basic programming for accessing the API used in different parts of the app

#### Showing the Results

- Using the component `FlatList` to dinamic listing of results

## Branch 05

- Components/native resources: `TextInput`,`Vibration` and `Alert`
- Events: `OnChangeText` in `TextInput` for the capture in real time of the movie's name typed and atualization in the `state` using the function `movieTyped`
- `onPress` in `Button` to use the `SearchMovie`
- `OnSubmitEditing` in `TextInput` to use the function `searchMovie`

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

Stack navigation mechanism: `npm install @react-navigation/native-stack`

### Configurations

In the `app.js` file, we import `navigationContainer` and `createNativeStackNavigation`, then configure them to define the Stack.screen screens and their corresponding components (currently, just `Home`, `Privacy`, and `About`).

## Branch 03

- Creation of basic Screens: About and Privacy
- Component `ScrollView` for content larger than the screen with support for scrolling.
- Component `Linking` for the creation of links to the web

## Branch 02

### Utilization of additional fonts

- Download the font's archives (format TFF or OTF)
- Place them in the folder `assets/fonts`.
- Install the `expo-fonts` and `expo-splash-screen` libraries.
- Import fonts using the `usefonts` and `usecallback` hooks.
- Apply fonts using the StyleSheet rules.

For more details about the process see the documentation of Expo fonts and Expo splash Screen

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/
