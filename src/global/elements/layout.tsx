import * as React from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { GLOBAL } from '../styles/global';

type Callback = () => any;
interface ICard {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onClick?: Callback;
}

interface ICarouselProps {
  data: any[];
  item: ListRenderItem<React.ReactElement>;
}

const Card = ({ children, style, onClick }: ICard) => (
  <Pressable style={[GLOBAL.ELEMENTS.Card, style]} onPress={onClick}>
    {children}
  </Pressable>
);

const Carousel = ({ data, item }: ICarouselProps) => (
  <FlatList
    keyExtractor={(_, index) =>
      `flatlist-${index}-${Math.floor(Math.random() * 100)}`
    }
    data={data}
    renderItem={item}
    horizontal={true}
  />
);

export { Card, Carousel };
