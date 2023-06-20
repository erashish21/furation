const express = require('express');

const router = express.Router();

const itemController = require("../Controllers/item_controller");

router.post('/item/new',itemController.create);
router.get('/item/:id',itemController.getItem);
router.get("/items",itemController.getAllItems);
router.put("/item/:id",itemController.updateItem);
router.delete("/item/:id",itemController.deleteItem);

module.exports = router;