let playerCards = [];
let dealerCards = [];
let sum = 0;
let dealerSum = 0;
let isPlaying = false;
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let dealerSumEl = document.getElementById("dealer-sum")
let cardsEl = document.getElementById("player-cards");
let dealerCardsEl = document.getElementById("dealer-cards")
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
    dealerCards = []
    dealerCardsEl.textContent = ''
    dealerSumEl.textContent = ''
    hit.disabled = false;
    stand.disabled = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    playerCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    cardsEl.textContent = playerCards;
    sumEl.textContent = sum;
      if (sum == 21){
      deal.disabled = false
    } else {deal.disabled = true}
    checkSum();   
  }
  
  function checkSum() {
    let sum = parseInt(sumEl.textContent);
    if (sum === 21) {
      messageEl.textContent = "You got Blackjack! Winner!";
      deal.disabled = false;
      hit.disabled = true;
      stand.disabled = true;
    } else if (sum <21) {
      messageEl.textContent = "HIT for another card or STAND?";
    } else {
      messageEl.textContent = "You busted, better luck next time";
      deal.disabled = false;
      hit.disabled = true;
      stand.disabled = true;
    }
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
  dealerDraws()
}

function dealerDraws() {
    let dealerFirstCard = getRandomCard()
    let dealerSecondCard = getRandomCard();
    dealerCards = [dealerFirstCard, dealerSecondCard];
    dealerSum = dealerFirstCard + dealerSecondCard;
    dealerCardsEl.textContent = dealerCards;
    dealerSumEl.textContent += dealerSum
      if (dealerSum == sum){
        messageEl.textContent = "You win";
        deal.disabled = false
      } else if (dealerSum > sum){
        messageEl.textContent = "Dealer wins, better luck next time";
        deal.disabled = false
      } else {dealerMove()}
    
}

function dealerMove(){
        const dealerDrawing = setInterval(()=> {
        dealerCards.push(getRandomCard())
        dealerCardsEl.textContent = dealerCards;
        dealerSum = dealerCards.reduce((a,b)=>a+b)
        dealerSumEl.textContent = dealerSum
        if (dealerSum>21){
            clearInterval(dealerDrawing)
            messageEl.textContent = "Dealer busts. You Win!";
            deal.disabled = false
        } else if (dealerSum>=sum && dealerSum<22){
            clearInterval(dealerDrawing)
            messageEl.textContent = "Dealer wins, better luck next time";
            deal.disabled = false;
        }
        },2000);
    
}

