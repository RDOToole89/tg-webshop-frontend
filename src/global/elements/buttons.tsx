import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { CustomText } from './customText';
import { GLOBAL } from '../styles/global';

type Callback = () => any;
export interface Props {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
}

export const DefaultButton: React.FC<Props> = ({
  title,
  onClick,
  style,
}: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    <CustomText style={GLOBAL.CTA.Style.primaryText}>{title}</CustomText>
  </TouchableOpacity>
);
