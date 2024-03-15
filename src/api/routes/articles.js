import express from "express";
import ArticlesController from "../controller/ArticlesController.js"
const router = express.Router();

router.get('/', ArticlesController.list);
router.post('/',  ArticlesController.save);
router.get('/:id', ArticlesController.byId);
router.put('/:postid',  ArticlesController.update);
router.delete('/:postid',  ArticlesController.remove);

export default router;