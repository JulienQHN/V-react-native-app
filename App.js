// In App.js in a new project

import * as React from 'react';
import { Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon, ThemeProvider } from 'react-native-elements';



function HomeScreen() {
  return (
    <SafeAreaView>
    <ScrollView>
      <ThemeProvider>
      <Card
  title='Discover Viper'
  image={require('./assets/valorant.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, }}
    title=" Show Me" 
    icon={<FontAwesome5 name='book-reader' color='black' />}
    onPress={() => NavigationContainer.navigate('MyModal')}
    />
</Card>
<Card
  title='HELLO WORLD'
  image={require('./assets/valorant.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title="Lire l'article !" 
    icon={<FontAwesome5 name='book-reader' color='black' />}
    />
</Card>
<Card
  title='HELLO WORLD'
  image={require('./assets/valorant.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title="Lire l'article !" 
    icon={<FontAwesome5 name='book-reader' color='black' />}
    />
</Card>
    </ThemeProvider>
    </ScrollView>
    </SafeAreaView>
  );
}

function PremiumScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Premium!</Text>
    </View>
  );
}

function TournamentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tournaments!</Text>
    </View>
  );
}

function PodiumScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tournaments!</Text>
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home';
            } else if (route.name === 'Premium') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }
            else if (route.name === 'Tournaments') {
              iconName = focused ? 'ios-trophy' : 'ios-trophy';
            }
            else if (route.name === 'Podium') {
              iconName = focused ? 'ios-podium' : 'ios-podium';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Podium" component={PodiumScreen} />
        <Tab.Screen name="Tournaments" component={TournamentsScreen} />
        <Tab.Screen name="Premium" component={PremiumScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
}