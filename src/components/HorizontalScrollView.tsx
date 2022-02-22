import { ScrollView, Text, StyleSheet } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { HorizontalScrollViewCard } from './HorizontalScrollViewCard';
import uuid from 'react-native-uuid';

interface HorizontalScrollView {
  dataArray: any[];
  title?: string;
  routeString: any;
}

export const HorizontalScrollView = ({
  dataArray,
  title,
  routeString,
}: HorizontalScrollView) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      {title && (
        <Text style={[TYPOGRAPHY.FONT.h3, { fontFamily: 'open-sans-bold' }]}>
          {title}
        </Text>
      )}
      <ScrollView horizontal>
        {dataArray.map((item: any) => {
          console.log(`ITEM: INSIDE DATA ARRAY`, item);

          return (
            <HorizontalScrollViewCard
              key={uuid.v4().toString()}
              routeString={routeString}
              {...item}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: GLOBAL.SPACING.md,
    maxHeight: 220,
    backgroundColor: '#e5e7eb',
    zIndex: 9,
  },
});
