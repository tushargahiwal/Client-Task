const express = require('express');
const router = express.Router();
const protect = require('../authMiddleware');
const {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require('../Controllers/productController');

// Protected routes
router.post('/', protect, addProduct);
router.get('/', getAllProducts);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
