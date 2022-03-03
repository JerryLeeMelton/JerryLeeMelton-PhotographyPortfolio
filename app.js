const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 3000;

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

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

// Contact Form ===============================================================
app.post("/", (req, res)=>{

  const transporter = nodemailer.createTransport({
    host: "server264.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD
    }
  });

  let messageBody = `
  Message Details:

  Name: ${req.body.name}
  email: ${req.body.email}

  Message:
  ${req.body.message}
  `;

  const mailOptions = {
    from: process.env.CONTACT_EMAIL,
    to: process.env.TARGET_EMAIL,
    subject: "Message from a portfolio site visitor",
    text: messageBody
  };

  transporter.sendMail(mailOptions, (error, info)=>{
    if (error) {
      console.log(error);
      res.send("error");
    }
    else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }

  });

});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
