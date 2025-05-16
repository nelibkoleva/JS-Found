function ladybugs(arr) {

    let fieldLength = arr.shift(0);
    let ladybugsArr = arr.shift(0);

    let ladybugOnBlock = ladybugsArr.split(' ').map(Number);

    let cells = [];

    for (let i = 0; i < fieldLength; i++) {
        if (ladybugOnBlock.includes(i)) {
            cells[i] = 1;
        } else {
            cells[i] = 0;
        }
    }

    for (let k = 0; k < arr.length; k++) {

        let commands = arr[k];
        let command = commands.split(' ');

        let bugNumber = Number(command[0]);
        let direction = command[1];
        let movement = Number(command[2]);


        if (!cells[bugNumber]) {
            continue;
        }

        cells[bugNumber] = 0;

        if (direction === "right") {
            let newIndex = bugNumber + movement;

            if (newIndex < cells.length) {
                while (cells[newIndex] == 1) {
                    newIndex += movement;
                }
                if (newIndex < cells.length) {

                        cells[newIndex] = 1;
                }
                }
            } else {

            let newIndex = bugNumber - movement;

            if (newIndex >= 0) {
                while (cells[newIndex] === 1) {
                    newIndex -= movement;
                }
                if (newIndex >= 0) {

                        cells[newIndex] = 1;

                    }
                }
            }
        }
    

    console.log(cells.join(` `));
    }
ladybugs
    // ([3, '0 1',
    //     '0 right 1',
    //     '2 right 1'])


    // ([3, '0 1 2',
    //     '0 right 1',
    //     '1 right 1',
    //     '2 right 1'])

    ([5, '3',
        '3 left 2',
        '1 left -2'])

