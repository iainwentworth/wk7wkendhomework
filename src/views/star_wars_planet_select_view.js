const PubSub = require('../helpers/pub_sub.js');

const StarWarsPlanetSelectView = function(element){
  this.element = element;
}

StarWarsPlanetSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('StarWarsPlanets:planets-loaded', (event) => {
    const planets = event.detail;
    this.populate(planets);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    console.log('selectedIndex', selectedIndex);
    PubSub.publish('StarWarsPlanetSelectView:planet-index-selected', selectedIndex);
  })
}

StarWarsPlanetSelectView.prototype.populate = function(planets){
  planets.forEach((planet, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = planet.name;
    this.element.appendChild(option);
  })
}

module.exports = StarWarsPlanetSelectView;
