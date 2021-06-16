document.addEventListener('DOMContentLoaded', () => {

  const keyboardBorder = document.getElementById('keyboard-border');
  const openCloseBtn = document.getElementById('open-close-btn');
  const text = document.getElementById('text');
  const keys = document.querySelectorAll('.key');
  const capsLock = document.getElementById('caps-lock');
  const capsLight = document.getElementById('caps-light');
  const shiftKeys = document.querySelectorAll('.shift');

  let openStatus = true;
  let capsLockStatus = false;
  let shiftStatus = false;
  let selectedStatus = false;
  let selectionLength = 0;

  function handleSelection(e) {
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    selectedStatus = true;
    selectionLength = selection.length;
  }

  function handleDelete() {
    if (selectedStatus === true) {
      text.value = text['value'].substring(0, text['value'].length - selectionLength);
      selectionLength = 0;
      selectedStatus = false;
    } else {
      text.value = text['value'].substring(0, text['value'].length - 1);
    }
  }

  function handleReturn() {
    text.value = text.value + '\n';
  }

  function handleSpaceBar() {
    text.value = text.value + ' ';
  }

  function handleTab() {
    text.value = text.value + '        ';
  }

  function handleCapsLock() {
    capsLockStatus = !capsLockStatus;
    if (capsLockStatus === true) {
      capsLight.style.background = 'lime';
      capsLock.style.border = '1px solid lime';
    } else {
      capsLight.style.background = '#f3f3f4';
      capsLock.style.border = 'none';
    }
  }

  function handleShift() {
    shiftStatus = !shiftStatus;
    if (shiftStatus === true) {
      shiftKeys.forEach((key) => key.style.border = '1px solid lime');
    } else {
      shiftKeys.forEach((key) => key.style.border = 'none');
    }
  }

  function handleKeyPress(key) {
    if (shiftStatus === true && key.classList.contains('num-char')) {
      text.value = text.value + key.children[0].textContent;
      handleShift();
    } else if (shiftStatus === true && key.classList.contains('alpha')) {
      text.value = text.value + key.id.toUpperCase();
      handleShift();
    } else if (capsLockStatus === true && key.classList.contains('alpha')) {
      text.value = text.value + key.id.toUpperCase();
    } else {
      text.value = text.value + key.id;
    }
  }

  function highlightKeyPress(key) {
    key.style.border = '1px solid lime';
    setTimeout(() => key.style.border = 'none', 200);
  }
  
  keys.forEach((key) => key.addEventListener('click', () => {
    if (key.id === 'delete') { 
      handleDelete();
      highlightKeyPress(key);
    } else if (key.id === 'return') {
      handleReturn();
      highlightKeyPress(key);
    } else if (key.id === 'space-bar') {
      handleSpaceBar();
      highlightKeyPress(key);
    } else if (key.id === 'tab') {
      handleTab();
      highlightKeyPress(key);
    } else if (key.id === 'caps-lock') {
      handleCapsLock();
    } else if (key.id === 'shift-left' || key.id === 'shift-right') {
      handleShift();
    } else {
      handleKeyPress(key);
      highlightKeyPress(key);
    }
  }));

  openCloseBtn.addEventListener('click', () => {
    openStatus = !openStatus;
    if (openStatus === true) {
      text.style.height = '30vh';
      keyboardBorder.style.visibility = 'visible';
      openCloseBtn.style.visibility = 'visible';
      openCloseBtn.textContent = '⬇';
    } else {
      text.style.height = '75vh';
      keyboardBorder.style.visibility = 'hidden';
      openCloseBtn.style.visibility = 'visible';
      openCloseBtn.textContent = '⬆';
    }
  });

  text.addEventListener('select', handleSelection);

});