import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { HorizontalScrollViewCard } from './HorizontalScrollViewCard';
import uuid from 'react-native-uuid';

interface HorizontalScrollView {
  dataArray: any[];
  title?: string;
  routeString: any;
  style?: StyleProp<ViewStyle>;
}

export const HorizontalScrollView = ({
  dataArray,
  title,
  routeString,
  style,
}: HorizontalScrollView) => {
  return (
    <View style={[styles.scrollContainer, style]}>
      {title && (
        <Text style={[TYPOGRAPHY.FONT.h3, { fontFamily: 'open-sans-bold' }]}>
          {title}
        </Text>
      )}
      <ScrollView horizontal>
        {dataArray.map((item: any) => {
          // console.log(`ITEM: INSIDE DATA ARRAY`, item);

          return (
            <HorizontalScrollViewCard
              key={uuid.v4().toString()}
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
    // maxHeight: 220,
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Neutral,
  },
});
