import { Text, StyleSheet, ScrollView } from 'react-native';
import { ArticleCard } from '../components/ArticleCard';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import articleTypes from '../../assets/data/articleTypes.json';
import { ProductCard } from '../components/ProductCard';
import products from '../../assets/data/products.json';

export const ProductsScreen = () => {
  return (
    <ScrollView>
      <ScrollView style={styles.scrollContainer}>
        <Text style={TYPOGRAPHY.FONT.subtitle}>Refine your search:</Text>
        <ScrollView horizontal>
          {articleTypes.map((article, i) => {
            return (
              <ArticleCard
                key={article.id}
                articleType={article.articleType}
                articleQuantity={article.articleQuantity}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
      {products.map((product, i) => {
        return <ProductCard key={product.imageUrl} {...product} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.xl,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
  scrollContainer: {
    marginVertical: GLOBAL.SPACING.lg,
    paddingVertical: GLOBAL.SPACING.md,
    backgroundColor: '#e5e7eb',
    paddingLeft: GLOBAL.SPACING.md,
  },
});
