const cloudinary=require("cloudinary").v2;
require("dotenv").config({path:'env.local'});
exports.cloudinaryConnect =()=>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.CLOUD_KEY,
            api_secret:process.env.CLOUD_SECRET
        })
        console.log("Connection to cloudinary is done.");
    }
    catch(error){
        console.log("Error in cloudinary connection");
        console.log(error);
 }
}