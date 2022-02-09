export const findItemByIdGen = <
  T extends { productId: number; quantity: number }
>(
  arrayOfObjects: T[],
  id: number
): T | undefined => {
  return arrayOfObjects.find((T) => T.productId === id);
};

export const addQuantityToItemGen = <
  T extends { productId: number; quantity: number }
>(
  arrayOfObjects: T[],
  id: number,
  quantity: number
): T[] => {
  return arrayOfObjects.map((T) =>
    T.productId === id ? { ...T, quantity: T.quantity + quantity } : T
  );
};

export const subtractQuantityFromItemGen = <
  T extends { productId: number; quantity: number }
>(
  arrayOfObjects: T[],
  id: number,
  quantity: number
): T[] => {
  return arrayOfObjects.map((T) =>
    T.productId === id ? { ...T, quantity: T.quantity - quantity } : T
  );
};

export const removeItemByIdGen = <
  T extends { productId: number; quantity: number }
>(
  arrayOfObjects: T[],
  id: number
): T[] => {
  const filteredArr = arrayOfObjects.filter((T) => T.productId !== id);

  if (arrayOfObjects.length === 0) return [];

  return filteredArr;
};
