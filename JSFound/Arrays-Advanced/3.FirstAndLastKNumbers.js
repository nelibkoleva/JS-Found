function firstAndLastKNumbers(arrPrime) {

// let k = arrPrime.shift();

// let arrFront = [];
// let arrBack = [];
// let i = 0;

// while ( i < k) {

//     let el = arrPrime[i];

//     arrFront.push(el);
//     i++;
// }

// let j = arrPrime.length - k; 
// while ( j < arrPrime.length) {

//     let el = arrPrime[j];

//     arrBack.push(el);
//     j++;
// }

// console.log(arrFront.join(' '));
// console.log(arrBack.join(' '));


let k = arrPrime.shift();
let firstK= arrPrime.slice(0,k )
// let lastK = arrPrime.slice(k*-1);
let lastK = arrPrime.slice(arrPrime.length-k);

console.log(firstK.join(' '));
console.log(lastK.join(' '));
}


firstAndLastKNumbers
// ([2, 7, 8, 9])
([3,
    6, 7, 8, 9])
   

