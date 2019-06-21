/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
CHALLENGE 6: 3 additional challenges for pig game

1. A player looses his ENTIRE score when the rolls two 6 in a row. After that, it's the next player's turn.
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.
*/

var scores, roundScore, activePlayer, gamePlaying, previousDice, finalScore;
//to start the game, set everything to none/zero
function newGame() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  previousDice = [0,0];
  updateFinalScore();

  document.querySelector('.dice-0').style.display = 'none';
  document.querySelector('.dice-1').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}

newGame();

//id is #, class is .
//document.querySelector('#current-'  + activePlayer).textContent = dice;
//document.querySelector('#current-'  + activePlayer).innerHTML = '<em>' + dice + '</em>'; //italic

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice-0').style.display = 'none';
  document.querySelector('.dice-1').style.display = 'none';
}

function updateFinalScore() {
  let input = document.querySelector('.final-score').value;

  //if input is undefined, 0, null, or "" then final score will be 100 instead
  if(input) {
    finalScore = input;
  } else {
    finalScore = 100;
  }
}

//new button
document.querySelector('.btn-new').addEventListener('click', newGame);

//roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
    updateFinalScore();

    // 1. Random number
    let dice_0 = Math.floor(Math.random() * 6) + 1; //gives a random number between 0 to 5 then add 1 so its between 1 to 6
    let dice_1 = Math.floor(Math.random() * 6) + 1; //gives a random number between 0 to 5 then add 1 so its between 1 to 6

    // 2. Display the result
    //dice 0
    let diceDOM_0 = document.querySelector('.dice-0');
    diceDOM_0.style.display = 'block';
    diceDOM_0.src = 'dice-' + dice_0 + '.png';
    //dice 1
    let diceDOM_1 = document.querySelector('.dice-1');
    diceDOM_1.style.display = 'block';
    diceDOM_1.src = 'dice-' + dice_1 + '.png';

    //check for 6s
    if(dice_0 === 6 && dice_1 === 6 || previousDice[0] === 6 && dice_0 === 6 || previousDice[0] === 6 && dice_1 === 6 || previousDice[1] === 6 && dice_0 === 6 || previousDice[1] === 6 && dice_1 === 6) {
      //A player looses his ENTIRE score when the rolls two 6 in a row. After that, it's the next player's turn.
      previousDice[0] = dice_0;
      previousDice[1] = dice_1;
      nextPlayer();
    } else {
      previousDice[0] = dice_0;
      previousDice[1] = dice_1;
    }

    // 3. Update the round score IF the rolled number was NOT a 1
    if(dice_0 === 1 || dice_1 === 1) {
      //Next players
      nextPlayer();
    } else {
      //Add scores
      roundScore += dice_0 + dice_1;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
  }
});

//hold button
document.querySelector('.btn-hold').addEventListener('click', function () {
  if(gamePlaying) {
    updateFinalScore();
    //  Add current score to global scores
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the Game
    if(scores[activePlayer] >= finalScore) {
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       document.querySelector('.dice-0').style.display = 'none';
       document.querySelector('.dice-1').style.display = 'none';
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

       gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});
