import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "./app/views/HomeScreen";
import { PremiumScreen } from "./app/views/PremiumScreen";
import { DocScreen } from "./app/views/DocScreen";
import { Agents, Julien } from "./app/views/DocsScreen/Agents";
import { TournamentsScreen } from "./app/views/TournamentsScreen";
import { ModalScreen } from "./app/components/modal";
import { Provider } from "react-redux";
import { createStore } from "redux";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Main" component={App} />
        <RootStack.Screen name="Julien" component={Julien} />
        <RootStack.Screen mode="modal" name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Premium") {
            iconName = focused ? "ios-star" : "ios-star-outline";
          } else if (route.name === "Tournaments") {
            iconName = focused ? "ios-trophy" : "ios-trophy";
          } else if (route.name === "Doc") {
            iconName = focused ? "ios-document" : "ios-document";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Premium" component={PremiumScreen} />
      <MainStack.Screen name="Tournaments" component={TournamentsScreen} />
      <MainStack.Screen name="Doc" component={DocScreen} />
    </Tab.Navigator>
  );
}
