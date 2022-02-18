import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { CustomText } from './customText';
import { GLOBAL } from '../styles/global';

type Callback = () => any;
export interface Props {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
  icon?: unknown;
}

export const DefaultButton: React.FC<Props> = ({
  title,
  onClick,
  style,
  icon,
}: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    {icon && icon}
    <CustomText style={GLOBAL.CTA.Style.primaryText}>{title}</CustomText>
  </TouchableOpacity>
);
