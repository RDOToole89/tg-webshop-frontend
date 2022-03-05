import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GLOBAL } from '../global/styles/global';
import uuid from 'react-native-uuid';

// How to type THIS?!
interface IIcon {
  name: string;
  size: number;
  color: string;
}

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
            {/* Type 'string' is not assignable to type '"body" | "push" | "map" | "filter" | "at" | "search" | "repeat" | "link" | "code" | "menu" | "time" | "ellipse" | "image" | "stop" | "text" | "alert" | "checkbox" | "radio" | "timer" | ... 3662 more ... | undefined'.ts(2322) */}
            <Ionicons name={icon.name} size={icon.size} color={icon.color} />
          </Pressable>
        );
      })}
    </View>
  );
};
