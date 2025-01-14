import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={DrawerContent}
        screenOptions={({route}) => ({
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#1b1b2c',
            width: 200,
          },

          drawerType: 'front',
          swipeEdgeWidth: 30, // Edge swipe sensitivity
          overlayColor: 'transparent', // Prevent default dark overlay
        })}>
        <Drawer.Screen
          name="Drawer"
          options={{
            sceneStyle: {
              backgroundColor: '#1b1b2c',
            },
          }}
          component={() => (
            <CustomAnimatedScreen>
              <BottomTabNavigator />
            </CustomAnimatedScreen>
          )}
        />
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

function CustomAnimatedScreen({children}) {
  const progress = useDrawerProgress();
  const {top} = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, 200 + 90]);
    const translateY = interpolate(progress.value, [0, 1], [0, top]);
    const rotateZ = interpolate(progress.value, [0, 1], [0, -10]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 48]);
    return {
      transform: [{translateX}, {translateY}, {rotateZ: `${rotateZ}deg`}],
      borderRadius,
    };
  });

  return (
    // <View>
    <Animated.View
      style={[
        {flex: 1, backgroundColor: '#fafafa', overflow: 'hidden'},
        animatedStyle,
      ]}>
      {children}
    </Animated.View>
  );
}

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
