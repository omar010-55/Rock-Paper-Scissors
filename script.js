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
// getComputerChoice()
function getHumanChoice() {
  let Hchoice = prompt("pls enter Rock or Paper or Scissors");
  Hchoice = Hchoice.toLowerCase()
  console.log(Hchoice)
  return Hchoice
}
// getHumanChoice()
function playGame() {
  let humanScore = 0
  let computerScore = 0
  //Set Scores
  function playRound(humanChoice, computerChoice) { //for comparing and know the winner
    if (humanChoice === computerChoice) {
      console.log("It is tie")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win ${humanChoice} beat ${computerChoice}`)
      return humanScore += 1
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win ${humanChoice} beat ${computerChoice}`)
      return humanScore += 1
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win ${humanChoice} beat ${computerChoice}`)
      return humanScore += 1
    } else {
      console.log(`You lost ${computerChoice} beat ${humanChoice}`)
      return computerScore += 1
    }
  }
  
  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (i === 4) { //this is for showing the result and winner
      if (humanScore > computerScore) {
        console.log("COM: " + computerScore)
        console.log("Human: " + humanScore)
        console.log("You Win The Game!!!!")
      } else if (humanScore === computerScore) {
        console.log("COM: " + computerScore)
        console.log("Human: " + humanScore)
        console.log("You Draw with Computer")
      } else {
        console.log("COM: " + computerScore)
        console.log("Human: " + humanScore)
        console.log("Sorry You Lost The Game")
      }
    } 
  }
  //For run the game 5 times
}
//To run the game
playGame()