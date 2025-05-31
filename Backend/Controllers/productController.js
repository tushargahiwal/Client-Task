const Product = require('../Models/Product');

//  Add a new product
exports.addProduct = async (req, res) => {
  const { name, price, description, image, stock } = req.body;
  try {
    const product = new Product({ name, price, description, image, stock });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product' });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

//  Update a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image, stock } = req.body;
  try {
    const updated = await Product.findByIdAndUpdate(
      id,
      { name, price, description, image, stock },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product' });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
};
