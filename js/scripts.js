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

//-----------------------------------------------------------------------
function Topping(toppings){
  this.toppings = toppings;
}

function Size(sizes){
  this.sizes = sizes;
}

let allToppings = new Topping("Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage")
let allSizes = new Size("Regular", "Large")

orderArray = [allToppings, allSizes]
console.log(orderArray);

function checkOrderDetails(toppings, sizes, orderArray){
    emptyArray = []
    orderArray.forEach(function(object){
      if (object.toppings === toppings && object.sizes === sizes){
        emptyArray.push(object);
    }
  });
  return emptyArray;
}

checkOrderDetails("Extra Cheese", "Regular", orderArray);

//-------------------------------------------------------------
function Topping(toppings){
  this.toppings = toppings;
}

function Size(sizes){
  this.sizes = sizes;
}


let allToppings = new Topping(["Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage"])
let allSizes = new Size(["Regular", "Large"])

orderArray = [allToppings, allSizes]

function checkOrderDetails(toppings, sizes, orderArray){
    emptyArray = []
    orderArray.forEach(function(object){
      if (object.toppings === toppings[i] || object.sizes === sizes[i]){
        emptyArray.push(object);
    }
  });
  return emptyArray;
}

checkOrderDetails("Extra Cheese", "Regular", orderArray);