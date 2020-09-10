import http from "./http.service.js";

function onSidebarToggle() {
  const sidebarRef = document.querySelector("#sidebar-container");
  sidebarRef.classList.toggle("sidebar--open");
}

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
  console.log(emailValue);
}

const boxes = document.querySelectorAll(".box"); // boxes je lista html elemenata

boxes.forEach(box => box.addEventListener("click", onBoxClick));

/* Asinkroni dio */

let requestId;

function setId(event) {
  requestId = event.target.value;
}

async function onGetStudents() {
  console.log(await http.getStudents());
}

async function onGetStudent() {
  console.log(await http.getStudent(requestId));
}

async function onPostStudent() {
  const data = { name: "John", gender: "male", age: 100 };

  console.log(await http.postStudent(data));
}

async function onDeleteStudent() {
  console.log(await http.deleteStudent(requestId));
}

document.getElementById("id-input").addEventListener("change", setId);
document
  .getElementById("get-students")
  .addEventListener("click", onGetStudents);
document.getElementById("get-student").addEventListener("click", onGetStudent);
document
  .getElementById("post-student")
  .addEventListener("click", onPostStudent);
document
  .getElementById("delete-student")
  .addEventListener("click", onDeleteStudent);
