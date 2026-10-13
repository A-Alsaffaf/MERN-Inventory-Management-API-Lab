const router = require('express').Router()
const Product = require('../models/Product')

router.get('/', async (req,res) => {
    try {
        const allProducts = await Product.find()
        res.status(200).json(allProducts)
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/', async (req,res) => {
    try {
        const createdProduct = await Product.create(req.body)
        res.status(201).json(createdProduct)
    }
    catch (err) {

    }
})


module.exports = router