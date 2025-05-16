function processOddNumbers(arr) {

// let arrOdd = [];

//     for (let i = 0; i < arr.length; i++) {
// let el = arr[i];
// if ( i % 2 !== 0) {

//     arrOdd.unshift(el + el);
    
//     }

//     }

// console.log(arrOdd.join(' '));


// }

return arr.filter( (el, i) => i % 2 !== 0).map(el => el*2).reverse().join(' ');
}
console.log(processOddNumbers([10, 15, 20, 25]))


// let arrOdd = arr.filter( (el, i) => i % 2 !== 0);
// let newArr = arrOdd.map(el => el*2);
// let arrReversed = newArr.reverse();
// console.log(arrReversed);

// }

// function processOddNumbers(input) {

//     let arr = input.filter((element, index) => {
//         if (index % 2 === 1) {
//             return element;
//         }
//     });

//     let newArr = arr.map((x) => {
//         return x * 2;
//     });

//     newArr.reverse();
//     console.log(newArr.join(' '));
// }

// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);