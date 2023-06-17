import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home.jsx";
import MusicPage from "../Pages/MusicPage.jsx";
import Upload from "../Pages/Upload.jsx";
import ConfigurationsPage from "../Pages/ConfigurationsPage.jsx";
import RadioPage from "../Pages/RadioPage.jsx";
import VideosPage from "../Pages/VideosPage.jsx";
import Audio from "../Pages/Audio.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Audio"
        component={Audio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MusicPage"
        component={MusicPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Upload"
        component={Upload}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfigurationsPage"
        component={ConfigurationsPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RadioPage"
        component={RadioPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideosPage"
        component={VideosPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
