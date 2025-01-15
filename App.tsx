import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation/drawers/DrawerNavigator';

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
