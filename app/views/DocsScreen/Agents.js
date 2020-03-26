import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const MainStack = createStackNavigator();

export function Agents() {
  // goToOtherScreen(ScreenName) {
  // this.props.navigation.navigate(ScreenName);
  //}
  const navigation = useNavigation();
  const list = [
    {
      title: "Map 1",
      icon: "av-timer",
      avatar_url: "../assets/images/valorant.jpg",
      ScreenName: "MyModal1"
    },
    {
      title: "Map 2",
      icon: "av-timer",
      avatar_url: "../assets/images/valorant.jpg",
      ScreenName: "MyModal2"
    },
    {
      title: "Map 3",
      icon: "av-timer",
      avatar_url: "../assets/images/valorant.jpg",
      ScreenName: "MyModal3"
    }
  ];

  return (
    <View>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{ name: item.icon }}
          onPress={() => navigation.navigate(item.ScreenName)}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          bottomDivider
          chevron
        />
      ))}
    </View>
  );
}

export function Julien() {
  return (
    <MainStack.Screen name="Julien">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Premium!</Text>
      </View>
    </MainStack.Screen>
  );
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  }
});
