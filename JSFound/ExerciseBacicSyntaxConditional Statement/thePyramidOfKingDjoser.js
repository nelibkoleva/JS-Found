function thePyramidOfKingDjoser(parameters, increment) {


let stone = 0;
let marble = 0;
let lapis = 0;
let gold = 0;

let heigh = 0;

for ( let curBase = parameters; curBase >= 1; curBase -=2 ) {

heigh += increment;

if ( curBase === 1 || curBase === 2 ) {

    gold += curBase;
}
if ( curBase !== 1 && curBase !== 2 ) {
stone += Math.pow((curBase-2), 2);
}
if ( (curBase !== 1 || curBase !== 2) && heigh % 5 !== 0) {
marble += Math.pow((curBase), 2) - Math.pow((curBase-2), 2)
}
}
console.log(marble);
console.log(stone);
console.log(heigh);
console.log(gold);
}
thePyramidOfKingDjoser(11,1)