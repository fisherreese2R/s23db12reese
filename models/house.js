const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
house_bed_bath: String,
house_sqft: Number,
house_cost: Number
})
module.exports = mongoose.model("house", houseSchema)