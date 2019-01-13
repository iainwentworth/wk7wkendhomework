const StarWarsPlanets = require('./models/star_wars_planets.js');
const StarWarsPlanetSelectView = require('./views/star_wars_planet_select_view.js');
const StarWarsPlanetListView = require('./views/star_wars_planet_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const selectElement = document.querySelector('#planet-select');
  const starWarsPlanetSelectView = new StarWarsPlanetSelectView(selectElement);
  starWarsPlanetSelectView.bindEvents();

  const container = document.querySelector('#star-wars-planet-list');
  const starWarsPlanetList = new StarWarsPlanetListView(container);
  starWarsPlanetList.bindEvents();

  const starWarsPlanets = new StarWarsPlanets();
  starWarsPlanets.bindEvents();
  starWarsPlanets.getData();
});
