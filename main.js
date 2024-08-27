 // using localStorage save scores
    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    }
    /*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }
      */

      updateScoreElement();
    

      let isAutoPlaying = false; // This variable tracks whether the autoplay feature is currently active or not.
let intervalId; // This variable will store the ID of the interval, so it can be cleared later.

function autoPlay() {
  // This function toggles the autoplay feature on and off.
  
  if (!isAutoPlaying) {
    // If autoplay is not active, start it by setting an interval.
    intervalId = setInterval(function() {
      // The interval will execute this function every 1000 milliseconds (1 second).
      const playerMove = pickComputerMove(); // Pick a random move for the player.
      playGame(playerMove); // Play the game using the randomly selected move.
    }, 1000);
    
    isAutoPlaying = true; // Set the autoplay status to active.
  } else {
    // If autoplay is already active, stop it.
    clearInterval(intervalId); // Clear the interval using the stored interval ID.
    isAutoPlaying = false; // Set the autoplay status to inactive.
  }
}

               function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You Lose';
          } else if (computerMove === 'paper') {
            result = 'You Win';
          } else if (computerMove === 'scissors') {
            result = 'Tie';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You Win';
          } else if (computerMove === 'paper') {
            result = 'Tie';
          } else if (computerMove === 'scissors') {
            result = 'You Lose';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie';
          } else if (computerMove === 'paper') {
            result = 'You Lose';
          } else if (computerMove === 'scissors') {
            result = 'You Win';
          }
        }

        if (result === 'You Win') {
          score.wins += 1;
        } else if (result === 'You Lose') {
          score.losses += 1;
        } else if (result === 'Tie') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

         updateScoreElement();

          // Displaying result and moves in <p> elements
         document.querySelector('.js-result')
          .innerHTML = result;

         document.querySelector('.js-moves')
           .innerHTML = `You
          <img src="./assests/${playerMove}-emoji.svg" class="move-icon">
          <img src="./assests/${computerMove}-emoji.svg" class="move-icon">
          Computer`;
          
      }
          // we are using multi-line strings here
        /*alert(`You picked ${playerMove}. Computer picked ${computerMove}
. ${result}
 Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
      }*/

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      // Call the function to pick the computer's move when the button is clicked.
      function pickComputerMove() {
        const randomNum = Math.random();  // This line generates a random number between 0 inclusive and 1 exclusive.
        let computerMove = '';
        if (randomNum >= 0 && randomNum < 1 / 3) {  // 1 / 3 is approximately 0.3333.
          computerMove = 'rock'; // If randomNum is between 0 inclusive and 0.3333 exclusive, it picks Rock.
        } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) { // 2 / 3 is approximately 0.6667. randomNum must be at least 0.3333 and less than 0.6667 to pick Paper.
          computerMove = 'paper'; // If randomNum is between 0.3333 inclusive and 0.6667 exclusive, it picks Paper.
        } else if (randomNum >= 2 / 3 && randomNum < 1) {
          computerMove = 'scissors'; // If randomNum is between 0.6667 inclusive and 1 exclusive, it picks Scissors.
        }
        return computerMove;  // Returns the computer's move.
      }

      // steps on how this was made
      // 1. Each <button> has an onclick attribute that calls the playGame function with the respective move ('Rock', 'Paper', or 'Scissors') as an argument.
      // 2. const randomNum = Math.random(); generates a random number between 0 (inclusive) and 1 (exclusive).
      // 3. The computer's move is determined by comparing randomNum to the ranges defined in the if-else statements.
      // 4. The result of the game is determined by comparing the player's move with the computer's move.
      // 5. The result is displayed using an alert box.
      // 6. The pickComputerMove function is called when a button is clicked to generate the computer's move.
      // 7. The playGame function is called when a button is clicked to run the game logic.