document.addEventListener('DOMContentLoaded', () => {

  const gameboard = document.getElementById('gameboard');
  const startPosWrap = document.getElementById('start-pos-wrap');

  const redColor = '#9c0606';
  const blueColor = '#235789';

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

  const handleMouseover = (slot) => {
    switch (slot.classList[1]) {
      case 'c1':
        hideHoverSlots();
        hoverSlots[0].style.visibility = 'visible';
        isRedTurn ?
        hoverSlots[0].firstChild.style.backgroundColor = redColor :
        hoverSlots[0].firstChild.style.backgroundColor = blueColor;
        break;
      case 'c2':
        hideHoverSlots();
        hoverSlots[1].style.visibility = 'visible';
        isRedTurn ?
        hoverSlots[1].firstChild.style.backgroundColor = redColor :
        hoverSlots[1].firstChild.style.backgroundColor = blueColor;
        break;
      case 'c3':
        hideHoverSlots();
        hoverSlots[2].style.visibility = 'visible';
        isRedTurn ?
        hoverSlots[2].firstChild.style.backgroundColor = redColor :
        hoverSlots[2].firstChild.style.backgroundColor = blueColor;
        break;
      case 'c4':
        hideHoverSlots();
        hoverSlots[3].style.visibility = 'visible';
        isRedTurn ?
        hoverSlots[3].firstChild.style.backgroundColor = redColor :
        hoverSlots[3].firstChild.style.backgroundColor = blueColor;
        break;
      case 'c5':
        hideHoverSlots();
        hoverSlots[4].style.visibility = 'visible';
        isRedTurn ?
        hoverSlots[4].firstChild.style.backgroundColor = redColor :
        hoverSlots[4].firstChild.style.backgroundColor = blueColor;
        break;
      case 'c6':
        hideHoverSlots();
        hoverSlots[5].style.visibility = 'visible';
        isRedTurn ?
        hoverSlots[5].firstChild.style.backgroundColor = redColor :
        hoverSlots[5].firstChild.style.backgroundColor = blueColor;
        break;
      case 'c7':
        hideHoverSlots();
        hoverSlots[6].style.visibility = 'visible';
        isRedTurn ?
        hoverSlots[6].firstChild.style.backgroundColor = redColor :
        hoverSlots[6].firstChild.style.backgroundColor = blueColor;
    }
  }

  const checkSlotBelow = (slot) => {
    let slotBelow = document.getElementById(parseInt(slot.id) + 7);
    if (slotBelow === null) {
      dropChip(slot);
    } else if (slotBelow.classList[2] !== 'occupied') {
      isRedTurn ? 
      slot.firstChild.style.backgroundColor = redColor :
      slot.firstChild.style.backgroundColor = blueColor;
      setTimeout(() => slot.firstChild.style.backgroundColor = '#b5afa5', 50);
      setTimeout(() => checkSlotBelow(slotBelow), 50);
    } else {
      dropChip(slot);
    }
  }

  const dropChip = (slot) => {
    if (slot.classList[2] === 'occupied') {
      return;
    } else {
      slot.classList.add('occupied');
      if (isRedTurn) {
        redArr.push(parseInt(slot.id));
        // slotsArr[slot.id] = 'r';
        slot.firstChild.style.backgroundColor = redColor;
      } else if (!isRedTurn) {
        blueArr.push(parseInt(slot.id));
        // slotsArr[slot.id] = 'b';
        slot.firstChild.style.backgroundColor = blueColor;
      }
      isRedTurn = !isRedTurn;
      checkForWin();
    }
  }

  const checkForWin = () => {
    let theArray;
    !isRedTurn ? theArray = redArr : theArray = blueArr;
    redArr.sort();
    blueArr.sort();
    console.log(redArr);
    console.log(blueArr);
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
          console.log('win');
        }
      }
      // check vertical
      if (
        theArray.includes(theArray[i]) &&
        theArray.includes(theArray[i] + 7) &&
        theArray.includes(theArray[i] + 14) &&
        theArray.includes(theArray[i] + 21)
      ) {
        console.log('win');
      }
      // check diagonal
      if (
        theArray.includes(theArray[i]) &&
        theArray.includes(theArray[i] + 6) &&
        theArray.includes(theArray[i] + 12) &&
        theArray.includes(theArray[i] + 18)
      ) {
        console.log('win');
      }
      // check other diagonal 
      if (
        theArray.includes(theArray[i]) &&
        theArray.includes(theArray[i] + 8) &&
        theArray.includes(theArray[i] + 16) && 
        theArray.includes(theArray[i] + 24)
      ) {
        console.log('win');
      }
    }
  }

});