import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import {urlencoded} from "express";
 
import cors from "cors";
import userRouter from "./routes/uitouxuser"
//import authRoutes from "./routes/user";
import vehicleRoutes from "./routes/uitouxvehicle";
import brandRoutes from "./routes/uitouxbrand";
import categoryRoutes from "./routes/uitouxcategory";
import productRoutes from "./routes/uitouxproduct";
const app = express();

app.set("port", 3000);
app.use (bodyParser.json({ limit: "20mb"}));
app.use(urlencoded({limit: "10mb", extended: true}));

app.get("/ping", (req, res) => {

    return res.json({
        error:false,
        code:200,
        message:"Server ius healthy",
    })
})
app.use("/users", userRouter);
app.use("/vehicle", vehicleRoutes);
app.use("/brand", brandRoutes);
app.use("/category", categoryRoutes);
app.use("/products", productRoutes);
export default app;