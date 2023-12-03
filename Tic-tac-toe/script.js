const PLAYER_X = 'X';
const PLAYER_O = 'O';

let currentPlayer = PLAYER_X;
let gameBoard = ['','','','','','','','',''];
let gameActive = true;

function cellClick(index){
    if(gameBoard[index] === '' && gameActive){
        gameBoard[index] = currentPlayer;
        document.getElementById(`cell${index}`).innerHTML = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer(){
    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
}

function checkWinner(){
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8], //row
        [0,3,6],[1,4,7],[2,5,8], //column
        [0,4,8],[2,4,6] //Diagonals
    ];

    for(const pattern of winPatterns){
        const [a, b, c] = pattern;
        if(gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
            document.getElementById('status').innerText = `${currentPlayer} Win!`;
            gameActive = false;
            return;
        }
    }

    if(!gameBoard.includes('')){
        document.getElementById('status').innerText = `It's a draw!`;
        gameActive = false;
    }
}

function resetGame(){
    currentPlayer = PLAYER_X;
    gameBoard = ['','','','','','','','',''];
    gameActive = true;
    document.getElementById('status').innerText = '';
    updateGame();
}

function updateGame(){
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    for(let i=0; i< gameBoard.length; i++){
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.id = `cell${i}`;
        cellElement.addEventListener('click', () => cellClick(i));
        cellElement.innerText = gameBoard[i];
        boardElement.appendChild(cellElement);
    }
}

updateGame();


























