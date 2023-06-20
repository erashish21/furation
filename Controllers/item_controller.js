const Item = require('../Models/itemModel');


module.exports.create = async function(req,res){
    
    try {
        let item = await Item.create({
            name:req.body.name,
            description:req.body.description
        });
        
        return res.status(200).json({
            success:true,
            message:"Item Created Successfully",
            item
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error while creating the item"
        });
    }
};