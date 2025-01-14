import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerContent}>
        <Drawer.Screen name="Drawer" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const DrawerContent = () => {
  return (
    <View>
      <Text>Drawer Content</Text>
    </View>
  );
};

const HomeScreen = () => {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate('Profile');
  };

  const onPress2 = () => {
    navigate('Contact');
  };
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Navigate to Profile" onPress={onPress} />
      <Button title="Navigate to Contact" onPress={onPress2} />
    </View>
  );
};

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const ContactScreen = () => (
  <View>
    <Text>Contact Screen</Text>
  </View>
);

export default App;
