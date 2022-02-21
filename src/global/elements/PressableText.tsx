import { Text, Pressable, PressableProps } from 'react-native';
import { GLOBAL } from '../styles/global';

// extending PressableProps with the & Operator

export const PressableText = (
  props: PressableProps & { text: string } & {
    textStyle?: any; // HOW TO TYPE THIS FFS?!
    onClick?: () => void;
  }
) => {
  return (
    <Pressable
      onPress={props.onClick}
      style={GLOBAL.LAYOUT.rowCenter}
      {...props}>
      <Text
        style={[
          { textDecorationLine: 'none', textAlign: 'center' },
          props?.textStyle,
        ]}>
        {props.text}
      </Text>
    </Pressable>
  );
};
