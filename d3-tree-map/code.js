document.addEventListener('DOMContentLoaded', () => {

  const colors = [
    '#F8997D', '#F4937C', '#EF8D7B', '#EB877A', '#E68179', '#E27B78',
    '#DE7577', '#D96F76', '#D56975', '#D06375', '#CC5D74', '#C75773', 
    '#C35172', '#BF4B71', '#BA4570', '#B63F6F', '#B1396E', '#AD336D'
  ];

  const width = 1000;
  const height = 600;

  const treeMap = d3.select('#tree-map')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

  const drawTreeMap = () => {
    const hierarchy = d3.hierarchy(gameData, (d) => d.children)
                        .sum((d) => d.value)
                        .sort((a, b) => b.value - a.value);

    const createTreeMap = d3.treemap()
                            .size([1000, 600]);

    createTreeMap(hierarchy);

    const gameTiles = hierarchy.leaves();
    console.log(gameTiles);  

    const section = treeMap.selectAll('g')
                            .data(gameTiles)
                            .enter()
                            .append('g')
                            .attr('transform', (d) => 'translate(' + d.x0 + ', ' + d.y0 + ')');

    section.append('rect')
            .attr('class', 'tile')
            .attr('fill', (d) => {
              const category = d.data.category;
              let color;
              switch (category) {
                case 'Wii':
                  color = colors[0];
                  break;
                case 'DS':
                  color = colors[1];
                  break;
                case 'X360':
                  color = colors[2];
                  break;
                case 'GB':
                  color = colors[3];
                  break;
                case 'PS3':
                  color = colors[4];
                  break;
                case 'NES':
                  color = colors[5];
                  break;
                case 'PS2':
                  color = colors[6];
                  break;
                case '3DS':
                  color = colors[7];
                  break;
                case 'PS4':
                  color = colors[8];
                  break;
                case 'SNES':
                  color = colors[9];
                  break;
                case 'PS':
                  color = colors[10];
                  break;
                case 'N64':
                  color = colors[11];
                  break;
                case 'GBA':
                  color = colors[12];
                  break;
                case 'XB':
                  color = colors[13];
                  break;
                case 'PC':
                  color = colors[14];
                  break;
                case '2600':
                  color = colors[15];
                  break;
                case 'PSP':
                  color = colors[16];
                  break;
                case 'XOne':
                  color = colors[17];    
              }
              return color;
            })
            .attr('data-name', (d) => d.data.name)
            .attr('data-category', (d) => d.data.category)
            .attr('data-value', (d) => d.value)
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            .attr('stroke', 'gainsboro');

    section.append('text')
            .text((d) => d.data.name)
            .attr('x', 5)
            .attr('y', 15)
            .style('font-size', 10 + 'px');
  }

  const url = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json';

  let gameData;

  d3.json(url).then(
    (data, error) => {
      if (error) {
        console.log(error);
      } else {
        gameData = data;
        // console.log(gameData);
        drawTreeMap();
      }
    }
  )

});