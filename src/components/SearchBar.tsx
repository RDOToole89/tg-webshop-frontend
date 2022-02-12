import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from './SubmitButton';

import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { useState } from 'react';

export const SearchBar = () => {
  const [placeHolder, setPlaceholder] = useState('Lame games and more...');
  const [boxShadow, setBoxShadow] = useState({});

  const handleOnFocus = () => {
    setPlaceholder('');
    setBoxShadow({
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    });
  };

  const handleOnBlur = () => {
    setPlaceholder('Lame game and more...');
    setBoxShadow({});
  };

  return (
    <View style={[styles.inputContainer, shadowStyle(boxShadow).boxShadow]}>
      <TextInput
        onChangeText={() => console.log('change')}
        value={''}
        placeholder={placeHolder}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={styles.searchInput}
      />
      <SubmitButton
        handleOnClick={() => {
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
    padding: GLOBAL.SPACING.sm,
    paddingLeft: GLOBAL.SPACING.md,
    backgroundColor: TYPOGRAPHY.COLOR.PrimaryGrey,
    marginVertical: GLOBAL.SPACING.md,
  },
  searchInput: {
    width: '80%',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    padding: GLOBAL.SPACING.md,
    color: TYPOGRAPHY.COLOR.Primary,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

const shadowStyle = (boxShadow: any) =>
  StyleSheet.create({
    boxShadow,
  });
