import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { TopBar } from '../components/TopBar';
import { PromotionBanner } from '../components/PromotionBanner';
import { GLOBAL } from '../global/styles/global';
import { SearchBar } from '../components/SearchBar';

import image from '../../assets/crap-banner.png';
import { IMGSTYLES } from '../global/misc/imgStyles';
import { DefaultButton } from '../global/elements/buttons';

export const Home: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: GLOBAL.SPACING.md,
        }}>
        <DefaultButton
          style={{ width: 120 }}
          title='login'
          onClick={() => console.log('click')}
        />
        <DefaultButton
          style={{ width: 120 }}
          title='categories'
          onClick={() => console.log('click')}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
      </ScrollView>

      <Text></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
  },
  scrollContainer: {
    padding: GLOBAL.SPACING.sm,
  },
  boxSmall: {
    width: 130,
    height: 130,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
});
