function loadingBar(num) {


       
        function barFormation(n) {
    
let bar = '';
for ( let curDivisor = num; curDivisor > 0; curDivisor-- ) {
if (curDivisor % 10 === 0){
bar += '%';
}
}
if ( num < 100 ) {
    bar += '.'.repeat(10-num/10);
}

return bar
        }

        let barVisual = barFormation(num);

if (num === 100) {
    console.log(`100% Complete!`);
    console.log(`[${barFormation(num)}]`);



} else {

console.log(`${num}% [${barFormation(num)}]`);
console.log(`Still loading...`);
}





// 2-ри вариант:
// // let result = '';
// result = `${n}% Complete!\n` + '[' + loadedItems(n) + ']';
// } else {
//     result = `${n}% [${loadedItems(n)}${dots(n)}]\nStill loading...`;


// 3-ти вариант:
// let result = '';
// let result = n === 100 ? `${n}% Complete!\n` + '[' + loadedItems(n) + ']' : `${n}% [${loadedItems(n)}${dots(n)}]\nStill loading...`;



}

loadingBar(100)