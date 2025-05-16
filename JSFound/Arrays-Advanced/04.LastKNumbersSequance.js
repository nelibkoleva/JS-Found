// function lastKNumbersSequance(n, k) {

// let arr = [1];

// while ( arr.length < n){
// let kArr = arr.slice(-k);

// let sum = 0; 
// for( let i = 0; i < kArr.length; i++) {
   
//     let num = kArr[i];
// sum += num;

// }
// arr.push(sum);

// }
// console.log(arr.join(' '));
// }
// lastKNumbersSequance(8, 2)


// --------------------------

// function lastKNumbersSequance(n, k) {
//     let result = [1];

//     for (let i = 1; i < n; i++) {
//         let elements = result.slice(-k);
//         let current = 0;

//         for (let num of elements) {
//             current += num;
//         }

//         result.push(current);
//     }

//     console.log(result.join(' '));
// }

// lastKNumbersSequance(6, 3);
// lastKNumbersSequance(8, 2);

function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
      let start = Math.max(0, current - k);
      let end = current - 1;
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += seq[i];
      }
      seq[current] = sum;
    }
    console.log(seq.join(' '));
  }
   sumLastKNumbersSequence(6, 3)