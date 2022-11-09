let cards = [];
let sum = 0;
let hasBlackjack = false
let isPlaying = false
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
const deal = document.getElementById("deal");
deal.addEventListener("click", dealCards);
const hit = document.getElementById("hit");
hit.addEventListener("click", drawCard);
const stand = document.getElementById("stand");
stand.addEventListener("click", standFunction);
hit.disabled = true;
stand.disabled = true;



function dealCards() {
  hit.disabled = false;
  stand.disabled = false;
  console.log(isPlaying);
  cardsEl.textContent = "Cards: ";
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  cardsEl.textContent += cards;
  sumEl.textContent = sum;
  checkCards();
  deal.disabled = true
}

function drawCard() {
  let newCard = getRandomCard();
  cardsEl.textContent += "," + newCard;
  sum = parseInt(sumEl.textContent) + newCard;
  sumEl.textContent = sum;
  checkCards()
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

function standFunction() {
    hit.disabled = true
}

function checkCards() {
  let sum = parseInt(sumEl.textContent);
  if (sum <= 20) {
    messageEl.textContent = "Would you like to HIT for another card or STAND?";
  } else if (sum === 21) {
    messageEl.textContent = "You got Blackjack! Winner!";
    deal.disabled = false;
    isPlaying = false
  } else {
    messageEl.textContent = "You're out of the game";
    deal.disabled = false;
    isPlaying = false;
  }
}
