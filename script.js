let cards = [];
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
document.getElementById("deal").onclick = deal;
const hit = document.getElementById("hit").onclick = drawCard;

function deal() {
  cardsEl.textContent = "Cards: ";
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  cardsEl.textContent += cards;
  sumEl.textContent = sum;
  checkCards();
}

function drawCard() {
  let newCard = getRandomCard();
  cardsEl.textContent += "," + newCard;
  sum = parseInt(sumEl.textContent) + newCard;
  sumEl.textContent = sum;
  checkCards();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function checkCards() {
  let sum = parseInt(sumEl.textContent);
  if (sum <= 20) {
    messageEl.textContent = "Would you like to HIT for another card or STAND?";
  } else if (sum === 21) {
    messageEl.textContent = "You got Blackjack! Winner!";
    hasBlackjack = true;
  } else {
    messageEl.textContent = "You're out of the game";
    isPlaying = false;
  }
}
