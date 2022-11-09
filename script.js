let playerCards = [];
let isPlaying = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
const deal = document.getElementById("deal");
deal.addEventListener("click", dealCards);
const hit = document.getElementById("hit");
hit.addEventListener("click", drawCard);
const stand = document.getElementById("stand");
stand.addEventListener("click", standFunction);

//disabling hit and stand buttons at sart of game
hit.disabled = true;
stand.disabled = true;


function dealCards() {
    hit.disabled = false;
    stand.disabled = false;
    cardsEl.textContent = "Cards: ";
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    playerCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    cardsEl.textContent += playerCards;
    sumEl.textContent = sum;
    checkSum();
    deal.disabled = true
}

function drawCard() {
  let newCard = getRandomCard();
  cardsEl.textContent += "," + newCard;
  sum = parseInt(sumEl.textContent) + newCard;
  sumEl.textContent = sum;
  checkSum()
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
    hit.disabled = true;
    stand.disabled = true;
    messageEl.textContent = "Dealer drawing cads";

}

function checkSum() {
  let sum = parseInt(sumEl.textContent);
  if (sum <= 20) {
    messageEl.textContent = "Would you like to HIT for another card or STAND?";
  } else if (sum === 21) {
    messageEl.textContent = "You got Blackjack! Winner!";
    deal.disabled = false;
    hit.disabled = true;
    stand.disabled = true;
  } else {
    messageEl.textContent = "You're out of the game";
    deal.disabled = false;
    hit.disabled = true;
    stand.disabled = true;
  }
}

