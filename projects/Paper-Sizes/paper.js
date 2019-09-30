const popup = () => {
  const format__block = document.querySelectorAll(".format__block");
  const popup__close = document.querySelectorAll(".popup__close");

  // Open popup
  format__block.forEach(block => {
    block.addEventListener("click", () => {
      setTimeout(function() {
        block.nextElementSibling.classList.add("format__popup--active");
      }, 300);
    });
  });

  // Close popup
  popup__close.forEach(close => {
    close.addEventListener("click", () => {
      close.parentNode.parentNode.classList.remove("format__popup--active");
    });
  });
};

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
popup();
