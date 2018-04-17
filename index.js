//Keep this section for the kids to build
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);
//
// function compare(choice1, choice2) {
//  if(choice1 === choice2) {
//   return "The result is a tie!";
//  } else if(choice1 === 'rock') {
//   if(choice2 === 'scissors') {
//    return 'rock wins'
//   } else {
//    return 'paper wins'
//   }
//  } else if(choice1 === 'paper') {
//   if(choice2 === 'rock') {
//    return 'paper wins'
//   } else {
//    return 'scissors wins'
//   }
//  } else if(choice1 === 'scissors') {
//     if(choice2 === 'rock') {
//      return 'rock wins';
//     } else {
//      return 'scissors wins'
//     }
//  }
// }
//
// console.log(compare(userChoice, computerChoice))

function makeChoice(e) {
  e.classList.add('focused-choice');
  var humanChoiceId = e.id;
  var humanButtonRow = document.getElementById('choice-button-row-human');
  var children = humanButtonRow.children;
  for (var i = 0; i < children.length; i++) {
    if(children[i].id !== humanChoiceId) {
      children[i].classList.remove('focused-choice');
    }
  }

  makeComputerChoice(humanChoiceId);
}

function makeComputerChoice(humanChoiceId) {
  var computerButtonRow = document.getElementById('choice-button-row-computer');
  var children = computerButtonRow.children;
  var randomNumber = Math.floor(Math.random() * 3);
  var computerChoiceId;
  for (var i = 0; i < children.length; i++) {
    children[i].classList.remove('focused-choice');
    if(i === randomNumber) {
      children[i].classList.add('focused-choice');
      computerChoiceId = children[i].id;
    }
  }

  compareChoices(humanChoiceId, computerChoiceId)
}


function compareChoices(humanChoiceId, computerChoiceId) {
  var winnerInput = document.getElementById('winner-input');
  var humanScore = document.getElementById('human-score');
  var computerScore = document.getElementById('computer-score');
  var humanScoreValue = Number(humanScore.value);
  var computerScoreValue = Number(computerScore.value);

  if(humanChoiceId === 'human-button-rock') {
    if(computerChoiceId === 'computer-button-rock') {
      winnerInput.value = 'Tie!';
    } else if(computerChoiceId === 'computer-button-paper') {
      winnerInput.value = 'Computer!';
      computerScore.value = computerScoreValue + 1;
    } else if(computerChoiceId === 'computer-button-scissors') {
      winnerInput.value = 'Human!';
      humanScore.value = humanScoreValue + 1;
    }
  } else if(humanChoiceId === 'human-button-paper') {
    if(computerChoiceId === 'computer-button-paper') {
      winnerInput.value = 'Tie!';
    } else if(computerChoiceId === 'computer-button-scissors') {
      winnerInput.value = 'Computer!';
      computerScore.value = computerScoreValue + 1;
    } else if(computerChoiceId === 'computer-button-rock') {
      winnerInput.value = 'Human!';
      humanScore.value = humanScoreValue + 1;
    }
  } else if(humanChoiceId === 'human-button-scissors') {
    if(computerChoiceId === 'computer-button-scissors') {
      winnerInput.value = 'Tie!';
    } else if(computerChoiceId === 'computer-button-rock') {
      winnerInput.value = 'Computer!';
      computerScore.value = computerScoreValue + 1;
    } else if(computerChoiceId === 'computer-button-paper') {
      winnerInput.value = 'Human!';
      humanScore.value = humanScoreValue + 1;
    }
  }
}
