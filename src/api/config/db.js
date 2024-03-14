const mongoose = require('mongoose')

//const mongoDB_Url = process.env.MONGODB_URL;
const mongoDB_Url = "mongodb://localhost:27017/articleapi";

mongoose.connect(mongoDB_Url, {useNewUrlParser:true, useUnifiedTopology:true});

mongoose.connection.on('connected', res=>console.log('connected'));

mongoose.connection.on('error', err=>console.log('err'));

mongoose.set('strictQuery', true);





