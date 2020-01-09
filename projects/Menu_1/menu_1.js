const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const items = document.querySelectorAll(".navigation__item");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.classList.contains("hamburger--active")
  );
  nav.classList.toggle("navigation--active");

  items.forEach(item => {
    item.classList.toggle("navigation__item--active");
  });
};

hamburger.addEventListener("click", handleClick);
