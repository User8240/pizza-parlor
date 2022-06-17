function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

//let pizzaOrder = {toppings: ["Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage"], size: ["Regular", "Large"]};

let pizzaOrder = new Pizza(["Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage"], ["Regular", "Large"]);
let pizzaOrderArray = [pizzaOrder]
console.log(pizzaOrderArray);

function userOrder(toppings, size, pizzaOrderArray) {
  emptyArray = [];
  console.log(emptyArray);

  pizzaOrderArray.forEach(function(){
    if (pizzaOrderArray.toppings[i] === toppings && pizzaOrderArray.size[i] === size) {
      emptyArray.push(toppings + " " + size);
      console.log(toppings);
    }
  });
  return emptyArray;
}
userOrder("Extra Cheese", "Regular", pizzaOrderArray);
console.log(emptyArray);
