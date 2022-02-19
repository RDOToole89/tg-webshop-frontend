import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import ResponsiveImage from '../global/elements/responsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useActions } from '../hooks/useActions';

export const ProductDetailScreen = ({ route }: any) => {
  const { addToCart } = useActions();
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
            backgroundColor: 'rgba(0,0,0,0.18)',
            zIndex: 10,
          }}
        />
        <ResponsiveImage
          source={{
            uri: route.params.imageUrl,
          }}
          srcHeight={150}
          srcWidth={200}
          resizeMode='contain'
        />
      </View>
      <View style={{ padding: GLOBAL.SPACING.md }}>
        <Text
          style={{
            fontSize: GLOBAL.FONT_SIZES.lg,
            color: TYPOGRAPHY.COLOR.BrandRed,
          }}>
          {route.params.price}
        </Text>

        <Text style={GLOBAL.FONTS.h1}>{route.params.title}</Text>

        <Button
          style={{ borderRadius: 0 }}
          color='#e7230d'
          mode='contained'
          onPress={() => addToCart(route.params.id)}>
          <Text>Add to Cart</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
