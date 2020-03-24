import express, { Router } from "express";
import getUserByURL from "../controllers/Users/getUserByURL";

const router: Router = express.Router(); 

router.get("/:user", getUserByURL);

export default router;

