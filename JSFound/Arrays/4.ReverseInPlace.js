function reverseAnArrayOfNumbers(arr) {

// for (let i = 0; i < arr.length / 2 ; i++) {
//     let curElement = arr[i];
//     let curI = arr.length - 1 - i;
//     arr[i] = arr[curI];
//     arr[curI] = curElement;
//     }
//   console.log(arr.join(' '));
// }


// втори начин:
// let revArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     revArr.push(arr[i]);
// }

// console.log(revArr.join(' '));
// }

// трети начин
// let newArr = arr.slice().reverse().join(' ');
// console.log(newArr);
// }
    
console.log(arr.reverse().join(' '));
}

reverseAnArrayOfNumbers(['a','b','c','d','e'])