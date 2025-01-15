import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/navigation/drawers/DrawerNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
