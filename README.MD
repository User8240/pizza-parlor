# _Pizza Parlor_

#### By _**Grace Kostanich**_

#### _A webpage where users can order a pizza, choose their toppings, and calculate the total price!_

## Technologies Used

* _HTML_
* _CSS_
* _JS_

## Description

_This is a webpage written in HTML using Bootstrap CSS for styling & JavaScript for all logic & functionality._

## Setup/Installation Requirements

* _Fork project to your own GitHub repository_ 
* _Clone that repository to your desktop_
* _Open index.html or view any files you'd like!_

## Known Bugs

* _PLACE ORDER button will not submit after RESET button is clicked_

## License

_none_

Copyright (c) _6/17/2022_ _Grace Kostanich_

## Tests


**Describe:** _Pizza();_


**Test:** _It will use the Pizza constructor to create Pizza object(s) containing these properties: toppings and size_  

Code: _let myPizza = new Pizza("Cheese", "Regular");_  
      _myPizza;_  

Expected Output: _Pizza {toppings: 'Cheese', size: 'Regular'}_  

**Test:** _It will create a predefined list of topping and size for each property; It'll include the list as another object inside of toppings and size_  

Code: _let allToppings = {toppings: ["extraCheese", "Peperoni"], size: ["Regular", "Large"]};_  
_allToppings.toppings;_  
_allToppings.size;_  

Expected Output: _allToppings;_  
_{toppings: Array(2), size: Array(3)}_  
 _allToppings.toppings_  
_(2) ['extraCheese', 'Peperoni']_  
_allToppings.size_  
_(3) ['Regular', 'Large']_    

**Test:** _It will loop through each object, check it's value to see if it's equal to the users input, and if true, the value will be pushed to an array_  

Code: _checkOrder("Pepperoni", wholeOrder);  
console.log(emptyArray);_  

Expected Output: _{toppings: 'Extra Cheese'}  
VM3062:28 {toppings: 'Pepperoni'}    
VM3062:28 {toppings: 'Black Olives'}  
VM3062:28 {toppings: 'Mushrooms'}  
VM3062:28 {topping: 'Bell Peppers'}  
VM3062:28 {topping: 'Bacon'}  
VM3062:28 {topping: 'Sausage'}  
VM3062:40 ['Pepperoni']_  
