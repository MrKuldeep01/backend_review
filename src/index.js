// import mongoose from "mongoose";
// import { DB_name } from "./constent.js";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import connectToDB from "./DB/index.js";
let port = process.env.PORT || 3000

connectToDB().then(()=>{
    app.listen(port,()=>{
        console.log("Application is listening on : ",port);
    })
}).catch((error)=>{
    console.log(`Error: we are facing issue in our application :- ${error}`);
})






// (async function connectToDB() {
//   try {
//     const connectInstance = await mongoose.connect(
//       `${process.env.DB_URI}/${DB_name}`
//     );
//     app.on("error", (error) => {
//       throw error;
//     });
//     console.log(`app is connected with : ${connectInstance.connection.name} DB`);
//     app.listen(process.env.PORT, () => {
//       console.log("app is listening on " + process.env.PORT, "port!!!");
//     });
//   } catch (error) {
//     console.error("Error occured in DB connection: ", error);
//     throw error;
//   }
// })();
