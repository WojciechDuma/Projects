const cardsColor = [
  [
    "red",
    "red",
    "green",
    "green",
    "blue",
    "blue",
    "brown",
    "brown",
    "yellow",
    "yellow",
    "grey",
    "grey",
    "cadetblue",
    "cadetblue",
    "violet",
    "violet",
    "lightgreen",
    "lightgreen"
  ],
  [
    "color_111",
    "color_111",
    "color_222",
    "color_222",
    "color_333",
    "color_333",
    "color_444",
    "color_444",
    "color_555",
    "color_555",
    "color_666",
    "color_666",
    "color_777",
    "color_777",
    "color_888",
    "color_888",
    "color_999",
    "color_999"
  ]
];

let cards = [...document.querySelectorAll("div")];
const startTime = new Date().getTime();
let activeCard = "";
const activeCards = [];
const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = e => {
  activeCard = e.target;

  if (activeCard == activeCards[0]) return; // Block after clicking in the same card

  activeCard.classList.remove("hidden");

  // if (first click) else (second click)
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  } else {
    cards.forEach(card => {
      card.removeEventListener("click", clickCard);
    });
    activeCards[1] = activeCard;

    // Check cards and hide if cards have different colors
    setTimeout(() => {
      if (activeCards[0].className === activeCards[1].className) {
        // WIN
        activeCards.forEach(card => card.classList.add("off"));
        gameResult++;
        cards = cards.filter(card => !card.classList.contains("off"));

        if (gameResult == gamePairs) {
          const endTime = new Date().getTime();
          const gameTime = Math.round((endTime - startTime) / 1000);
          alert(`YOU WIN! Your time: ${gameTime} seconds`);
          location.reload();
        }
      } else {
        //  LOSE
        activeCards.forEach(card => card.classList.add("hidden"));
      }
      activeCard = "";
      activeCards.length = 0;
      cards.forEach(card => card.addEventListener("click", clickCard));
    }, 500);
  }
};

const init = level => {
  // Initialization depends on level, assign array to level
  let arr = "";
  level === "easy" ? (arr = cardsColor[0]) : (arr = cardsColor[1]);

  // Draw colors and start game
  cards.forEach(card => {
    document.querySelector(".game").classList.add("offDisplay");
    document.querySelector(".wrapper").classList.remove("offDisplay");
    const index = Math.floor(Math.random() * arr.length);
    card.classList.add(arr[index]);
    arr.splice(index, 1);
  });

  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 1500);
};

// Animation click button
const btnStart = document.querySelector(".game__start");
btnStart.addEventListener("mousedown", () => {
  btnStart.classList.add("game__start--click");
});
btnStart.addEventListener("mouseup", () => {
  btnStart.classList.remove("game__start--click");
});

// Select level, game initialization after 0,7s - just to see button click animation
btnStart.addEventListener("click", () => {
  setTimeout(() => {
    let levels = [...document.getElementsByName("level")];
    let level;

    for (let i = 0; i < levels.length; i++) {
      if (levels[i].checked) {
        level = levels[i].value;
      }
    }

    init(level);
  }, 700);
});
