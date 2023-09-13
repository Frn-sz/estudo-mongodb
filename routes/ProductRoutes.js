const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.showProducts);
router.get("/create", ProductController.createProduct);
router.get('/:id', ProductController.getProduct);
router.get('/edit/:id', ProductController.editProduct);

router.post('/create', ProductController.saveProduct);
router.post('/remove/:id', ProductController.removeProduct);
router.post('/edit', ProductController.saveEditProduct);

module.exports = router;