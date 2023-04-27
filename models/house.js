const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
house_bed_bath: String,

house_sqft:{
    type:Number,
    min: 500, //validator sqft must be more than 500
    max: 6000 //validator sqft must be less than 6000
},
house_cost:{
    type:Number,
    min: 1000,
    max:100000000
}
})
module.exports = mongoose.model("house", houseSchema)