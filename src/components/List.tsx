//@ts-nocheck
import React from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { ProductDetails } from '../types/data.types';
import { ProductCard } from './ProductCard';

const Item = ({
  id,
  imageUrl,
  brand,
  price,
  rating,
  desc,
  ratingQuantity,
  stock,
  tags,
  title,
  platforms,
  extraImages,
}: ProductDetails) => {
  return (
    <ProductCard
      id={id}
      imageUrl={imageUrl}
      brand={brand}
      price={price}
      rating={rating}
      desc={desc}
      ratingQuantity={ratingQuantity}
      stock={stock}
      tags={tags}
      title={title}
      platforms={platforms}
      extraImages={extraImages}
    />
  );
};

type List = {
  searchPhrase: string;
  setClicked: any;
  data: any;
};

export const List = ({ searchPhrase, setClicked, data }: List) => {
  const renderItem = ({ item }: { item: any }) => {
    // when no input, show all
    if (searchPhrase === '') {
      return <Item {...item} />;
    }
    // filter of the name
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item {...item} />;
    }
    // filter of the description
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item {...item} />;
    }
  };

  return (
    <ScrollView style={styles.list__container}>
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
    </ScrollView>
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
