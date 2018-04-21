// scan - finds an item by its barcode
// The find() method returns the value of the first element in the array that satisfies the provided testing function
const scan = (barcode, items) => {
  return items.find((item) => {
    return item.barcode === barcode;
  });
};

// addToBasket - adds an item to the basket
// The push() method adds one or more elements to the end of an array and returns the new length of the array
const addToBasket = (item, basket) => {
  basket.push(item);
};

// totalPrice - get the toal price of itmes in the basket
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const totalPrice = (basket) => {
  return basket.reduce((total, item) => {
    return total + item.price;
  }, 0);
  // if no initial value is supplied, the first element in the array will be used
};

// removeFromBasket - removes the item with the given barcode from the basket
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements
const removeFromBasket = (barcode, basket) => {
  const item = scan(barcode, basket);
  const index = basket.indexOf(item);

  basket.splice(index, 1);
};

// jest access to global variables in till.test.js
module.exports = {
  scan,
  addToBasket,
  totalPrice,
  removeFromBasket,
};
