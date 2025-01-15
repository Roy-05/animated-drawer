import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREEN } from '../../utils/screenNames';
import { DrawerItem } from '../../components/drawer/DrawerItem';
import { ANIMATED_SCREEN, DRAWER_ROUTES } from '../../utils/constants';
import { IDrawerItem } from '../../types';

export const AnimatedDrawer = ({ navigation }: DrawerContentComponentProps) => {
  const { top } = useSafeAreaInsets();
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, top]);
    const borderTopLeftRadius = interpolate(
      progress.value,
      [0, 1],
      [0, ANIMATED_SCREEN.BORDER_RADIUS],
    );

    return {
      transform: [{ translateY }],
      borderTopLeftRadius,
    };
  });

  const onPress = (item: IDrawerItem) => {
    console.log(navigation.getState());
    navigation.navigate(SCREEN.ROOT, item.routeObj);
  };

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
      }}>
      <Animated.View style={[styles.root, animatedStyle]}>
        <Text style={styles.title}>Beka</Text>

        <View style={{ rowGap: 8, flex: 1 }}>
          {DRAWER_ROUTES.map((item, index) => (
            <DrawerItem
              key={item?.label}
              focused={index === 0}
              item={item}
              onPress={() => onPress(item)}
            />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1B1B2C',
    flex: 1,
    flexGrow: 1,
    margin: 0,
    width: '100%',
    paddingVertical: 64,
    alignItems: 'flex-end',
    rowGap: 32,
  },

  title: {
    fontWeight: 800,
    color: '#EAEAEA',
    fontSize: 20,
    letterSpacing: 0.3,
    alignSelf: 'center',
  },
});
