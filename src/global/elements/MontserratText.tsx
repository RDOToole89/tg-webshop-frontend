import React from 'react';
import { Text } from 'react-native';

type MyCustomType = {
  children: React.ReactNode;
  name: string;
};

// you can access the type name by using const myType: MyCustomType["name"]
// const myType: MyCustomType['name'] = 123 // throw an error
const myType: MyCustomType['name'] = 'Roibin';

export const MontserratText = ({
  children,
  style,
}: {
  children: Text['props']['children'];
  style?: any;
}) => {
  return <Text style={[style, { fontFamily: 'montserrat' }]}>{children}</Text>;
};

export const MontserratTextItalic = (props: Text['props']) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'montserrat' }]} />
  );
};

export const MontserratTextBold = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: any;
}) => {
  return (
    <Text
      style={[style, { fontFamily: 'montserrat-bold' }]}
      children={children}
    />
  );
};
