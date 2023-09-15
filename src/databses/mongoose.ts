import mongoose from "mongoose";

export const userConnection = (isProd:boolean, mongoDbCreds:({ host: string, port: number, username: string, password: string, db: string, repelSet ?: string, readPref ?: string})) =>{
   
        const option: any = { useUnifiedTopology: true, useNewUrlParser: true };
        const db = mongoose.connection;
        let urlString  = "mongodb://";
        if(!mongoDbCreds.host || mongoDbCreds.host.length == 0){
            console.log('Invalid host');
        }

        if(mongoDbCreds.username && mongoDbCreds.password){

            urlString += `${mongoDbCreds.username}:${mongoDbCreds.password}@`;
           
        }

        urlString += `${mongoDbCreds.host}:${mongoDbCreds.port}/${mongoDbCreds.db}`;
        console.log(urlString);
        db.on("connecting", function () {
            console.log("connecting to MongoDB...");
        });
    
        db.on("error", function (error: any) {
            console.error("Error in MongoDb connection: " + error);
            mongoose.disconnect();
        });
        db.on("connected", function () {
            console.log("MongoDB connected!");
        });
        db.once("open", function () {
            console.log("MongoDB connection opened!");
        });
        db.on("reconnected", function () {
            console.log("MongoDB reconnected!");
        });
        db.on("disconnected", function () {
            console.log("MongoDB disconnected!");
            setTimeout(()=>{
                mongoose.createConnection(urlString, option);
            }, 2000);
        });

        return mongoose.connect(urlString, option);

    

}
export default userConnection;