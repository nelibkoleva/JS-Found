function easterEggs(data) {

   
        const text = data[0];
        const regex = /[@#]+([a-z]{3,})[^a-zA-Z0-9+$]*\/(\d+)\//g;
        let match;
        
        while ((match = regex.exec(text)) !== null) {
            const color = match[1];
            const amount = match[2];
            console.log(`You found ${amount} ${color} eggs!`);
        }
    }

easterEggs
// ((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']))
(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])