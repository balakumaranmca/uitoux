import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import brandData from "../models/uitouxbrand.model";

export class BrandData {
  uiTouXgetBrandDetails  = async (req:Request, res: Response) => {
    try {
      const bData = await brandData.find({ active: true });
      if(bData){
        return res.send({
          success: true,
          status: 200,
          message: "Success",
          data: bData,
        });
      }
      return res.send({
        success: false,
        status: 400,
        message: "Fail",
        data: [],
      });
    }
    catch (error) {
      return res.status(500).json({
        error: true,
        status: 500,
        message: "Error fetching",
      });
    }
  };
}
const brandController = new BrandData();
export default brandController;