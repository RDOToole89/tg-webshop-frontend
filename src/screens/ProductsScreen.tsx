import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { ArticleCard } from '../components/ArticleCard';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import articleTypes from '../../assets/data/articleTypes.json';
import { ProductCard } from '../components/ProductCard';
import products from '../../assets/data/products.json';
import { RouteProp, useRoute } from '@react-navigation/native';
import { BottomTabParams } from '../navigation/navigation';

export const ProductsScreen = () => {
  // typing params in routers * check bottom link
  const route = useRoute<RouteProp<BottomTabParams, 'Products'>>();

  // console.log('ROUTE PARAMS', route.params);

  // const { categoryName } = route.params;

  return (
    <ScrollView>
      <View style={styles.scrollContainer}>
        <Text style={TYPOGRAPHY.FONT.subtitle}>Refine your search:</Text>
        <ScrollView horizontal>
          {articleTypes.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                articleType={article.articleType}
                articleQuantity={article.articleQuantity}
              />
            );
          })}
        </ScrollView>
      </View>
      <ScrollView style={styles.container}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.imageUrl}
              // categoryName={}
              {...product}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
  scrollContainer: {
    marginVertical: GLOBAL.SPACING.lg,
    paddingVertical: GLOBAL.SPACING.md,
    backgroundColor: '#e5e7eb',
    paddingLeft: GLOBAL.SPACING.md,
  },
});

// * 1 - https://stackoverflow.com/questions/60896364/react-native-with-typescript-how-to-use-the-useroute-from-react-navigation-na
