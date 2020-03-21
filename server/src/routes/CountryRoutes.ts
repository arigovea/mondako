import express, { Router } from "express";
import getCountryByContinent from "../controllers/Country/getCountryByContinent";

const router: Router = express.Router(); 

router.get("/continent", getCountryByContinent);


export default router;


