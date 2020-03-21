import express, { Router } from "express";
import getPopular from "../controllers/Comics/getPopular";
import getByCountry from "../controllers/Comics/getComicByCountry";
import getComicById from "../controllers/Comics/getComicById";
import getComicByUser from "../controllers/Comics/getComicByUser";
import getLiked from "../controllers/Comics/getLiked";
import getSaved from "../controllers/Comics/getSaved";
import addLiked from "../controllers/Comics/addLiked";
import addSaved from "../controllers/Comics/addSaved";
import deleteLiked from "../controllers/Comics/deleteLiked";
import deleteSaved from "../controllers/Comics/deleteSaved";

const router: Router = express.Router(); 

router.get("/popular", getPopular);

router.get("/country", getByCountry);

router.get("/id", getComicById);

router.get("/username", getComicByUser);

router.get("/liked", getLiked);

router.get("/saved", getSaved);

router.put("/addliked", addLiked);

router.put("/addsaved", addSaved);

router.delete("/deleteliked", deleteLiked);

router.delete("/deletesaved", deleteSaved);

export default router;



