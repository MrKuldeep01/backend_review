import { Router } from "express";
const router = Router();
import { registerUser } from "../Controllers/user.controller.js";

router.route("/register").get(registerUser);
export default router;
