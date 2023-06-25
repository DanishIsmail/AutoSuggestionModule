const e = require("express"),
  mongoose = require("mongoose"),
  carsDetails = mongoose.model("carsDetails");
generateCarData = require("../helpers/helpers");

const getHello = async (req, res) => {
  res.send("Hello");
};

const getCarsData = async (req, res) => {
  try {
    const filteredCars = await carsDetails.find({
      carModel: { $regex: req.body.letter, $options: "i" }, // Case-insensitive letter match in the model
    });
    res.send({
      isError: false,
      messge: "data got successFully",
      data: { filteredCars },
    });
  } catch (err) {
    console.log("err==>", err);
    res.send({
      isError: true,
      messge: err.messge,
      data: {},
    });
  }
};

module.exports = { getHello, getCarsData };
