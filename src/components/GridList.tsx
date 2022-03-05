// import { FlatList, StyleSheet } from 'react-native';

// import uuid from 'react-native-uuid';

// ** KEEPING THIS COMPONENT FOR FUTURE REFERENCE!

// type TRenderItem = {
//   item: Category;
// };

// const renderItem = ({ item }: TRenderItem) => {
//   return (
//     <PressableCard
//       background={background}
//       title={item.categoryName}
//       onClick={() =>
//         navigation.navigate('Products', {
//           categoryName: item.categoryName,
//         })
//       }
//     />
//   );
// };

// export const GridList = ({ data, renderItem }: any) => {
//   return (
//     <>
//       <FlatList
//         scrollEnabled={true}
//         contentContainerStyle={styles.grid}
//         numColumns={3}
//         data={data}
//         keyExtractor={(item) => item.toString() + uuid.v4()}
//         renderItem={renderItem}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   grid: {
//     flex: 1,
//     justifyContent: 'center',
//   },
// });
