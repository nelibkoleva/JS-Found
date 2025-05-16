function negativeOrPositiveNumbers(arr) {

    let newArr = [];
// arr = arr.map(Number);

// let newArr = [];

// arr() =>  (if i > 0 )push
// unshift
// console.log(newArr n/+);



// for (let num of input) {
//   num < 0 ? newArr.unshift(num) : newArr.push(num);
// }

for( let i = 0; i < arr.length; i++) {
let el = Number(arr[i]);

 if ( el >= 0 ) {

   newArr.push(el);
  } else {
    newArr.unshift(el);
  }
}
console.log(newArr.join('\n'));

// for (let element of newArr) {
//     console.log(element);
}



negativeOrPositiveNumbers(['7', '-2', '8', '9'])