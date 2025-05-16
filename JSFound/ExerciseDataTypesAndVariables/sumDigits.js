function sumDigits(number) {

    let numberToString = number.toString();
let sum = 0;

for (let curDigit = 0; curDigit < numberToString.length; curDigit++) {

sum += Number(numberToString[curDigit]) ;

}
console.log(sum);


}
sumDigits(97561)