document.addEventListener('DOMContentLoaded', () => {

  async function getGDPData() {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

    try {
      let response = await fetch(url);
      let data = await response.json();
      const dataset = data.data;
      console.log(dataset);

      const width = 800;
      const height = 450;
      const padding = 40;

      const svg = d3.select('#bar-chart')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

      const GDPMin = d3.min(dataset, (d) => d[1]);
      const GDPMax = d3.max(dataset, (d) => d[1]);

      const yearsDate = dataset.map((d) => new Date(d[0]));

      const QMin = d3.min(yearsDate);
      const QMax = new Date(d3.max(yearsDate));
      QMax.setMonth(QMax.getMonth() + 3);
      
      const xScale = d3.scaleTime()
                       .domain([QMin, QMax])
                       .range([padding, width - padding]);      

      const xAxis = d3.axisBottom()
                      .scale(xScale);

      svg.append('g')              
         .attr('transform', 'translate(0, ' + (height - padding) + ')')
         .attr('id', 'x-axis')
         .call(xAxis);

      const yScale = d3.scaleLinear()
                       .domain([0, GDPMax])
                       .range([height - padding, padding]);

      const yAxis = d3.axisLeft()
                      .scale(yScale);

      svg.append('g')
         .attr('transform', 'translate(' + padding + ', 0)')
         .attr('id', 'y-axis')
         .call(yAxis);

      svg.append('text')
         .attr('transform', 'rotate(-90)')
         .attr('x', -300)
         .attr('y', 60)
         .attr('class', 'tick')
         .text('Gross Domestic Product');   
         
      svg.append('text')   
         .attr('x', width / 2 - 65)
         .attr('y', height - 3)
         .attr('class', 'tick')
         .text('1947-2015 By Quarter');

      d3.select('svg')
        .selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('data-date', (d, i) => dataset[i][0])
        .attr('data-gdp', (d, i) => dataset[i][1])
        .attr('class', 'bar');


    } catch(error) {
      console.log(error);
    }
  }

  getGDPData();
                
});