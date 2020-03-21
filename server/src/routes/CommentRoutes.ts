import express, { Router } from "express";
import addComments from "../controllers/Comments/addComment";
import deleteComments from "../controllers/Comments/deleteComment";
import getCommentsByComic from "../controllers/Comments/getCommentsByComic"

const router: Router = express.Router(); 

router.post("/add", addComments);

router.put("/delete", deleteComments);

router.get("/comic", getCommentsByComic);

export default router;
