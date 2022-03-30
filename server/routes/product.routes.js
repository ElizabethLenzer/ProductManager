const ProductController = require('../controllers/product.controller');

// this are event listeners
module.exports = function (app) {
    app.get('/products', ProductController.FindAllProducts);
    app.get('/products/:id', ProductController.FindOneProduct);
    app.put('/products/:id/edit', ProductController.updateProduct);
    app.post('/products', ProductController.createProduct);
    app.delete("/products/:id/delete", ProductController.deleteProduct);
}