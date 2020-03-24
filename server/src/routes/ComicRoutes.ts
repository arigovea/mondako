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

router.get("/:id", getComicById);

router.get("/user/:user", getComicByUser);

router.get("/liked/:user", getLiked);

router.get("/saved/:user", getSaved);

router.put("/addliked", addLiked);

router.put("/addsaved", addSaved);

router.delete("/deleteliked", deleteLiked);

router.delete("/deletesaved", deleteSaved);

export default router;



