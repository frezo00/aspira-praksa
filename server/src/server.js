// const express = require("express");
// const bodyParser = require("body-parser");
// const helmet = require("helmet");
// const cors = require("cors");

// const studentsRouter = require("./routes/students.router");
// const { PORT } = require("./configs/environment.config");

import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

import studentsRouter from "./routes/students.router";
import { PORT } from "./configs/environment.config";

const app = express();

// Middlewares
app.use(cors()); // Enables all CORS requests
app.use(helmet()); // Security
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Content-Type: application/json

// Routes
app.use("/api/students", studentsRouter);
app.get("/", (req, res, next) => {
  res.status(404).send("<h1>Invalid route</h1>");
});

// Starting a server
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
