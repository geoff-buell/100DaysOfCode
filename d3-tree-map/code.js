document.addEventListener('DOMContentLoaded', () => {

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
    // console.log(gameTiles); 
    let categories = gameTiles.map((nodes) => nodes.data.category);
    categories = categories.filter((category, index, self) => self.indexOf(category) === index); 
    // console.log(categories);

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
                  color = 'yellowGreen';
                  break;
                case 'DS':
                  color = 'brown';
                  break;
                case 'X360':
                  color = 'violet';
                  break;
                case 'GB':
                  color = 'darkKhaki';
                  break;
                case 'PS3':
                  color = 'tomato';
                  break;
                case 'NES':
                  color = 'goldenrod';
                  break;
                case 'PS2':
                  color = 'teal';
                  break;
                case '3DS':
                  color = 'blueViolet';
                  break;
                case 'PS4':
                  color = 'steelBlue';
                  break;
                case 'SNES':
                  color = 'tan';
                  break;
                case 'PS':
                  color = 'slateGrey';
                  break;
                case 'N64':
                  color = 'slateBlue';
                  break;
                case 'GBA':
                  color = 'skyBlue';
                  break;
                case 'XB':
                  color = 'salmon';
                  break;
                case 'PC':
                  color = 'seaGreen';
                  break;
                case '2600':
                  color = 'sandyBrown';
                  break;
                case 'PSP':
                  color = 'royalBlue';
                  break;
                case 'XOne':
                  color = 'purple';    
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
            .selectAll('tspan')
            .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
            .enter()
            .append('tspan')
            .text((d) => d)
            .attr('x', 3)
            .attr('y', (d, i) => 13 + i * 11)
            .style('font-size', 10 + 'px');  

            const legend = d3.select('#legend')
            .append('svg')
            .attr('width', width)
            .attr('height', 100)
            .style('padding-top', 10 + 'px');

    const rectSize = 20;                  
    const rectHSpacing = 100;   
    const rectVSpacing = 20;              
    const elementsPerRow = Math.floor(width / rectHSpacing);

    const legendItem = legend.selectAll('g')
                        .data(categories)
                        .enter()
                        .append('g')
                        .attr('transform', (d, i) => {
                          return (
                            'translate(' + (i % elementsPerRow) * rectHSpacing + ', ' +
                            (Math.floor(i / elementsPerRow) * rectSize + rectVSpacing *
                            Math.floor(i / elementsPerRow)) + ')'
                          )
                        });

    legendItem.append('rect')
        .attr('width', rectSize)
        .attr('height', rectSize)                              
        .attr('class', 'legend-item')                  
        .attr('fill', (d) => {
          let color;
          switch (d) {
            case 'Wii':
              color = 'yellowGreen';
              break;
            case 'DS':
              color = 'brown';
              break;
            case 'X360':
              color = 'violet';
              break;
            case 'GB':
              color = 'darkKhaki';
              break;
            case 'PS3':
              color = 'tomato';
              break;
            case 'NES':
              color = 'goldenrod';
              break;
            case 'PS2':
              color = 'teal';
              break;
            case '3DS':
              color = 'blueViolet';
              break;
            case 'PS4':
              color = 'steelBlue';
              break;
            case 'SNES':
              color = 'tan';
              break;
            case 'PS':
              color = 'slateGrey';
              break;
            case 'N64':
              color = 'slateBlue';
              break;
            case 'GBA':
              color = 'skyBlue';
              break;
            case 'XB':
              color = 'salmon';
              break;
            case 'PC':
              color = 'seaGreen';
              break;
            case '2600':
              color = 'sandyBrown';
              break;
            case 'PSP':
              color = 'royalBlue';
              break;
            case 'XOne':
              color = 'purple';    
          }
          return color;
        });

    legendItem.append('text')
        .attr('x', rectSize + 6)
        .attr('y', rectSize - 6)
        .style('font-size', 12 + 'px')
        .text((d) => d);            
        
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