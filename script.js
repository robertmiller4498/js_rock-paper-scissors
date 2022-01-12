//CREATING FIRST FUNCTION GETUSERCHOICE WITH PARAMETER USERINPUT

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Error!';
    }
};

//CREATING SECOND FUNCTION GETCOMPUTERINPUT WITH NO PARAMETERS

const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

//CREATING FUNCTION DETERMINEWINNER WHICH USES PARAMETERS USERCHOICE & COMPUTERCHOICE

const determineWinner = (userChoice, computerChoice) => {
if(userChoice === computerChoice) {
    return 'Round ends in a Tie!';
}
if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
        return 'Paper beats rock! Computer Wins!';
    } else {
        return 'Rock beats scissors! You Win!';
    }
}
if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
        return 'Scissors beats paper! Computer Wins!';
    } else {
        return 'Paper beats rock! You win!';
    }
}
if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
        return 'Rock beats Scissors! Computer Wins!';
    } else {
        return 'Scissors beats paper! You win!';
    }
}
};

//CREATING FUNCTION PLAYGAME() TO START THE GAME AND LOG RESULTS

const playGame = () => {
    userChoice = getUserChoice('paper');
    computerChoice = getComputerChoice();
    
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();

