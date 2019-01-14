const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const StarWarsPlanets = function(){
  this.planets = [];
}

StarWarsPlanets.prototype.bindEvents = function(){
  PubSub.subscribe('StarWarsPlanetSelectView:planet-index-selected', (event) => {
    const index = event.detail;
    const planet = this.planets[index];
    PubSub.publish('StarWarsPlanets:selected-planet', planet);
  })
}

StarWarsPlanets.prototype.getData = function(){
  const request1 = new Request('https://swapi.co/api/planets/');
  request1.get().then((data1) => {
    this.planets = data1.results;
    console.log('getData1', data1.results);

    const request2 = new Request('https://swapi.co/api/planets/?page=2');
    request2.get().then((data2) => {
      this.planets = this.planets.concat(data2.results);
      console.log('getData2', data2.results);

      const request3 = new Request('https://swapi.co/api/planets/?page=3');
      request3.get().then((data3) => {
        this.planets = this.planets.concat(data3.results);
        console.log('getData3', data3.results);

        const request4 = new Request('https://swapi.co/api/planets/?page=4');
        request4.get().then((data4) => {
          this.planets = this.planets.concat(data4.results);
          console.log('getData4', data4.results);

          const request5 = new Request('https://swapi.co/api/planets/?page=5');
          request5.get().then((data5) => {
            this.planets = this.planets.concat(data5.results);
            console.log('getData5', data5.results);

            const request6 = new Request('https://swapi.co/api/planets/?page=6');
            request6.get().then((data6) => {
              this.planets = this.planets.concat(data6.results);
              console.log('getData6', data6.results);

              const request7 = new Request('https://swapi.co/api/planets/?page=7');
              request7.get().then((data7) => {
                this.planets = this.planets.concat(data7.results);
                console.log('getData7', data7.results);
              }).then(() => {
                PubSub.publish('StarWarsPlanets:planets-loaded', this.planets);
              });
            });
          })
        })
      })
    })
  })
}


module.exports = StarWarsPlanets;
