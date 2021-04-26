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
      const barWidth = (width / 275) - 1;

      const svg = d3.select('#bar-chart')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

      const GDPMin = d3.min(dataset, (d) => d[1]);
      const GDPMax = d3.max(dataset, (d) => d[1]);

      const yearsDate = dataset.map((i) => new Date(i[0]));

      const yearInfo = dataset.map((i) => {
        let quarter;
        const sub = i[0].substring(5, 7);
        sub === '01' ? quarter = 'Q1' : false;
        sub === '04' ? quarter = 'Q2' : false;
        sub === '07' ? quarter = 'Q3' : false;
        sub === '10' ? quarter = 'Q4' : false;
        return i[0].substring(0, 4) + ' ' + quarter;
      });
      console.log(yearInfo);

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
      console.log(GDP);
      const linearScale = d3.scaleLinear()
                            .domain([0, GDPMax])
                            .range([0, height - padding * 2]);
                            
      const scaledGDP = GDP.map(i => linearScale(i));

      const tooltip = d3.select('#bar-chart')
                        .append('div')
                        .attr('id', 'tooltip')
                        .style('opacity', 0);

      const overlay = d3.select('#bar-chart')
                        .append('div')
                        .attr('class', 'overlay')
                        .style('opacity', 0);

      d3.select('svg')
        .selectAll('rect')
        .data(scaledGDP)
        .enter()
        .append('rect')
        .attr('data-date', (d, i) => dataset[i][0])
        .attr('data-gdp', (d, i) => dataset[i][1])
        .attr('x', (d, i) => xScale(yearsDate[i]))
        .attr('y', (d) => height - d)
        .attr('width', barWidth)
        .attr('height', (d) => d)
        .attr('transform', 'translate(0, -40)')
        .attr('class', 'bar')
        .on('mouseover', (d, i) => {
          overlay
            .transition()
            .duration(0)
            .style('height', d + 'px')
            .style('width', barWidth + 'px')
            .style('left', i * barWidth + 0 + 'px')
            .style('top', 0)
            .style('transform', 'translate(0, -100px)')
            .style('opacity', 1);
          tooltip
            .transition()
            .duration(0)
            .style('left', i * barWidth + 30 + 'px')
            .style('top', height - 100 + 'px')
            .style('transform', 'translateX(60px)')
            .style('opacity', 0.8);
          tooltip.html(yearInfo[i] + '<br>' + '$' + GDP[i] + ' Billion')
        })
        .on('mouseout', () => {
          overlay
            .transition()
            .duration(200)
            .style('opacity', 0);
          tooltip 
            .transition()
            .duration(200)
            .style('opacity', 0);
        });


    } catch(error) {
      console.log(error);
    }
  }

  getGDPData();
                
});