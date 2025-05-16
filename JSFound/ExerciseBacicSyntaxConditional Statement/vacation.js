function vacation(group,type,day) {

let pricePerPerson = 0;
let totalPrice = 0;

switch (day) {
    case "Friday"  :
        if (type === "Students") {
            pricePerPerson = 8.45;
            totalPrice = pricePerPerson * group; 
            if (group >= 30){
                totalPrice *= 0.85 ;
            }
        } else if (type === "Business") {
            pricePerPerson = 10.90;
            totalPrice = pricePerPerson * group; 
            if (group >= 100){
                totalPrice -= (10*pricePerPerson) ;
            }
        }  else if (type === "Regular") {
            pricePerPerson = 15;
            totalPrice = pricePerPerson * group; 
            if (group >= 10 && group <= 20){
                totalPrice *= 0.95 ;
        }
    }
        break;
        
    case "Saturday":
        if (type === "Students") {
            pricePerPerson = 9.80;
            totalPrice = pricePerPerson * group; 
            if (group >= 30){
                totalPrice *= 0.85 ;
            }
        } else if (type === "Business") {
            pricePerPerson = 15.60;
            totalPrice = pricePerPerson * group; 
            if (group >= 100){
                totalPrice -= (10*pricePerPerson) ;
            }
        }  else if (type === "Regular") {
            pricePerPerson = 20;
            totalPrice = pricePerPerson * group; 
            if (group >= 10 && group <= 20){
                totalPrice *= 0.95 ;
        }   
    }
        break;

    case "Sunday":
        if (type === "Students") {
            pricePerPerson = 10.46;
            totalPrice = pricePerPerson * group; 
            if (group >= 30){
                totalPrice *= 0.85 ;
            }
        } else if (type === "Business") {
            pricePerPerson = 16;
            totalPrice = pricePerPerson * group; 
            if (group >= 100){
                totalPrice -= (10*pricePerPerson) ;
            }
        }  else if (type === "Regular") {
            pricePerPerson = 22.50;
            totalPrice = pricePerPerson * group; 
            if (group >= 10 && group <= 20){
                totalPrice *= 0.95 ;
            }  
        }        
    
    }
console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday"
    
    )