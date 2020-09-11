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

async function onDeleteStudent() {
  const students = await http.deleteStudent(requestId);

  setList(students);
}

async function onSubmit(event) {
  event.preventDefault(); // Izbjeći automatsko refreshanje stranice

  const { name, age, gender } = event.target.elements;
  const data = {
    name: name.value || "John",
    age: age.value || 100,
    gender: gender.value
  };
  const students = await http.postStudent(data);

  setList(students);
}

document.getElementById("id-input").addEventListener("change", setId);
document
  .getElementById("get-students")
  .addEventListener("click", onGetStudents);
document.getElementById("get-student").addEventListener("click", onGetStudent);
document
  .getElementById("delete-student")
  .addEventListener("click", onDeleteStudent);
document.getElementById("form").addEventListener("submit", onSubmit);
