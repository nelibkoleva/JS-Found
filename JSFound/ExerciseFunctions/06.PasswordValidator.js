function passwordValidator(clientPass) {

    function checkPassLength(clientPass) {
        if (clientPass.length >= 6 && clientPass.length <= 10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }
    function checkIfAlphanumeric(clientPass) {
        let pattern = /^[A-Za-z0-9]+$/;
        if (pattern.test(clientPass)) {
            return true;
        } else {
            console.log(`Password must consist only of letters and digits`);
            return false;
        }
    }
    function checkIfMin2Digits(clientPass) {
        let pattern = /[0-9]{2,}/;
        if (pattern.test(clientPass)) {
            return true;
        } else {
            console.log(`Password must have at least 2 digits`);
            return false;
        }
    }

    const isValidPassLenght = checkPassLength(clientPass);
    const isValidAlphanumeric = checkIfAlphanumeric(clientPass);
    const isValidMin2Digits = checkIfMin2Digits(clientPass);

    if (isValidAlphanumeric && isValidMin2Digits && isValidPassLenght) {
        console.log(`Password is valid`);
    }

}
passwordValidator('Pa$s$s')