import {createDrawerNavigator} from '@react-navigation/drawer';
import {AnimatedDrawer} from '../../widgets/drawer/AnimatedDrawer';
import {SCREEN} from '../../utils/screenNames';
import {AnimatedScreenWrapper} from '../../widgets/drawer/AnimatedScreenWrapper';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        drawerStyle: {
          backgroundColor: 'white',
          width: 160,
        },

        drawerType: 'back',
        swipeEdgeWidth: 30, // Edge swipe sensitivity
        overlayColor: 'transparent', // Prevent default dark overlay
      })}
      drawerContent={props => <AnimatedDrawer {...props} />}>
      <Drawer.Screen
        name={SCREEN.ROOT}
        options={{
          drawerStatusBarAnimation: 'slide',
          sceneStyle: {
            backgroundColor: 'white',
          },
        }}
        component={AnimatedScreenWrapper}
      />
    </Drawer.Navigator>
  );
};
