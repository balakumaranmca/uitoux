import express from "express";
import cleanBody from"../middlewares/cleanbody";
import validateToken from"../middlewares/validateToken";
import vehicleController from "../controllers/uitouxvehicle.controller";

const router = express.Router();

router.get("/", cleanBody, vehicleController.uiTouXgetVehicleDetails); // Get Vechile Details

export default router;