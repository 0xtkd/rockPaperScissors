const getComputerChoice = () => {
    const gameAssets = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = gameAssets[randomNumber];

    return computerChoice.toLowerCase();
};

const playRound = (playerSelection, computerSelection) => {

  let msg = '';
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                if (playerSelection === 'rock') {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                } else if (playerSelection === 'paper') {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                } else {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                }
            break;
            case 'paper':
                if (playerSelection === 'rock') {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                } else if (playerSelection === 'paper') {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                } else {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                }
            break;
            case 'scissors':
                if (playerSelection === 'rock') {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                } else if (playerSelection === 'paper') {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                } else {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                }
            break;
            default:
                console.log('Invalid selection.');
            break;
        }

        return msg; 
    } else {
        console.log('Erors encountered try again!')
    }
};


function game () {
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Please choose : Rock, Paper or Scissors', 'rock').toLocaleLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
};

game();