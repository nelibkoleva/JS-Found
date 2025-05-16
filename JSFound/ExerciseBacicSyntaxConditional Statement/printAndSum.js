function printAndSum(start,stop) {

let sum = 0;
let numsOnSameRow = '';

while ( start <= stop) {
    sum += start;
    numsOnSameRow += start + ' ';

 
    start++;
}
console.log(numsOnSameRow);
console.log(`Sum: ${sum}`);
}
printAndSum(5,10)