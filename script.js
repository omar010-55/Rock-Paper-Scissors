let Score = document.querySelector("#score")

let Result = document.querySelector("#result")

let allbtn = document.querySelector("#allbtn");

// using bubbling in element to set one listener
allbtn.addEventListener('click', function(event) {
  playGame(event.target.id)
});

// getComputerChoice()
function getComputerChoice() {
  let COMChoice
  let choice = Math.floor(Math.random() * 10) + 1
  if (choice <= 4) {
    COMChoice = "rock"
    console.log(COMChoice)
    return COMChoice
  } else if (choice <= 7) {
    COMChoice = "paper"
    console.log(COMChoice)
    return COMChoice
  } else {
    COMChoice = "scissors"
    console.log(COMChoice)
    return COMChoice
  }
}

// set scores
let humanScore = 0
let computerScore = 0

function playGame(humanChoice, computerChoice) {
  const computerSelection = getComputerChoice();
  if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    return Result.textContent = "ERORR"
  }
  //for comparing and know the winner
  if (humanChoice === computerSelection) {
    Result.textContent = "It is tie"
  } else if (humanChoice === "rock" && computerSelection === "scissors") {
    Result.textContent = `You win ${humanChoice} beat ${computerSelection}`
    humanScore += 1
    } else if (humanChoice === "paper" && computerSelection === "rock") {
      Result.textContent = `You win ${humanChoice} beat ${computerSelection}`
      humanScore += 1
    } else if (humanChoice === "scissors" && computerSelection === "paper") {
      Result.textContent = `You win ${humanChoice} beat ${computerSelection}`
      humanScore += 1
      
    } else {
      Result.textContent = `You lost ${computerSelection} beat ${humanChoice}`
      computerScore += 1
    }
    
    if (computerScore === 5 || humanScore === 5) { //For run the game after 5 score
    //this is for showing the final result and winner
    if (humanScore > computerScore) {
        Result.textContent = `You Win The Game!!!! ${humanScore} to ${computerScore}`
      } else if (humanScore === computerScore) {
        Result.textContent = `You Draw with Computer ${humanScore} to ${computerScore}`
      } else {
        Result.textContent = `Sorry You Lost The Game ${computerScore} to ${humanScore}`
      }
      reset() // to reset the game
    }
    function reset() {
      humanScore = 0
      computerScore = 0
    }
    //to set scores
    Score.textContent = `Player Score: ${humanScore} //// Com Score: ${computerScore}`
  }
