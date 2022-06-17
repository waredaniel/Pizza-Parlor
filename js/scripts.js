//Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.SizePrice = function() {
if (this.size === "small") {
  this.price += 10;
}
if (this.size === "medium") {
  this.price += 15;
}
else {
  this.price += 20;
}
return this.price;
}

Pizza.prototype.ToppingAdd = function() {
  if (this.toppings.length = 1 ){
    this.price += 2;
  };
  return this.price;
}

customersPizza = new Pizza ("medium", "cheese");
customersPizza.SizePrice();