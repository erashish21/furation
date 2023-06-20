const Item = require('../Models/itemModel');
const logger = require('../logger/logger');



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
        logger.itemLogger.log('info',"Item Created Successfully")
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while creating the item"
        });
        logger.itemLogger.log('error',"Error while creating the item")
    }
};

// Get item using item id
module.exports.getItem = async function(req,res){
    
    try {
        let item = await Item.findById(req.params.id);
        if(!item){
            res.status(404).json({
                success:false,
                message:"Item not found"
            });
            logger.itemLogger.log('error',"Item not found")
        }
        res.status(200).json({
            success:true,
            message:"Item get Successfully",
            item
        });
        logger.itemLogger.log('info',"Item get Successfully")
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while fetching the item"
        })
        logger.itemLogger.log('error',"Error while fetching the item")
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
            logger.itemLogger.log('error',"Item not found")
        }
        res.status(200).json({
            success:true,
            message:"Items found Successfully",
            items
        });
        logger.itemLogger.log('info',"Item found Successfully")
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while fetching the items"
        });
        logger.itemLogger.log('error',"Error while fetching the items")
    }
}

// Update item details
module.exports.updateItem = async function(req,res){
    try {
        let item = await Item.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!item){
            res.status(404).json({
                success:false,
                message:"Item not found"
            });
            logger.itemLogger.log('error',"Item not found")
        }
        res.status(200).json({
            success:true,
            message:"Item updated Successfully",
            item
        });
        logger.itemLogger.log('info',"Item updated Successfully")
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while updating the item details"
        });
        logger.itemLogger.log('error',"Error while updating the item details")
    }
}

// Delete item
module.exports.deleteItem = async function(req,res){
    try {
        let item =await Item.findByIdAndDelete(req.params.id);
        if(!item){
            res.status(404).json({
                success:false,
                message:"Item not found"
            });
            logger.itemLogger.log('error',"Item not found")
        }
        res.status(200).json({
            success:true,
            message:"Item deleted Successfully",
            item
        })
        logger.itemLogger.log('info',"Item deleted Successfully")
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while deleting the item"
        });
        logger.itemLogger.log('error',"Error while deleting the item")
    }
}