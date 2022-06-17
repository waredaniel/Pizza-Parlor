//Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.sizePrice = 0;
  this.toppingsPrice = 0;

}

Pizza.prototype.SizePrice = function() {
if (this.size === "small") {
  this.sizePrice += 10;
}
if (this.size === "medium") {
  this.sizePrice += 15;
}
if (this.size === "large") {
  this.sizePrice += 18;
}
return this.sizePrice;
}

Pizza.prototype.ToppingPrice = function() {
  if (this.toppings.length === 1 ){
    this.toppingsPrice += 2;
  };
  if (this.toppings.length === 2 ) {
   this.toppingsPrice += 4;
  }
  else {
    this.toppingsPrice += 6;
  }
  return this.toppingsPrice;
}


// Pizza.prototype.Cashier = function() {
//   this.totalPrice = 0;
//   this.totalPrice = this.totalPrice + this.sizePrice;
//   return this.totalPrice;


// }

//UI Logic

customersPizza = new Pizza ("medium", ["cheese", "ham"]);
customersPizza.SizePrice();
customersPizza.ToppingPrice();


// customersPizza.Cashier();


console.log(customersPizza.sizePrice);
console.log(customersPizza.toppingsPrice);