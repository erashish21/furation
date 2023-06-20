const Item = require('../Models/itemModel');



// Create item
module.exports.create = async function(req,res){
    
    try {
        let item = await Item.create({
            name:req.body.name,
            description:req.body.description
        });
        
        res.status(200).json({
            success:true,
            message:"Item Created Successfully",
            item
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while creating the item"
        });
    }
};

// Get item using item id
module.exports.getItem = async function(req,res){
    try {
        let item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({
                success:false,
                message:"Item not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Item get Successfully",
            item
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while fetching the item"
        })
    }
}

// Get all Items
module.exports.getAllItems = async function(req,res){
    try {
        let items = await Item.find({});
        if(!items){
            res.status(404).json({
                success:false,
                message:"Items not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Items found Successfully",
            items
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while fetching the items"
        });
    }
}

// Update item details
module.exports.updateItem = async function(req,res){
    try {
        let item = await Item.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!item){
            return res.status(404).json({
                success:false,
                message:"Item not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Item updated Successfully",
            item
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while updating the item details"
        });
    }
}

// Delete item
module.exports.deleteItem = async function(req,res){
    try {
        let item =await Item.findByIdAndDelete(req.params.id);
        if(!item){
            return res.status(404).json({
                success:false,
                message:"Item not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Item deleted Successfully",
            item
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while deleting the item"
        });
    }
}