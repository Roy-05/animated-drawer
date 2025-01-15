import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabNavigator } from '../../navigation/bottomTabs/BottomTabNavigator';
import { StyleSheet } from 'react-native';
import { ANIMATED_SCREEN } from '../../utils/constants';

export const AnimatedScreenWrapper = () => {
  const progress = useDrawerProgress();
  const { top } = useSafeAreaInsets();

  const ctrAnimatedStyle = useAnimatedStyle(() => {
    const [translateX, translateY, rotateZ, borderRadius] = [
      ANIMATED_SCREEN.TRANSLATE_X,
      ANIMATED_SCREEN.TRANSLATE_Y,
      ANIMATED_SCREEN.ROTATE_Z,
      ANIMATED_SCREEN.BORDER_RADIUS,
    ].map(value => interpolate(progress.value, [0, 1], [0, value]));

    return {
      transform: [{ translateX }, { translateY }, { rotateZ: `${rotateZ}deg` }],
      borderRadius,
    };
  });

  const rootAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, top]);

    return { transform: [{ translateY }] };
  });

  return (
    <Animated.View style={[styles.root, rootAnimatedStyle]}>
      <Animated.View style={[styles.container, ctrAnimatedStyle]}>
        <BottomTabNavigator />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1B1B2C',
  },
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
