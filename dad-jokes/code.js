document.addEventListener('DOMContentLoaded', () => {

  const DAD_JOKE = document.getElementById('dad-joke');
  const NEW_JOKE_BTN = document.getElementById('new-joke-btn');

  async function getJoke() {
    const url = 'https://icanhazdadjoke.com/';
  
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json' 
      }
    });

    const data = await res.json();
    // console.log(data);
    DAD_JOKE.innerHTML = data.joke;
  }

  getJoke();

  NEW_JOKE_BTN.addEventListener('click', getJoke);

  document.addEventListener('keypress', (e) => {
    if (e.code = 'Space') {
      getJoke();
    }
  });

});