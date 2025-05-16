function oddNums(number) {

let num = number;
let counter = 0;
let sum = 0;


for ( let curNum = 1; counter < num; curNum++ )
if ( curNum % 2 !== 0) {
counter++;
sum += curNum;
console.log(curNum);
}
console.log(`Sum: ${sum}`);
}
oddNums(1)