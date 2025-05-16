function spiceMustFlow(source) {


let daysCounter = 0;
let totalYield = 0;

while (source >= 100) {
daysCounter++;
totalYield += source;
source -= 10 ;
if (totalYield >= 26) {
    totalYield -= 26;
 }

}

if (totalYield >= 26) {
    totalYield -= 26;
 }


console.log(daysCounter);
console.log(totalYield);

}
spiceMustFlow(450)