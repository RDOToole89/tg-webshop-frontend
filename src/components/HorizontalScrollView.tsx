import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { HorizontalScrollViewCard } from './HorizontalScrollViewCard';

interface IHorizontalScrollView {
  dataArray: Object[];
  title?: string;
  routeString: string;
  style?: StyleProp<ViewStyle>;
}

export const HorizontalScrollView = ({
  dataArray,
  title,
  routeString,
  style,
}: IHorizontalScrollView) => {
  return (
    <View style={[styles.scrollContainer, style]}>
      {title && (
        <Text style={[TYPOGRAPHY.FONT.h2, { fontFamily: 'open-sans-bold' }]}>
          {title}
        </Text>
      )}
      <ScrollView horizontal>
        {/* How do I type this? */}
        {dataArray.map((item: any) => {
          // console.log(`ITEM: INSIDE DATA ARRAY`, item);

          return (
            <HorizontalScrollViewCard
              key={Math.random()}
              routeString={routeString}
              {...item}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: GLOBAL.SPACING.md,
    backgroundColor: TYPOGRAPHY.COLOR.Neutral,
  },
});
