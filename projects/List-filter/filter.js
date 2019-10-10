const filterItems = e => {
  const text = e.target.value.toLowerCase();
  const listLi = document.querySelectorAll(".listItem li");

  listLi.forEach(li => {
    const item = li.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
};

const addItem = e => {
  const input = document.querySelector(".addItem-input");
  const newItem = document.createElement("li");
  const listItem = document.querySelector(".listItem");

  if (input.value.length) {
    newItem.textContent = input.value;
    listItem.appendChild(newItem);
    input.value = "";
  }
};

document.querySelector(".filter").addEventListener("keyup", filterItems);
document.querySelector(".addItem-btn").addEventListener("click", addItem);
