import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import config from "./../Config/index.js"
const app = express();
app.use(express.json())
app.use(cors({
    origin: config.corsOrigin,
    Credential: true
}))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

app.on("error",(error)=>{
    console.error("Error occured in Application : ",error);
    process.exit(1);
})
export {app};