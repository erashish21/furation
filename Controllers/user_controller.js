const User = require("../Models/userModel");
const logger = require("../logger/logger");


// Register user
module.exports.registerUser = async(req,res)=>{
    try {
        const user = await User.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
        });
        res.status(201).json({
            success:true,
            message:"User Register Successfully"
        });
        logger.userLogger.log('info',"User Register Successfully")
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error while register a User"
        })
        logger.userLogger.log('error',"Error while register a User")

    }
};