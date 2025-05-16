function sortByTwoCriteria(arr) {
//   return arr.sort((a, b) => {
//     if (a.length === b.length) {
//       return a.localeCompare(b);
//     } else {
//       return a.length - b.length;
//     }
//   });
// }
// console.log(sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])); // ['beta', 'alpha', 'gamma']





let sortedArr = arr.sort((a, b) => a.length === b.length  ? a.localeCompare(b) : a.length - b.length);

console.log(sortedArr.join('\n'));
}
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']); // ['beta', 'alpha', 'gamma']

// we can use and || to solve this problem

// let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
// сортирай по дължина на стринга, а след това по азбучен ред
// console.log(sortedArr.join('\n'));


