import http from "./http.service.js";
import { createElement } from "./helper.utils.js";

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

function setList(students) {
  const listRef = document.getElementById("student-list");

  listRef.innerHTML = "";

  students.forEach(student => {
    listRef.append(createElement(student));
  });
}

async function onGetStudents() {
  const students = await http.getStudents();

  setList(students);
}

async function onGetStudent() {
  const student = await http.getStudent(requestId);

  setList([student]);
}

async function onPostStudent() {
  const data = { name: "John", gender: "male", age: 100 };
  const students = await http.postStudent(data);

  setList(students);
}

async function onDeleteStudent() {
  const students = await http.deleteStudent(requestId);

  setList(students);
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
