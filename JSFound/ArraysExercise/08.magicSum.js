function magicSum(arr, num) {
// function magicSum(arr, targetSum) {

//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let currentNum = arr[i];
//         let needNum = targetSum - currentNum;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] === needNum) {
//                 let pair = [currentNum, arr[j]];
//                 result.push(pair);
//             }
//         }
//     }

//     for (let k = 0; k < result.length; k++) {
//         console.log(result[k].join(" "));
//     }
// }
      

    for (let i = 0; i < arr.length; i++) {
        
       
        let neededNum = num - arr[i];

        for (let j = i + 1; j < arr.length; j++) {

   
            if (neededNum === arr[j]) {
                
                console.log(`${arr[i]} ${arr[j]}`);
            }
           
        }
       
    }
   
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27)

