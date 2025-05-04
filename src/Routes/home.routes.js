import { Router } from "express";
const router = Router();
import { home } from "../Controllers/home.controller.js";

router.route("/").get(home);
export default router;
