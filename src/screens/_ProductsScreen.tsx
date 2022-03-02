import { Text, StyleSheet, ScrollView } from 'react-native';
import { ArticleCard } from '../components/ArticleCard';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import articleTypes from '../../assets/data/articleTypes.json';
import { ProductCard } from '../components/ProductCard';
import products from '../../assets/data/products.json';
import uuid from 'react-native-uuid';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { HorizontalRule } from '../global/elements/HorizontalRule';

export const ProductsScreen = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [ratingQuantity, setRatingQuantity] = useState(0);
  const [tags, setTags] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [desc, setDesc] = useState('');
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [extraImages, setExtraImages] = useState([]);

  useState;

  return (
    <ScrollView>
      <ScrollView style={styles.scrollContainer}>
        <Text style={TYPOGRAPHY.FONT.subtitle}>Refine your search:</Text>
        <ScrollView horizontal>
          {articleTypes.map((article, i) => {
            return (
              <ArticleCard
                key={article.id}
                articleType={article.articleType}
                articleQuantity={article.articleQuantity}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
      {products.map((product) => {
        return (
          <ProductCard key={uuid.v4().toString()} {...product} test={true} />
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
            value={price.toString()}
            onChangeText={(text) => setPrice(Number(text))}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='rating'
            value={rating.toString()}
            onChangeText={(text) => setRating(Number(text))}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='rating quantity'
            value={ratingQuantity.toString()}
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
            onChangeText={(text) => setTags([])}
          />
          <TextInput
            outlineColor={TYPOGRAPHY.COLOR.BrandBlack}
            activeOutlineColor={TYPOGRAPHY.COLOR.BrandRed}
            style={[styles.textInput, { borderColor: 'red' }]}
            autoComplete={''}
            mode='outlined'
            label='platforms'
            value={platforms.toString()}
            onChangeText={(text) => setPlatforms([])}
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
            onChangeText={(text) => setExtraImages([])}
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
              width: '100%',
              marginBottom: GLOBAL.SPACING.xxxxl,
            }}
            color='#e7230d'
            mode='contained'
            onPress={() => console.log('press')}>
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
