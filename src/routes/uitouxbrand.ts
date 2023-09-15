import express from "express";
import cleanBody from"../middlewares/cleanbody";
import validateToken from"../middlewares/validateToken";
import brandController from "../controllers/uitouxbrand.controller";

const router = express.Router();

router.get("/", cleanBody, brandController.uiTouXgetBrandDetails); // Get Brand Details

export default router;