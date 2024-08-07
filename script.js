   let winScore=document.querySelector("#winScore");
   let loseScore=document.querySelector("#loseScore");
   let tieScore=document.querySelector("#tieScore");
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
      // using parameters
      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
            result = 'You Lose';
          } else if (computerMove === 'Paper') {
            result = 'You Win';
          } else if (computerMove === 'Scissors') {
            result = 'Tie';
          }

        } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You Win';
          } else if (computerMove === 'Paper') {
            result = 'Tie';
          } else if (computerMove === 'Scissors') {
            result = 'You Lose';
          }
          
        } else if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'Tie';
          } else if (computerMove === 'Paper') {
            result = 'You Lose';
          } else if (computerMove === 'Scissors') {
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
          // we are using multi-line strings here

          let backdrop=document.querySelector("#backdrop");
            winScore.innerText=score.wins;
          loseScore.innerText=score.losses;
          tieScore.innerText=score.ties;
          backdrop.addEventListener("click",()=>{
            backdrop.style.display="none";
          })
          backdrop.style.display="flex";
          let x= alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
 Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      // Call the function to pick the computer's move when the button is clicked.
      function pickComputerMove() {
        const randomNum = Math.random();  // This line generates a random number between 0 inclusive and 1 exclusive.
        let computerMove = '';
        if (randomNum >= 0 && randomNum < 1 / 3) {  // 1 / 3 is approximately 0.3333.
          computerMove = 'Rock'; // If randomNum is between 0 inclusive and 0.3333 exclusive, it picks Rock.
        } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) { // 2 / 3 is approximately 0.6667. randomNum must be at least 0.3333 and less than 0.6667 to pick Paper.
          computerMove = 'Paper'; // If randomNum is between 0.3333 inclusive and 0.6667 exclusive, it picks Paper.
        } else if (randomNum >= 2 / 3 && randomNum < 1) {
          computerMove = 'Scissors'; // If randomNum is between 0.6667 inclusive and 1 exclusive, it picks Scissors.
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