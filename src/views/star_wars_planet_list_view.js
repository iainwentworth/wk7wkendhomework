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
  PubSub.subscribe('StarWarsPlanets:selected-planet', (event) => {
    console.log('planets list view bind events2:', event.detail);
    this.clearList();
    this.render_single(event.detail);
  });
}

StarWarsPlanetListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

StarWarsPlanetListView.prototype.render = function(planets){
  planets.forEach((planet) => {
    const planetDetail = new StarWarsPlanetDetailView();
    const planetDiv = planetDetail.createPlanetDetail(planet);
    this.container.appendChild(planetDiv);
  });
}

StarWarsPlanetListView.prototype.render_single = function(planet){

    const planetDetail = new StarWarsPlanetDetailView();
    const planetDiv = planetDetail.createPlanetDetail(planet);
    this.container.appendChild(planetDiv);

}

module.exports = StarWarsPlanetListView;
