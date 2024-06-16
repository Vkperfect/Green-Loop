const mongoose=require("mongoose");
const Sell = require("./sell");
const partnerSchema=new mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
        },
        city:{
            type:String,
        },
        password:{
            type:String,
        },
        list:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Sell' }]

    }
)
module.exports=mongoose.model("Partner",partnerSchema);