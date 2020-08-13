'use strict'

var parentElement = document.getElementById('table');

function generateHeader() {
  var tableRow = document.createElement('tr');
  var blank = document.createElement('td');
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


var allStores=[];

function Location(name, minPeople, maxPeople, avgCookie) {
    this.locationName = name; 
    this.minPeople = minPeople;
    this.maxPeople = maxPeople;
    this.avgCookie = avgCookie;
    this.hourlyCookies = [];
    this.cookieTotal = 0;
    allStores.push(this);
  }
  
var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

Location.prototype.cookiesPerHour = function() {
  for (var i = 0; i < clock.length; i++){
    var Customers = Math.random() * (this.maxPeople - this.minPeople) + this.minPeople;
    var cookieNumber = Customers * this.avgCookie;
    var cookiesBaked = Math.ceil(cookieNumber);
    this.hourlyCookies.push(cookiesBaked);
    this.cookieTotal = this.cookieTotal + cookiesBaked;
  }
}

generateHeader();

Location.prototype.renderTableList = function(){
  // create a tr
  var tableRow = document.createElement('tr');
  // append it to the table - parent element
  var storeName = document.createElement('td');
  storeName.textContent = this.locationName;
  tableRow.appendChild(storeName);
  for (var i=0; i < this.hourlyCookies.length; i++){
    var cookiesList = document.createElement('td');
    cookiesList.textContent = this.hourlyCookies[i];
    tableRow.appendChild(cookiesList);
  }
  var dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.cookieTotal;
  tableRow.appendChild(dailyTotal);
  parentElement.appendChild(tableRow);
}


var seattle = new Location ('Seattle', 23, 65, 6.3);
seattle.cookiesPerHour();
seattle.renderTableList();

var tokyo = new Location ('Tokyo', 3, 24, 1.2);
tokyo.cookiesPerHour();
tokyo.renderTableList();

var dubai = new Location ('Dubai', 11, 38, 3.7);
dubai.cookiesPerHour();
dubai.renderTableList();

var paris = new Location ('Paris', 20, 38, 2.3);
paris.cookiesPerHour();
paris.renderTableList();

var lima = new Location ('Lima', 2, 16, 4.6);
lima.cookiesPerHour();
lima.renderTableList();

// console.log(allStores);

var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault();
  var storeName = event.target.storename.value;
  var minCust = event.target.mincustomer.value;
  var maxCust = event.target.maxcustomer.value;
  var avgCookie = event.target.avgcookie.value;
  var storeName = new Location(storeName, minCust, maxCust, avgCookie);
  storeName.cookiesPerHour();
  storeName.renderTableList();
});