function multiplicationTable(multiplier) {

for (let num = 1; num <= 10 ; num++) {
   
result = num * multiplier;
console.log(`${multiplier} X ${num} = ${result}`);
}
}
multiplicationTable(5)