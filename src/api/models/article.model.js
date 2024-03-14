const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new Schema({

_id:{type: objectId, auto:true},
title: {type: String, required: true},
body: {type: String, required: true},
autor: {type: String, required: true},
date: {type: Date, required:true},
editor:{type:String, required:true}


});

const article = mongoose.model('articles', articleSchema);
module.exports = article;

