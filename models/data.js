const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  type: String,
	indicator: String,
	location: String,
	group: String,
	source: String,
	val2013: Number,
	val2017: Number,
	val2020: Number,
	outcome: String
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data;