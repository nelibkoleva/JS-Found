function dictionary(data) {
    const wordDefinitions = data[0].split(' | ');
    const testWords = data[1].split(' | ');
    const command = data[2];
    const dictionary = {};

    wordDefinitions.forEach(pair => {
        const [word, definition] = pair.split(': ');
        if (!dictionary[word]) {
            dictionary[word] = [];
        }
        dictionary[word].push(definition);
    });

    if (command === 'Test') {
        
        testWords.forEach(word => {
            if (dictionary[word]) {
                console.log(`${word}:`);
                dictionary[word].forEach(definition => {
                    console.log(` -${definition}`);
                });
            }
        });
    } else if (command === 'Hand Over') {
      
        console.log(Object.keys(dictionary).join(' '));
    }
}


// dictionary([
//     "programmer: an animal, which turns coffee into code | developer: a magician",
//     "fish | domino",
//     "Hand Over"
// ]);
// Output: programmer developer

dictionary([
    "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"
]);
// Output:
// care:
//  -worry, anxiety, or concern
//  -a state of mind in which one is troubled

// dictionary([
//     "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
//     "bit | code | tackle",
//     "Test"
// ]);
// Output:
// bit:
//  -a small piece, part, or quantity of something
//  -a short time or distance
// code:
//  -write code for a computer program
// tackle:
//  -the equipment required for a task or sport
//  -make determined efforts to deal with a problem