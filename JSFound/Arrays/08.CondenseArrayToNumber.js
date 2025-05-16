function condenseArrayToNumber(arr) {

    let newArr = [];

    while (arr.length > 1) {

        for (let i = 0; i < arr.length - 1; i++) {

            let curElement = arr[i];
            let nextElement = arr[i + 1];

            newArr.push(curElement + nextElement);
        }
        arr = newArr;
        newArr = [];
    }
    console.log(arr[0]);
}

condenseArrayToNumber([2, 10, 3])