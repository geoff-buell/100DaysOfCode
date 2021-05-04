document.addEventListener('DOMContentLoaded', () => {

  const colors = [
    '#427EF5', '#3B70DA', '#3463C0', '#2D55A5', '#25478A', '#1E396F', '#172C55', '#101E3A'
  ];  

  const colorData = (percentage) => {
    if (percentage >= 0 && percentage < 10) { return colors[0] }
    else if (percentage >= 10 && percentage < 20) { return colors[1] }
    else if (percentage >= 20 && percentage < 30) { return colors[2] }
    else if (percentage >= 30 && percentage < 40) { return colors[3] }
    else if (percentage >= 40 && percentage < 50) { return colors[4] }
    else if (percentage >= 50 && percentage < 60) { return colors[5] }
    else if (percentage >= 60 && percentage < 70) { return colors[6] }
    else if (percentage >= 70 && percentage < 80) { return colors[7] }
  }

  const width = 950;
  const height = 600;

  const map = d3.select('#map')
                .append('svg')
                .attr('width', width)
                .attr('height', height);

  const legendData = [0, 10, 20, 30, 40, 50, 60, 70]; 
  const legendCellWidth = 40;             

  const legend = map.append('svg')
                    .attr('x', width - (80 + legendCellWidth * legendData.length))
                    .attr('y', 20)
                    .attr('width', legendCellWidth * legendData.length)
                    .attr('height', 100)
                    .attr('id', 'legend');  
                    
  legend.selectAll('.legend')
        .data(legendData)
        .enter()
        .append('rect')
        .attr('x', (d, i) => (legendCellWidth * i))
        .attr('y', 0)
        .attr('width', legendCellWidth)
        .attr('height', 10)
        .style('fill', (d) => colorData(d));   
        
  legend.selectAll('.text')
        .data(legendData)
        .enter()
        .append('text')
        .text((d) => d.toString() + '%')
        .attr('x', (d, i) => legendCellWidth * i)
        .attr('y', 25)
        .style('font-size', 12 + 'px')

  const tooltip = d3.select('#map')
                    .append('div')
                    .attr('id', 'tooltip')
                    .style('opacity', 0);  

  const mouseover = (event, d) => {
    const [x, y] = d3.pointer(event);
    tooltip.style('opacity', 0.9)
           .style('left', x + 'px')
           .style('top', y + 'px'); 
    let id = d.id;
    let county = educationData.find((item) => {
      return item['fips'] === id;
    });
    tooltip.attr('data-education', county['bachelorsOrHigher']);
    tooltip.html(
      county['area_name'] + ', ' + county['state'] + ': ' +
      county['bachelorsOrHigher'] + '%'
    );
  }                    

  const mouseout = () => {
    tooltip.style('opacity', 0);
  }

  const drawMap = () => {
    map.selectAll('path')
       .data(countyData)
       .enter()
       .append('path')
       .attr('d', d3.geoPath())
       .attr('class', 'county')
       .attr('data-fips', (d) => d.id)
       .attr('data-education', (d, i) => educationData[i].bachelorsOrHigher)
       .attr('fill', (d) => {
         let id = d.id;
         let county = educationData.find((item) => {
           return item['fips'] === id;
         });
         const percentage = county['bachelorsOrHigher'];
         if (percentage >= 0 && percentage < 10) { return colors[0] }
         else if (percentage >= 10 && percentage < 20) { return colors[1] }
         else if (percentage >= 20 && percentage < 30) { return colors[2] }
         else if (percentage >= 30 && percentage < 40) { return colors[3] }
         else if (percentage >= 40 && percentage < 50) { return colors[4] }
         else if (percentage >= 50 && percentage < 60) { return colors[5] }
         else if (percentage >= 60 && percentage < 70) { return colors[6] }
         else if (percentage >= 70 && percentage < 80) { return colors[7] } 
       })
       .on('mouseover', mouseover)
       .on('mouseout', mouseout);    
       
    map.append('path')
       .classed('stateBorder', true)
       .attr('fill', 'none')
       .attr('stroke', 'gainsboro')
       .attr('stroke-width', 0.75)
       .datum(stateData, (a, b) => a !== b)
       .attr('d', d3.geoPath());
  }

  const countyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';
  const educationURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';

  let countyData;
  let stateData;
  let educationData;

  d3.json(countyURL).then(
    (data, error) => {
      if (error) {
        console.log(error); 
      } else {
        countyData = topojson.feature(data, data.objects.counties).features; 
        stateData = topojson.mesh(data, data.objects.states); 
        // console.log(countyData);
        d3.json(educationURL).then(
          (data, error) => {
            if (error) {
              console.log(error); 
            } else {
              educationData = data;
              // console.log(data);
              // console.log(d3.min(data, (d) => d.bachelorsOrHigher));
              // console.log(d3.max(data, (d) => d.bachelorsOrHigher));
              drawMap();
            }
          }
        );
      }
    }
  );

}); 