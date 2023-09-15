//import {userConnection} from "../databses/mongoose";
import mongoose from "mongoose";
import  brandData from "../models/uitouxbrand.model";
import dbConnection  from "../databses/uitoux.mongoose";

dbConnection
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));
try{
   const resultData = [{id: 1, name: "AIMPARTS", filename: "brand-1.png"},
   {id: 2, name: "STORYKA-X", filename: "brand-10.png"},
   {id: 3, name: "MISSION-51", filename: "brand-11.png"},
   {id: 4, name: "FUELCORP", filename: "brand-12.png"},
   {id: 5, name: "REDGATE", filename: "brand-13.png"},
   {id: 6, name: "BLOCKS", filename: "brand-14.png"},
   {id: 7, name: "BLOCKBOX", filename: "brand-15.png"},
   {id: 8, name: "SQUREGRAGE", filename: "brand-16.png"},
   {id: 9, name: "FASTWHEELS", filename: "brand-9.png"},
   {id: 2, name: "WINDENGINE", filename: "brand-2.png"},
   {id: 3, name: "TURBOELECTRIC", filename: "brand-3.png"},
   {id: 4, name: "STARTONE", filename: "brand-4.png"},
   {id: 5, name: "BRANDIX", filename: "brand-5.png"},
   {id: 6, name: "ABS-BRAND", filename: "brand-6.png"},
   {id: 7, name: "GREATCIRCLE", filename: "brand-7.png"},
   {id: 8, name: "JUSTROMB", filename: "brand-8.png"}];
    
   console.log(resultData);
   let storeData =  brandData.insertMany(resultData).then(function(docs) {
         console.log('Successfuly brand datas inserted: Total- '+ docs.length);
         mongoose.disconnect()
   })
   .catch(function(err) {
      console.log(err);
   });
      

   //}
} catch (error) {
   console.log(error);
}