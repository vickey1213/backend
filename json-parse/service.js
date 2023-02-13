"use strict";
const Blackcoffer = require("./model");

module.exports = {
  getBlackcoffer: async function (queryParams) {
    try {
      let limit = null;
      queryParams.limit ? (limit = queryParams.limit) : (limit = 100);

      const blackcoffers = await Blackcoffer.find({}).limit(limit);

      return {
        code: 200,
        msg: blackcoffers,
      };
    } catch (err) {
      console.log("service : getBlackcoffer : exception : " + err);
      return {
        code: 500,
        msg: {
          code: 500,
          message: "Internal Server Error.",
        },
      };
    }
  },
};
