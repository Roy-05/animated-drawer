import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from '../../utils/screenNames';
import { YourOrdersScreen } from '../../screens/YourOrdersScreen';
import { FavouritesScreen } from '../../screens/FavouritesScreen';
import { GetStartedScreen } from '../../screens/GetStartedScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN.GET_STARTED} component={GetStartedScreen} />
      <Stack.Screen name={SCREEN.YOUR_ORDERS} component={YourOrdersScreen} />
      <Stack.Screen name={SCREEN.FAVOURITES} component={FavouritesScreen} />
    </Stack.Navigator>
  );
};
