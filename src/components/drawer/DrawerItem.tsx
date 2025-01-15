import {Pressable, Text} from 'react-native';

export const DrawerItem = ({item, focused, label, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        focused ? {backgroundColor: '#c45f634d'} : {},
        {
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 12,
          marginRight: 8,
        },
      ]}>
      <Text
        style={[
          focused ? {color: '#c45f63', fontWeight: 600} : {color: '#cacaca'},
          {fontSize: 16, fontWeight: 500},
        ]}>
        {item.label}
      </Text>
    </Pressable>
  );
};
