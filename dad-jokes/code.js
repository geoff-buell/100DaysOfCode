document.addEventListener('DOMContentLoaded', () => {

  async function getJoke() {
    const url = 'https://icanhazdadjoke.com/';
  
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json' 
      }
    });

    const joke = await res.json();
    console.log(joke);
  }

  getJoke();

});