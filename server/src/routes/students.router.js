const express = require("express");
const studentsRouter = express.Router();

const students = [
  { id: 0, name: "Matea", gender: "female", age: 21 },
  { id: 1, name: "Grgo", gender: "male", age: 23 },
  { id: 2, name: "Ivan", gender: "male", age: 30 },
];

studentsRouter.get("/", (req, res, next) => {
  // Spoji se na bazu...
  res.status(200).json(students);
});

// studentsRouter.get("/:id", (req, res, next) => {
//   // ...
// });

// studentsRouter.post("/", (req, res, next) => {
//   // ...
// });

// studentsRouter.delete("/:id", (req, res, next) => {
//   // ...
// });

module.exports = studentsRouter;
