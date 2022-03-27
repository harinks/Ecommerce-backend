const ImportData = require("express").Router();
const User = require("./Models/UserModel"); 
const users = require("./data/users");
const Product = require("./Models/ProductModel");
const products = require("./data/Products");
const asyncHandler = require("express-async-handler");

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

module.exports = ImportData;
