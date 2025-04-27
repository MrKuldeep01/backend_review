import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
const app = express();
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
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