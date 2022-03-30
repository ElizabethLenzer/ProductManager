const { response } = require("express");
const { Product } = require("../models/product.model");

module.exports.createProduct = (request, response) => {


const { title, price, description } = request.body;

Product.create({
    title,
    price,
    description,
})
.then((product) => response.json(product))
.catch((err) => response.json(err));
}

module.exports.FindAllProducts = (request, response) => {
    Product.find()
    .then(products => response.json(products))
    .catch(err => response.json(err))
}

module.exports.FindOneProduct = (request, response) => {
    Product.findOne({ _id: request.params.id })
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.Update({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.Delete({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}