import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GLOBAL } from '../global/styles/global';
import uuid from 'react-native-uuid';

// How to type THIS?!
type Icon = {
  name: string;
  size: number;
  color: string;
};

export const IconGenerator = ({
  iconDescArray,
  onClick,
}: {
  iconDescArray: any;
  onClick: () => void;
}) => {
  return (
    <View
      style={[
        GLOBAL.LAYOUT.rowCenter,
        {
          justifyContent: 'space-evenly',
          paddingVertical: GLOBAL.SPACING.xl,
        },
      ]}>
      {iconDescArray.map((icon: any) => {
        return (
          <Pressable key={uuid.v4().toString()} onPress={onClick}>
            <Ionicons name={icon.name} size={icon.size} color={icon.color} />
          </Pressable>
        );
      })}
    </View>
  );
};
