document.addEventListener('DOMContentLoaded', () => {

  const gameboard = document.getElementById('gameboard');
  const playerTurn = document.getElementById('player-turn');
  playerTurn.textContent = 'X';

  const tilesArr = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
  ];

  let isXTurn = true;

  tilesArr.forEach((index) => {
    const tile = document.createElement('div');
    tile.id = index;
    tile.classList.add('tile');
    tile.addEventListener('click', () => handleClick(tile));
    gameboard.appendChild(tile);
  });

  const handleClick = (tile) => {
    if (isXTurn && tile.textContent === '') {
      tile.textContent = 'X';
      tilesArr[tile.id] = 'X';
      isXTurn = !isXTurn;
      isXTurn ? playerTurn.textContent = 'X' : playerTurn.textContent = 'O';
    } else if (!isXTurn && tile.textContent === '') {
      tile.textContent = 'O';
      tilesArr[tile.id] = 'O';
      isXTurn = !isXTurn;
      isXTurn ? playerTurn.textContent = 'X' : playerTurn.textContent = 'O';
    }
    checkForWin();
  }

  const checkForWin = () => {
    // winning combos
    // [0,1,2], [3,4,5], [6,7,8], [0,3,6], 
    // [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    
    tilesArr[0] === tilesArr[1] &&
    tilesArr[1] === tilesArr[2] &&
    tilesArr[0] === tilesArr[2] ?
    alert(`${tilesArr[0]} wins!`) :
    false;

    tilesArr[3] === tilesArr[4] &&
    tilesArr[4] === tilesArr[5] &&
    tilesArr[3] === tilesArr[5] ?
    alert(`${tilesArr[3]} wins!`) :
    false;

    tilesArr[6] === tilesArr[7] &&
    tilesArr[7] === tilesArr[8] &&
    tilesArr[6] === tilesArr[8] ?
    alert(`${tilesArr[0]} wins!`) :
    false;

    tilesArr[0] === tilesArr[3] &&
    tilesArr[3] === tilesArr[6] &&
    tilesArr[0] === tilesArr[6] ?
    alert(`${tilesArr[0]} wins!`) :
    false;

    tilesArr[1] === tilesArr[4] &&
    tilesArr[4] === tilesArr[7] &&
    tilesArr[1] === tilesArr[7] ?
    alert(`${tilesArr[0]} wins!`) :
    false;

    tilesArr[2] === tilesArr[5] &&
    tilesArr[5] === tilesArr[8] &&
    tilesArr[2] === tilesArr[8] ?
    alert(`${tilesArr[0]} wins!`) :
    false;

    tilesArr[0] === tilesArr[4] &&
    tilesArr[4] === tilesArr[8] &&
    tilesArr[0] === tilesArr[8] ?
    alert(`${tilesArr[0]} wins!`) :
    false;

    tilesArr[2] === tilesArr[4] &&
    tilesArr[4] === tilesArr[6] &&
    tilesArr[2] === tilesArr[6] ?
    alert(`${tilesArr[0]} wins!`) :
    false;
  }

});