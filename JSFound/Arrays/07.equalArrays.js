function equalArrays(arrFirst, arrSecond) {

let sum = 0 ;

   
    
for ( let i = 0; i < arrFirst.length; i++ ) {

    arrFirst[i] = Number(arrFirst[i]);


        arrSecond[i] = Number(arrSecond[i]);
    
 if (arrFirst[i] === arrSecond[i]) {

    sum += arrFirst[i];
    if (arrFirst.length-1 === i) {
    console.log(`Arrays are identical. Sum: ${sum}`);
   }


 } else {

    console.log(`Arrays are not identical. Found difference at ${i} index`);
break;
 }
    }


}

equalArrays(['1'], ['10'])