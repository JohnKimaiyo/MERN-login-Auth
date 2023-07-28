const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");


dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});

app.use(express.json());

mongoose.connect("mongodb+srv://employee:employee@cluster0.bdzguf0.mongodb.net/")


app.use("/auth",require("./routers/userRouter")); 