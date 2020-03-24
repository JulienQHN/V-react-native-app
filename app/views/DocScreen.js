import * as React from "react";
import TouchableScale from "react-native-touchable-scale";
import { StyleSheet, Text, View, Image } from "react-native";
import { ListItem } from "react-native-elements";
import { Agents, Julien } from "./DocsScreen/Agents";

export function DocScreen({ navigation }) {
  return <Agents />;
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
