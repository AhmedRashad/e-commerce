require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
/*This tells the server to use the client 
folder for all static resources*/
app.use(express.static('client'));

const cors = require("cors");
app.use(cors());

require("colors");

//The default endpoint for the webserver
app.get("/", (req, res) => {
  res.render("index.html");
});

const conectarDB = require("./config/db");
const port = process.env.PORT || 5000;

const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const brandRouter = require("./routes/brandRoutes");
const productRouter = require("./routes/productRoutes");
const reviwesRouter = require("./routes/reviwesRoutes");
const orderRouter = require("./routes/orderRoutes");
const stripeRouter = require("./routes/stripeRoutes");

conectarDB();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/brands", brandRouter);
app.use("/api/products", productRouter);
app.use("/api/reviwes", reviwesRouter);
app.use("/api/orders", orderRouter);
app.use("/api/stripe", stripeRouter);

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Server on port ${port}`.yellow.bold);
});
