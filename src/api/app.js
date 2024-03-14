const express = require('express');
const helmet = require('helmet');

require('dotenv').config();

require('./config/db');

const app = express();

// Utilisation du middleware Helmet pour la sécurité
app.use(helmet());

// Configuration de la CSP pour autoriser les icônes favicon depuis le même domaine
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:");
    next();
});

// Route pour tester l'environnement
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

