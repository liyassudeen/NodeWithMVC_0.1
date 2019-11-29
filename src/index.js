const express = require("express");
const path = require("path");
const homeController = require("./controller/homeController");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", homeController.home);
app.listen(8080); //the server object listens on port 8080
