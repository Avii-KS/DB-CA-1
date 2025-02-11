const mongoose = require("mongoose");

// Menu Schema
const detailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    description: "Name of the restaurant",
  },
  city: {
    type: String,
    required: [true, "City is required"],
    description: "City of the restaurant",
  },
  itemsArray: {
    type: [String],
    default: [indian, chinese, south, Italian, Japanese],
    description: "Menu items",
  },
});

// Item Details Schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name of the item"],
    description: "Name of the item",
  },
  price: {
    type: Number,
    required: [true, "Price of the item"],
    description: "Price of the item",
  },
});

const Details = mongoose.model("Details", detailsSchema);

const Item = mongoose.model("Item", itemSchema);

module.exports = Details;

module.exports = Item;
