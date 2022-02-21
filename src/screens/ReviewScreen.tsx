import { Text, View } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { Ionicons } from '@expo/vector-icons';
import { PressableText } from '../global/elements/PressableText';

export const ReviewSrcreen = () => {
  const userNameTest = 'Roibin OToole';

  return (
    <View style={GLOBAL.LAYOUT.container}>
      <View
        style={[
          {
            padding: GLOBAL.SPACING.sm,
            backgroundColor: TYPOGRAPHY.COLOR.BrandRed,
          },
          GLOBAL.LAYOUT.rowCenter,
        ]}>
        <Ionicons name='ios-person-circle' size={30} color='black' />
        <Text
          style={{
            marginLeft: GLOBAL.SPACING.md,
            color: TYPOGRAPHY.COLOR.Default,
          }}>
          {userNameTest}
        </Text>
        {/* <PressableText textStyle={{ color: 'black' }} text='edit' /> */}
      </View>
    </View>
  );
};
