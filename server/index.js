const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const rootRouter = require("./routes");
const cors = require("cors");

dotenv.config();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection mongodb successfull"))
  .catch((err) => console.log(err));

app.use("/api", rootRouter);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:3000");
});
