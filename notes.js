// random number from 1 - 13
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  console.log(randomNumber);
  return randomNumber;
  
}

rollDice();
