import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import productsData from '../../assets/data/products.json';
import { SearchList } from '../components/SearchList';

export const SearchScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState(productsData);

  return (
    <View style={styles.container}>
      <SearchBar
        style={{ marginVertical: GLOBAL.SPACING.md }}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Text
        style={[
          TYPOGRAPHY.FONT.subtitle,
          {
            paddingHorizontal: GLOBAL.SPACING.md,
            backgroundColor: 'transparent',
          },
        ]}>
        Hint: Think of the worst game you ever played, we've got it!
      </Text>
      {
        <SearchList
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
    paddingHorizontal: GLOBAL.SPACING.xsm,
  },
});
