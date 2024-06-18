const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/cosmeticDB').then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error('Error connecting to database:', error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const reviewRouter = require('./routes/reviewRoutes');

app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/reviews', reviewRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});