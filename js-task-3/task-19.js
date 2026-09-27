let customerAge = 24;               
let minAgeRequired = 21;           
let hasDrivingLicense = true;      
let isVehicleAvailable = true;      

let rentalStatus = "";


if (customerAge >= minAgeRequired) {
    if (hasDrivingLicense) {
        if (isVehicleAvailable) {
            rentalStatus = "Success: Vehicle rental approved.";
        } else {
            rentalStatus = "Failed: The selected vehicle is currently out of stock.";
        }
    } else {
        rentalStatus = "Failed: A valid driving license is required to rent a vehicle.";
    }
} else {
    rentalStatus = "Failed: Customer must be at least 21 years old.";
}

console.log("Vehicle Rental Status:", rentalStatus);