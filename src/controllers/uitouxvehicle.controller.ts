import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import  User from "../models/uitouxuser.model";
import vehicleData from "../models/uitouxvehicle.model";

export class VehicleData {
  uiTouXgetVehicleDetails  = async (req:Request, res: Response) => {
    try {
      const vData = await vehicleData.find({ active: true });
      if(vData){
        return res.send({
          success: true,
          status: 200,
          message: "Success",
          data: vData,
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
        message: "Error fetching data",
      });
    }
  };
}
const vehicleController = new VehicleData();
export default vehicleController;