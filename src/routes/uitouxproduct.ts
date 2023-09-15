import express from "express";
import cleanBody from"../middlewares/cleanbody";
import validateToken from"../middlewares/validateToken";
import productsController from "../controllers/uitouxproduct.controller";

const router = express.Router();

router.get("/", cleanBody, productsController.uiTouXgetproductDetails); // Get product Details
router.post("/rating", cleanBody, productsController.uiTouXaddProductReview); // Add ratings
router.put("/offerPrice", cleanBody, productsController.uiTouXupdateProductOffer); // offer admin update

export default router;