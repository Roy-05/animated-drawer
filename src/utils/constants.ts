import { IDrawerItem } from '../types';
import { SCREEN } from './screenNames';

export const ANIMATED_SCREEN = Object.freeze({
  TRANSLATE_X: 42,
  TRANSLATE_Y: 16,
  ROTATE_Z: -6,
  BORDER_RADIUS: 32,
});

export const DRAWER_ROUTES: Array<IDrawerItem> = [
  {
    label: 'Start',
    routeObj: {
      screen: SCREEN.HOME,
      params: {
        screen: SCREEN.GET_STARTED,
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
];
