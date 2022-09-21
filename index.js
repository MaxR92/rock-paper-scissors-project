const message = document.querySelector('.message');
const punkte = document.querySelector('.punkte');
const button = document.querySelectorAll('button');
const winnerScores = [0, 0];

// add event listeners to button
for ( let i = 0 ; i < button.length ; i++) {
    button[i].addEventListener('click', playGame);
}

function playGame (element) {
    // setup player's selection
    let playerSelection = element.target.innerText;
    // setup a random number to select for computer
    // selects a number between 0 and 1 (1 not inclusive)
    let computerSelection = Math.random();

    // if computerSelection is less than .34, computer selects Rock
    if (computerSelection < .34) {
        computerSelection = 'Rock';
    } else if (computerSelection <= .67) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    // setup a function to compare winners and return result
    let result = checkWinner(playerSelection, computerSelection);

    // output scores to the DOM
    if (result === 'Player') {
        result += ' wins!';
        // update score
        winnerScores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins!';
        // update score
        winnerScores[1]++;
    }

    if (result === 'Draw') {
        result += '. It\'s a tie!';
    }

    // output score into Score DIV
    punkte.innerHTML = `Player [${winnerScores[0]}] : [${winnerScores[1]}] Computer`
    // punkte.innerHTML = 'Player: [ ' + winnerScores[0]+ ' ] :Computer [ ' + winnerScores[1] + ' ]';

    // output player and computer's selections
    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger (selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner (player, computer) {
    if (player === computer) {
        return 'Draw';
    }
    
    if (player === 'Rock') {
        if (computer === 'Paper') {
            const music2 = new Audio("sounds/mixkit-losing-bleeps-2026.wav");
            music2.play();
            music2.loop = false;
            music2.volume = 1.0;
            music2.playbackRate = 3;
            music2.pause;
            return 'Computer';
        } else {
            const music1 = new Audio("sounds/mixkit-retro-game-notification-212.wav");
            music1.play();
            music1.loop = false;
            music1.volume = 1.0;
            music1.playbackRate = 3;
            music1.pause;
            return 'Player';
        }
    }
    
    if (player === 'Paper') {
        if (computer === 'Scissors') {
            const music2 = new Audio("sounds/mixkit-losing-bleeps-2026.wav");
            music2.play();
            music2.loop = false;
            music2.volume = 1.0;
            music2.playbackRate = 3;
            music2.pause;
            return 'Computer';
        } else {
            const music1 = new Audio("sounds/mixkit-retro-game-notification-212.wav");
            music1.play();
            music1.loop = false;
            music1.volume = 1.0;
            music1.playbackRate = 3;
            music1.pause;
            return 'Player';
        }
    }
    
    if (player === 'Scissors') {
        if (computer === 'Rock') {
            const music2 = new Audio("sounds/mixkit-losing-bleeps-2026.wav");
            music2.play();
            music2.loop = false;
            music2.volume = 1.0;
            music2.playbackRate = 3;
            music2.pause;
            return 'Computer';
        } else {
            const music1 = new Audio("sounds/mixkit-retro-game-notification-212.wav");
            music1.play();
            music1.loop = false;
            music1.volume = 1.0;
            music1.playbackRate = 3;
            music1.pause;
            return 'Player';
        }
    }
}