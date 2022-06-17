//Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.sizePrice = 0;
  this.toppingsPrice = 0;
  this.totalPrice = 0;
}

Pizza.prototype.SizePrice = function() {
if (this.size === "Small") {
  this.sizePrice += 10;
}
if (this.size === "Medium") {
  this.sizePrice += 15;
}
if (this.size === "Large") {
  this.sizePrice += 18;
}
return this.sizePrice;
}

Pizza.prototype.ToppingPrice = function() {
  if (this.toppings.length === 0 ){
    this.toppingsPrice += 0;
  };
  if (this.toppings.length === 1 ) {
   this.toppingsPrice += 2;
  }
  if (this.toppings.length === 2) {
    this.toppingsPrice +=4
  }
  if (this.toppings.length >= 3) {
    this.toppingsPrice += 6;
  }
  return this.toppingsPrice;
}

Pizza.prototype.Cashier = function() {
  this.totalPrice = this.toppingsPrice + this.sizePrice;
  return this.totalPrice; 

}

//UI Logic

$(document).ready(function() {
  $("form#customerorder").submit(function(event) {
    event.preventDefault();
    
    let toppingsChoice = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingsChoice.push($(this).val());
    });
    let sizeChoice = $("input:radio[name=size]:checked").val();
    
    customersPizza = new Pizza (sizeChoice, toppingsChoice);
    customersPizza.SizePrice();
    customersPizza.ToppingPrice();
  
  $("#ordertotal").text("Your order comes to: $" + customersPizza.Cashier());
});
});

