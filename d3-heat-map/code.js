document.addEventListener('DOMContentLoaded', () => {

  async function getHeatData() {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'

    try {
      let response = await fetch(url);
      let data = await response.json();

      console.log(data);
      console.log(data.baseTemperature);
      console.log(data.monthlyVariance);
      console.log(data.monthlyVariance[0]);

      const width = 1250;
      const height = 500;
      const padding = 80;

      const heatmap = d3.select('#heat-map')
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height);

      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];                  

      const baseTemp = data.baseTemperature;

      const minYear = d3.min(data.monthlyVariance, (d) => d.year);
      const maxYear = d3.max(data.monthlyVariance, (d) => d.year);
      
      const xScale = d3.scaleTime()
                       .domain([minYear, maxYear])
                       .range([padding, width - padding])
                       .nice();       
      
      const yScale = d3.scaleBand()
                       .domain([1,2,3,4,5,6,7,8,9,10,11,12])
                       .rangeRound([padding - 50, height - padding]);

      const xAxis = d3.axisBottom()
                      .tickFormat(d3.format('d'))
                      .scale(xScale);

      const yAxis = d3.axisLeft()
                      .tickValues(yScale.domain())
                      .tickFormat((month) => {
                        const date = new Date(0);
                        const timeFormat = d3.timeFormat('%B');
                        date.setUTCMonth(month);
                        return timeFormat(date);
                      })
                      .scale(yScale);                
                      
      heatmap.append('g')
             .attr('transform', 'translate(0, ' + (height - padding) + ')')
             .attr('id', 'x-axis')
             .call(xAxis);                 

      heatmap.append('g')
             .attr('transform', 'translate(' + padding + ', 0)')
             .attr('id', 'y-axis')
             .call(yAxis);  

    } catch(error) {
      console.log(error);
    }
  }

  getHeatData();

});