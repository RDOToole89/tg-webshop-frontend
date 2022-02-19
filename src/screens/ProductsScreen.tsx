import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ArticleCard } from '../components/ArticleCard';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import articleTypes from '../../assets/data/articleTypes.json';

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
          {articleTypes.map((article: Article) => {
            console.log(article);

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

      <View style={styles.container}>
        <Text>SOME PRODUCT HERE</Text>
      </View>
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
    padding: GLOBAL.SPACING.sm,
    backgroundColor: '#e5e7eb',
  },
});
