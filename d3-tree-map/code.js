document.addEventListener('DOMContentLoaded', () => {

  const width = 1000;
  const height = 600;

  const treeMap = d3.select('#tree-map')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

  const url = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json';

  let gameData;

  d3.json(url).then(
    (data, error) => {
      if (error) {
        console.log(error);
      } else {
        gameData = data;
        console.log(gameData);
        console.log(gameData.children);
      }
    }
  )

});