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

      const baseTemp = data.baseTemperature;

    } catch(error) {
      console.log(error);
    }
  }

  getHeatData();

});