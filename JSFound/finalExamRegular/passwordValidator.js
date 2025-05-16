function passValidator(commands) {
    let password = commands[0];
    for (let i = 1; i < commands.length; i++) {
        const command = commands[i].split(" ");
        if (command[0] === "Complete") {
            break;
        }
        switch (command[0]) {
            case "Make":
                if (command[1] === "Upper") {
                    const index = parseInt(command[2]);
                    password = password.slice(0, index) + password[index].toUpperCase() + password.slice(index + 1);
                    console.log(password);
                } else if (command[1] === "Lower") {
                    const index = parseInt(command[2]);
                    password = password.slice(0, index) + password[index].toLowerCase() + password.slice(index + 1);
                    console.log(password);
                }
                break;
            case "Insert":
                const insertIndex = parseInt(command[1]);
                const charToInsert = command[2];
                if (insertIndex >= 0 && insertIndex <= password.length) {
                    password = password.slice(0, insertIndex) + charToInsert + password.slice(insertIndex);
                    console.log(password);
                }
                break;
            case "Replace":
                const charToReplace = command[1];
                const value = parseInt(command[2]);
                const newChar = String.fromCharCode(charToReplace.charCodeAt(0) + value);
                if (password.includes(charToReplace)) {
                    password = password.split(charToReplace).join(newChar);
                    console.log(password);
                }
                break;
            case "Validation":
                if (password.length < 8) {
                    console.log("Password must be at least 8 characters long!");
                }
                if (!/^[a-zA-Z0-9_]+$/.test(password)) {
                    console.log("Password must consist only of letters, digits and _!");
                }
                if (!/[A-Z]/.test(password)) {
                    console.log("Password must consist at least one uppercase letter!");
                }
                if (!/[a-z]/.test(password)) {
                    console.log("Password must consist at least one lowercase letter!");
                }
                if (!/[0-9]/.test(password)) {
                    console.log("Password must consist at least one digit!");
                }
                break;
            default:
                break;
        }
    }
}
passValidator
    // ((['invalidpassword*',
    //     'Add 2 p',
    //     'Replace i -50',
    //     'Replace * 10',
    //     'Make Upper 2',
    //     'Validation',
    //     'Complete'])
    //     )
    (['123456789',
        'Insert 3 R',
        'Replace 5 15',
        'Validation',
        'Make Lower 3',
        'Complete'])
