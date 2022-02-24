import { View, Image, ImageSourcePropType } from 'react-native';
import { GLOBAL } from '../global/styles/global';

type DealBanner = {
  source: ImageSourcePropType;
};

export const DealBanner = ({ source }: DealBanner) => {
  return (
    <View
      style={{
        paddingVertical: GLOBAL.SPACING.sm,
        backgroundColor: '#e5e7eb',
      }}>
      <Image
        source={source}
        resizeMode='contain'
        style={{ height: 160, width: '100%' }}
      />
    </View>
  );
};
