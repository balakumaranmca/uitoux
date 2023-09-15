import mongoose from "mongoose";
import vehicleData from "../models/uitouxvehicle.model";
import dbConnection  from "../databses/uitoux.mongoose";


let resultData;
let saveCounter = 0;
dbConnection
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));
try{
   resultData = [{id: 1, name: "Car1", model: "model1", brand: "BMW"},
   {id: 2, name: "Car2", model: "model2", brand: "Benz"},
   {id: 3, name: "Car3", model: "model3", brand: "Audi"},
   {id: 4, name: "Car4", model: "model4", brand: "Maruti"},
   {id: 5, name: "Car5", model: "model5", brand: "Ford"},
   {id: 6, name: "Car6", model: "model6", brand: "Honda"},
   {id: 7, name: "Car7", model: "model7", brand: "Ford"},
   {id: 8, name: "Car8", model: "model8", brand: "Honda"},
   {id: 9, name: "Car9", model: "model9", brand: "Maruti"}];
   console.log(resultData);
   let storeData =  vehicleData.insertMany(resultData).then(function(docs) {
         console.log('Successfuly productsData datas inserted: Total- '+ docs.length);
         mongoose.disconnect()
   })
   .catch(function(err) {
      console.log(err);
   });
} catch (error) {
   console.log(error);
}