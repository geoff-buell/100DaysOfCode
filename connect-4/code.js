document.addEventListener('DOMContentLoaded', () => {

  const gameboard = document.getElementById('gameboard');
  const startPosWrap = document.getElementById('start-pos-wrap');
  const gameOverMsg = document.getElementById('gameover-msg');
  const winner = document.getElementById('winner');
  const closeBtn = document.getElementById('close-btn');
  const playAgainBtn = document.getElementById('play-again-btn');
  const newGameBtn = document.getElementById('new-game-btn');
  const circleEmojis = document.getElementById('circle-emojis');

  const redColor = '#9c0606';
  const blueColor = '#235789';
  const khakiColor = '#b5afa5';

  const startPosArr = ['c1','c2','c3','c4','c5','c6','c7'];
  const addStartPos = () => {
    startPosArr.forEach((i) => {
      const startPos = document.createElement('div');
      const circle = document.createElement('div');
      circle.classList.add('hover-circle');
      startPos.id = i;
      startPos.classList.add('hover-slot');
      startPos.appendChild(circle);
      startPosWrap.appendChild(startPos);
    });
  }

  addStartPos();

  const slotsArr = [
    00, 01, 02, 03, 04, 05, 06, 
    07, 08, 09, 10, 11, 12, 13, 
    14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 
    28, 29, 30, 31, 32, 33, 34, 
    35, 36, 37, 38, 39, 40, 41
  ];

  let isRedTurn = true;
  let isGameOver = false;
  let redArr = [];
  let blueArr = [];

  const addSlots = () => {
    slotsArr.forEach((i) => {
      const slot = document.createElement('div');
      const circle = document.createElement('div');
      circle.classList.add('circle');
      slot.id = i;
      slot.classList.add('slot');

      i === 0 || i === 7 || i === 14 || i === 21 || i === 28 || i === 35 ?
      slot.classList.add('c1') : false;
      i === 1 || i === 8 || i === 15 || i === 22 || i === 29 || i === 36 ?
      slot.classList.add('c2') : false;
      i === 2 || i === 9 || i === 16 || i === 23 || i === 30 || i === 37 ?
      slot.classList.add('c3') : false;
      i === 3 || i === 10 || i === 17 || i === 24 || i === 31 || i === 38 ?
      slot.classList.add('c4') : false;
      i === 4 || i === 11 || i === 18 || i === 25 || i === 32 || i === 39 ?
      slot.classList.add('c5') : false;
      i === 5 || i === 12 || i === 19 || i === 26 || i === 33 || i === 40 ?
      slot.classList.add('c6') : false;
      i === 6 || i === 13 || i === 20 || i === 27 || i === 34 || i === 41 ?
      slot.classList.add('c7') : false;

      slot.addEventListener('mouseover', () => handleMouseover(slot));
      slot.addEventListener('click', () => checkSlotBelow(slot));
      slot.appendChild(circle);
      gameboard.appendChild(slot);
    });
  }

  addSlots();

  const slots = document.querySelectorAll('.slot');
  const hoverSlots = document.querySelectorAll('.hover-slot');

  const hideHoverSlots = () => {
    hoverSlots.forEach((slot) => slot.style.visibility = 'hidden');
  }

  const showHoverSlot = (i) => {
    hoverSlots[i].style.visibility = 'visible';
    isRedTurn ?
    hoverSlots[i].firstChild.style.backgroundColor = redColor :
    hoverSlots[i].firstChild.style.backgroundColor = blueColor;
  }

  const handleMouseover = (slot) => {
    if (!isGameOver) {
      switch (slot.classList[1]) {
        case 'c1':
          hideHoverSlots();
          showHoverSlot(0);
          break;
        case 'c2':
          hideHoverSlots();
          showHoverSlot(1);
          break;
        case 'c3':
          hideHoverSlots();
          showHoverSlot(2);
          break;
        case 'c4':
          hideHoverSlots();
          showHoverSlot(3);
          break;
        case 'c5':
          hideHoverSlots();
          showHoverSlot(4);
          break;
        case 'c6':
          hideHoverSlots();
          showHoverSlot(5);
          break;
        case 'c7':
          hideHoverSlots();
          showHoverSlot(6);
      }
    }
  }

  const handleCircleEmojis = () => {
    isRedTurn ? 
    circleEmojis.textContent = '🔴 🔴 🔴 🔴' : 
    circleEmojis.textContent = '🔵 🔵 🔵 🔵';
  }

  handleCircleEmojis();

  const checkSlotBelow = (slot) => {
    if (!isGameOver) {
      let slotBelow = document.getElementById(parseInt(slot.id) + 7);
      if (slotBelow === null) {
        dropChip(slot);
      } else if (slotBelow.classList[2] !== 'occupied') {
        isRedTurn ? 
        slot.firstChild.style.backgroundColor = redColor :
        slot.firstChild.style.backgroundColor = blueColor;
        setTimeout(() => slot.firstChild.style.backgroundColor = khakiColor, 50);
        setTimeout(() => checkSlotBelow(slotBelow), 50);
      } else {
        dropChip(slot);
      }
    }
  }

  const dropChip = (slot) => {
    if (slot.classList[2] === 'occupied') {
      return;
    } else {
      slot.classList.add('occupied');
      if (isRedTurn) {
        redArr.push(parseInt(slot.id));
        slot.firstChild.style.backgroundColor = redColor;
      } else if (!isRedTurn) {
        blueArr.push(parseInt(slot.id));
        slot.firstChild.style.backgroundColor = blueColor;
      }
      isRedTurn = !isRedTurn;
      handleCircleEmojis();
      checkForWin();
    }
  }

  const checkForWin = () => {
    let theArray;
    isRedTurn ? theArray = blueArr : theArray = redArr;
    redArr.sort();
    blueArr.sort();
    for (let i = 0; i < theArray.length; i++) {
      // check horizontal
      if (
        theArray.includes(theArray[i]) &&
        theArray.includes(theArray[i] + 1) &&
        theArray.includes(theArray[i] + 2) &&
        theArray.includes(theArray[i] + 3)
      ) {
        if (
          theArray[i] === 6 || 
          theArray[i] === 13 || 
          theArray[i] === 20 || 
          theArray[i] === 27 || 
          theArray[i] === 34
        ) {
          return;
        } else {
          gameOver();
        }
      }
      // check vertical
      if (
        theArray.includes(theArray[i]) &&
        theArray.includes(theArray[i] + 7) &&
        theArray.includes(theArray[i] + 14) &&
        theArray.includes(theArray[i] + 21)
      ) {
        gameOver();
      }
      // check diagonal
      if (
        theArray.includes(theArray[i]) &&
        theArray.includes(theArray[i] + 6) &&
        theArray.includes(theArray[i] + 12) &&
        theArray.includes(theArray[i] + 18)
      ) {
        gameOver();
      }
      // check other diagonal 
      if (
        theArray.includes(theArray[i]) &&
        theArray.includes(theArray[i] + 8) &&
        theArray.includes(theArray[i] + 16) && 
        theArray.includes(theArray[i] + 24)
      ) {
        gameOver();
      }
    }
  }

  const gameOver = () => {
    isGameOver = true;
    hideHoverSlots();
    gameOverMsg.style.display = 'block';
    isRedTurn ? winner.textContent = 'Blue Wins!' : winner.textContent = 'Red Wins!'
    isRedTurn ? winner.style.color = blueColor : winner.style.color = redColor;
  }

  const reset = () => {
    isGameOver = false;
    gameOverMsg.style.display = 'none';
    redArr = [];
    blueArr = [];
    slots.forEach((slot) => {
      slot.firstChild.style.backgroundColor = khakiColor;
      slot.classList.remove('occupied');
    });
  }

  closeBtn.addEventListener('click', () => gameOverMsg.style.display = 'none');
  playAgainBtn.addEventListener('click', () => reset());
  newGameBtn.addEventListener('click', () => reset());

});