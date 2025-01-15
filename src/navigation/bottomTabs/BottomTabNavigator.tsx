import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN} from '../../utils/screenNames';
import {HomeStackNavigator} from '../stacks/HomeStackNavigator';
import {YourCartScreen} from '../../screens/YourCartScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={SCREEN.HOME} component={HomeStackNavigator} />
      <Tab.Screen name={SCREEN.YOUR_CART} component={YourCartScreen} />
    </Tab.Navigator>
  );
};
