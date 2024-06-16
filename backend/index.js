const express = require("express");
const app = express();

const fileUpload=require("express-fileupload");

const cors = require("cors");
require("dotenv").config({ path: ".env.local" });

PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
const routes = require("./routes/route");


app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use("/", routes);



require("./config/db").dbConnect();
require("./config/cloudinary").cloudinaryConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});