import { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import uuid from 'react-native-uuid';
import { GLOBAL } from '../global/styles/global';

type StarRatings = {
  rating: number;
  icon?: ReactNode;
  ratingQuantity?: number;
};

export const StarRatings = ({ rating, icon, ratingQuantity }: StarRatings) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
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
              size='small'
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
