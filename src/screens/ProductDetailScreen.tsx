import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ResponsiveImage from '../global/elements/responsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

export const ProductDetailScreen = ({ route }: any) => {
  console.log('PARAMS', route.params);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          position: 'relative',
          width: '100%',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.15)',
            zIndex: 10,
          }}
        />
        <ResponsiveImage
          source={{
            uri: route.params.imageUrl,
          }}
          srcHeight={200}
          srcWidth={200}
          resizeMode='contain'
        />
      </View>

      <Text
        style={{
          fontSize: GLOBAL.FONT_SIZES.lg,
          color: TYPOGRAPHY.COLOR.BrandRed,
        }}>
        {route.params.price}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
