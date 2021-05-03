document.addEventListener('DOMContentLoaded', () => {

  async function getData() {

    try {
      const educationURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';
      const countyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';

      let educationResponse = await fetch(educationURL);
      let educationData = await educationResponse.json();
      console.log(educationData);
      let countyResponse = await fetch(countyURL);
      let countyData = await countyResponse.json();
      console.log(countyData);

    } catch(error) {
      console.log(error);
    }

  }

  getData();

}); 