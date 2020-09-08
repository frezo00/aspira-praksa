function onSidebarToggle() {
  const sidebarRef = document.querySelector("#sidebar-container");
  sidebarRef.classList.toggle("sidebar--open");
}

const boxes = document.querySelectorAll(".box"); // boxes je lista html elemenata

boxes.forEach((box) => box.addEventListener("click", onBoxClick));

// forEach, map, filter, reduce
const students = [
  { id: 0, name: "Matea", gender: "female", age: 21 },
  { id: 1, name: "Grgo", gender: "male", age: 23 },
  { id: 2, name: "Ivan", gender: "male", age: 30 },
];

// ############# MAP ################
// *** For petlja ***
// const names = [];
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   names.push(student.name);
// }

// *** foreach ***
// const names = [];
// students.forEach((student) => names.push(student.name));

// *** map ***
const names = students.map((student) => student.name);

console.log(names);

// ############# FILTER ################
// *** For petlja ***
// const males = [];
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   if (student.gender === "male") {
//     males.push(student.name);
//   }
// }

// *** filter ***
const males = students.filter((student) => student.gender === "male");
// const males = students
//   .filter((student) => student.gender === "male")
//   .map((male) => male.name);

console.log(males);

// ############# REDUCE ################
// *** For petlja ***
// let totalAge = 0;
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   totalAge += student.age; // Isto kao: totalAge = totalAge + student.age;
// }

// *** reduce ***
const totalAge = students.reduce((total, student) => (total += student.age), 0);
console.log(totalAge);

// for (let i = 0; i < boxes.length; i++) {
//   const box = boxes[i];
//   box.addEventListener("click", onBoxClick);
// }

function onBoxClick(event) {
  const boxRef = event.currentTarget; // u boxRef je spremljen: document.getElementById("blue-box")

  onDuplicateBox(boxRef.id);
}

function onDuplicateBox(id) {
  const elementRef = document.getElementById(id);
  const newBox = elementRef.cloneNode();

  newBox.addEventListener("click", onBoxClick);
  document.getElementById("box-container").append(newBox);
}

function onSubmit(event) {
  event.preventDefault(); // Izbjeći automatsko refreshanje stranice

  const emailValue = document.getElementById("mail").value;
  alert(emailValue);
}
