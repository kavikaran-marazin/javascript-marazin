 let Previous_Reading = 1250 
 let Current_Reading = 1480
 let Price_Per_Unit = 35

 let consumed_charge = Current_Reading - Previous_Reading;
 let total_charge = consumed_charge * Price_Per_Unit;

 let service_charge = 500;
 let discout = 200;
 total_charge = total_charge+service_charge-discout;

 console.log(total_charge);
 
