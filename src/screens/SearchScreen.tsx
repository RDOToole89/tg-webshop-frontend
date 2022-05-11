import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import productsData from '../../assets/data/products.json';
import { SearchBar } from '../components/SearchBar';
import { SearchList } from '../components/SearchList';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

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
