// function sumFirstAndLast(arr) {
// let sum = 0;

//     let end = arr.pop();
//     let start = arr.shift();
// sum = Number(end) + Number(start);

// console.log(sum);
// }

function solve(input) {
    input = input.map(Number);
     console.log(input[0] 
                 + input.pop());
    }


    function sumFirstAndLast(input) {
        let first = Number(takeFirst(input));
        let last = Number(takeLast(input));
    
        function takeFirst(arr) {
            return arr.shift();
        }
    
        function takeLast(array) {
            return array.pop();
        }
    
        return first + last;
    }

sumFirstAndLast(['20', '30', '40'])