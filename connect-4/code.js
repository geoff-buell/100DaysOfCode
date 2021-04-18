document.addEventListener('DOMContentLoaded', () => {

  const gameboard = document.getElementById('gameboard');

  const slotsArr = [
    01, 02, 03, 04, 05, 06, 07,
    08, 09, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42
  ];

  let isRedTurn = true;

  const addSlots = () => {
    slotsArr.forEach((index) => {
      const slot = document.createElement('div');
      const circle = document.createElement('div');
      circle.classList.add('circle');
      slot.id = index;
      slot.classList.add('slot');
      slot.addEventListener('click', () => dropChip(slot, circle));
      slot.appendChild(circle);
      gameboard.appendChild(slot);
    });
    console.log(gameboard);
  }

  addSlots();

  const dropChip = (slot, circle) => {
    console.log(slot);
    isRedTurn = !isRedTurn;
    isRedTurn ? 
    circle.style.backgroundColor = 'maroon' :
    circle.style.backgroundColor = 'navy';
  }

});