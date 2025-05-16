function signCheck(numOne, numTwo, numThree) {

    function resultOne(numOne, numTwo) {
return numOne * numTwo ;
    }
let firstMultiplier = resultOne(numOne, numTwo);
let result = firstMultiplier * numThree;

if (result > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

}
signCheck( 5,
    12,
   -15
   )