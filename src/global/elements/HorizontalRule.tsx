import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

interface HorizontalRule {
  color: string;
  text: string;
  style: StyleProp<ViewStyle>;
}

export const HorizontalRule = ({ color, text, style }: HorizontalRule) => {
  return (
    <View style={style}>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: color ? color : TYPOGRAPHY.COLOR.PrimaryGrey,
          }}
        />

        {text && (
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: '#606060' }}>
              {text}
            </Text>
          </View>
        )}

        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: color ? color : TYPOGRAPHY.COLOR.PrimaryGrey,
          }}
        />
      </View>
    </View>
  );
};
