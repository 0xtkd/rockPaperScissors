const getComputerChoice = () => {
    const gameAssets = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = gameAssets[randomNumber];

    return computerChoice.toLowerCase();
};

let playerScores = 0;
let computerScores = 0;
let tiedGame = 0;

let summary = document.querySelector('.summary > p');
let playerScoresUpdated = document.querySelector('.player > span');
let computerScoresUpdated = document.querySelector('.computer > span');
let results = document.querySelector('.results > h6');

const playRound = (playerSelection, computerSelection) => {

    let msg = '';
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                if (playerSelection === 'rock') {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Tied'
                    tiedGame++;
                } else if (playerSelection === 'paper') {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Win'
                    playerScores++;
                } else {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Lose'
                    computerScores++;
                }
                break;
            case 'paper':
                if (playerSelection === 'rock') {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Lose'
                    computerScores++;
                } else if (playerSelection === 'paper') {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Tied'
                    tiedGame++;
                } else {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Win'
                    playerScores++;
                }
                break;
            case 'scissors':
                if (playerSelection === 'rock') {
                    msg = `Player Win! ${playerSelection} beats ${computerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Win'
                    playerScores++;
                } else if (playerSelection === 'paper') {
                    msg = `Player Lose! ${computerSelection} beats ${playerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Lose'
                    computerScores++;
                } else {
                    msg = `Game Tied : player choose ${playerSelection} and computer choose ${computerSelection}.`;
                    summary.innerText = msg;
                    results.innerText = 'Tied'
                    tiedGame++;
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

const buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        
        let playerSelection = buttons[i].value.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        playerScoresUpdated.innerText = playerScores;
        computerScoresUpdated.innerText = computerScores;

        if (playerScores >= 5 || computerScores >= 5) {

            summary.innerText = 'Game Over';

            buttons[0].disabled = true;
            buttons[1].disabled = true;
            buttons[2].disabled = true;

            setTimeout(() => {
                document.getElementById('game-container').classList.add('hide');
                playAgain();
            }, 3000);
        }

    });
}

// play again functionality

const playAgain = () => {
    let div = document.createElement('div');
    div.classList.add('playAgain');

    let h2 = document.createElement('h2');
    h2.classList.add('h2Result');
    if (playerScores > computerScores) {
        h2.innerHTML = `You Won ! ${playerScores} <em>VS</em> ${computerScores}.`;
    } else {
        h2.innerHTML = `Computer Won ! ${computerScores} <em>VS</em> ${playerScores}.`;
    }

    div.appendChild(h2);

    let pageRefresh = document.createElement('input');
    pageRefresh.setAttribute('value', 'Play Again');
    pageRefresh.setAttribute('type', 'button');
    pageRefresh.classList.add('pageRefresh');


    const tiedGames = document.createElement('p');
    const wonGames = document.createElement('p');
    const lossGames = document.createElement('p');

    wonGames.innerText = `Win : ${playerScores}`;
    lossGames.innerText = `Loss : ${computerScores}`;
    tiedGames.innerText = `Tied : ${tiedGame}`;

    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(tiedGames);
    container.appendChild(wonGames);
    container.appendChild(lossGames);

    const title = document.createElement('h4');
    title.innerText = 'GAME STATS';
    div.appendChild(title);

    div.appendChild(container);

    div.appendChild(pageRefresh);

    document.body.appendChild(div);

    let refresh = document.querySelector('.pageRefresh');

    refresh.addEventListener('click', () => {
        window.location.reload(true);
    });
};
