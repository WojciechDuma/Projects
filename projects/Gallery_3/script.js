const panels = document.querySelectorAll(".panel");

function open() {
  panels.forEach(panel => {
    panel.classList.remove("panel-open");
  });
  setTimeout(() => {
    this.classList.toggle("panel-open");
  }, 1000);
}

panels.forEach(panel => panel.addEventListener("click", open));
