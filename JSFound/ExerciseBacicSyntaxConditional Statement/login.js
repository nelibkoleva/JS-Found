function login(input) {

    let username = input.shift();

    let counter = 0;


    for (let index = 0; index <= input.length; index++) {
        let passTry = input[index];


        let pass = '';

        for (let i = passTry.length - 1; i >= 0; i--) {

            pass += passTry[i];
        }

        if (username === pass) {

            console.log(`User ${username} logged in.`);
            return;

        } else if (username !== pass) {
            counter++;
            if (counter > 3) {
                console.log(`User ${username} blocked!`);

                return;
            }
            console.log(`Incorrect password. Try again.`);

        }


    }


}

login(['momo', 'omom'])