const express = require('express');
// const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();
app.use(express.json())

app.get(`/api/products`, getProducts)

app.get(`/api/products/:id`, getProduct)

const port = 3080
app.listen(port, ()=> console.log(`Server running on port ${port}`))
