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

      let raceTimeData = [];
      let date;

      for (let i = 0; i < data.length; i++) {
        date = new Date();
        date.setMinutes(data[i].Seconds / 60);
        date.setSeconds(data[i].Seconds % 60);
        raceTimeData.push(date);
      }

      const timeFormat = d3.timeFormat('%M:%S');              
      
      const fastestTime = d3.min(raceTimeData, (d) => d);
      const slowestTime = d3.max(raceTimeData, (d) => d);

      const minYear = d3.min(data, (d) => d.Year - 1); 
      const maxYear = d3.max(data, (d) => d.Year + 1);

      const xScale = d3.scaleUtc()
                       .domain([minYear, maxYear])
                       .range([padding, width - padding]);

      const xAxis = d3.axisBottom()
                      .tickFormat(d3.format('d'))
                      .scale(xScale);

      const yScale = d3.scaleTime()
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

      svg.selectAll('circle')
         .data(data)   
         .enter()
         .append('circle')
         .attr('class', 'dot')
         .attr('r', 5)
         .attr('cx', (d) => xScale(d.Year))
         .attr('cy', (d, i) => yScale(raceTimeData[i]))
         .attr('data-xvalue', (d) => d.Year)
         .attr('data-yvalue', (d, i) => yScale(raceTimeData[i]))
         .style('fill', (d) => d.Doping === '' ? '#6564db' : '#ff6347');

    } catch(error) {
      console.log(error);
    }
  }

  getCyclingData();

});