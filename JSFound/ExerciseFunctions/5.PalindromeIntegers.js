function palindromeIntegers(num) {

function isPalindrome(arr) {
let arrToString = arr + '';
let arrReversed = '';

    for ( let i = arrToString.length-1 ; i >= 0; i--) {

        let digitReversed = arrToString[i];
        arrReversed += digitReversed;
    }

    if (arrReversed === arrToString) {
            return true;
    } else {
            return false;
    }
}
    for ( let el of num ) {
          
        console.log(isPalindrome(el));

    }
}

palindromeIntegers(
[123,323,421,121])