const Partner = require("../models/partner");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();
const nodemailer = require("nodemailer");
const partner = require("../models/partner");
const Sell = require("../models/sell");

exports.signup = async (req, res) => {
  const requestBody = req.body;

  const alreadyExists = await Partner.findOne({ email: requestBody.email });

  if (alreadyExists) {
    return res.status(401).json({
      success: false,
      message: "User already Exists",
    });
  }

  const userObj = {
    name: requestBody.name,
    password: bcrypt.hashSync(requestBody.password, 8),
    email: requestBody.email,
    city: requestBody.city,
  };
  try {
    const user = await Partner.create(userObj);

    return res.status(200).json({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (err) {
    console.log("Error while registering the user", err);
    return res.status(500).json({
      success: false,
      message: "Some error happened while registering the user",
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const requestBody = req.body;
    const user = await Partner.findOne({ email: requestBody.email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User with this email doesn't exists",
      });
    }

    const isPasswordValid = await bcrypt.compareSync(
      requestBody.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Password is wrong",
      });
    }

    const token = jwt.sign({ id: requestBody.email }, process.env.SECRET, {
      expiresIn: 24000000,
    });

    return res.status(200).json({
      success: true,
      message: "User login Successfully",
      name: user.name,
      email: user.email,
      password: user.password,
      accessToken: token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error while signin",
    });
  }
};

exports.sellItem = async (req, res) => {
  const requestBody = req.body;
  const itemDetails = {
    name: requestBody.name,
    number: requestBody.number,
    description: requestBody.description,
    city: requestBody.city,
  };

  try {
    const item = await Sell.create(itemDetails);

    let partner = await Partner.findOne({ city: itemDetails.city });

    if (!partner) {
      partner = await Partner.create({ city: itemDetails.city });
    }

    partner.list.push(item);
    await partner.save();

    return res.status(200).json({
      success: true,
      message: "Item created successfully and added to the partner list.",
      item,
    });
  } catch (err) {
    console.error("Error while registering the sell item", err);
    return res.status(500).json({
      success: false,
      message: "Some error happened while registering the sell item.",
    });
  }
};

exports.markAsDone = async (req, res) => {
  const { itemId } = req.body;

  try {
    const sellItem = await Sell.findById(itemId);
    if (!sellItem) {
      return res.status(404).json({
        success: false,
        message: "Sell item not found",
      });
    }

    const partner = await Partner.findOne({ city: sellItem.city });
    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found for the city",
      });
    }

    partner.list = partner.list.filter((item) => !item.equals(sellItem._id));
    await partner.save();

    await Sell.findByIdAndDelete(itemId);

    return res.status(200).json({
      success: true,
      message: "Sell item marked as done and removed",
    });
  } catch (err) {
    console.log("Error while marking the sell item as done", err);
    return res.status(500).json({
      success: false,
      message: "Some error happened while marking the sell item as done",
    });
  }
};

exports.getPartnerByToken = async (req, res) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
      });
    }

    const tokenString = token.split(" ")[1];

    const decodedToken = jwt.verify(tokenString, process.env.SECRET);

    const partner = await Partner.findOne({ email: decodedToken.id });

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    return res.status(200).json({
      success: true,
      partner,
    });
  } catch (error) {
    console.error("Error while fetching partner by token:", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
