import { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import uuid from 'react-native-uuid';
import { GLOBAL } from '../global/styles/global';

type StarRatings = {
  rating: number;
  icon?: ReactNode;
  ratingQuantity?: number;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
};

export const StarRatings = ({
  rating,
  icon,
  ratingQuantity,
  size,
}: StarRatings) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: GLOBAL.SPACING.md,
      }}>
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
