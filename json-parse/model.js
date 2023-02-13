"use strict";
const mongoose = require("mongoose");

const blackcofferSchema = new mongoose.Schema({
  intensity: {
    type: Number,
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  region: {
    type: String,
  },
  impact: {
    type: String,
  },
  start_year: {
    type: String,
  },
  added: {
    type: Date,
  },
  published: {
    type: Date,
  },
  region: {
    type: String,
  },
  country: {
    type: String,
  },
  relevance: {
    type: Number,
  },
  pestle: {
    type: String,
  },
  source: {
    type: String,
  },
  title: {
    type: String,
  },
  likelihood: {
    type: Number,
  },
});

const Blackcoffer = mongoose.model(
  "Blackcoffer",
  blackcofferSchema,
  "Blackcoffer"
);
module.exports = Blackcoffer;
