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

    } catch(error) {
      console.log(error);
    }
  }

  getCyclingData();

});