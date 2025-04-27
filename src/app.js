import express from "express"
const app = express();


app.on("error",(error)=>{
    console.error("Error occured in Application : ",error);
    process.exit(1);
})
export {app};