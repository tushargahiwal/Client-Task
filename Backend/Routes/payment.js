const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_Your_Secret_Key');
const authMiddleware = require('../authMiddleware');

router.post('/create-checkout-session', authMiddleware, async (req, res) => {
  const { product } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: product.price * 100, 
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'http://localhost:3000/thankyou',
    cancel_url: 'http://localhost:3000/',
  });

  res.json({ id: session.id });
});

module.exports = router;
