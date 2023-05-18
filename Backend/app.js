require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const Product = require("./models/user");

const connectDB = require("./DB/connect");
const jwt = require("jsonwebtoken");

const cookieparser = require("cookie-parser");

const session = require("express-session");
const bodyparser = require("body-parser");
// const LocalStrategy = require("passport-local");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
    app.listen(3001, (req, res) => {
      console.log("Server is listening");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieparser("secretcode"));

app.post("/api/login", async (req, res) => {
  try {
    const user = await Product.model.findOne({
      name: req.body.name,
      password: req.body.password,
    });
    if (!user) {
      return res.json({ success: false });
    }
    if (req.body.password === user.password) {
      const token = jwt.sign(
        {
          name: user.name,
          password: user.password,
        },
        process.env.JWT_SECRET
      );
      res.json({ user, token, success: true });
      console.log(token);
    }
  } catch (e) {
    res.json({ success: false });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    // const user = Product.model.create({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.password,
    // });
    res.send({ success: true });
  } catch {
    res.send({ success: false });
  }
});
