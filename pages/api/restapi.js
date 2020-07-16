import nextConnect from 'next-connect';
import middleware from '../../middleware/db';

const cookie = require('cookie');

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try {
        let doc = await req.db.collection('participants').find({}).toArray()
        let count = await req.db.collection('participants').count()
        res.json({doc,count});
    } catch(err) {
        console.log('can not find documents in the collection')
        throw err
    }
   
});

handler.post(async (req, res) => {
    let data = req.body;
    data = JSON.parse(data);
    res.setHeader('Set-Cookie', cookie.serialize('participate', 'true', {
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 15, // 15 days
        path: '/'
      }));
    try {
        await req.db.collection('participants').insertOne({"tradelink" : data})
        res.json(data)
    } catch(err) {
        console.log('can not insert document to the collection')
        throw err
    }
    
})

export default (req, res) => handler.apply(req, res) 

