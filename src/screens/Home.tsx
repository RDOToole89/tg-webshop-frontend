import { View, Text, StyleSheet } from 'react-native';

import { TopBar } from '../components/TopBar';
import { PromotionBanner } from '../components/PromotionBanner';
import { GLOBAL } from '../global/styles/global';
import { SearchBar } from '../components/SearchBar';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <PromotionBanner
        bannerText={'Special offfer: pay EXTRA on orders over 100$'}
      />
      <SearchBar />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
  },
});
