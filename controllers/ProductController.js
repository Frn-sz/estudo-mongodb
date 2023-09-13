const Product = require("../models/Product");

module.exports = class ToughController {
    static async showProducts(req, res) {

        const products = await Product.getProducts();

        res.render("products/all", { products });
    }

    static createProduct(req, res) {
        res.render('products/create');
    };

    static async saveProduct(req, res) {

        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        const product = new Product(name, price, description)

        product.save();

        res.redirect('/products')
    }

    static async getProduct(req, res) {
        const id = req.params.id;

        const product = await Product.getProductsById(id);

        res.render('products/product', { product });
    }

    static async removeProduct(req, res) {
        const id = req.params.id;

        await Product.removeProduct(id);

        res.redirect('/products')
    }

    static async editProduct(req, res) {

        const id = req.params.id;

        const product = await Product.getProductsById(id);


        res.render('products/edit', { product })
    }

    static async saveEditProduct(req, res) {

        const id = req.body.id;
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        const product = await new Product(name, price, description);

        await product.editProduct(id);


        res.redirect(`${id}`);
    }

};