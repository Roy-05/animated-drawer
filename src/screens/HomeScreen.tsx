import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {navigate, dispatch} = useNavigation();

  const openDrawer = useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, []);

  const onPress = () => {
    navigate('Profile');
  };

  const onPress2 = () => {
    navigate('ContactRootView');
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
