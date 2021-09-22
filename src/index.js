const express = require("express");
require("./db");
const todoRouter = require("./router/todo.routes");
const cors = require("cors")

const app = express();

app.use(cors());

app.use(express.json());

app.use("/todos", todoRouter)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})


module.exports = app;