const express = require('express')
const  mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");

dotenv.config();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`)
})


mongoose.connect(process.env.MDB_CONNECT);