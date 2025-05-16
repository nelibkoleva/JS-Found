function sumEvenNumbers(arr) {


let sum = 0 ;
for ( let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    }

    for (let curI of arr) {
        if (curI % 2 === 0) {
            sum += curI;
        }
    }

    console.log(sum);
}



sumEvenNumbers(['1','2','3','4','5','6']);