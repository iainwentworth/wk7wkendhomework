const PubSub = require('../helpers/pub_sub.js');
const StarWarsPlanetDetailView = require('./star_wars_planet_detail_view.js');

const StarWarsPlanetListView = function(container){
  this.container = container;
}

StarWarsPlanetListView.prototype.bindEvents = function(){
  PubSub.subscribe('StarWarsPlanets:planets-loaded', (event) => {
    console.log('planets list view bind events:', event.detail);
    this.render(event.detail);
  });

}

StarWarsPlanetListView.prototype.render = function(planets){
  planets.forEach((planet) => {
    const planetDetail = new StarWarsPlanetDetailView();
    const planetDiv = planetDetail.createPlanetDetail(planet);
    this.container.appendChild(planetDiv);
  });
}

module.exports = StarWarsPlanetListView;
