import express from "express";
import cleanBody from"../middlewares/cleanbody";
import validateToken from"../middlewares/validateToken";
import categoryController from "../controllers/uitouxcategory.controller";

const router = express.Router();

router.get("/", cleanBody, categoryController.uiTouXgetCategoryDetails); // Get Category Details

export default router;