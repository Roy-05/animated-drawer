import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const GetStartedScreen = () => {
  const { dispatch } = useNavigation();

  const openDrawer = useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Button title="Open Drawer" onPress={openDrawer} />

      <Text style={styles.text}>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center' },
  text: { fontSize: 36 },
});
