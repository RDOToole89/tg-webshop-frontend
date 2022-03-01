import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { SubmitButton } from './SubmitButton';

import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { useState } from 'react';

interface SearchBar {
  style?: StyleProp<ViewStyle>;
  placeHolderText?: string;
  clicked: any;
  searchPhrase: any;
  setSearchPhrase: any;
  setClicked: any;
}

export const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  style,
  placeHolderText = 'Lame games and more...',
}: SearchBar) => {
  const [placeHolder, setPlaceholder] = useState(placeHolderText);

  const handleOnFocus = () => {
    setPlaceholder('');
    setClicked(true);
  };

  const handleOnBlur = () => {
    setPlaceholder('Lame games and more...');
    setClicked(false);
  };
  return (
    <View
      style={
        clicked
          ? [styles.inputContainer, styles.searchInputClicked]
          : [styles.inputContainer]
      }>
      <TextInput
        onChangeText={setSearchPhrase}
        value={searchPhrase}
        placeholder={placeHolder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={styles.searchInput}
      />

      <SubmitButton
        handlePress={() => {
          console.log('click');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: GLOBAL.SPACING.xsm,
    paddingLeft: GLOBAL.SPACING.md,
    backgroundColor: TYPOGRAPHY.COLOR.PrimaryGrey,
    marginVertical: GLOBAL.SPACING.sm,
    marginHorizontal: GLOBAL.SPACING.sm,
  },
  searchInput: {
    width: '80%',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    padding: GLOBAL.SPACING.sm,
    color: TYPOGRAPHY.COLOR.Primary,
    fontWeight: '600',
    letterSpacing: 1,
    // outlineStyle:
    //   Platform.OS === 'web' ? 'none' : TYPOGRAPHY.COLOR.DefaultSelected,
  },

  searchInputClicked: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

// const shadowStyle = (boxShadow: any) =>
//   StyleSheet.create({
//     boxShadow,
//   });
