document.addEventListener('DOMContentLoaded', () => {

  const width = 900;
  const height = 600;

  const map = d3.select('#map')
                .append('svg')
                .attr('width', width)
                .attr('height', height);

  const drawMap = () => {
    map.selectAll('path')
       .data(countyData)
       .enter()
       .append('path')
       .attr('d', d3.geoPath())
       .attr('class', 'county');
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