import * as React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators
} from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "./app/views/HomeScreen";
import { PremiumScreen } from "./app/views/PremiumScreen";
import { DocScreen } from "./app/views/DocScreen";
import {
  ModalScreen1,
  ModalScreen2,
  ModalScreen4,
  ModalScreen3
} from "./app/components/modal";
import Icon from "react-native-vector-icons/Ionicons";
import { Agents, Julien } from "./app/views/DocsScreen/Agents";
import { TournamentsScreen } from "./app/views/TournamentsScreen";
import { ModalScreen } from "./app/components/modal";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { SafeAreaView } from "react-native";

const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Modal = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

export default function Root() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          headerMode="float"
          animation="fade"
        >
          <Stack.Screen
            options={({ route }) => ({
              title: getHeaderTitle(route),
              headerShown: shouldHeaderBeShown(route),
              headerTitleAlign: "center"
            })}
            name="Home"
            component={App}
          />
          <Stack.Screen name="MyModal1" component={ModalScreen1} />
          <Stack.Screen name="MyModal2" component={ModalScreen2} />
          <Stack.Screen name="MyModal3" component={ModalScreen3} />
          <Stack.Screen name="MyModal4" component={ModalScreen4} />
          <Stack.Screen name="MyModal5" component={ModalScreen4} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const App = ({
  Home = { screen: Home },
  Tournaments = { screen: Tournaments },
  Doc = { screen: Doc },
  Premium = { screen: Premium }
}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 10 },
        tabStyle: { width: 115, height: 50 },
        showIcon: true,
        indicatorStyle: { height: 0 }
      }}
      initialRouteName="Home"
      tabBarPosition="bottom"
      activeColor="#f0edf6"
      barStyle={{ backgroundColor: "#0F1923" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let Color;

          if (route.name === "Home   ") {
            iconName = focused ? "ios-home" : "ios-home";
            Color = color = "#FF4655";
          } else if (route.name === "Premium  ") {
            iconName = focused ? "ios-star" : "ios-star";
            Color = color = "#FFD700";
          } else if (route.name === "Tournaments   ") {
            iconName = focused ? "ios-trophy" : "ios-trophy";
            Color = color = "#FF4655";
          } else if (route.name === "Guide     ") {
            iconName = focused ? "ios-document" : "ios-document";
            Color = color = "#FF4655";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={Color} />;
        }
      })}
    >
      <Tab.Screen name="Home   " component={HomeScreen} />
      <Tab.Screen name="Tournaments   " component={TournamentsScreen} />
      <Tab.Screen name="Guide     " component={DocScreen} />
      <Tab.Screen name="Premium  " component={PremiumScreen} />
    </Tab.Navigator>
  );
};

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : "Home";

  switch (routeName) {
    case "Home   ":
      return " Home";
    case "Premium  ":
      return "Premium";
    case "Tournaments   ":
      return "Tournaments ";
    case "Guide     ":
      return "Guide";
    case "Julien":
      return "Julien";
  }
}

function shouldHeaderBeShown(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : "Home";
  switch (routeName) {
    case "!Home":
      return false;
    case "Modal":
      return false;
  }
}
