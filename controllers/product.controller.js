const product = require('../models/product.models');

module.exports.createProduct = (req, res) => {
    product.create(req.body)
    .then((newProduct) => {
        res.json({
            product: newProduct
        });
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.f