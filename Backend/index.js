const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const cors = require("cors");
const connection = require("./db")


// connection to db
connection();


app.get('/', (req, res) => {
  res.send(`<h1>Server is Live </h1>`)
})


app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});


// middleware
app.use(express.json());
app.use(cors());
