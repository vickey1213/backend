"use strict";
const services = require("./service");

module.exports = {
  getBlackcoffer: async function (req, res) {
    try {
      // filter and validation
      let queryParams = req.query;
      // invoke service call
      var result = await services.getBlackcoffer(queryParams);
      res.status(result.code).json(result.msg);
    } catch (err) {
      console.log(" getBlackcoffer constroller error" + err);
      res.status(500).json({
        msg: {
          code: 500,
          message: "Internal Server Error.",
        },
      });
      return;
    }
  },
};
