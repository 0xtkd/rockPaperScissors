const getComputerChoice = () => {
    const gameAssets = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = gameAssets[randomNumber];

    return computerChoice.toLowerCase();
};

const gameScores = [0, 0];

const playRound = (playerSelection, computerSelection) => {

  let msg = '';
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                if (playerSelection === 'rock') {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                } else if (playerSelection === 'paper') {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                    gameScores[1] += 1;
                } else {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                    gameScores[0] += 1;
                }
            break;
            case 'paper':
                if (playerSelection === 'rock') {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                    gameScores[0] += 1;
                } else if (playerSelection === 'paper') {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                } else {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                    gameScores[1] += 1;
                }
            break;
            case 'scissors':
                if (playerSelection === 'rock') {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                    gameScores[1] += 1;
                } else if (playerSelection === 'paper') {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                    gameScores[0] += 1;
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
    let msg = '';
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Please choose : Rock, Paper or Scissors', 'rock').toLocaleLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (gameScores[0] > gameScores[1]) {
        msg = `Final score Computer win ! score ${gameScores[0]} : ${gameScores[1]}`;
    } else if (gameScores[0] < gameScores[1]) {
        msg = `Final score Player win ! score ${gameScores[1]} : ${gameScores[0]}`;
    } else {
        msg = `Final score Tied ! score ${gameScores[1]} : ${gameScores[0]}`;
    }
    return msg;
};

console.log(game());
