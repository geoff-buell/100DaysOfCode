document.addEventListener('DOMContentLoaded', () => {

  const capsLight = document.getElementById('caps-light');
  const text = document.getElementById('text');
  const keys = document.querySelectorAll('.key');

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
  
  keys.forEach((key) => key.addEventListener('click', () => {

    if (key.id === 'delete') { handleDelete();
    } else if (key.id === 'return') {
      handleReturn();
    } else if (key.id === 'space-bar') {
      handleSpaceBar();
    } else if (key.id === 'tab') {
      handleTab();
    } else {
      text.value = text.value + key.id;
    }

    

  }));

});