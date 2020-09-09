// forEach, map, filter, reduce
export const students = [
  { id: 0, name: "Matea", gender: "female", age: 21 },
  { id: 1, name: "Grgo", gender: "male", age: 23 },
  { id: 2, name: "Ivan", gender: "male", age: 30 }
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
export const names = students.map(student => student.name);

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
export const males = students.filter(student => student.gender === "male");
// const males = students
//   .filter((student) => student.gender === "male")
//   .map((male) => male.name);

// ############# REDUCE ################
// *** For petlja ***
// let totalAge = 0;
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   totalAge += student.age; // Isto kao: totalAge = totalAge + student.age;
// }

// *** reduce ***
export const totalAge = students.reduce(
  (total, student) => (total += student.age),
  0
);

// for (let i = 0; i < boxes.length; i++) {
//   const box = boxes[i];
//   box.addEventListener("click", onBoxClick);
// }

export function createBox({ id, element, colour = "green", ...rest }) {
  const html = `<${element} id="${id}" class="box box--${colour}"></${element}>`;

  const template = document.createElement('template');

  template.innerHTML = html;

  return template.content.firstChild;
}

export default {
  students,
  males,
  createBox,
  names
};
