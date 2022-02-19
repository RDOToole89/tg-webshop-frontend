import {
  Text,
  Pressable,
  PressableProps,
  TextStyle,
  StyleProp,
} from 'react-native';

// extending PressableProps with the & Operator

export const PressableText = (props: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <Text style={[{ textDecorationLine: 'none', textAlign: 'center' }]}>
        {props.text}
      </Text>
    </Pressable>
  );
};
