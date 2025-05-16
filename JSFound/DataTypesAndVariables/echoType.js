function echoType(parameter) {



    
let type = typeof parameter;

    


if ( type == 'string' || type == 'number' ) {
    console.log(typeof parameter);

console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType('Hello, JavaScript!')