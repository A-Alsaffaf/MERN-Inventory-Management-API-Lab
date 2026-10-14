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

router.get('/:productId', async (req,res) => {
    try {
        const foundProduct = await Product.findById(req.params.productId)
        res.status(200).json(foundProduct)
    }
    catch (err) {
        console.log(err);
    }
})

router.put('/:productId', async (req,res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body)
        res.status(200).json(updatedProduct)
    }
    catch (err) {
        console.log(err);
    }
})

router.delete('/:productId', async (req,res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
        res.status(200).json(deletedProduct)
    }
    catch (err) {
        console.log(err);
    }
})


module.exports = router