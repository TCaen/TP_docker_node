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

export default {
    list:list
};