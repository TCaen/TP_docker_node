import { MongoClient } from 'mongodb';

const mongoDBURL = 'mongodb+srv://1234:1234@cluster0.lrisbwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

 export async function executeArticleCrudOperations() {
    const uri = mongoDBURL;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
    } finally {
        await mongoClient.close();
    }
 }