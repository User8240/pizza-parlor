function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

let pizzaOrder = {toppings: ["Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage"], size: ["Regular", "Large"]};
let pizzaOrderArray = [pizzaOrder]

function userOrder(toppings, size, pizzaOrderArray) {
  emptyArray = []
  pizzaOrderArray.forEach(function(order){
    if (pizzaOrderArray.toppings === toppings && pizzaOrderArray.size === size) {
      emptyArray.push(order)
    }
  });
  return emptyArray;
}
