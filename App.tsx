import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback} from 'react';
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
      <Tab.Screen name="HomeRootView" component={HomeStackNavigator} />
      <Tab.Screen name="ContactRootView" component={ContactScreen} />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'white',
            width: 180,
          },

          drawerType: 'front',
          swipeEdgeWidth: 30, // Edge swipe sensitivity
          overlayColor: 'transparent', // Prevent default dark overlay
        })}
        drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="Drawer"
          options={{
            drawerStatusBarAnimation: 'slide',
            sceneStyle: {
              backgroundColor: 'white',
            },
          }}
          component={CustomAnimatedScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const AnimatedDrawer = ({}) => {
  const insets = useSafeAreaInsets();
  const progress = useDrawerProgress();

  // Animate the drawer's translation and border radius
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, insets.top]);
    const borderTopLeftRadius = interpolate(progress.value, [0, 1], [0, 16]);

    return {
      transform: [{translateY}],
      borderTopLeftRadius,
    };
  });

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
      }}>
      <Animated.View
        style={[
          {
            backgroundColor: '#1b1b2c',
            flex: 1,
            flexGrow: 1,
            margin: 0,
            width: '100%',
            padding: 16,
          },
          animatedStyle,
        ]}>
        {/* Add your drawer items or custom content here */}
        <Text style={{color: 'white'}}>Drawer Item 1</Text>
        <Text style={{color: 'white'}}>Drawer Item 2</Text>
      </Animated.View>
    </View>
  );
};

const CustomDrawerContent = ({}) => {
  return (
    <DrawerContentScrollView
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: 'white',
      }}
      contentContainerStyle={{
        position: 'relative',
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingStart: 0,
        paddingEnd: 0,
      }}>
      <AnimatedDrawer />
    </DrawerContentScrollView>
  );
};

function CustomAnimatedScreen() {
  const progress = useDrawerProgress();
  const {top} = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, 180 + 90]);
    // const translateY = interpolate(progress.value, [0, 1], [-top, 0]);
    const rotateZ = interpolate(progress.value, [0, 1], [0, -10]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 48]);
    return {
      transform: [{translateX}, {rotateZ: `${rotateZ}deg`}],
      borderRadius,
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, top]);

    return {transform: [{translateY}]};
  });

  return (
    <Animated.View
      style={[{flex: 1, backgroundColor: '#1b1b2c'}, animatedStyle2]}>
      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: '#fafafa',
            overflow: 'hidden',
          },
          animatedStyle,
        ]}>
        <BottomTabNavigator />
      </Animated.View>
    </Animated.View>
  );
}

const HomeScreen = () => {
  const {navigate, dispatch} = useNavigation();

  const openDrawer = useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, []);

  const onPress = () => {
    navigate('Profile');
  };

  const onPress2 = () => {
    navigate('Contact');
  };
  return (
    <SafeAreaView>
      <Button title="Open Drawer" onPress={openDrawer} />

      <Text>Home Screen</Text>
      <Button title="Navigate to Profile" onPress={onPress} />
      <Button title="Navigate to Contact" onPress={onPress2} />
    </SafeAreaView>
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
