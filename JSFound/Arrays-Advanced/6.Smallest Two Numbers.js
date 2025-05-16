function smallestTwoNumbers(arr) {

// let newArr = [];


// let smallestNumCount = 0;

// while ( smallestNumCount < 2) {
// let smallestNum = Math.min(...arr);
// let numIndex = arr.indexOf(smallestNum);
// arr.splice(numIndex, 1);

// smallestNumCount ++;

// newArr.push(smallestNum);

// }
// console.log(newArr.join(' '));


let newArr = arr.sort((a,b ) => a - b ); 
console.log(newArr.slice(0, 2).join(' '));

}

smallestTwoNumbers(
    // [30, 15, 50, 5])
    [3, 0, 10, 4, 7, 3])