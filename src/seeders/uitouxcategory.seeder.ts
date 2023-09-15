import mongoose from "mongoose";
import categoryData from "../models/uitouxcategory.model";
import dbConnection  from "../databses/uitoux.mongoose";
 
dbConnection
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));
try{
   const resultData = [{id: 1, name: " Hand Tools"},
   {id: 2, name: "Pluming"},
   {id: 3, name: "Power Tools"}];
   console.log(resultData);
   let storeData =  categoryData.insertMany(resultData).then(function(docs) {
         console.log('Successfuly categoryData datas inserted: Total- '+ docs.length);
         mongoose.disconnect()
   })
   .catch(function(err) {
      console.log(err);
   });
      
} catch (error) {
   console.log(error);
}