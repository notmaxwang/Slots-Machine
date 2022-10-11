//Constants

const COLORS = {
    '0': 'red',
    '1': 'orange',
    '2': 'yellow',
    '3': 'green',
    '4': 'blue',
    '5': 'indigo',
    '6': 'violet'
}

const REELSIZE = 3;

const WINSTATE = [[0,0,0], 
                 [1,1,1],
                 [2,2,2],
                 [3,3,3],
                 [4,4,4],
                 [5,5,5],
                 [6,6,6]
];

// State Variables
let reels;
let earning;
let currWager;


// Cached Elements
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('again');
const displayWager = document.getElementById('wager');

// Event Listeners
document.getElementById('roll').addEventListener('click', handleClick);
document.getElementById('add').addEventListener('click', getHigher);
document.getElementById('sub').addEventListener('click', getLower);

playAgainBtn.addEventListener('click', init);
// Functions


init();

function init() {
    reels = [0,1,2];
    earning = 100;
    currWager = 0;
    message.innerText = 'Enter your wager and start making moneyyyy!';
    displayWager.innerText = 'Wager: $' + currWager;
    render();
}

function render() {
    renderBoard();
    renderMessage();
}

function renderBoard() {
    reels.forEach(function(cellVal, idx) {
        const squareEl = document.getElementById(`${idx}`);
        squareEl.style.backgroundColor = COLORS[cellVal];
    });
}

function renderMessage() {
    if (earning <= 0) {
        message.innerText = 'You lost all your money!!';
    } 
    if (currWager > earning && earning != 0) {
        message.innerText = 'Please lower your wager!';
    }

    if (WINSTATE.includes(reels)) {
        message.innerHTML = `CONGRATS!! YOU WON ${currWager * 100} DOLLARS!`;
        document.getElementById('earning').innerText = 'Earning: ' + earning;
    } else {
        document.getElementById('earning').innerText = 'Earning: ' + earning;
    }
}


function handleClick(evt) {
    if (currWager > earning || earning <= 0) return;
    reels = getCombo();
    if (WINSTATE.includes(reels)) {
        earning = earning + currWager * 100;
    } else {
        earning = earning - currWager;
    }
    render();
}

function getCombo() {
    let storeArr = [];
    for (let i = 0; i < REELSIZE; i++) {
        let storeRand = Math.floor(Math.random() * 7);
        storeArr.push(storeRand);
    }
    return storeArr;
}



function getHigher(evt) {
    currWager = currWager + 5;
    displayWager.innerText = 'Wager: $' + currWager;
}

function getLower(evt) {
    if (currWager > 5) {
        currWager = currWager - 5;
        displayWager.innerText = 'Wager: $' + currWager;
    }
}




