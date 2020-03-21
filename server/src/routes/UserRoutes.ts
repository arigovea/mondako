import express, { Router } from "express";
import getUserByName from "../controllers/Users/getUserByName";

const router: Router = express.Router(); 

router.get("/name", getUserByName);


export default router;

