document.addEventListener('DOMContentLoaded', () => {

  const url = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json';

  let gameData;

  d3.json(url).then(
    (data, error) => {
      if (error) {
        console.log(error);
      } else {
        gameData = data;
        console.log(gameData);
      }
    }
  )

});