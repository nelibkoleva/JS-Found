function integerAndFloat(firstNum, secNum, thirdNum) {

let sum = firstNum + secNum + thirdNum;
let type = '';

if ( sum % 1 === 0) {

type = 'Integer';
} else {
    type = 'Float'; 
}



console.log(`${sum} - ${type}`);
}


integerAndFloat(100, 200, 303)