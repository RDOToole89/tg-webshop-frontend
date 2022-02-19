import { Pressable, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

type ArticleCard = {
  articleType: string;
  articleQuantity: number;
};

export const ArticleCard = ({ articleType, articleQuantity }: ArticleCard) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Home')}
      style={[styles.boxSmall, GLOBAL.SHADOWS.shadowLight]}>
      <Text>{articleType}</Text>
      <Text style={[TYPOGRAPHY.FONT.subtitle, { marginBottom: 0 }]}>
        {articleQuantity} articles
      </Text>
    </Pressable>
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
