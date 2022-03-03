const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/portfolio-abstract", (req, res) => {
  res.render("portfolio-abstract");
});

app.get("/portfolio-product", (req, res) => {
  res.render("portfolio-product");
});

app.get("/portfolio-natureandcity", (req, res) => {
  res.render("portfolio-natureandcity");
});

app.get("/portfolio-food", (req, res) => {
  res.render("portfolio-food");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
