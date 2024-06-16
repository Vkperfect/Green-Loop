const mongoose= require("mongoose");

require("dotenv").config();
exports.dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connection with Db is Successfull")
    })
    .catch((error)=>{
        console.log("Connection with DB is failed!!!");
        console.error(error.message);
        process.exit(1);
})
}