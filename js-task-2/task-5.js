let stock = 3;
let reorder_level = 5;
let expiry_days = 30;

if(stock<=0){
    console.log("Out of Stock");
    
}
else if(stock >= reorder_level ){
    if(expiry_days <= 30){
        console.log("In Stock & Near Expiry");
    }
    else{
        console.log("Stock Available");
        
    }
}
else {
    if(expiry_days <= 30){
        console.log("Low Stock & Near Expiry");
    }
    else{
        console.log("Low Stock");
        
    }
}

