# Pizza-Parlor

Pizza-Parlor is an HTML5 webpage that uses JavaScript objects and constructors to take an inputted form and return an output price  reflecting the users input choices.

## Contributors

Daniel Ware <waredanielb@gmail.com>

## Link

https://github.com/waredaniel/Pizza-Parlor

# Technologies Used

HTML5, CSS, Bootstrap, Javascript, jQuery 3.6.0

## Application Setup

1. Clone repository to your desktop. 
2. Navigate to 'Pizza-Parlor' folder. 
3. Open index.html in your web browser.

## GitHub Site

https://waredaniel.github.io/Pizza-Parlor/

## Known Bugs

None

## Copyright

Daniel Ware 2022

## License

MIT

## Testing

Describe: Pizza()

Test: "It should return a Pizza object with two properties for size and toppings"
Code: const myPizza = new Pizza( "medium", ["cheese", "olives"]);
Expected Output: Pizza { size: "medium", toppings: ["cheese, "olives"] }

Test: "It should return a Pizza object with properties for size, toppings, sizePrice, and toppingsPrice"
Code: const myPizza = new Pizza ("medium", ["cheese", "olives"]);
Expected Output: Pizza { size: "medium", toppings: ["cheese, "olives"], sizePrice: 15, toppingsPrice: 4}

Test: "It should return a Pizza object with properties for size, toppings, sizePrice, toppingsPrice", and totalPrice"
Code: const myPizza = new Pizza ("medium", ["cheese", "olives"]);
Expected Output: Pizza { size: "medium", toppings: ["cheese, "olives"], sizePrice: 15, toppingsPrice: 4, totalPrice: 19}