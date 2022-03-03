import { Text, StyleSheet, ScrollView } from 'react-native';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { ProductCard } from '../../components/ProductCard';
// import products from '../../assets/data/products.json';
import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { HorizontalRule } from '../../global/elements/HorizontalRule';
import {
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  colRef,
  db,
} from '../../firebase/firebase';
import { addDoc } from 'firebase/firestore';

// THIS SCREEN IS FOR TESTING FIREBASE CRUD OPERATIONS!!!! => not production
// Net Ninja
// https://www.youtube.com/watch?v=rfQ2F8kQEUg&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=6

export const ProductsScreen = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState<string | number | null>(0);
  const [rating, setRating] = useState<string | number>(0);
  const [ratingQuantity, setRatingQuantity] = useState<string | number>(0);
  const [tags, setTags] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [desc, setDesc] = useState('');
  const [stock, setStock] = useState<string | number>(0);
  const [imageUrl, setImageUrl] = useState('');
  const [extraImages, setExtraImages] = useState<string[]>([]);
  const [products, setProducts] = useState([]);
  const [productChange, setProductChange] = useState(false);
  let productsLength = products.length;

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let games: any = [];
      // for each document (doc) we call the data() function and spread it into
      // and object than we grab the id: doc.id. So for each document we push an
      // object containing the data to the games array.
      snapshot.docs.forEach((doc) => games.push({ ...doc.data(), id: doc.id }));

      console.log('GAMES FROM FIRESTORE', games);

      if (games.length) {
        setProducts(games);
      }
    });
  }, [productChange]);

  const addGame = () => {
    // the first argument takes a collection ref
    // the Second is the new Object we want to add to our collection
    addDoc(colRef, {
      title,
      category,
      brand,
      price,
      rating,
      ratingQuantity,
      tags,
      platforms,
      desc,
      stock,
      imageUrl,
      extraImages,
    }).then(() => {
      setTitle('');
      setCategory('');
      setBrand('');
      setPrice(0);
      setRating(0);
      setRatingQuantity(0);
      setTags([]);
      setPlatforms([]);
      setDesc('');
      setStock(0);
      setImageUrl('');
      setExtraImages([]);
      setProducts([]);
      setProductChange(!productChange);

      console.log('GAMES ADDDED');
    });
  };

  const deleteGame = (id: any) => {
    // takes in three arguments the db connection, the collection name
    // and the ID of the the the collection item
    const docRef = doc(db, 'products', id);

    // returns a promise so I can attach a .then and .catch
    deleteDoc(docRef).then(() => {
      setProductChange(!productChange);
    });
  };

  return !products.length ? (
    <Text>Loading</Text>
  ) : (
    <ScrollView>
      {products?.map((product) => {
        // console.log(product);

        return (
          <ProductCard
            key={imageUrl}
            {...product}
            test={true}
            handleDelete={deleteGame}
          />
        );
      })}

      <>
        <ScrollView style={styles.container}>
          <Text
            style={[
              TYPOGRAPHY.FONT.h2,
              { fontFamily: TYPOGRAPHY.FONT.PrimaryBold },
            ]}>
            Account information
          </Text>

          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='title'
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='category'
            value={category}
            onChangeText={(text) => setCategory(text)}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='brand'
            value={brand}
            onChangeText={(text) => setBrand(text)}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='price'
            onChangeText={(text) => setPrice(Number(text))}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='rating'
            onChangeText={(text) => setRating(Number(text))}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='rating quantity'
            onChangeText={(text) => setRatingQuantity(Number(text))}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='tags'
            value={tags.toString()}
            onChangeText={(text) => {
              const array = [];
              array.push(text);
              return setTags(array);
            }}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='platforms'
            value={platforms.toString()}
            onChangeText={(text) => {
              const array = [];
              array.push(text);
              return setPlatforms(array);
            }}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='stock'
            value={stock.toString()}
            onChangeText={(text) => setStock(Number(text))}
          />

          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='desc'
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='imageUrl'
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='extraImages'
            value={extraImages.toString()}
            onChangeText={(text) => {
              const array = [];
              array.push(text);
              return setExtraImages(array);
            }}
          />
          <HorizontalRule
            style={{
              marginVertical: GLOBAL.SPACING.md,
              marginBottom: GLOBAL.SPACING.xl,
              width: '100%',
            }}
          />
          <Button
            style={{
              borderRadius: 0,
              width: '30%',
              marginBottom: GLOBAL.SPACING.xxxxl,
            }}
            color='#e7230d'
            mode='contained'
            onPress={addGame}>
            <Text>SUBMIT CHANGES</Text>
          </Button>
        </ScrollView>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.xl,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
  scrollContainer: {
    marginVertical: GLOBAL.SPACING.lg,
    paddingVertical: GLOBAL.SPACING.md,
    backgroundColor: '#e5e7eb',
    paddingLeft: GLOBAL.SPACING.md,
  },
  textInput: {
    marginBottom: GLOBAL.SPACING.md,
    backgroundColor: '#ecf4fb',
  },
});
