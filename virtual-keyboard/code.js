document.addEventListener('DOMContentLoaded', () => {

  const capsLight = document.getElementById('caps-light');
  const text = document.getElementById('text');
  const keys = document.querySelectorAll('.key');
  
  keys.forEach((key) => key.addEventListener('click', () => {

    if (key.id === 'delete') {
      text['value'] = text['value'].substring(0, text['value'].length - 1);
    } else if (key.id === 'return') {
      text['value'] = text.value + '\n';
    } else if (key.id === 'space-bar') {
      text['value'] = text.value + ' ';
    } else {
      text['value'] = text.value + key.id;
    }

    

  }));

});