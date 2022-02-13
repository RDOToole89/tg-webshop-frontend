import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { GLOBAL } from '../global/styles/global';

export const DealBanner = ({ source }: { source: ImageSourcePropType }) => {
  return (
    <View
      style={{
        paddingVertical: GLOBAL.SPACING.sm,
        backgroundColor: '#e5e7eb',
      }}>
      <Image
        source={source}
        resizeMethod='resize'
        resizeMode='contain'
        style={{ height: 160, width: '100%' }}
      />
    </View>
  );
};
