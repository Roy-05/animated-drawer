import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabNavigator} from '../../navigation/bottomTabs/BottomTabNavigator';

export const AnimatedScreenWrapper = () => {
  const progress = useDrawerProgress();
  const {top} = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [0, 44],
      Extrapolation.CLAMP,
    );
    const translateY = interpolate(progress.value, [0, 1], [0, 16]);
    const rotateZ = interpolate(progress.value, [0, 1], [0, -6]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 24]);
    return {
      transform: [{translateX}, {translateY}, {rotateZ: `${rotateZ}deg`}],
      borderRadius,
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, top]);

    return {transform: [{translateY}]};
  });

  return (
    <Animated.View
      style={[{flex: 1, backgroundColor: '#1b1b2c'}, animatedStyle2]}>
      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: '#fafafa',
            overflow: 'hidden',
          },
          animatedStyle,
        ]}>
        <BottomTabNavigator />
      </Animated.View>
    </Animated.View>
  );
};
