function cashRegister(cart){
  var items = Object.keys(cart); // array of items by key
  var sum = 0;

  for (var i = 0; i < items.length; i++) {
    var itemName = items[i]; // get the name of the key for the item
    var itemPrice = cart[itemName]; // get the price for the item
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}
