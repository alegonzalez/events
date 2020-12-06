const express = require("express");
const routes = express.Router();
const UserController = require('./controllers/UserController')
//index page
routes.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});
//create a new user
routes.post("/register", UserController.store);

module.exports = routes;
