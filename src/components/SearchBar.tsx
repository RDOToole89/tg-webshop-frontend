import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from './SubmitButton';

import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { useState } from 'react';

export const SearchBar = () => {
  const [textProperties, setTextproperties] = useState({
    placeholder: 'Lame games and more...',
  });

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={() => console.log('change')}
        value={''}
        placeholder={textProperties.placeholder}
        onFocus={() =>
          setTextproperties({ ...textProperties, placeholder: '' })
        }
        onBlur={() =>
          setTextproperties({
            ...textProperties,
            placeholder: 'Lame game and more...',
          })
        }
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
    paddingLeft: GLOBAL.SPACING.xxl,
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
