document.addEventListener('DOMContentLoaded', () => {

  const text = document.getElementById('text');
  const keys = document.querySelectorAll('.key');
  const capsLight = document.getElementById('caps-light');
  let capsLock = false;

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
    capsLock = !capsLock;
    if (capsLock === true) {
      capsLight.style.background = 'lime';
    } else {
      capsLight.style.background = '#f3f3f4';
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
    } else {
      text.value = text.value + key.id;
    }

    

  }));

});