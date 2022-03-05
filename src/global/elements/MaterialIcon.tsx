import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';

MIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IIconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 30,
};

export const MaterialIcon = ({ size, name, color }: IIconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} />
);
