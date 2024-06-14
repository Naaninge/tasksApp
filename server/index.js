const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const tasks = require("./routes/tasks");
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//routes

app.use("/api/v1/tasks", tasks);



port = process.env.PORT || 5500;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
