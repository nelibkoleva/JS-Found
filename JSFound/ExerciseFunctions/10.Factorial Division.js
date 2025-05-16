function factorialDivision(firstNum, secNum) {


    function factorial(n) {
        if (n === 0) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      }


function finalResult(num1, num2) {

      let firstResult = factorial(num1);
      let secResult = factorial(num2);
      let result = firstResult/secResult;
    return  result;
}
console.log((finalResult(firstNum, secNum)).toFixed(2));

}
factorialDivision(5,2)