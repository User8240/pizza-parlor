function Pizza(toppings, sizes){
  this.toppings = toppings;
  this.sizes = sizes;
}

//define variables/objects for pizza toppings 
let extraCheese = { toppings: "Extra Cheese" };
let pepperoni = {toppings: "Pepperoni"};
let blackOlives = {toppings: "Black Olives"};
let mushrooms = {toppings: "Mushrooms"};
let bellPeppers = {toppings: "Bell Peppers"};
let bacon = {toppings: "Bacon"};
let sausage = {toppings: "Sausage"};
let regular = {sizes: "Regular"};
let large = {sizes: "Large"};

let wholeOrder = {
  toppings: [extraCheese, pepperoni, blackOlives, mushrooms, bellPeppers, bacon, sausage],
  sizes: [regular, large]
};

//wholeOrder.toppings;

function checkOrder(userTopping, userSize, wholeOrder) {
  emptyArray = [];

  wholeOrder.toppings.forEach(function(theTopping) {
    console.log(theTopping);

    if (theTopping.toppings === userTopping) {
      alert("it worked");
      console.log(theTopping.toppings);
      emptyArray.push(theTopping.toppings)
    } 
  });
    
  wholeOrder.sizes.forEach(function(theSize) {
    console.log(theSize);

    if (theSize.sizes === userSize) {
      alert("it worked");
      console.log(theSize.sizes);
      emptyArray.push(theSize.sizes)
    }; 
  });
return emptyArray 
};

checkOrder("Mushrooms", "Regular", wholeOrder);
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
