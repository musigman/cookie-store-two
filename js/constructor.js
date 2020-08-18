'use strict'

//declaring global variables
var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentElement = document.getElementById('table');
var form = document.getElementById('form');
var allStores = [];

//constructor function
function Location(name, minPeople, maxPeople, avgCookie) {
  this.locationName = name;
  this.minPeople = minPeople;
  this.maxPeople = maxPeople;
  this.avgCookie = avgCookie;
  this.hourlyCookies = [];
  this.cookieTotal = 0;
  allStores.push(this);
}

//prototype of constructor function to find cookies needed per hour
Location.prototype.cookiesPerHour = function () {
  this.hourlyCookies = [];
  this.cookieTotal = 0;
  for (var i = 0; i < clock.length; i++) {
    var customers = Math.random() * (this.maxPeople - this.minPeople) + this.minPeople;
    var cookieNumber = parseInt(customers * this.avgCookie);
    console.log(cookieNumber);
    var cookiesBaked = parseInt(Math.ceil(cookieNumber));
    console.log(cookiesBaked);
    this.hourlyCookies.push(cookiesBaked);
    this.cookieTotal = this.cookieTotal + cookiesBaked;
    console.log(this.cookieTotal);
  }
}

//generates the header of the table and renders to webpage
function generateHeader() {
  var tableRow = document.createElement('tr');
  var blank = document.createElement('th');
  tableRow.appendChild(blank);
  for (var i = 0; i < clock.length; i++) {
    var tableHead = document.createElement('th');
    tableHead.textContent = clock[i];
    tableRow.appendChild(tableHead);
  }
  var total = document.createElement('th');
  total.textContent = 'Daily Location Total';
  tableRow.appendChild(total);
  parentElement.appendChild(tableRow);
}

//prototype of constructor function to generates a table for all the information to be displayed in
Location.prototype.renderTableList = function () {
  var tableRow = document.createElement('tr');
  var storeName = document.createElement('td');
  storeName.textContent = this.locationName;
  tableRow.appendChild(storeName);
  for (var i = 0; i < this.hourlyCookies.length; i++) {
    var cookiesList = document.createElement('td');
    cookiesList.textContent = this.hourlyCookies[i];
    tableRow.appendChild(cookiesList);
  }
  var dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.cookieTotal;
  tableRow.appendChild(dailyTotal);
  parentElement.appendChild(tableRow);
}
// sending each location with its info through the constructor function
var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);

// adds a footer to the bottom of the table with the hourly total of all stores combined
function footer() {
  var footerRow = document.createElement('tr');
  var dailyTotalAllStores = document.createElement('td');
  dailyTotalAllStores.textContent = 'All Stores Hourly Total';
  footerRow.appendChild(dailyTotalAllStores);
  for (var i = 0; i < clock.length; i++) {
    var hourlyTotals = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotals += allStores[j].hourlyCookies[i];
    }
    var footerData = document.createElement('td')
    footerData.textContent = hourlyTotals;
    footerRow.appendChild(footerData);
  }
  parentElement.appendChild(footerRow);
}

// adding a new store
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var storeName = event.target.storename.value;
  var minCust = parseInt(event.target.mincustomer.value);
  var maxCust = parseInt(event.target.maxcustomer.value);
  var avgCookie = parseInt(event.target.avgcookie.value);
  var storeName = new Location(storeName, minCust, maxCust, avgCookie);
  parentElement.innerHTML = '';
  renderFullTable();
})

function renderFullTable() {
  generateHeader();
  for (var i=0; i< allStores.length; i++){
    allStores[i].cookiesPerHour();
    allStores[i].renderTableList();
  }
  footer();
}
renderFullTable();
//console.log(allStores);