const express = require("express");
const {
  signin,
  signup,
  sellItem,
  markAsDone,
  getPartnerByToken
} = require("../controllers/auth");
const route = express.Router();

route.post("/signin", signin);
route.post("/signup",signup)
route.post("/sellItem", sellItem);
route.post("/markAsDone", markAsDone);
route.get("/partner",getPartnerByToken);
module.exports = route;