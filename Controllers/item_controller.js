module.exports.create = async function(req,res){
    res.status(200).json({
        success:true,
        message:"Run successfully"
    });
}