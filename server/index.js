require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");
app.use(cors());

require("colors");
const conectarDB = require("./config/db");
const port = process.env.PORT || 5000;

const userRouter = require("./routes/userRoutes");

conectarDB();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRouter);
app.listen(port, () => {
  console.log(`Server on port ${port}`.yellow.bold);
});
