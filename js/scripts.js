function Pizza(toppings, sizes){
  this.toppings = toppings;
  this.sizes = sizes;
};

Pizza.prototype.price = function() {
  let pizzaTotal = 0;

  if (this.toppings === "Yes") {
    pizzaTotal += 2; 
  } else {
    pizzaTotal += 0;
  }

  if (this.sizes === "Regular (12in)") {
    pizzaTotal += 8;
  } else {
    pizzaTotal +=12;
  }
  return pizzaTotal
};


$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let extraCheese= $("#extraCheese").val();
    let pepperoni = $("#pepperoni").val();
    let blackOlives = $("#blackOlives").val();
    let mushrooms = $("#mushrooms").val();
    let bellPeppers = $("#bellPeppers").val();
    let bacon = $("#bacon").val();
    let sausage = $("#sausage").val();

    let size = $("#size").val();
    let requests = $("input#requests").val();

    let order = new Pizza(extraCheese, size);
    let price = order.price();

    $(".price").text("Your total is $" + price)
    $(".extraCheese").text(extraCheese);
    $(".pepperoni").text(pepperoni);
    $(".blackOlives").text(blackOlives);
    $(".mushrooms").text(mushrooms);
    $(".bellPeppers").text(bellPeppers);
    $(".bacon").text(bacon);
    $(".sausage").text(sausage);
    $(".size").text(size);
    $(".requests").text(requests);
    $("#show-order").show();
  });

  $("#hideResults").click(function(event) {
    $("#extraCheese").val("");
    $("#pepperoni").val("");
    $("#blackOlives").val("");
    $("#mushrooms").val("");
    $("#bellPeppers").val("");
    $("#bacon").val("");
    $("#sausage").val("");
    $("#size").val("");
    $("input#requests").val("");
    $("#show-order").text("");
  });
});


