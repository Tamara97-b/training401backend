"use strict";
const fruitModel = require("../model/fruit.model");
const axios = require("axios");

const getfruitabi = async (req, res) => {
  try {
    const fruitResponse = await axios.get(
      "https://fruit-api-301.herokuapp.com/getFruit"
    );
    res.send(fruitResponse.data);
  } catch (err) {
    res.send(err);
  }
};

const getfruit = (req, res) => {
  fruitModel.find({ email: req.query.email }, (error, fruitData) => {
    res.json(fruitData);
  });
};

const createfruit = (req, res) => {
  console.log(req.body);
  const { name, image, price, email } = req.body;
  const newfruit = new fruitModel({ name, image, price, email });
  newfruit.save();
  res.json(newfruit);
};

const deletefruit = (req, res) => {
  const fruitId = req.params._id;

  fruitModel.deleteOne({ _id: fruitId }, (error, deletedData) => {
    res.json(deletedData);
  });
};

const updatefruit = (req, res) => {
    const { name, image, price, email } = req.body;
    const fruitId = req.params._id;
  
    fruitModel.findByIdAndUpdate({ _id: fruitId }, { name, image, price, email }, { new: true }, (error, updateddata) => {
  
      res.json(updateddata);
    });
  


 }





module.exports = {
  getfruit,
  getfruitabi,
  createfruit,
    deletefruit,
    updatefruit
};
