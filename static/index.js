function computerPlay () {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice);
    return choice;
}

function game() {
    aiScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let round = startRound();
        if (round == 'win') {
            playerScore++;
        }
        else if (round == 'lose') {
            aiScore++;
        }
    }
    if (playerScore > aiScore){
        console.log('Congratulations! You won the game!');
    }
    else if (aiScore > playerScore) {
        console.log('You lost the game!');
    }
    else {
        console.log('Nobody won!');
    }
}

function startRound () {
    const win = 'You won.';
    const lose = 'You lost.';
    let playerChoice = prompt("'Rock', 'Paper' or 'Scissors'?");
    let aiChoice = computerPlay();
    let lowcased = playerChoice.toLowerCase();
    if (aiChoice === 'rock' && lowcased === 'paper') {
        console.log(win);
        return 'win';
    }
    else if (aiChoice === 'rock' && lowcased === 'scissors') {
        console.log(lose);
        return 'lose';
    }
    else if (aiChoice === 'paper' && lowcased === 'scissors') {
        console.log(win);
        return 'win';
    }
    else if (aiChoice === 'paper' && lowcased === 'rock') {
        console.log(lose);
        return 'lose';
    }
    else if (aiChoice === 'scissors' && lowcased === 'rock') {
        console.log(win);
        return 'win';
    }
    else if (aiChoice === 'scissors' && lowcased === 'paper') {
        console.log(lose);
        return 'lose';
    }
    else if (aiChoice === lowcased) {
        console.log('Tie!');
    }
    else {
        console.log('Invalid input!');
    }
}

game();