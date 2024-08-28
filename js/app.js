console.log("Slot machine game");

/*-------------------------------- Constants --------------------------------*/
let balance = 100;
let betAmount = 10;
const symbols = [
    'assets/Burger.png',
    'assets/Hotdog.png',
    'assets/Pizza.png'
];


/*-------------------------------- Functions --------------------------------*/
function spinReels() {
    if (balance >= betAmount) {
        balance -= betAmount;
        let reel1 = getRandomSymbol();
        let reel2 = getRandomSymbol();
        let reel3 = getRandomSymbol();
        // console.log(reel1, reel2, reel3);
        displayReels(reel1, reel2, reel3);
        checkWin(reel1, reel2, reel3);
    } else {
        displayMessage('Need more $$$ to spin!');
    }
}


function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function checkWin(reel1, reel2, reel3) {
    if (reel1 === reel2 && reel2 === reel3) {
    let jackpot = betAmount * 10;
    balance += jackpot;
    displayMessage('Jackpot! You Won ' + jackpot + 'credits!');
    } else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
    let winAmount = betAmount * 2;
    balance += winAmount;
    displayMessage('Yon Won' + winAmount + 'credits!');
    } else {
    displayMessage('Better luck next time!');
    }
    updateBalanceDisplay();
}

function resetGame() {
    balance = 100;
    updateBalanceDisplay();
    clearReels();
    displayMessage('Game reset!');
}

function updateBalanceDisplay() {
    document.getElementById('balance').textContent = balance;
}

function clearReels() {
    document.getElementById('reel1').src = 'assets/Burger.png';
    document.getElementById('reel2').src = 'assets/Hotdog.png';
    document.getElementById('reel3').src = 'assets/Pizza.png';
}

function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

/*------------------------ Cached Element References ------------------------*/

function displayReels(reel1, reel2, reel3) {
    document.getElementById('reel1').src = reel1;
    document.getElementById('reel2').src = reel2;
    document.getElementById('reel3').src = reel3;
}

/*----------------------------- Event Listeners -----------------------------*/

document.getElementById('spinButton').addEventListener('click', spinReels);
document.getElementById('resetButton').addEventListener('click', resetGame);


