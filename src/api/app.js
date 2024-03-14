const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/articleRoutes')
const helmet = require('helmet');

require('dotenv').config();

require('./config/db');

const app = express();


app.use(helmet());

// // Configuration de la connexion à MongoDB
// mongoose.connect('mongodb://mongo:27017/articleapi', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


const mongoDBURL = 'mongodb://mongo:27017/articleapi';

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});



// 
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.json());

app.use('/articles', articleRoutes);


app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:");
    next();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 
// app.get('/', (req, res) => {
//     res.send('Hello world\n');
// });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//     console.log(`Running on port ${PORT}`);
// });




