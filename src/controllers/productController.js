// External Dependancies
const boom = require('boom')

// Get Data Models
const Product = require('../models/Product')

// Get all Products
exports.getProducts = async () => {
	try {
		const products = await Product.find()
		return {
			status: true,
			data: products
		}
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single Product by ID
exports.getSingleProduct = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const product = await Product.findById(id)
		return product
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Add a new 
exports.addProduct = async req => {
	//console.log(req.body)
	try {
		const product = new Product(req.body)
		const newProduct = await product.save()
		return newProduct
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Update an existing Product
exports.updateProduct = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const updateData = req.params === undefined ? req : req.params
		const update = await Product.findByIdAndUpdate(id, updateData, { new: true })
		return update
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Delete a Product
exports.deleteProduct = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const product = await Product.findByIdAndRemove(id)
		return product
	} catch (err) {
		throw boom.boomify(err)
	}
}
