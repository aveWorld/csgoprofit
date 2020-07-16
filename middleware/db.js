// it's middleware to connect to mongodb
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) {
      try {
        await client.connect();
        } catch(err) {
            console.log('can not connect to db')
            throw err
        }
  }
  req.dbClient = client;
  req.db = client.db('users');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;