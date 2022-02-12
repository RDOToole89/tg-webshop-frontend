import { Text, Pressable, PressableProps } from 'react-native';

// extending PressableProps with the & Operator
export const PressableText = (props: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <Text style={{ textDecorationLine: 'underline' }}>{props.text}</Text>
    </Pressable>
  );
};
