const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
bedsandbaths: String,
sqft: Number,
cost: Number
})
module.exports = mongoose.model("house", houseSchema)