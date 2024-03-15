import express from "express";
import articlesController from "../controllers/articlesController.js"
const router = express.Router();

router.get('/',  articlesController.list);

export default router;