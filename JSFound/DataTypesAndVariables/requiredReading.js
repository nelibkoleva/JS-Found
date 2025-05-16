function requiredReading(bookPages, pagesPerHour, days) {

let totalTimeNeeded = bookPages / pagesPerHour ;
let timeNeededPerDay = totalTimeNeeded / days;

console.log(`Total time to read the book: ${totalTimeNeeded}`);
console.log(`Required hours per day: ${timeNeededPerDay}`);

}
requiredReading(432,
    15 ,
    4)