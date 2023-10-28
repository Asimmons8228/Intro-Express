const express = require("express");
const path = require("path");
const todoDb = require("./data/todo-db");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", function (req, res) {
  res.send("<h1>Hello from express </h1>");
});
app.get("/home", function (req, res) {
  res.render("home");
});
+app.listen(3000, function () {
  console.log = "Listening on port 3000";
});

app.get("/todos", function (req, res) {
  res.render("todos/index", {
    todos: todoDb.getAll(),
  });
});
