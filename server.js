"use strict";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const axios = require("axios");
const {
  getfruit,
  getfruitabi,
  createfruit,
    deletefruit,
    updatefruit
} = require("./controler/fruit.controler");

const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;

mongoose.connect(MONGO_DB);
app.get("/fruitapi", getfruitabi);

app.get("/fruit", getfruit);
app.post("/fruit", createfruit);
app.delete("/fruit/:_id", deletefruit)
app.put("/fruit/:_id",updatefruit)

app.listen(PORT);
