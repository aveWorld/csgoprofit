import nextConnect from 'next-connect';
import middleware from '../../middleware/db';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try {
        let doc = await req.db.collection('participants').find({}).toArray()
        res.json(doc);
    } catch(err) {
        console.log('can not find documents in the collection')
        throw err
    }
});

handler.post(async (req, res) => {
    let data = req.body;
    data = JSON.parse(data);
    try {
        await req.db.collection('participants').insertOne({"tradelink" : data})
        res.json(data)
    } catch(err) {
        console.log('can not insert document to the collection')
        throw err
    }
    
})

export default (req, res) => handler.apply(req, res) 

