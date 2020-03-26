import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { ListItem } from "react-native-elements";

export function ModalScreen1() {
  const navigation = useNavigation();
  const list = [
    {
      title: "Map 5",
      icon: "av-timer",
      ScreenName: "MyModal5"
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

export function ModalScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
export function ModalScreen3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
export function ModalScreen4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
