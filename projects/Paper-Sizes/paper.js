const showClick = () => {
  const format__block = [...document.querySelectorAll(".format__block")];

  format__block.forEach(block => {
    block.addEventListener("mousedown", () => {
      block.classList.add("format__block--click");
    });
    block.addEventListener("mouseup", () => {
      block.classList.remove("format__block--click");
    });
  });
};

showClick();
