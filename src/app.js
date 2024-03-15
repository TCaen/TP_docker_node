import express from 'express';
import articleRoutes from './api/routes/articles.js';
import mongoose from 'mongoose';
import config from "../config.js";
import bodyParser from 'body-parser';
import helmet from 'helmet';

const connectToDB = async () => {
    try {
        await mongoose.connect(config.db_uri, {})
        console.log('NOUS SOMMES BIEN ICI');
    }catch (e) {
        console.log(e);
        process.exit(1)
    }
}

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Utilisation du middleware Helmet pour la sécurité
app.use(helmet());
// Configuration de la CSP pour autoriser les icônes favicon depuis le même domaine
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:");
    next();
});

app.use('/articles', articleRoutes);

await connectToDB();

export default app;