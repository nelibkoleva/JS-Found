function searchForANumber(arr, tokens) {

    let [number, toDelete, search] = tokens;
    let newArr = [];
    
    for ( let i = 0; i < arr.length; i++ ) {
if (i < number) {

     let el = arr[i];
     newArr.push(el);
   
    }
     }
    
newArr.splice(0, toDelete);


       let count = 0;
     for (let j = 0; j < newArr.length; j++) {
        
          if (newArr[j] === search) {
               count++;
          }

}
   console.log(`Number ${search} occurs ${count} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
[3, 1, 5]

)