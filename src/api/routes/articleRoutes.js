const express = require('express');
const router = express.Router();
const Article = require('../models/article.model');

// GET - Récupérer tous les articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Créer un nouvel article
router.post('/', async (req, res) => {
  const article = new Article({
    name: req.body.name,
    body: req.body.body,
    author: req.body.author,
    editor: req.body.editor
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Mettre à jour un article
router.put('/:id', async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
