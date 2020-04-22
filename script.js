const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log("Hello");
  // adds "open" to class list
  this.classList.toggle("open-active");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
