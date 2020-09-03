let isSidebarOpen = false;

function onSidebarToggle() {
  isSidebarOpen = !isSidebarOpen;

  if (isSidebarOpen) {
    document.getElementById("sidebar-container").classList.add("sidebar--open");
  } else {
    document
      .getElementById("sidebar-container")
      .classList.remove("sidebar--open");
  }
}

function onDuplicateBox(id) {
  const boxRef = document.getElementById(id);
  const containerRef = document.getElementById("box-container");
  const newBox = boxRef.cloneNode();

  containerRef.appendChild(newBox);
}
