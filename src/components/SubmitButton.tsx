import { TouchableOpacity, StyleSheet } from 'react-native';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import Icon from 'react-native-vector-icons/Ionicons';

export interface ISubmitButton {
  handleOnClick(): void;
}

export const SubmitButton = ({ handleOnClick }: ISubmitButton) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleOnClick}>
      <Icon name='search-outline' size={25} color={TYPOGRAPHY.COLOR.Primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: GLOBAL.SPACING.sm,
  },
  submitText: {
    color: TYPOGRAPHY.COLOR.Primary,
  },
});
