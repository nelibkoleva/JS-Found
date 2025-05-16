// function distinctArray(arr) {

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }

    

// console.log(result.join(" "));
// }

// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

function distinctArray(arr) {
   // Use Set to remove duplicates and convert back to an array
   let uniqueArr = [...new Set(arr)];
   
   // Print the result as a space-separated string
   console.log(uniqueArr.join(" "));
}

// Call the function with a sample array
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]); // Output: 20 8 12 13 4 5



// let uniqueArr = [];
// let i = 0;

// // let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
// // let uniqueArr = arr.reduce((acc, curr) => {
//          if (uniqueArr.indexOf(arr[i]) === -1) {
//             uniqueArr.push(arr[i]);
//          } else {
       
//             uniqueArr[i] = arr[i];
      
  
