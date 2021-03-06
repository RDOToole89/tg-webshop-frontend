import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { GLOBAL } from '../styles/global';
import { CustomText } from './customText';

type Callback = () => any;
export interface IDefaultButton {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
  icon?: unknown;
}

export const DefaultButton = ({
  title,
  onClick,
  style,
  icon,
}: IDefaultButton) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    {icon && icon}
    <CustomText style={GLOBAL.CTA.Style.primaryText}>{title}</CustomText>
  </TouchableOpacity>
);
