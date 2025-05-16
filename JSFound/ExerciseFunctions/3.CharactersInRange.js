function charactersInRange(char1, char2) {
const startDigit = char1.charCodeAt(); 
const finalDigit = char2.charCodeAt(); 

let digitsBetween = [];

let start = Math.min(startDigit, finalDigit);
let end = Math.max(startDigit, finalDigit);
  
for( let i = start+ 1 ; i < end; i++) {

    digitsBetween.push(String.fromCharCode(i));

}
console.log(digitsBetween.join(' '));
}
charactersInRange('a',
'd'
)