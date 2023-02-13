"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./json-parse/controller");


router.get("/black-coffer", controller.getBlackcoffer);
// router.use('/black-coffer', require('./json-parse/routes'));

module.exports = router;
