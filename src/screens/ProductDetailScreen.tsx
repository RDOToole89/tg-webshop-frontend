import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import ResponsiveImage from '../global/elements/responsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useActions } from '../hooks/useActions';

export const ProductDetailScreen = ({ route }: any) => {
  const { addToCart } = useActions();
  console.log('PARAMS', route.params);

  const { id, imageUrl, price, rating, ratingQuantity, stock, tags, title } =
    route.params;

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
            uri: imageUrl,
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
          {price}
        </Text>

        <Text style={GLOBAL.FONTS.h1}>{title}</Text>

        <Button
          color='#e7230d'
          icon='cart'
          mode='contained'
          onPress={() => addToCart(id)}>
          <Text>Add to cart</Text>
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
