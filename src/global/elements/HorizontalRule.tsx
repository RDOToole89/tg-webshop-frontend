import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { TYPOGRAPHY } from '../styles/typography';

interface HorizontalRule {
  color?: string;
  text?: string;
  style?: StyleProp<ViewStyle>;
}

export const HorizontalRule = ({ color, text, style }: HorizontalRule) => {
  return (
    <View style={style}>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
        <View
          style={{
            flex: 1,
            height: 1,
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
            height: 1,
            backgroundColor: color ? color : TYPOGRAPHY.COLOR.TertiaryGrey,
          }}
        />
      </View>
    </View>
  );
};
