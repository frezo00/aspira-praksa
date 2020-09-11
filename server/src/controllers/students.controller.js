let students = [
  { id: 0, name: "Matea", gender: "female", age: 21 },
  { id: 1, name: "Grgo", gender: "male", age: 23 },
  { id: 2, name: "Ivan", gender: "male", age: 30 },
];

export const getAllStudents = (req, res, next) => {
  /* if (true) {
    return res.status(500).json("Internal Server Error");
  } */

  res.status(200).json(students);
};
