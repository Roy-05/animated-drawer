import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const YourCartScreen = () => (
  <SafeAreaView style={styles.root}>
    <Text style={styles.text}>Your Cart Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 36 },
});
