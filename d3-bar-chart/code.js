document.addEventListener('DOMContentLoaded', () => {

  const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

  async function getData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      let dataset = data.data;
      console.log(dataset);

      
      return dataset;
    } catch(error) {
      console.log(error);
    }
  }

  getData();

  const w = 600,
        h = 300;

  const svg = d3.select('#bar-chart')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
              
             
                
});