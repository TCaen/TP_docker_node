import ArticleModel from '../models/ArticleModel.js'

async function list(req, res, next) {
    try{
        console.log('NOUS LANCONS LA METHODE LIST  '+ res);
        const articles = await ArticleModel.find();
        return res.status(200).json({
            status: 200,
            data: articles
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}


async function save(req, res, next){
    try {
        const article = new ArticleModel();
        article.title = req.body.title;
        article.description = req.body.description;
        article.editor = req.body.editor;
        await article.save();

        return res.status(201).json({
            status: 201
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function byId(req, res, next) {
    const articleId = req.params.id;
    console.log("valeur req by id :"+req.params.id);
    try{
        const articles = await ArticleModel.findById(articleId);
        return res.status(200).json({
            status: 200,
            data: articles
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

export default {
    list:list,
    save:save,
    byId:byId
};