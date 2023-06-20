const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Item Name"],
        maxLength:[50,"Name cannot exceed 50 characters"],
        minLength:[8,"Name should have more than 8 characters"],
    },
    description:{
        type:String,
        required:[true,"Please Enter Item Name"],
        maxLength:[500,"Description cannot exceed 500 characters"],
        minLength:[50,"Description should have more than 50 characters"],
    }
},{
    timestamps:true
});

itemSchema.plugin(mongoosePaginate);
const Item = mongoose.model("Item",itemSchema);

module.exports = Item;