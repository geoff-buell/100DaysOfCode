document.addEventListener('DOMContentLoaded', () => {

  async function getCyclingData() {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

    try {
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);

      const width = 800;
      const height = 450;
      const padding = 40;
    
      const svg = d3.select('#scatter-plot')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

      const tooltip = d3.select('#scatter-plot')
                        .append('div')
                        .attr('id', 'tooltip')
                        .style('opacity', 0);              
      
      const fastestTime = d3.min(data, (d) => new Date(d.Seconds * 1000));
      const slowestTime = d3.max(data, (d) => new Date(d.Seconds * 1000));

      const minYear = d3.min(data, (d) => d.Year - 1); 
      const maxYear = d3.max(data, (d) => d.Year + 1);

      const xScale = d3.scaleUtc()
                       .domain([minYear, maxYear])
                       .range([padding + 30, width - padding]);

      const xAxis = d3.axisBottom()
                      .tickFormat(d3.format('d'))
                      .scale(xScale);

      const yScale = d3.scaleTime()
                       .domain([slowestTime, fastestTime])
                       .range([height - padding, padding]);

      const yAxis = d3.axisLeft()
                      .tickFormat(d3.timeFormat('%M:%S'))
                      .scale(yScale);

      svg.append('g')
         .attr('transform', 'translate(0, ' + (height - padding) + ')')
         .attr('id', 'x-axis')
         .call(xAxis);

      svg.append('g')
         .attr('transform', 'translate(' + (padding + 30) + ', 0)')
         .attr('id', 'y-axis')
         .call(yAxis);   

      svg.append('text')
         .attr('transform', 'rotate(-90)')  
         .attr('x', -260)
         .attr('y', 20)
         .style('font-size', 12 + 'px')
         .text('Time in Minutes');

      const dots = svg.selectAll('.dot')
                      .data(data)   
                      .enter()
                      .append('circle')
                      .attr('class', 'dot')
                      .attr('r', 5)
                      .attr('cx', (d) => xScale(d.Year))
                      .attr('cy', (d) => yScale(new Date(d.Seconds * 1000)))
                      .attr('data-xvalue', (d) => d.Year)
                      .attr('data-yvalue', (d) => new Date(d.Seconds * 1000))
                      .style('stroke', '#0d1317')
                      .style('stroke-width', 0.5)
                      .style('fill', (d) => d.Doping === '' ? '#6564db' : '#ff6347');   

      const mouseover = (event, d) => {
        const [x, y] = d3.pointer(event);
        tooltip
          .attr('data-year', d.Year)
          .style('left', (x + 50) + 'px')
          .style('top', (y + 100) + 'px')
          .style('opacity', 0.8);
        tooltip.html(
          d.Name + ': ' + d.Nationality + '<br/>' + 'Year: ' + 
          d.Year + '<br/>' + ' Time: ' + d.Time + '<br/>' + d.Doping
        )
      }                

      const mouseout = () => {
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0);
      }
                      
      dots.on('mouseover', mouseover);
      dots.on('mouseout', mouseout);                

      const legend = svg.selectAll('.legend')   
                        .data(data)
                        .enter()
                        .append('g')
                        .attr('class', 'legend')
                        .attr('id', 'legend');

      legend.append('rect')
            .attr('width', 12)
            .attr('height', 12)
            .attr('x', width - 200)
            .attr('y', padding)
            .style('stroke', '#0d1317')
            .style('stoke-width', 0.5)
            .style('fill', '#6564db');

      legend.append('rect')
            .attr('width', 12)
            .attr('height', 12)
            .attr('x', width - 200)
            .attr('y', padding + 20)
            .style('stroke', '#0d1317')
            .style('stoke-width', 0.5)
            .style('fill', '#ff6347');

      svg.append('text')
            .attr('x', width - 180)
            .attr('y', padding + 10)
            .style('font-size', 12 + 'px')
            .text('No Doping Allegations');   
            
      svg.append('text')
            .attr('x', width - 180)
            .attr('y', padding + 30)
            .style('font-size', 12 + 'px')
            .text('Doping Allegations')      

    } catch(error) {
      console.log(error);
    }
  }

  getCyclingData();

});