// function listOfProducts(input) {

// let arr = input.slice()
   
//     .sort()
//     .map((el, i) => console.log(`${i + 1}.${el}`));
// }



// listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])


function listOfProducts() {
let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
//  words.sort()
//   ['Eggs', 'Grip', 'bite', 'jAw', 'nest']  ASCII
words.sort((a, b) => a.localeCompare(b)); 
 console.log(words);
 // ['bite', 'Eggs', 'Grip', 'jAw', 'nest']     ?????


}
listOfProducts()