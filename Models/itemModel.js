const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;