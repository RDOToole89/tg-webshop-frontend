//@ts-nocheck

import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { ImageCarousel } from './ImageCarousel';

const Item = ({
  title,
  imageUrl,
  price,
}: {
  title: string;
  imgUrl: string;
  price: number;
}) => {
  return (
    <View>
      <Text>
        {title} - {price}
      </Text>
      <View style={{ height: 50, width: 50 }}>
        <ResponsiveImage source={imageUrl} srcHeight={100} srcWidth={100} />
      </View>
    </View>
  );
};

type List = {
  searchPhrase: string;
  setClicked: any;
  data: any;
};

export const List = ({ searchPhrase, setClicked, data }: List) => {
  console.log(data);

  const renderItem = ({ item }: { item: any }) => {
    console.log('ITEM IN RENDER', item);

    // when no input, show all
    if (searchPhrase === '') {
      return (
        <Item title={item.title} price={item.price} imageUrl={item.imageUrl} />
      );
    }
    // filter of the name
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return (
        <Item title={item.title} price={item.price} imageUrl={item.imageUrl} />
      );
    }
    // filter of the description
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return (
        <Item title={item.title} price={item.price} imageUrl={item.imageUrl} />
      );
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: '85%',
    width: '100%',
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
});
