const titles = document.querySelectorAll(".wrap h2");

titles.forEach(title =>
  title.addEventListener("click", e => {
    e.target.nextElementSibling.classList.toggle("open");
  })
);

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Checkboxes between first and last");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
