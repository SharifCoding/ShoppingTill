const { Till } = require('../src/tillV2');

// NEW INSTANTIATE OF ITEM
const apple = {
  name: 'Apple',
  price: 3,
  barcode: 123,
};

const banana = {
  name: 'Banana',
  price: 4,
  barcode: 345,
};

const pineapple = {
  name: 'Pineapple',
  price: 8,
  barcode: 567,
};

const kiwi = {
  name: 'Kiwi',
  price: 6,
  barcode: 789,
};

const orange = {
  name: 'Orange',
  price: 5,
  barcode: 901,
};

// const till = new Till(products);

const products = [
  apple,
  banana,
  pineapple,
  kiwi,
  orange,
];
// Assigning array of products to the Till instance's `products` property.

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Till('apple')).toBeInstanceOf(Object);
  });
});
// Testing the constructor.

describe('scan', () => {
  test('find a product by scanning its barcode', () => {
    const item = new Till('banana');
    expect(item.scan(345, products)).toEqual(banana);
  });
});
// Testing objects prototype item.scan.

describe('addToBasket', () => {
  test('adds an item to the basket', () => {
    const basket = [];
    const item = new Till('kiwi');

    item.addToBasket(kiwi, basket);
    expect(basket).toContain(kiwi);
  });
});
// Testing objects prototype item.addToBasket.

describe('totalPrice', () => {
  test('get the toal price of itmes in the basket', () => {
    const basket = [apple, orange, pineapple];
    const item = new Till();

    expect(item.totalPrice(basket)).toEqual(16);
  });
});
// Testing objects prototype item.totalPrice.

describe('removeFromBasket', () => {
  test('removes the item with the given barcode from the basket', () => {
    const basket = [kiwi, orange, pineapple];
    const item = new Till();

    item.removeFromBasket(901, basket);
    expect(basket).not.toContain(orange);
  });
});
// Testing objects prototype item.removeFromBasket.
