function theatrePromotions(day,age) {

let price = 0;

if (0 <= age && age <= 18) {

    if (day === "Weekday") {
        price = 12;
        console.log(`${price}$`);
    } else if (day === "Weekend") {
        price = 15;
        console.log(`${price}$`);
    } else if (day === "Holiday") {
        price = 5;
        console.log(`${price}$`);
    }
} else if (18 < age  && age <= 64) {
    if (day === "Weekday") {
        price = 18;
        console.log(`${price}$`);
    } else if (day === "Weekend") {
        price = 20;
        console.log(`${price}$`);
    } else if (day === "Holiday") {
        price = 12;
        console.log(`${price}$`);
    }

} else if (64 < age && age <= 122) {

    if (day === "Weekday") {
        price = 12;
        console.log(`${price}$`);
    } else if (day === "Weekend") {
        price = 15;
        console.log(`${price}$`);
    } else if (day === "Holiday") {
        price = 10;
        console.log(`${price}$`);
    }

} else {
console.log("Error!");
}
}

theatrePromotions('Weekday', 
42
)

// Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
// Weekday	12$	18$	12$
// Weekend	15$	20$	15$
// Holiday	5$	12$	10$
