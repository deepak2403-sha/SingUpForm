const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");

require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 3030;

// var db = mongoose.connection;
app.set("view engine", "ejs");
// ejs.register();
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/index", (req, res) => {
  res.render("index");
});

//creating user
app.post("/register", async (req, res) => {
  try {
    // console.log(req.body.name);
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    if (password === confirmpassword) {
      const registerEmployee = new Register({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        gender: req.body.gender,
      });

      const registered = await registerEmployee.save();
      res.status(201).redirect("index");
    } else {
      res.send("Not matching password");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3030, () => {
  console.log("Server up at 3030");
});
