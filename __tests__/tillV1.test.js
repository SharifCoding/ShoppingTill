const {
  scan,
  addToBasket,
  totalPrice,
  removeFromBasket,
} = require('../src/tillV1');

const apple = {
  barcode: 123,
  price: 3,
};

const banana = {
  barcode: 345,
  price: 4,
};

const pineapple = {
  barcode: 567,
  price: 8,
};

const kiwi = {
  barcode: 789,
  price: 6,
};

const orange = {
  barcode: 901,
  price: 5,
};

const items = [
  apple,
  banana,
  pineapple,
  kiwi,
  orange,
];

test('scan - finds an item by its barcode', () => {
  expect(scan(345, items)).toEqual(banana);
  // scan = (barcode, items)
});

test('addToBasket - adds an item to the basket', () => {
  const basket = [];

  addToBasket(kiwi, basket);

  expect(basket).toContain(kiwi);
  // addToBasket = (item, basket)
});

test('totalPrice - get the toal price of itmes in the basket', () => {
  const basket = [apple, orange, pineapple];

  expect(totalPrice(basket)).toEqual(16);
  // totalPrice = (basket)
});

test('removeFromBasket - removes the item with the given barcode from the basket', () => {
  const basket = [kiwi, orange, pineapple];

  removeFromBasket(901, basket);

  expect(basket).not.toContain(orange);
  // removeFromBasket = (barcode, basket)
});
