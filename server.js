const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:pass_123@devconnector.agdmw.mongodb.net/black-cofferr?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  });

// app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  console.log("header host = ", req.headers.host);
  res.redirect("https://google.com");
});

const apiv1_routes = require("./routes");

app.use("/v1/", apiv1_routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on the port ${port}`));
