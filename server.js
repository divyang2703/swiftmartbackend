const express = require("express");
const app = express();
const dotenv = require("dotenv");
var cors = require('cors')
dotenv.config();
const PORT = process.env.PORT;


var corsOptions = {
    origin: 'http://localhost:3000',
    method: "GET"
    // optionsSuccessStatus: 200
  }

app.get("/api", cors(corsOptions),(req,res) => {
  fetch(`${process.env.API_URL}`)
    .then((response) => response.json()).then((data)=>res.json(data))

});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
