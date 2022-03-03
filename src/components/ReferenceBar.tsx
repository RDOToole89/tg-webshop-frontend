import { View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import { MaterialIcon } from '../global/elements/MaterialIcon';
import { CustomText } from '../global/elements/customText';
import { NavigationScreen } from '../types/app.types';

type ReferenceBar = {
  iconName: string;
  routeString?: NavigationScreen<RootStackParams>;
  barText: string;
  onClick?: () => void;
  modalBar?: boolean;
  color?: string;
};

export const ReferenceBar = ({
  iconName,
  routeString = 'Home',
  barText,
  onClick,
  modalBar = false,
  color = TYPOGRAPHY.COLOR.Secondary,
}: ReferenceBar) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const navigateToRouteString = () => navigation.navigate(routeString);

  return (
    <Pressable onPress={onClick ? onClick : navigateToRouteString}>
      {!modalBar ? (
        <View style={styles.refBarContainer}>
          <MaterialIcon size='large' name={iconName} color={color && color} />
          <CustomText
            style={{
              marginLeft: 20,
              fontSize: GLOBAL.FONT_SIZES.sm,
              letterSpacing: 1,
            }}
            children={barText}
          />
        </View>
      ) : (
        <View style={[styles.refBarContainer, styles.spaceBetween]}>
          <CustomText
            style={{
              fontSize: GLOBAL.FONT_SIZES.sm,
              letterSpacing: 1,
            }}
            children={barText}
          />
          <MaterialIcon size='large' name={iconName} color={color && color} />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  refBarContainer: {
    paddingVertical: GLOBAL.SPACING.md,
    marginVertical: GLOBAL.SPACING.md,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: TYPOGRAPHY.COLOR.PrimaryGrey,
    borderBottomWidth: 1,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
