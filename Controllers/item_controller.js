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
module.exports.getAllItems = async function(req, res) {
    try {
      const { page = 1, limit = 5 } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
      };
  
      const items = await Item.paginate({}, options);
      if (items.docs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Items not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Items found successfully",
        items: items.docs,
        totalItems: items.totalDocs,
        totalPages: items.totalPages,
        currentPage: items.page,
      });
      logger.itemLogger.log("info", "Items found successfully");
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error while fetching the items",
      });
      logger.itemLogger.log("error", "Error while fetching the items", error);
    }
};

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