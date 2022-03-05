import { TouchableOpacity } from 'react-native';

import { TYPOGRAPHY } from '../global/styles/typography';

import Icon from 'react-native-vector-icons/Ionicons';

export interface ISubmitButton {
  handlePress(): void;
  ionIconName?: string;
  iconSize?: number;
}

export const SubmitButton = ({
  handlePress,
  ionIconName,
  iconSize,
}: ISubmitButton) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        name={!ionIconName ? 'search-outline' : ionIconName}
        size={!iconSize ? 25 : iconSize}
        color={TYPOGRAPHY.COLOR.Primary}
      />
    </TouchableOpacity>
  );
};
