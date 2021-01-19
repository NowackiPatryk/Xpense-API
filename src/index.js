const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
const authRoutes = require("./routes/auth");
const expensesGroupRoutes = require("./routes/expensesGroup");

app.use(authRoutes);
app.use(expensesGroupRoutes);

//db connection
const connectConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_CONNECT_URL, connectConfig);
const database = mongoose.connection;

database.on("error", () => console.log("Connection error"));
database.once("open", () => console.log("Connected!"));

app.listen(process.env.PORT || 3000);
