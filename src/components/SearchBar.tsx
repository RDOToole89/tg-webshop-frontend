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
}

export const SearchBar = ({
  style,
  placeHolderText = 'Lame games and more...',
}: SearchBar) => {
  const [placeHolder, setPlaceholder] = useState(placeHolderText);
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
    setPlaceholder('Lame games and more...');
    setBoxShadow({});
  };
  return (
    <View
      style={[styles.inputContainer, shadowStyle(boxShadow).boxShadow, style]}>
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
    marginBottom: GLOBAL.SPACING.md,
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
});

const shadowStyle = (boxShadow: any) =>
  StyleSheet.create({
    boxShadow,
  });
