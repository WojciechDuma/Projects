const cardsColor = [
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
];

let cards = [...document.querySelectorAll("div")];

const startTime = new Date().getTime();
let activeCard = "";
const activeCards = [];
const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = e => {
  activeCard = e.target;

  if (activeCard == activeCards[0]) return; // Zablokowanie działania po klikaniu w ten sam element

  activeCard.classList.remove("hidden");

  // if (czy to pierwsze kliknięcie) else (czy to drugie kliknięcie)
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  } else {
    cards.forEach(card => {
      card.removeEventListener("click", clickCard);
    });
    activeCards[1] = activeCard;

    // Sprawdzanie czy odkryliśmy dwie takie same karty, znikniecie po 1s jeżeli karty są inne
    setTimeout(() => {
      if (activeCards[0].className === activeCards[1].className) {
        console.log("win");
        activeCards.forEach(card => card.classList.add("off")); // nadanie odkrytym karton klasę off
        gameResult++;
        cards = cards.filter(card => !card.classList.contains("off")); // usunięcie klikniętych kart z tablicy

        if (gameResult == gamePairs) {
          const endTime = new Date().getTime();
          const gameTime = Math.round((endTime - startTime) / 1000);
          alert(`WYGRAŁEŚ! Twój czas to: ${gameTime} sekund`);
          location.reload(); // po zakończeniu reload całej strony
        }
      } else {
        console.log("lose");
        activeCards.forEach(card => card.classList.add("hidden"));
      }
      activeCard = "";
      activeCards.length = 0;
      cards.forEach(card => card.addEventListener("click", clickCard));
    }, 500);
  }
};

const init = () => {
  cards.forEach(card => {
    const index = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[index]);
    cardsColor.splice(index, 1);
  });

  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 1500);
};

init();
