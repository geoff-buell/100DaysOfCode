document.addEventListener('DOMContentLoaded', () => {

  const width = 950;
  const height = 600;

  const map = d3.select('#map')
                .append('svg')
                .attr('width', width)
                .attr('height', height);

  const colors = [
    '#427EF5', '#3B70DA', '#3463C0', '#2D55A5', '#25478A', '#1E396F', '#172C55', '#101E3A'
  ];        

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
         const id = d.id;
         const county = educationData.find((item) => {
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
       });
  }

  const countyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';
  const educationURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';

  let countyData;
  let educationData;

  d3.json(countyURL).then(
    (data, error) => {
      if (error) {
        console.log(error); 
      } else {
        countyData = topojson.feature(data, data.objects.counties).features;
        console.log(countyData);

        d3.json(educationURL).then(
          (data, error) => {
            if (error) {
              console.log(error); 
            } else {
              educationData = data;
              console.log(data);
              console.log(d3.min(data, (d) => d.bachelorsOrHigher));
              console.log(d3.max(data, (d) => d.bachelorsOrHigher));
              drawMap();
            }
          }
        );
      }
    }
  );

}); 