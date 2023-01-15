const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/auth",authRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});