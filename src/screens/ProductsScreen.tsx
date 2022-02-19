import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ArticleCard } from '../components/ArticleCard';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import articleTypes from '../../assets/data/articleTypes.json';
import { ProductCard } from '../components/ProductCard';

type Article = {
  id: number;
  articleType: string;
  articleQuantity: string;
};

export const ProductsScreen = () => {
  return (
    <ScrollView>
      <ScrollView style={styles.scrollContainer}>
        <Text style={TYPOGRAPHY.FONT.subtitle}>Refine your search:</Text>
        <ScrollView horizontal>
          {articleTypes.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                articleType={article.articleType}
                //@ts-ignore
                articleQuantity={article.articleQuantity}
              />
            );
          })}
        </ScrollView>
      </ScrollView>

      <ProductCard />
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
    padding: GLOBAL.SPACING.md,
    backgroundColor: '#e5e7eb',
  },
});
