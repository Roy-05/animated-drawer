import {useDrawerProgress} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN} from '../../utils/screenNames';
import {DrawerItem} from '../../components/drawer/DrawerItem';

export const AnimatedDrawer = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const progress = useDrawerProgress();

  // Animate the drawer's translation and border radius
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, insets.top]);
    const borderTopLeftRadius = interpolate(progress.value, [0, 1], [0, 16]);

    return {
      transform: [{translateY}],
      borderTopLeftRadius,
    };
  });

  const onPress = item => {
    console.log(item);
    navigation.navigate(SCREEN.ROOT, item.routeObj);
  };

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
      }}>
      <Animated.View
        style={[
          {
            backgroundColor: '#1b1b2c',
            flex: 1,
            flexGrow: 1,
            margin: 0,
            width: '100%',
            paddingVertical: 64,
            alignItems: 'flex-end',
            rowGap: 32,
          },
          animatedStyle,
        ]}>
        <Text
          style={{
            fontWeight: 800,
            color: '#eaeaea',
            fontSize: 20,
            letterSpacing: 0.3,
            alignSelf: 'center',
          }}>
          Beka
        </Text>

        <View style={{rowGap: 8, flex: 1}}>
          {/*  'SIGN OUT' */}
          {[
            {
              label: 'Start',
              routeObj: {
                screen: SCREEN.HOME,
                params: {
                  screen: SCREEN.YOUR_ORDERS,
                },
              },
            },
            {
              label: 'Your Cart',
              routeObj: {
                screen: SCREEN.YOUR_CART,
              },
            },
            {
              label: 'Favourites',
              routeObj: {
                screen: SCREEN.HOME,
                params: {
                  screen: SCREEN.FAVOURITES,
                },
              },
            },
            {
              label: 'Your Orders',
              routeObj: {
                screen: SCREEN.HOME,
                params: {
                  screen: SCREEN.YOUR_ORDERS,
                },
              },
            },
          ].map((item, index) => (
            <DrawerItem
              focused={index === 0}
              item={item}
              label={item?.label}
              onPress={() => onPress(item)}
            />
          ))}
        </View>
      </Animated.View>
    </View>
  );
};
