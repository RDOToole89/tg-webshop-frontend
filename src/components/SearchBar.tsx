import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { SubmitButton } from './SubmitButton';

import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/navigation';

interface ISearchBar {
  style?: StyleProp<ViewStyle>;
  placeHolderText?: string;
  clicked?: boolean;
  searchPhrase?: string;
  setSearchPhrase?: any;
  setClicked?: (bool: boolean) => void;
  onClick?: () => void;
}

export const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  placeHolderText = 'Lame games and more...',
  onClick,
  style,
}: ISearchBar) => {
  const [placeHolder, setPlaceholder] = useState(placeHolderText);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleOnFocus = () => {
    if (onClick) {
      navigation.navigate('Search');
      return;
    }

    setPlaceholder('');

    setClicked && setClicked(true);
  };

  const handleOnBlur = () => {
    if (onClick) {
      navigation.navigate('Search');
      return;
    }

    setPlaceholder('Lame games and more...');

    setClicked && setClicked(false);
  };
  return (
    <View
      style={
        clicked
          ? [styles.inputContainer, GLOBAL.SHADOWS.shadowInput, style]
          : [styles.inputContainer, style]
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
    padding: GLOBAL.SPACING.xxxsm,
    paddingLeft: GLOBAL.SPACING.md,
    backgroundColor: TYPOGRAPHY.COLOR.PrimaryGrey,
    marginHorizontal: GLOBAL.SPACING.sm,
  },
  searchInput: {
    width: '80%',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    padding: GLOBAL.SPACING.sm,
    color: TYPOGRAPHY.COLOR.Primary,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
