function orders(product, quantity) {

let price = 0;

let totalPrice = 0;

switch (product) {
    case "coffee": price = 1.5;  totalPrice = (price, quantity) => price * quantity; console.log(totalPrice(price, quantity).toFixed(2)); break;
    case "water": price = 1; totalPrice = (price, quantity) => price * quantity; console.log(totalPrice(price, quantity).toFixed(2)); break;
    case "coke": price = 1.4; totalPrice = (price, quantity) => price * quantity; console.log(totalPrice(price, quantity).toFixed(2)); break;
    case "snacks": price = 2; totalPrice = (price, quantity) => price * quantity; console.log(totalPrice(price, quantity).toFixed(2)); break;
}


// console.log(totalPrice("water", 5));
}

orders("coffee", 2)