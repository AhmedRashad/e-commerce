require("dotenv").config();

const express = require("express");
const app = express();

const colors = require("colors");
const conectarDB = require("./config/db");
const port = process.env.PORT || 5000;

const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
conectarDB();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser);

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server on port ${port}`.yellow.bold);
});
