let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumsEl = document.getElementById("sums-el");
let dealerCardsEl = document.getElementById("dealerCards-el");
let dealerSumsEl = document.getElementById("dealerSums-el");

let message = "";

let cards = [];
let sum = 0;

let dealerCards = [];
let dealerSum = 0;

let hasBlackJack = false;
let isAlive = true;
let dealerAlive = true;
let dealerBlackJack = false;
let passedCheck = false;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  passedCheck = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  let firstDealerCard = getRandomCard();
  let secondDealerCard = getRandomCard();
  dealerCards = [firstDealerCard, secondDealerCard];
  dealerSum = firstDealerCard + secondDealerCard;
  renderGame();
}

function renderGame() {
  dealerSumsEl.textContent = "Dealer's Total: " + dealerSum;
  dealerCardsEl.textContent = "Dealer's Cards: ";
  sumsEl.textContent = "Total: " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " - ";
  }

  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardsEl.textContent += dealerCards[i] + " - ";
  }

  if (dealerSum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (dealerSum === 21) {
    dealerAlive = true;
    dealerBlackJack = true;
  } else {
    dealerAlive = false;
    message = "The dealer has busted!";
    hasBlackJack = true;
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You have won!";
    hasBlackJack = true;
  } else {
    message = "You have lost!";
    isAlive = false;
  }
  if (hasBlackJack === true) {
    message = "You have won!";
    hasBlackJack = true;
  }

  if (passedCheck === true) {
    if (sum > dealerSum) {
      hasBlackJack = true;
      message = "You have won!";
    } else {
      dealerBlackJack = true;
      message = "You have lost!";
    }
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function passCheck() {
  passedCheck = true;
  if (isAlive === true && hasBlackJack === false) {
    if (dealerAlive === true && dealerSum <= 15) {
      renderDealer();
    }
    renderGame();
  }
}

function renderDealer() {
  let dealerCard = getRandomCard();
  dealerSum += dealerCard;
  dealerCards.push(dealerCard);
  renderGame();
}

function checkSums() {
  if (sum > dealerSums) {
    hasBlackJack = true;
  } else if (sumEl === dealerSumEl) {
    hasBlackJack = true;
  } else {
    dealerBlackJack = true;
  }
}
