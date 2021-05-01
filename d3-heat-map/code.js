document.addEventListener('DOMContentLoaded', () => {

  async function getHeatData() {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'

    try {
      let response = await fetch(url);
      let data = await response.json();

      console.log(data.monthlyVariance);

      const width = 1250;
      const height = 500;
      const padding = 80;
      const cellWidth = (width - 2 * padding) / 262; //years
      const cellHeight = (height - 2 * padding) / 12; //months

      const heatmap = d3.select('#heat-map')
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height);

      // const colors = [
      //   '#012a4a', '#013a63', '#01497c', '#014f86', '#2a6f97',
      //   '#2c7da0', '#468faf', '#61a5c2', '#89c2d9', '#a9d6e5'
      // ];   

      const colors = [
        '#54478c', '#2c699a', '#048ba8', '#0db39e', '#16db93',
        '#83e377', '#b9e769', '#efea5a', '#f1c453', '#f29e4c'
      ];   

      console.log(colors[0]);
      
      const colorData = (temp) => {
        if (temp >= 0 && temp < 3) { return colors[0] }
        else if (temp >= 3 && temp < 5.5) { return colors[1] }
        else if (temp >= 5.5 && temp < 6) { return colors[2] }
        else if (temp >= 6 && temp < 6.5) { return colors[3] }
        else if (temp >= 6.5 && temp < 7) { return colors[4] }
        else if (temp >= 7 && temp < 8.5) { return colors[5] }
        else if (temp >= 8.5 && temp < 9) { return colors[6] }
        else if (temp >= 9 && temp < 9.5) { return colors[7] }
        else if (temp >= 9.5 && temp < 10) { return colors[8] }
        else if (temp >= 10 && temp < 15) { return colors[9] }
      } 

      const baseTemp = data.baseTemperature;

      const minYear = d3.min(data.monthlyVariance, (d) => d.year);
      const maxYear = d3.max(data.monthlyVariance, (d) => d.year);

      console.log(d3.min(data.monthlyVariance, (d) => d.variance));
      console.log(d3.max(data.monthlyVariance, (d) => d.variance));
      
      const xScale = d3.scaleTime()
                       .domain([minYear, maxYear + 1])
                       .range([padding, width - padding]);
      
      const yScale = d3.scaleTime()
                       .domain([new Date(0, 0, 1), new Date(0, 11, 31)])
                       .range([padding, height - padding]);

      const xAxis = d3.axisBottom()
                      .tickFormat(d3.format('d'))
                      .scale(xScale);       
      
      const yAxis = d3.axisLeft()
                      .tickFormat(d3.timeFormat('%B'))
                      .scale(yScale);
                      
      heatmap.append('g')
             .attr('transform', 'translate(0, ' + (height - padding) + ')')
             .attr('id', 'x-axis')
             .call(xAxis);                 

      heatmap.append('g')
             .attr('transform', 'translate(' + padding + ', 0)')
             .attr('id', 'y-axis')
             .call(yAxis);  

      heatmap.selectAll('.cell')
             .data(data.monthlyVariance)
             .enter()
             .append('rect')
             .attr('class', 'cell')
             .attr('data-month', (d) => d.month)
             .attr('data-year', (d) => d.year)
             .attr('data-temp', (d) => baseTemp + d.variance)
             .attr('x', (d) => xScale(d.year))
             .attr('y', (d) => padding + (d.month - 1) * ((height - 2 * padding) / 12)) 
             .attr('width', cellWidth)
             .attr('height', cellHeight)       
             .style('fill', (d) => colorData(baseTemp + d.variance));           

    } catch(error) {
      console.log(error);
    }
  }

  getHeatData();

});