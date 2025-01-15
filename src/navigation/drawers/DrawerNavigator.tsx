import { createDrawerNavigator } from '@react-navigation/drawer';
import { AnimatedDrawer } from '../../widgets/drawer/AnimatedDrawer';
import { SCREEN } from '../../utils/screenNames';
import { AnimatedScreenWrapper } from '../../widgets/drawer/AnimatedScreenWrapper';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#FAFAFA',
        },
        drawerStyle: {
          backgroundColor: '#FAFAFA',
          width: 160,
        },
        drawerType: 'back',
        swipeEdgeWidth: 30,
        overlayColor: 'transparent',
      })}
      drawerContent={props => <AnimatedDrawer {...props} />}>
      <Drawer.Screen name={SCREEN.ROOT} component={AnimatedScreenWrapper} />
    </Drawer.Navigator>
  );
};
