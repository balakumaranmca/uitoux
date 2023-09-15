import mongoose from "mongoose";
import productsData from "../models/uitouxproducts.model";
import dbConnection  from "../databses/uitoux.mongoose";
 
dbConnection
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));
try{
   const resultData = [{categoryId: 1, name: "product-1", price: 10, offerPrice: 0, desc: "product-1-sample-description", code: "SKU:product-1", filename: "product-1.jpeg"},
   {categoryId: 2, name: "product-2", price: 12, offerPrice: 0, desc: "product-2-sample-description", code: "SKU:product-2", filename: "product-2.jpeg"},
   {categoryId: 3, name: "product-3", price: 14, offerPrice: 0, desc: "product-3-sample-description", code: "SKU:product-3", filename: "product-3.jpeg"},
   {categoryId: 1, name: "product-4", price: 16, offerPrice: 0, desc: "product-4-sample-description", code: "SKU:product-4", filename: "product-4.jpeg"},
   {categoryId: 2, name: "product-5", price: 18, offerPrice: 0, desc: "product-5-sample-description", code: "SKU:product-5", filename: "product-5.jpeg"},
   {categoryId: 3, name: "product-6", price: 20, offerPrice: 0,  desc: "product-6-sample-description", code: "SKU:product-6", filename: "product-6.jpeg"},
   {categoryId: 1, name: "product-7", price: 22, offerPrice: 0,  desc: "product-7-sample-description", code: "SKU:product-7", filename: "product-7.jpeg"},
   {categoryId: 2, name: "product-8", price: 24, offerPrice: 0,  desc: "product-8-sample-description", code: "SKU:product-8", filename: "product-8.jpeg"},
   {categoryId: 3, name: "product-9", price: 26, offerPrice: 0,  desc: "product-9-sample-description", code: "SKU:product-9", filename: "product-9.jpeg"},
   {categoryId: 1, name: "product-10", price: 28, offerPrice: 0,  desc: "product-10-sample-description", code: "SKU:product-10", filename: "product-10.jpeg"},
   {categoryId: 2, name: "product-11", price: 30, offerPrice: 0,  desc: "product-11-sample-description", code: "SKU:product-11", filename: "product-11.jpeg"},
   {categoryId: 3, name: "product-12", price: 32, offerPrice: 0,  desc: "product-12-sample-description", code: "SKU:product-12", filename: "product-12.jpeg"},
   {categoryId: 1, name: "product-13", price: 34, offerPrice: 0,  desc: "product-13-sample-description", code: "SKU:product-13", filename: "product-13.jpeg"},];
   console.log(resultData);
   let storeData =  productsData.insertMany(resultData).then(function(docs) {
         console.log('Successfuly productsData datas inserted: Total- '+ docs.length);
         mongoose.disconnect()
   })
   .catch(function(err) {
      console.log(err);
   });
   
   
} catch (error) {
   console.log(error);
}