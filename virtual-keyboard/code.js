document.addEventListener('DOMContentLoaded', () => {

  const text = document.getElementById('text');
  const keys = document.querySelectorAll('.key');
  const capsLight = document.getElementById('caps-light');
  const shiftKeys = document.querySelectorAll('.shift');
  let capsLockStatus = false;
  let shiftStatus = false;

  function handleDelete() {
    text.value = text['value'].substring(0, text['value'].length - 1);
    //need to add ability to delete selected text
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
    } else {
      capsLight.style.background = '#f3f3f4';
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
  
  keys.forEach((key) => key.addEventListener('click', () => {

    if (key.id === 'delete') { handleDelete();
    } else if (key.id === 'return') {
      handleReturn();
    } else if (key.id === 'space-bar') {
      handleSpaceBar();
    } else if (key.id === 'tab') {
      handleTab();
    } else if (key.id === 'caps-lock') {
      handleCapsLock();
    } else if (key.id === 'shift-left' || key.id === 'shift-right') {
      handleShift();
    } else {
      text.value = text.value + key.id;
    }

    

  }));

});