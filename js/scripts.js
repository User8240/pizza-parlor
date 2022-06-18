function Pizza(toppings, sizes){
  this.toppings = toppings;
  this.sizes = sizes;
};

//define variables/objects for pizza toppings 
let none = { toppings: "None" };
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
  toppings: [none, extraCheese, pepperoni, blackOlives, mushrooms, bellPeppers, bacon, sausage],
  sizes: [regular, large]
};

// Pizza.prototype.price = function(priceArray){
//   this.pizzaTotal = 0
//   if (priceArray[i] === "Regular") {
//     pizzaTotal += 8 
//   } else {
//     pizzaTotal += 12
//   }
//   return pizzaTotal
// };

function checkOrder(userTopping, userSize, wholeOrder) {
  emptyArray = [];
  priceArray = [] 

  wholeOrder.toppings.forEach(function(theTopping) {
    console.log(theTopping);

    if (theTopping.toppings === userTopping) {
      //console.log(theTopping.toppings);
      emptyArray.push(theTopping.toppings);
      console.log(userTopping);
    }; 
  });
    
  wholeOrder.sizes.forEach(function(theSize) {
    console.log(theSize);

    if (theSize.sizes === userSize) {
      //console.log(theSize.sizes);
      priceArray.push(theSize.sizes);
     }; 
  });
return emptyArray 
};

checkOrder("Mushrooms", "Regular", wholeOrder);
console.log(emptyArray);
console.log(priceArray);


// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     let none = $("#none").val();
//     let userOutput = checkOrder(none);
//     $(".userOutput").text(userOutput);
//     console.log(userOutput);


//     $("#show-order").show();
//   });
// });

