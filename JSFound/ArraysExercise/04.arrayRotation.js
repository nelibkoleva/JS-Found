function arrayRotation(arr, rotations) {



for ( let curRotation = 1; curRotation <= rotations; curRotation++ ){
    let i = 0;
    let el = arr[i];


arr.push(el)
el = arr.shift();
}

console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)