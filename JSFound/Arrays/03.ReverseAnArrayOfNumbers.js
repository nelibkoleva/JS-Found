// function reverseAnArrayOfNumbers(numbers, arr) {

//     let newArr = [];
//     for (let i = 0; i < numbers; i++) {

//         let curNumber = (arr[i]);
//         newArr.push(curNumber);
//     }

// let reversedArray = newArr.reverse();
// console.log(reversedArray.join(' '));

// или

    // let output = '';

    // for (i = newArr.length - 1; i >= 0; i--) {

    //     output += `${newArr[i]} `;

    // }
    // console.log(output);

// }

// или 3-ти вариант :
function reverseAnArrayOfNumbers(numbers, arr) {

    console.log(arr.slice(0,numbers).reverse().join(' '));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])