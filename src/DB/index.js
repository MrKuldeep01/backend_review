import mongoose from "mongoose";
import { DB_name } from "../constent.js";

async function connectToDB() {
  try {
    let connection = await mongoose.connect(`${process.env.DB_URI}/${DB_name}`);
    console.log(`Application is connected to Database : ${connection.connection.name} !`);
  } catch (error) {
    console.error("Error in DB connection : ", error);
    process.exit(1);
  }
}
export default connectToDB