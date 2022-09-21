const mongoose = require('mongoose');
const Product = require('./models/products');

mongoose.connect(
    'mongodb+srv://GuilhermeBorges:8aAyEP2BTC9stHhX@cluster0.wih8ysw.mongodb.net/FictionalStore?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!');
}).catch(() => {
    console.log('Connection failed!');
});

const createProduct = async(req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });
    const result = await createdProduct.save();
    res.json(result);
};

const getProducts = async(req, res, next) => {
    const products = await Product.find().exec();
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;