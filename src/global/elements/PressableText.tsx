import { Text, Pressable, PressableProps } from 'react-native';

// extending PressableProps with the & Operator

export const PressableText = (
  props: PressableProps & { text: string } & {
    textStyle?: any; // HOW TO TYPE THIS FFS?!
  }
) => {
  const appliedStyles = props.textStyle
    ? [{ textDecorationLine: 'none', textAlign: 'center' }, props.textStyle]
    : [{ textDecorationLine: 'none', textAlign: 'center' }];

  return (
    <Pressable {...props}>
      <Text style={appliedStyles}>{props.text}</Text>
    </Pressable>
  );
};
