import { ReactNode } from 'react';
import { View, Text, StyleProp, ViewProps } from 'react-native';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import uuid from 'react-native-uuid';
import { GLOBAL } from '../global/styles/global';
import { ViewStyle } from '../../assets/fixes/react-native-web-0.12.0/packages/react-native-web/src/exports/View/types';
import { Style } from '../../assets/fixes/react-native-web-0.12.0/packages/react-native-web/src/exports/Image/types';
import { GenericStyleProp } from '../../assets/fixes/react-native-web-0.12.0/packages/react-native-web/src/types';

type StarRatings = {
  rating: number;
  icon?: ReactNode;
  ratingQuantity?: number;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  style?: GenericStyleProp;
};

export const StarRatings = ({
  rating,
  icon,
  ratingQuantity,
  size,
  style,
}: StarRatings) => {
  const appliedStyle = style
    ? [GLOBAL.LAYOUT.rowCenter, style]
    : [GLOBAL.LAYOUT.rowCenter];

  return (
    <View style={appliedStyle}>
      {new Array(rating)
        .fill('x')
        .map((x) =>
          icon ? (
            icon
          ) : (
            <MaterialIcon
              key={uuid.v4().toString()}
              name='star'
              size={size ? size : 'small'}
              color={'gold'}
            />
          )
        )}
      {ratingQuantity && (
        <Text
          style={{
            fontSize: GLOBAL.FONT_SIZES.xsm,
            marginLeft: GLOBAL.SPACING.sm,
          }}>
          ({ratingQuantity})
        </Text>
      )}
    </View>
  );
};
