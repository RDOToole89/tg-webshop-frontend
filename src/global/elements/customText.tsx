import { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  TextStyle,
} from 'react-native';

import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

export interface TextProps {
  children: React.ReactElement | string;
  style?: StyleProp<TextStyle>;
}

type onSubmitEvent = ({
  nativeEvent,
}: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
export interface TextInputProps {
  style?: Object;
  value?: string;
  disabled?: boolean;
  textInputRef?: any;
  placeholderTextColor?: string;
  onSubmit?: onSubmitEvent;
}

export const CustomText = ({ style, children }: TextProps) => (
  <Text style={[GLOBAL.TEXT.Default, style]}>{children}</Text>
);

export const CustomTextInput = (props: TextInputProps) => {
  const {
    style,
    placeholderTextColor = TYPOGRAPHY.COLOR.Secondary,
    textInputRef,
    disabled = false,
    onSubmit,
  } = props;
  const [data, setData] = useState('');

  return (
    <TextInput
      ref={textInputRef}
      value={data}
      editable={!disabled}
      onChange={(e) => setData(e.nativeEvent.text)}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid={'transparent'}
      onSubmitEditing={onSubmit}
      style={[GLOBAL.TEXT_INPUT.Style.Default, style]}
      autoCorrect={false}
    />
  );
};
