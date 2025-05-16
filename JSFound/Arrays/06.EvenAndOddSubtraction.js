function evenAndOddSubtraction(arr) {
    let sumEvens = 0 ;
    let sumOdds = 0;
   
for ( let i = 0; i < arr.length; i++) {
}

    for (let curI of arr) {
        if (curI % 2 === 0) {
            sumEvens += curI;
        } else {
            sumOdds += curI;
        }
    }

    console.log(sumEvens - sumOdds);

}
evenAndOddSubtraction([1,2,3,4,5,6])