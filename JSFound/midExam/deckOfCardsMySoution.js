function deckOfCards (arr) {

    let listOfCards = arr.shift().split(', ');
    let commandsCount = parseInt(arr.shift());


for ( let i = 0; i < arr.length; i++){

let commands = arr[i].split(', ');
let command = commands[0];
let elOne = commands[1];
let elTwo = commands[2];
console.log(listOfCards);
switch (command) {
    case "Add": 
    if ( listOfCards.includes(elOne)){
    console.log("Card is already in the deck");
    } else {
    listOfCards.push(elOne);
       console.log("Card successfully added");
       console.log(listOfCards);
        break;
    }
    case "Remove": 
    if ( listOfCards.includes(elOne)){
        listOfCards.shift(elOne);
    console.log("Card successfully removed");
    console.log(listOfCards);
    } else {
       console.log("Index out of range");
        break;
    }

    
// •	"Remove, {CardName}":
// o	Remove the given card from the card deck and print:  "Card successfully removed"
// o	If it is not in the deck, print: "Card not found"
// •	"Remove At, {index}":
// o	Remove the card at the given index and print: "Card successfully removed"
// o	If the index is not in the range of the list, print: "Index out of range"
// •	"Insert, {index}, {CardName}":
// o	Add the card at the given index and print: "Card successfully added"
// o	If the index is out of range, print: "Index out of range"
// o	If the index is in range, but the card is already in the deck, print: "Card is already added"

}
}
}
deckOfCards (["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])
    