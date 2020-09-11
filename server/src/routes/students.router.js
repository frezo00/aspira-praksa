// const express = require("express");
// const studentsRouter = express.Router();

import { Router } from "express";
import { getAllStudents } from "../controllers/students.controller";
const studentsRouter = Router();

let students = [
  { id: 0, name: "Matea", gender: "female", age: 21 },
  { id: 1, name: "Grgo", gender: "male", age: 23 },
  { id: 2, name: "Ivan", gender: "male", age: 30 },
];

studentsRouter.get("/", getAllStudents);

studentsRouter.get("/:id", (req, res, next) => {
  const studentId = Number(req.params.id);
  const responseStudent = students.find(({ id }) => id === studentId);

  res.status(200).json(responseStudent);
});

studentsRouter.post("/", (req, res, next) => {
  const id = students.reduce((acc, { id }) => (id > acc ? id : acc), 0);

  students.push({ id: id + 1, ...req.body });

  res.status(200).json(students);
});

studentsRouter.delete("/:id", (req, res, next) => {
  const idToRemove = Number(req.params.id);

  students = students.filter(({ id }) => id !== idToRemove);

  res.status(200).json(students);
});

// module.exports = studentsRouter;

export default studentsRouter;
