import ArticleModel from '../models/ArticleModel.js'

async function list(req, res, next) {
    try {
        console.log('NOUS LANCONS LA METHODE LIST  ' + res);
        const articles = await ArticleModel.find();
        return res.status(200).json({
            status: 200,
            data: articles
        });
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}


async function save(req, res, next) {
    try {
        const article = new ArticleModel();
        article.title = req.body.title;
        article.description = req.body.description;
        article.editor = req.body.editor;
        await article.save();

        return res.status(201).json({
            status: 201
        });
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function byId(req, res, next) {
    const articleId = req.params.id;
    console.log("valeur req by id :" + req.params.id);
    try {
        const articles = await ArticleModel.findById(articleId);
        return res.status(200).json({
            status: 200,
            data: articles
        });
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function update(req, res, next) {
    const articleId = req.body.id;
    console.log("valeur req by id :" + req.body.id);
    console.log("valeur req by id :" + req.body.title);
    console.log("valeur req by id :" + req.body.description);
    console.log("valeur req by id :" + req.body.editor);
    try {
        const articleId = req.params.id;



        const articles = await ArticleModel.findById(articleId);

        articles.title = req.body.title;
        articles.description = req.body.description;
        articles.editor = req.body.editor;

        await articles.save();

        return res.status(201).json({
            status: 201
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

// async function update(req, res, next) {
//     const articleId = req.body.id;
//     try {
//         const article = await ArticleModel.findById(articleId);
//         if (!article) {
//             return res.status(404).json({ message: "Article non trouvé" });
//         }
//         if (article) {
//             article.title = req.body.title;
//             article.description = req.body.description;
//             article.editor = req.body.editor;
//             await article.save();
//             return res.status(200).json({ message: "Article mis à jour avec succès" });
//         } else {
//             return res.status(404).json({ message: "Article non trouvé" });
//         }
//     }
//     catch (error) {
//         console.error("Erreur lors de la mise à jour de l'article :", error);
//         return res.status(500).json({ message: "Erreur lors de la mise à jour de l'article" });
//     }
// }

// async function update(req, res, next) {

//     console.log("nous sommes dans la methode update !!!!!!!!")
//     try {
//         const { id } = req.params;
//         const { title, description, editor } = req.body;
//         const article = await ArticleModel.findByIdAndUpdate(id, { title, description, editor }, { new: true });
//         console.log("valeur de notre article : "+ article);
//         console.log("valeur de notre article : "+ article._id + article.title + article.description);

//         if (!article) {
//             return res.status(404).json({
//                 message: 'Article not found'
//             });
//         }
//         return res.status(200).json({
//             status: 200,
//             data: article
//         });
//     } catch (e) {
//         console.log("valeur de notre article dans catch : "+ article._id + article.title + article.description);
//         console.log(e);
//         return res.status(500).json({
//             message: e
//         });
//     }
// }


export default {
    list: list,
    save: save,
    byId: byId,
    update: update
};