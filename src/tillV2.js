// CONSTRUCTOR FUNCTION
function Till(products) {
  this.products = products;
  this.basket = [];
}

// OBJECTS PROTOTYPE
Till.prototype.scan = function scan(barcode, items) {
  return items.find((item) => {
    return item.barcode === barcode;
  });
};
// scan - finds an item by its barcode

Till.prototype.addToBasket = function addToBasket(item, basket) {
  basket.push(item);
};
// addToBasket - adds an item to the basket

Till.prototype.totalPrice = function totalPrice(basket) {
  return basket.reduce((total, item) => total + item.price, 0);
};
// totalPrice - get the toal price of itmes in the basket

Till.prototype.removeFromBasket = function removeFromBasket(barcode, basket) {
  const item = this.scan(barcode, basket);
  const index = basket.indexOf(item);

  basket.splice(index, 1);
};
// removeFromBasket - removes the item with the given barcode from the basket

// EXPORTS FUNCTION
module.exports = {
  Till,
};
// jest access to global variables in tillV2.test.js
