
function addAndSubstract(arr) {
    let newArr = [];
    let sumArr = 0;
    let sumArrNew = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // Using ternary operator to assign newNum
        let newNum = (num % 2 === 0) ? num + i : num - i;

        newArr.push(newNum);
        sumArr += num;
        sumArrNew += newNum;
    }

    console.log(newArr);
    console.log(sumArr);
    console.log(sumArrNew);
}

addAndSubstract([5, 15, 23, 56, 35])