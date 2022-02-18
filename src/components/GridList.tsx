import { FlatList, StyleSheet } from 'react-native';

import uuid from 'react-native-uuid';

export const GridList = ({ data, renderItem }: any) => {
  return (
    <>
      <FlatList
        scrollEnabled={true}
        contentContainerStyle={styles.grid}
        numColumns={3}
        data={data}
        keyExtractor={(item) => item.toString() + uuid.v4()}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'center',
  },
});
