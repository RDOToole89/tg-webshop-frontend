import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

export const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text
        style={[
          TYPOGRAPHY.FONT.subtitle,
          { paddingHorizontal: GLOBAL.SPACING.md },
        ]}>
        Hint: Think of the worst game you ever played, we've got it!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
});
