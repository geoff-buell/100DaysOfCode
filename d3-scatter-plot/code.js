document.addEventListener('DOMContentLoaded', () => {

  async function getCyclingData() {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      const width = 800;
      const height = 450;
      const padding = 40;
    
      const svg = d3.select('#scatter-plot')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

      const timeParse = d3.timeParse('%M:%S');              
      const timeFormat = d3.timeFormat('%M:%S');              
      
      const fastestTime = d3.min(data, (d) => timeParse(d.Time));
      const slowestTime = d3.max(data, (d) => timeParse(d.Time));

      const beginningYear = d3.min(data, (d) => d.Year - 1); 
      const latestYear = d3.max(data, (d) => d.Year + 1);

      const xScale = d3.scaleLinear()
                       .domain([beginningYear, latestYear])
                       .range([padding, width - padding]);

      const xAxis = d3.axisBottom()
                      .tickFormat(d3.format('d'))
                      .scale(xScale);

      const yScale = d3.scaleLinear()
                       .domain([slowestTime, fastestTime])
                       .range([height - padding, padding]);

      const yAxis = d3.axisLeft()
                      .tickFormat(timeFormat)
                      .scale(yScale);

      svg.append('g')
         .attr('transform', 'translate(0, ' + (height - padding) + ')')
         .attr('id', 'x-axis')
         .call(xAxis);

      svg.append('g')
         .attr('transform', 'translate(' + padding + ', 0)')
         .attr('id', 'y-axis')
         .call(yAxis);   

    } catch(error) {
      console.log(error);
    }
  }

  getCyclingData();

});