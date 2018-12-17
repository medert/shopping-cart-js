// your code, here

let apple = {
  itemName: 'Apple',
  quantity: 10
};

let carrot = {
  itemName: 'Carrot',
  quantity: 2
};

let shoppingCart = [];

shoppingCart.push(apple);
shoppingCart.push(carrot);

shoppingCart.forEach(item => {
  console.log(`${item.itemName}: ${item.quantity}` );
});
