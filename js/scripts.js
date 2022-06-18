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
  emptyArray = [];

  wholeOrder.toppings.forEach(function(theTopping) {
    console.log(theTopping);

    if (theTopping.toppings === userTopping) {
      alert("it worked");
      console.log(theTopping.toppings);
      emptyArray.append(theTopping.toppings)
    } 
  });
    return emptyArray 
};

checkOrder("Mushrooms", wholeOrder);
console.log(emptyArray);

//emptyArray.push






















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
