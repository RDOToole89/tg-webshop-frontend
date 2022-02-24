import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GLOBAL } from '../global/styles/global';

const icons = [
  { name: 'logo-facebook', size: 24, color: 'black' },
  { name: 'logo-instgram', size: 24, color: 'black' },
  { name: 'logo-twitter', size: 24, color: 'black' },
  { name: 'logo-linkedin', size: 24, color: 'black' },
];

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
          paddingVertical: GLOBAL.SPACING.xxxl,
        },
      ]}>
      {iconDescArray.map((icon: any) => {
        return (
          <Pressable onPress={onClick}>
            <Ionicons name={icon.name} size={icon.size} color={icon.color} />
          </Pressable>
        );
      })}
    </View>
  );
};
