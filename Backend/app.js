const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/productapp")
app.use('/images', express.static('Images'));

app.use(express.json());

app.use('/api/auth', require('./Routes/authRoutes'));
app.use('/api/products', require('./Routes/productRoutes'));
const paymentRoutes = require('./Routes/payment');
app.use('/api/payment', paymentRoutes);

const port=8000;

app.listen(port, ()=>{
    console.log(`port is running on ${port}`);
})

