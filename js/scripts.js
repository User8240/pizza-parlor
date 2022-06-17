function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

//let pizzaOrder = {toppings: ["Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage"], size: ["Regular", "Large"]};

let pizzaOrder = new Pizza(["Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage"], ["Regular", "Large"]);
console.log(pizzaOrder);
let pizzaOrderArray = [pizzaOrder]
console.log(pizzaOrderArray);

function userOrder(toppings, size, pizzaOrderArray) {
  emptyArray = [];
  console.log(emptyArray);

  pizzaOrderArray.forEach(function(){
    if (pizzaOrderArray.toppings === toppings || pizzaOrderArray.size === size) {
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

//define variables/objects for pizza toppings 
let extraCheese = { toppings: "Extra Cheese" };
let pepperoni = {toppings: "Pepperoni"};
let blackOlives = {toppings: "Black Olives"};
let mushrooms = {toppings: "Mushrooms"};
let bellPeppers = {topping: "Bell Peppers"};
let bacon = {topping: "Bacon"};
let sausage = {topping: "Sausage"};

let allToppings = { toppings: [extraCheese, pepperoni, blackOlives, mushrooms, bellPeppers, bacon, sausage] };

//define variables/objects for pizza sizes
let regular = {sizes: "Regular"};
let large = {sizes: "Large"};

let allSizes = {sizes: [regular, large]};

// let allToppings = new Topping("Extra Cheese", "Pepperoni", "Black Olives", "Mushrooms", "Bell Peppers", "Bacon", "Sausage")
// let allSizes = new Size("Regular", "Large")

orderArray = [allToppings, allSizes]
console.log(orderArray)

function checkOrderDetails(userToppings, userSize, orderArray){
    emptyArray = []
    orderArray.forEach(function(bothObjects){
      if (bothObjects.allToppings === userToppings || bothObjects.allSizes === userSize){
        emptyArray.push("test");
    }
  });
  return emptyArray;
}

checkOrderDetails("Extra Cheese", "Regular", orderArray);
//--------------------------------------------------------------------------------------------




function Pizza(toppings, sizes){
  this.toppings = toppings;
  this.sizes = sizes;
}

//define variables/objects for pizza toppings 
let extraCheese = { toppings: "Extra Cheese" };
let pepperoni = {toppings: "Pepperoni"};
let blackOlives = {toppings: "Black Olives"};
let mushrooms = {toppings: "Mushrooms"};
let bellPeppers = {topping: "Bell Peppers"};
let bacon = {topping: "Bacon"};
let sausage = {topping: "Sausage"};
let regular = {sizes: "Regular"};
let large = {sizes: "Large"};

let wholeOrder = {
  toppings: [extraCheese, pepperoni, blackOlives, mushrooms, bellPeppers, bacon, sausage],
  sizes: [regular, large]
};

//wholeOrder.toppings;

function checkOrder(userTopping, wholeOrder) {
  emptyArray = []

  wholeOrder.toppings.forEach(function(theTopping) {
    console.log(theTopping);

    if (theTopping.topping === userTopping) {
      console.log(userTopping);
    }
  });

}

checkOrder(mushrooms, wholeOrder);






















// orderArray = [allToppings, allSizes]
// console.log(orderArray)

// function checkOrderDetails(userToppings, userSize, orderArray){
//     emptyArray = []
//     orderArray.forEach(function(bothObjects){
//       if (bothObjects.allToppings === userToppings || bothObjects.allSizes === userSize){
//         emptyArray.push("test");
//     }
//   });
//   return emptyArray;
// }

// checkOrderDetails("Extra Cheese", "Regular", orderArray);
