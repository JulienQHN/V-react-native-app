import * as React from "react";
import { Text, ScrollView, SafeAreaView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card, Button, ThemeProvider } from "react-native-elements";

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <ThemeProvider>
          <Card
            title="Discover Viper"
            image={require("../assets/images/valorant.jpg")}
          >
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title=" Show Me"
              icon={<FontAwesome5 name="book-reader" color="black" />}
              onPress={() => navigation.navigate("MyModal1")}
            />
          </Card>
          <Card
            title="HELLO WORLD"
            image={require("../assets/images/valorant.jpg")}
          >
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title="Lire l'article !"
              icon={<FontAwesome5 name="book-reader" color="black" />}
            />
          </Card>
          <Card
            title="HELLO WORLD"
            image={require("../assets/images/valorant.jpg")}
          >
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title="Lire l'article !"
              icon={<FontAwesome5 name="book-reader" color="black" />}
            />
          </Card>
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}
