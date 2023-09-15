import express from "express";
import cleanBody from"../middlewares/cleanbody";
import validateToken from"../middlewares/validateToken";
import AuthController from"../controllers/uitouxuser.controller";

const router = express.Router();

router.post("/login", cleanBody, AuthController.uiTouXLogin);  // Login api
router.post("/signup", cleanBody, AuthController.uiTouXSignup); // signup api
router.get("/profileDetails", validateToken, AuthController.uiTouXgetProfile); // Get profile details
router.put("/profileEdit", validateToken, AuthController.uiTouXprofileEdit); //Profile edit 
router.get("/activate", cleanBody, AuthController.uiTouXActivate);// Account activate
router.patch("/reset", cleanBody, AuthController.uiTouXResetPassword); // reset password
router.patch("/forgot", cleanBody, AuthController.uiTouXForgotPassword); //Forgot passwoed
router.get("/logout", validateToken, AuthController.uiTouXLogout); //logout
export default router;