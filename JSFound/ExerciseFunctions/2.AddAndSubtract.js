function addAndSubstract(num1, num2, num3) {

    function add(x, y) {
       return x + y; 
    }
    function substract(x, y) {
        return x - y;
    }
    let addResult = add(num1, num2);
    let substractResult = substract(addResult, num3);

console.log(substractResult);
}
addAndSubstract(23,
    6,
    10
    )