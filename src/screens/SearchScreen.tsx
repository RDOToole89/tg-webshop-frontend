import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { GLOBAL } from '../global/styles/global';

export const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
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
