function perfectNumber(n) {

function findDivisors(number) {
    let sum = 0;

for ( let curDivisor = 1; curDivisor < number; curDivisor++ ) {
    if ( number % curDivisor === 0 ) {
sum += curDivisor;
    }
}
    return sum;

}
// let sumOfDivisors = findDivisors(n);

// function isNumPerfect(num) {
// if (sumOfDivisors === num ) {
//     return `We have a perfect number!`;
// } else {
//    return`It's not so perfect.`;
// }
// }
// console.log(isNumPerfect(n));



// вариант 2:
let result = findDivisors(n) === n ? "We have a perfect number!" : "It's not so perfect.";
console.log(result);

}



perfectNumber(6)