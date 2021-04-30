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
      const rectWidth = (width - 2 * padding) / 262;
      const rectHeight = (height - 2 * padding) / 12;

      const heatmap = d3.select('#heat-map')
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height);

      const colors = [
        '#0091ad', '#1780a1', '#2e6f95', '#455e89', '#5c4d7d',
        '#723c70', '#892b64', '#a01a58', '#b7094c'
      ];                  

      const baseTemp = data.baseTemperature;

      console.log(d3.min(data.monthlyVariance, (d) => d.variance));
      console.log(d3.max(data.monthlyVariance, (d) => d.variance));
      
      const xScale = d3.scaleTime()
                       .domain(d3.extent(data.monthlyVariance, (d) => d.year))
                       .range([padding, width - padding]);  
                       
      const yScale = d3.scaleTime()
                       .domain(d3.extent(data.monthlyVariance, (d) => d.month))
                       .range([padding, height - padding]);
      
      const customYScale = d3.scaleTime()
                       .domain([new Date(2021, 11, 31), new Date(2021, 0, 1)])
                       .range([height - padding, padding]);

      const xAxis = d3.axisBottom()
                      .tickFormat(d3.format('d'))
                      .scale(xScale);       
      
      const yAxis = d3.axisLeft()
                      .tickFormat(d3.timeFormat('%B'))
                      .scale(customYScale);
                      
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
             .attr('y', (d) => yScale(d.month)) 
             .attr('width', rectWidth)
             .attr('height', rectHeight)       
             .attr("transform", "translate(0, -29)") 
             .attr('fill', '#2e6f95');           

    } catch(error) {
      console.log(error);
    }
  }

  getHeatData();

});