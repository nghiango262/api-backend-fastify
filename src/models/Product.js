// External Dependancies
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
	name: String,
	name_id: String,
	group: String,
	group_id: String,
	type: String,
	type_id: String,
	price: String,
	//create_date: Date,
	//owner_id: ObjectId
})

module.exports = mongoose.model('Product', productSchema)
