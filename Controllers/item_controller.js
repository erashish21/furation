const Item = require('../Models/itemModel');
const logger = require('../logger/logger');

// Create item
module.exports.create = async function (req, res) {
  try {
    // Create a new item with the provided name and description
    let item = await Item.create({
      name: req.body.name,
      description: req.body.description,
    });

    // Return a success response with the created item
    res.status(200).json({
      success: true,
      message: "Item Created Successfully",
      item,
    });

    // Log the success message
    logger.itemLogger.log("info", "Item Created Successfully");
  } catch (error) {
    // Return an error response if there's an error while creating the item
    res.status(500).json({
      success: false,
      message: "Error while creating the item",
    });

    // Log the error message
    logger.itemLogger.log("error", "Error while creating the item");
  }
};

// Get item using item id
module.exports.getItem = async function (req, res) {
  try {
    // Find the item by its ID
    let item = await Item.findById(req.params.id);

    // Return a response with the found item or a not found message
    if (!item) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
      logger.itemLogger.log("error", "Item not found");
    } else {
      res.status(200).json({
        success: true,
        message: "Item fetched successfully",
        item,
      });
      logger.itemLogger.log("info", "Item fetched successfully");
    }
  } catch (error) {
    // Return an error response if there's an error while fetching the item
    res.status(500).json({
      success: false,
      message: "Error while fetching the item",
    });

    // Log the error message
    logger.itemLogger.log("error", "Error while fetching the item");
  }
};

// Get all Items
module.exports.getAllItems = async function (req, res) {
  try {
    // Extract the pagination parameters from the query string
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };

    // Fetch all items with pagination options
    const items = await Item.paginate({}, options);

    // Return a response with the fetched items or a not found message
    if (items.docs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Items not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Items found successfully",
        items: items.docs,
        totalItems: items.totalDocs,
        totalPages: items.totalPages,
        currentPage: items.page,
      });
      logger.itemLogger.log("info", "Items found successfully");
    }
  } catch (error) {
    // Return an error response if there's an error while fetching the items
    res.status(500).json({
      success: false,
      message: "Error while fetching the items",
    });

    // Log the error message
    logger.itemLogger.log("error", "Error while fetching the items", error);
  }
};

// Update item details
module.exports.updateItem = async function (req, res) {
  try {
    // Find the item by its ID and update its details
    let item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    // Return a response with the updated item or a not found message
    if (!item) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
      logger.itemLogger.log("error", "Item not found");
    } else {
      res.status(200).json({
        success: true,
        message: "Item updated successfully",
        item,
      });
      logger.itemLogger.log("info", "Item updated successfully");
    }
  } catch (error) {
    // Return an error response if there's an error while updating the item details
    res.status(500).json({
      success: false,
      message: "Error while updating the item details",
    });

    // Log the error message
    logger.itemLogger.log("error", "Error while updating the item details");
  }
};

// Delete item
module.exports.deleteItem = async function (req, res) {
  try {
    // Find the item by its ID and delete it
    let item = await Item.findByIdAndDelete(req.params.id);

    // Return a response with the deleted item or a not found message
    if (!item) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
      logger.itemLogger.log("error", "Item not found");
    } else {
      res.status(200).json({
        success: true,
        message: "Item deleted successfully",
        item,
      });
      logger.itemLogger.log("info", "Item deleted successfully");
    }
  } catch (error) {
    // Return an error response if there's an error while deleting the item
    res.status(500).json({
      success: false,
      message: "Error while deleting the item",
    });

    // Log the error message
    logger.itemLogger.log("error", "Error while deleting the item");
  }
};
