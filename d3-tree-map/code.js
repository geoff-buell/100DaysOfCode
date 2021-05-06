document.addEventListener('DOMContentLoaded', () => {

  const width = 1000;
  const height = 600;

  const treeMap = d3.select('#tree-map')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);    
                    
  const tooltip = d3.select('body')
                    .append('div')
                    .attr('id', 'tooltip')
                    .style('opacity', 0);

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

    const handleMouseover = (event, d) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const dataName = d.data.name;
      const dataCategory = d.data.category;
      const dataVal = d.data.value;
      tooltip.style('opacity', 0.9)
              .style('left', mouseX + 50 + 'px')
              .style('top', mouseY + 'px')
              .attr('data-value', (d) => dataVal);
      tooltip.html(
        'Name: ' + dataName + '<br/>' +
        'Platform: ' + dataCategory + '<br/>' +
        'Value: ' + dataVal + ' Million'
      )        
    }

    const handleMouseout = () => {
      tooltip.style('opacity', 0);
    }

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
                  color = '#E89361';
                  break;
                case 'DS':
                  color = '#CB8F7B';
                  break;
                case 'X360':
                  color = '#AE8A96';
                  break;
                case 'GB':
                  color = '#9186B0';
                  break;
                case 'PS3':
                  color = '#7481CB';
                  break;
                case 'NES':
                  color = '#577DE5';
                  break;
                case 'PS2':
                  color = '#E65757';
                  break;
                case '3DS':
                  color = '#CC7459';
                  break;
                case 'PS4':
                  color = '#B3915B';
                  break;
                case 'SNES':
                  color = '#99AE5D';
                  break;
                case 'PS':
                  color = '#80CB5F';
                  break;
                case 'N64':
                  color = '#66E861';
                  break;
                case 'GBA':
                  color = '#E6DA57';
                  break;
                case 'XB':
                  color = '#DEC274';
                  break;
                case 'PC':
                  color = '#D7AA91';
                  break;
                case '2600':
                  color = '#CF91AE';
                  break;
                case 'PSP':
                  color = '#C879CB';
                  break;
                case 'XOne':
                  color = '#C061E8';    
              }
              return color;
            })
            .attr('data-name', (d) => d.data.name)
            .attr('data-category', (d) => d.data.category)
            .attr('data-value', (d) => d.data.value)
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            .attr('stroke', 'gainsboro')
            .on('mouseover', handleMouseover)
            .on('mouseout', handleMouseout);

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
                      .style('padding-left', 60 + 'px')
                      .style('padding-top', 10 + 'px');

    const rectSize = 20;                  
    const rectHSpacing = 110;   
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
              color = '#E89361';
              break;
            case 'DS':
              color = '#CB8F7B';
              break;
            case 'X360':
              color = '#AE8A96';
              break;
            case 'GB':
              color = '#9186B0';
              break;
            case 'PS3':
              color = '#7481CB';
              break;
            case 'NES':
              color = '#577DE5';
              break;
            case 'PS2':
              color = '#E65757';
              break;
            case '3DS':
              color = '#CC7459';
              break;
            case 'PS4':
              color = '#B3915B';
              break;
            case 'SNES':
              color = '#99AE5D';
              break;
            case 'PS':
              color = '#80CB5F';
              break;
            case 'N64':
              color = '#66E861';
              break;
            case 'GBA':
              color = '#E6DA57';
              break;
            case 'XB':
              color = '#DEC274';
              break;
            case 'PC':
              color = '#D7AA91';
              break;
            case '2600':
              color = '#CF91AE';
              break;
            case 'PSP':
              color = '#C879CB';
              break;
            case 'XOne':
              color = '#C061E8';    
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