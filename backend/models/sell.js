const mongoose=require("mongoose");

const sellSchema=new mongoose.Schema(
    {
        name:{
            type:String,
        },
        number:{
            type:Number,
        },
        description:{
            type:String,
        },
        image:{
            type:String,
        },
        city:{
            type:String,
        }

    }
)
module.exports=mongoose.model("Sell",sellSchema);