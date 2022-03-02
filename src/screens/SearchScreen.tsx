import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import productsData from '../../assets/data/products.json';
import { List } from '../components/List';

export const SearchScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState(productsData);

  return (
    <View style={styles.container}>
      {!clicked && (
        <Text style={[TYPOGRAPHY.FONT.h2, { marginLeft: GLOBAL.SPACING.sm }]}>
          Search
        </Text>
      )}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Text
        style={[
          TYPOGRAPHY.FONT.subtitle,
          { paddingHorizontal: GLOBAL.SPACING.md },
        ]}>
        Hint: Think of the worst game you ever played, we've got it!
      </Text>
      {
        <List
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingHorizontal: GLOBAL.SPACING.sm,
  },
});
