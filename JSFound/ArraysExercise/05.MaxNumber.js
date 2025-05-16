function maxNumber(arr) {

    newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isNumberMax = true;

        let el = arr[i];

        for (let nextI = i + 1; nextI < arr.length; nextI++) {
            let nextEl = arr[nextI];

            if (el <= nextEl) {
                isNumberMax = false;
                break;
            }
        }
        if (isNumberMax) {

            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48])

// let newArr = [];
// let maxSoFar = -Infinity;

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] > maxSoFar) {
//         newArr.unshift(arr[i]);
//         maxSoFar = arr[i];
//     }
// }

// console.log(newArr.join(' '));
// }