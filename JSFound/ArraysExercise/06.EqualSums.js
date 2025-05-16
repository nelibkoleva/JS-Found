function equalSums(arr) {

    let isFound = false;

    for (let i = 0; i < arr.length; i++) {

        let sumLeft = 0;
        let sumRight = 0;

        for (let iLeft = 0; iLeft < i; iLeft++) {

            let numLeft = arr[iLeft];
            sumLeft += numLeft;
        }
        for (let iRight = i + 1; iRight < arr.length; iRight++) {
            let numRight = arr[iRight];

            sumRight += numRight;

        }

        if (sumLeft === sumRight) {
            console.log(i);
            isFound = true;
            break;
        }
    } if (!isFound) {
        console.log(`no`);
    }
}
equalSums([1, 2, 3, 3])