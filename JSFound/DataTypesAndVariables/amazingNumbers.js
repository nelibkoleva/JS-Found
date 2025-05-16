function amazingNumbers(number) {

let amazing = false ;

let sum = 0;
number = number.toString();

for ( let i = 0; i < number.length; i ++) {

    sum += Number(number[i]);
}

if (sum == 9 ) {
    amazing = true;
    console.log(`${number} Amazing? ${amazing}`)
} else {
    console.log(`${number} Amazing? ${amazing}`);
}

  
}


amazingNumbers(999)