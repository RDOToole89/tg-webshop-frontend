import { View, Text, StyleSheet } from 'react-native';

import { useEffect } from 'react';

import { useActions } from '../hooks/useActions';
import { TopBar } from '../components/TopBar';
import { PromotionBanner } from '../components/PromotionBanner';
import { GLOBAL } from '../global/styles/global';

export const Home: React.FC = () => {
  const { loadProducts } = useActions();

  const Item = ({ title }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }: any) => <Text>{item.productName}</Text>;

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar />
      <PromotionBanner
        bannerText={'Special offfer: pay EXTRA on orders over 100$'}
      />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: GLOBAL.FONT_SIZES.sm,
  },
});
