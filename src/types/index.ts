import { SCREEN } from '../utils/screenNames';

export interface IDrawerItem {
  label: string;
  routeObj: {
    screen: keyof typeof SCREEN;
    params?: {
      screen: keyof typeof SCREEN;
    };
  };
}
