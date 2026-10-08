let hasValidTicket = true;         
let hasValidPassport = true;       
let baggageWeight = 20;             
let maxAllowedWeight = 23;        

let checkInStatus = "";

if (hasValidTicket) {
    if (hasValidPassport) {
        if (baggageWeight <= maxAllowedWeight) {
            checkInStatus = "Success: Check-in complete. Boarding pass issued!";
        } else {
            checkInStatus = "Failed: Baggage weight exceeds the maximum allowed limit.";
        }
    } else {
        checkInStatus = "Failed: A valid passport is required for check-in.";
    }
} else {
    checkInStatus = "Failed: Invalid or missing flight ticket.";
}

console.log("Airport Check-in Status:", checkInStatus);