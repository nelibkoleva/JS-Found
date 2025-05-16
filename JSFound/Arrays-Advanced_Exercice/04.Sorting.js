function sorting(arr) {

//   let sortedArr = arr.sort((a, b) => b - a);
  let resultArr = [];

while (arr.length > 0) {
   
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    arr.splice(arr.indexOf(max), 1);
    arr.splice(arr.indexOf(min), 1);
    
    resultArr.push(max, min);

  }

    console.log(resultArr.join(" "));;
     
}

sorting([30, 15, 50, 5]);
