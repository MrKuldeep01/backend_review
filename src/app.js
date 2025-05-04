import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "../Config/index.js";
import { routeVersion as version } from "./constent.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: config.corsOrigin,
    Credential: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import userRoutes from "./Routes/user.routes.js";
import homeRoutes from "./Routes/home.routes.js";
// declaration of routes
// for example : /api/v1/user/register
app.use(`${version}/`, homeRoutes);
app.use(`${version}/user`, userRoutes);

app.on("error", (error) => {
  console.error("Error occured in Application : ", error);
  process.exit(1);
});
export { app };
