import { View, Text, StyleSheet, Image } from 'react-native';

import { TopBar } from '../components/TopBar';
import { PromotionBanner } from '../components/PromotionBanner';
import { GLOBAL } from '../global/styles/global';
import { SearchBar } from '../components/SearchBar';

import image from '../../assets/crap-banner.png';
import { IMGSTYLES } from '../global/misc/imgStyles';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <PromotionBanner
        bannerText={'SPECIAL OFFER: pay EXTRA on orders over 100$'}
      />

      <SearchBar />
      <View
        style={{
          paddingVertical: GLOBAL.SPACING.sm,
          backgroundColor: '#e5e7eb',
        }}>
        <Image
          source={image}
          resizeMethod='resize'
          resizeMode='stretch'
          style={{ height: 160, width: '100%' }}
        />
      </View>

      <View></View>

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
