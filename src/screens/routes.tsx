import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import CameraScreen from "./CameraScreen/CameraScreen";
import DatabaseScreen from "./DatabaseScreen/DatabaseScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const LightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  function getActiveTabName(state: any) {
    const activeTabIndex = state.index;
    const activeTabName = state.routes[activeTabIndex].name;

    console.log("Guia em foco:", activeTabName);
  }

  return (
    <NavigationContainer theme={LightTheme} onStateChange={getActiveTabName}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#e2e2e2",
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingBottom: 5,
            backgroundColor: "#6db611",
            justifyItems: "center",
            height: 48,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName: any;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Camera") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name === "Database") {
              iconName = focused ? "search" : "search-outline";
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Database" component={DatabaseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
