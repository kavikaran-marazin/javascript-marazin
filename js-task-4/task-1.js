// 1. Inventory Management System 
// Create a program using switch case and if-else. 
// Categories: Electronics, Food, Furniture. 
// Check stock status and display appropriate messages. 
// For Food category, also check expiry days.

let categories ="Electronics";
let stock = 48;
let expiry_days = 120;

let current_stock;
let iswanted_stock = 10;
let stocklimit = 8

switch (categories) {
    case "Electronics":
        if(stock>stocklimit){
            console.log("Stock is available");
            if(stock>=iswanted_stock){
                current_stock = stock - iswanted_stock
                console.log("Current Stock: ",current_stock);
                
            }
            else{
                console.log("Not enough Stock to Complete The process");
                
            }            
        }
        else if(stock>0){
            console.log("Low stock.");
            if(stock>=iswanted_stock){
                current_stock = stock - iswanted_stock
                console.log("Current Stock: ",current_stock);
                
            }
            else{
                console.log("Not enough Stock to Complete The process");
                
            }            

            
        }
        else{
            console.log("Empty Stock");   
        }
        break;

     case "Furniture":
        if(stock>stocklimit){
            console.log("Stock is available");
            if(stock>=iswanted_stock){
                current_stock = stock - iswanted_stock
                console.log("Current Stock: ",current_stock);
                
            }
            else{
                console.log("Not enough Stock to Complete The process");
                
            }            
        }
        else if(stock>0){
            console.log("Low stock.");
            if(stock>=iswanted_stock){
                current_stock = stock - iswanted_stock
                console.log("Current Stock: ",current_stock);
                
            }
            else{
                console.log("Not enough Stock to Complete The process");
                
            }            

            
        }
        else{
            console.log("Empty Stock");   
        }
        break;
    
     case "Food":
        if(stock>stocklimit){
            console.log("Stock available");
            if(expiry_days>30){
                console.log("Enough expiry days");

                if(stock>=iswanted_stock){
                    current_stock = stock - iswanted_stock
                    
                    
                    console.log("Current Stock: ",current_stock);
            }
                else{
                    console.log("enough expiry but Not enough Stock to Complete The process");
                
            } 
            }
            else if(expiry_days>0){
                console.log("Stock is nearly expiry");
                if(stock>=iswanted_stock){
                    current_stock = stock - iswanted_stock
                    
                    
                    console.log("Current Stock: ",current_stock);
            }
                else{
                    console.log(" Not enough Stock to Complete The process");
                
            } 
                
            }
            else{
                console.log("Food item expired");
                
            }

                     
        }
        else if(stock>0){
            console.log("Low stock.");

            if(expiry_days>30){
                console.log("enough expiry.");

                 if(stock>=iswanted_stock){
                    current_stock = stock - iswanted_stock
                    console.log("Current Stock: ",current_stock);
                }
                else{
                    console.log("Not enough Stock to Complete The process");
                
                }  
                
            }
            else if(expiry_days>0){
                console.log("stock is nearly expired");
                 if(stock>=iswanted_stock){
                    current_stock = stock - iswanted_stock
                    
                    
                    console.log("Current Stock: ",current_stock);
            }
                else{
                    console.log(" Not enough Stock to Complete The process");
                
            } 
                
            }
            else{
                console.log("Food item expired");
                
            }
        }
        else{
            console.log("Empty Stock");
            
        }
        break;

    default:
        break;
}

