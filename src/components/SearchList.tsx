import React from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
import { IProductDetails } from '../types/data.types';
import { ProductCard } from './ProductCard';

interface ISearchList {
  searchPhrase: string;
  setClicked: (bool: boolean) => void;
  data: any[];
  item: ListRenderItem<React.ReactElement>;
}

type TProductRenderList = Omit<IProductDetails, 'id'>;

export const SearchList = ({ searchPhrase, setClicked, data }: ISearchList) => {
  const renderItem = ({ item }: { item: IProductDetails }) => {
    // when no input, show all
    if (searchPhrase === '') {
      return <ProductRenderItem {...item} />;
    }
    // filter of the name
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <ProductRenderItem {...item} />;
    }
    // filter of the description
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <ProductRenderItem {...item} />;
    }
  };

  return (
    <View style={styles.listContainer}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
          return true;
        }}>
        <FlatList
          data={data}
          //@ts-ignore HOW TO TYPE THIS!!!!!!
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
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

const ProductRenderItem = ({
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
}: TProductRenderList & { id: string }) => {
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
