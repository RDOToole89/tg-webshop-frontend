import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { View, Pressable } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import { CustomText } from '../global/elements/customText';

export const ReferenceBar = ({ iconName, routeString, barText }: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={() => navigation.navigate(routeString)}>
      <View
        style={{
          padding: GLOBAL.SPACING.sm,
          marginVertical: GLOBAL.SPACING.md,
          // backgroundColor: TYPOGRAPHY.COLOR.,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderBottomColor: TYPOGRAPHY.COLOR.PrimaryGrey,
          borderBottomWidth: 1,
        }}>
        <MaterialIcon
          size='large'
          name={iconName}
          color={TYPOGRAPHY.COLOR.Secondary}
        />
        <CustomText
          style={{
            marginLeft: 10,
            fontSize: GLOBAL.FONT_SIZES.sm,
            letterSpacing: 1,
          }}
          children={barText}
        />
      </View>
    </Pressable>
  );
};
