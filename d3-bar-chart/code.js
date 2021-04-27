document.addEventListener('DOMContentLoaded', () => {

  async function getGDPData() {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

    try {
      let response = await fetch(url);
      let data = await response.json();
      const dataset = data.data;

      const width = 800;
      const height = 450;
      const padding = 40;
      const barWidth = (width / 275) - 1;

      const svg = d3.select('#bar-chart')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

      const GDPMin = d3.min(dataset, (d) => d[1]);
      const GDPMax = d3.max(dataset, (d) => d[1]);

      const yearsDate = dataset.map((i) => new Date(i[0]));

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
         .text('1947-2015 Quarterly');

      const GDP = dataset.map(i => i[1]);
      
      const linearScale = d3.scaleLinear()
                            .domain([0, GDPMax])
                            .range([0, height - padding * 2]);
                            
      const scaledGDP = GDP.map(i => linearScale(i));

      const tooltip = d3.select('#bar-chart')
                        .append('div')
                        .attr('id', 'tooltip')
                        .style('opacity', 0);

      const bars = d3.select('svg')
                     .selectAll('rect')
                     .data(dataset)
                     .enter()
                     .append('rect')
                     .attr('class', 'bar')
                     .attr('data-date', (d) => d[0])
                     .attr('data-gdp', (d) => d[1])
                     .attr('x', (d, i) => xScale(yearsDate[i]))
                     .attr('y', (d, i) => height - scaledGDP[i])
                     .attr('width', barWidth)
                     .attr('height', (d, i) => scaledGDP[i])
                     .attr('transform', 'translate(0, -40)');

      const mouseover = (event, d) => {
        console.log(tooltip)
        tooltip
          .transition()
          .duration(0)
          .attr('data-date', d[0])
          .style('opacity', 0.8)
          .style('left', width - 153 + 'px')
          .style('top', height - 55 + 'px');
        tooltip
          .html(
            d[0] + '<br/>' + '$' + 
            d[1].toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + 
            ' Billion'
          );
      } 

      const mouseout = () => {
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0);
      }

      bars.on('mouseover', mouseover);
      bars.on('mouseout', mouseout);    

    } catch(error) {
      console.log(error);
    }
  }

  getGDPData();
                
});