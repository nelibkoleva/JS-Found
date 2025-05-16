function mergeArrays(arr, arr2) {

let newArr = [];

for ( let i = 0; i < arr.length; i++) {

let el = arr[i];
let el2 = arr2[i];

if ( i % 2 === 0) {
   newArr.push(Number(el) + Number(el2)) ;

} else {

    newArr.push(el + el2);
}
}

console.log(newArr.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
    )