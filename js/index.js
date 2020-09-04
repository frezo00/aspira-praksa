let isSidebarOpen = false;

function onSidebarToggle() {
  // const sidebarRef = document.getElementById("sidebar-container");
  // Umjesto "getElementById" može se koristiti "querySelector"
  const sidebarRef = document.querySelector("#sidebar-container");
  sidebarRef.classList.toggle("sidebar--open");

  // // truthy/falsy
  // // Primjer 1: Ternarni operator: varijabla ? A : B;
  // isSidebarOpen = !isSidebarOpen;
  // isSidebarOpen
  //   ? sidebarRef.classList.add("sidebar--open")
  //   : sidebarRef.classList.remove("sidebar--open");

  // // Primjer 2: Standardni if-else
  // if (isSidebarOpen) {
  //   sidebarRef.classList.add("sidebar--open");
  // } else {
  //   sidebarRef.classList.remove("sidebar--open");
  // }
}

const boxes = document.querySelectorAll(".box"); // boxes je lista html elemenata

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  box.addEventListener("click", onBoxClick);
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
