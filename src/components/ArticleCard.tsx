import { View, Text, StyleSheet } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

type ArticleCard = {
  articleType: string;
  articleQuantity: string;
};

export const ArticleCard = ({ articleType, articleQuantity }: ArticleCard) => {
  return (
    <View style={[styles.boxSmall, GLOBAL.SHADOWS.shadowLight]}>
      <Text>{articleType}</Text>
      <Text style={[TYPOGRAPHY.FONT.subtitle, { marginBottom: 0 }]}>
        {articleQuantity} articles
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    padding: GLOBAL.SPACING.md,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: TYPOGRAPHY.COLOR.BrandRed,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
});
