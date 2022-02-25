export const findItemByIdGen = <
  T extends { productId: number; quantity: number }
>(
  arrayOfObjects: T[],
  id: number
): T | undefined => {
  return arrayOfObjects.find((T) => T.productId === id);
};

export const findItemByIdandPlatformGen = <
  T extends { productId: number; platform: string; quantity: number }
>(
  arrayOfObjects: T[],
  platform: string,
  id: number
): T | undefined => {
  return arrayOfObjects.find(
    (T) => T.productId === id && T.platform === platform
  );
};

export const addQuantityToItemGen = <
  T extends { productId: number; quantity: number; platform: string }
>(
  arrayOfObjects: T[],
  id: number,
  platform: string,
  quantity: number
): T[] => {
  return arrayOfObjects.map((T) =>
    T.productId === id && T.platform === platform
      ? { ...T, quantity: T.quantity + quantity }
      : T
  );
};

export const subtractQuantityFromItemGen = <
  T extends { productId: number; quantity: number; platform: string }
>(
  arrayOfObjects: T[],
  id: number,
  platform: string,
  quantity: number
): T[] => {
  return arrayOfObjects.map((T) =>
    T.productId === id && T.platform === platform
      ? { ...T, quantity: T.quantity > 1 ? T.quantity - quantity : 0 }
      : T
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
