const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const homeController = require("./controller/homeController");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", homeController.getHome);
app.post("/form", homeController.postHome);
app.listen(8080); //the server object listens on port 8080
