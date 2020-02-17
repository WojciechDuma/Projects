const date = () => {
  const header__date = document.querySelector(".header__date");
  const time = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  header__date.innerHTML = time.toLocaleDateString("pl-PL", options);
};

date();

const listTask = document.querySelector(".content__list");
const input = document.querySelector(".addTask__task");
const done = "content__item__active--done";
const undone = "content__item__active--undone";

// Storage:
let listStorage, key;

let data = localStorage.getItem("TaskList");
if (data) {
  listStorage = JSON.parse(data);
  key = listStorage.length;
  showList(listStorage);
} else {
  listStorage = [];
  key = 0;
}

function showList(list) {
  list.forEach(item => {
    addTask(item.name, item.key, item.check);
  });
}

// ################################################

function addTask(task, key, check) {
  const doneTask = check ? done : undone;
  const content__item = `
  <li class="content__item" data-job="task" >
    <span class="content__item__active ${doneTask}" data-job="complete" key="${key}"></span>
    <p class="content__item__text" data-job="text" >${task}</p>
    <span class="content__item__remove" data-job="remove" key="${key}">x</span>
  </li>
  `;
  listTask.insertAdjacentHTML("beforeend", content__item);
}

document.addEventListener("keyup", e => {
  e.preventDefault();
  if (e.keyCode == 13) {
    const task = input.value;

    if (task) {
      addTask(task, key, false);

      listStorage.push({
        name: task,
        key: key,
        check: false
      });

      localStorage.setItem("TaskList", JSON.stringify(listStorage));
      key++;
    }

    input.value = "";
  }
});

function complete(element, elementKey) {
  element.classList.toggle(undone);
  element.classList.toggle(done);
  element.nextElementSibling.classList.toggle("content__item__text--done");

  listStorage[elementKey].check = listStorage[elementKey].check ? false : true;
}

function remove(element, elementKey) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  listStorage.splice(elementKey, 1);
}

listTask.addEventListener("click", function(e) {
  const element = e.target;
  const elementJob = element.attributes["data-job"].value;
  const elementKey = element.attributes.key.value;

  if (elementJob === "remove") {
    remove(element, elementKey);
  } else if (elementJob === "complete") {
    complete(element, elementKey);
  }

  localStorage.setItem("TaskList", JSON.stringify(listStorage));
});
