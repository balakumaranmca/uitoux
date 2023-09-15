import app from "./app";

import {userConnction} from "./databses/uitoux.mongoose"
async function init(){
    userConnction();
}

const server  = app.listen(app.get("port"),async () => {
    await init();
    console.log("Server running at http://localhost:%d",
    app.get("port")
    );
    console.log("Press CTRL +C To stop");
})

export default server;