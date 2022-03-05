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
import { IProduct } from '../types/data.types';

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
    backgroundColor: TYPOGRAPHY.COLOR.Neutral,
  },
});
