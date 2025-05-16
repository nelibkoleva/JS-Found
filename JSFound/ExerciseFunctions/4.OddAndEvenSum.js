function oddAndEvenSum(num) {

    let numToString = num + '';
    let sumOdd = 0;
    let sumEven = 0;
  

function even(x) {

    for ( let i = 0; i < numToString.length; i++) {
        let numConverted = Number(numToString[i]);

        if ( numConverted % 2 === 0 ){
        sumEven += numConverted;
        // } else {
        // sumOdd += numConverted;    
        } 
    }
    return sumEven;
}
function odd(x) {

    for ( let i = 0; i < numToString.length; i++) {
        let numConverted = Number(numToString[i]);

        if (numConverted % 2 !== 0 ){
        sumOdd += numConverted;
        } 
    }
    return sumOdd;
}

let evenResult = even(num);
let oddResult = odd(num);

console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`);
}

oddAndEvenSum(
    // 1000435)
    3495892137259234)	 