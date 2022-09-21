const { MongoClient, ServerApiVersion } = require('mongodb');

const url = 'mongodb+srv://GuilhermeBorges:8aAyEP2BTC9stHhX@cluster0.wih8ysw.mongodb.net/FictionalStore?retryWrites=true&w=majority';

const createProduct = async(req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    }
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    try {
        await client.connect();
        const db = await client.db().collection('Products').insertOne(newProduct);
    } catch(error) {
        return res.json({ message: 'Could not store data.'});
    };
    client.close();
    res.json(newProduct)
}

const getProducts = async(req,res, next) => {

}

exports.createProduct = createProduct;
exports.getProducts = getProducts;