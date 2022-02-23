import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

interface HorizontalRule {
  color?: string;
  text?: string;
  style?: StyleProp<ViewStyle>;
  ruleWidth?: number;
}

export const HorizontalRule = ({
  color,
  text,
  style,
  ruleWidth,
}: HorizontalRule) => {
  return (
    <View style={[style]}>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
        <View
          style={{
            flex: 1,
            height: ruleWidth ? ruleWidth : 1,
            backgroundColor: color ? color : TYPOGRAPHY.COLOR.TertiaryGrey,
          }}
        />

        {text && (
          <View>
            <Text
              style={{
                width: 50,
                textAlign: 'center',
                color: TYPOGRAPHY.COLOR.TertiaryGrey,
              }}>
              {text}
            </Text>
          </View>
        )}

        <View
          style={{
            flex: 1,
            height: ruleWidth ? ruleWidth : 1,
            backgroundColor: color ? color : TYPOGRAPHY.COLOR.TertiaryGrey,
          }}
        />
      </View>
    </View>
  );
};
