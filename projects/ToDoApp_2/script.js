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
