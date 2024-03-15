import mongoose from "mongoose";

const ArticlesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    editor:{
        type: String,
        required: true
    }
});

export default mongoose.model('Articles', ArticlesSchema);