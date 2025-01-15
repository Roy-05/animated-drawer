import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from '../../utils/screenNames';
import {YourOrdersScreen} from '../../screens/YourOrdersScreen';
import {FavouritesScreen} from '../../screens/FavouritesScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.YOUR_ORDERS} component={YourOrdersScreen} />
      <Stack.Screen name={SCREEN.FAVOURITES} component={FavouritesScreen} />
    </Stack.Navigator>
  );
};
