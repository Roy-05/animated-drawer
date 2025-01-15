import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { IDrawerItem } from '../../types';

type IDrawerItemComponent = {
  item: IDrawerItem;
  focused: boolean;
  onPress: () => void;
} & PressableProps &
  React.RefAttributes<View>;

export const DrawerItem = ({
  item,
  focused,
  ...props
}: IDrawerItemComponent) => {
  return (
    <Pressable
      style={[
        {
          backgroundColor: focused ? '#c45f634d' : 'transparent',
        },
        styles.root,
      ]}
      {...props}>
      <Text style={focused ? styles.focusedLabel : styles.baseLabel}>
        {item.label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 8,
  },

  focusedLabel: {
    color: '#c45f63',
    fontSize: 16,
    fontWeight: 600,
  },
  baseLabel: {
    color: '#cacaca',
    fontSize: 16,
    fontWeight: 500,
  },
});
