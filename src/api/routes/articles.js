import express from "express";
import ArticlesController from "../controller/ArticlesController.js"
const router = express.Router();

router.get('/', ArticlesController.list);

export default router;