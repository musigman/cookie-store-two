'use strict';

var seattle = {
  minPeople: 23,
  maxPeople: 65,
  avgCookie: 6.3,
  cookieDayTotal: 0,
  render: function(){
    var time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (var i = 0; i < time.length; i++){
      var seattleCustomers = Math.random() * (this.maxPeople - this.minPeople) + this.minPeople;
      var cookieNumber = seattleCustomers * this.avgCookie;
      var cookiesBaked = Math.ceil(cookieNumber);
      this.cookieDayTotal = this.cookieDayTotal + cookiesBaked; // this.cookieDayTotal += CookiesBaked
      var parent = document.getElementById('seattle');
      var listItem = document.createElement('li');
      listItem.textContent = `at ${time[i]} make ${cookiesBaked} cookies`;
      parent.appendChild(listItem);
    }
    document.getElementById('seattleTotal').innerHTML = `Bake ${this.cookieDayTotal} cookies in total for the whole day.`;
  }
};
seattle.render();


var tokyo = {
  minPeople: 3,
  maxPeople: 24,
  avgCookie: 1.2,
  cookieDayTotal: 0,
  render: function(){
    var time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (var i = 0; i < time.length; i++){
      var tokyoCustomers = Math.random() * (this.maxPeople - this.minPeople) + this.minPeople;
      var cookieNumber = tokyoCustomers * this.avgCookie;
      var cookiesBaked = Math.ceil(cookieNumber);
      this.cookieDayTotal = this.cookieDayTotal + cookiesBaked; // this.cookieDayTotal += CookiesBaked
      var parent = document.getElementById('tokyo');
      var listItem = document.createElement('li');
      listItem.textContent = `at ${time[i]} make ${cookiesBaked} cookies`;
      parent.appendChild(listItem);
    }
    document.getElementById('tokyoTotal').innerHTML = `Bake ${this.cookieDayTotal} cookies in total for the whole day.`;
  }
};
tokyo.render();



var dubai = {
  minPeople: 11,
  maxPeople: 38,
  avgCookie: 3.7,
  cookieDayTotal: 0,
  render: function(){
    var time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (var i = 0; i < time.length; i++){
      var dubaiCustomers = Math.random() * (this.maxPeople - this.minPeople) + this.minPeople;
      var cookieNumber = dubaiCustomers * this.avgCookie;
      var cookiesBaked = Math.ceil(cookieNumber);
      this.cookieDayTotal = this.cookieDayTotal + cookiesBaked; // this.cookieDayTotal += CookiesBaked
      var parent = document.getElementById('dubai');
      var listItem = document.createElement('li');
      listItem.textContent = `at ${time[i]} make ${cookiesBaked} cookies`;
      parent.appendChild(listItem);
    }
    document.getElementById('dubaiTotal').innerHTML = `Bake ${this.cookieDayTotal} cookies in total for the whole day.`;
  }
};
dubai.render();

var paris = {
  minPeople: 20,
  maxPeople: 38,
  avgCookie: 2.3,
  cookieDayTotal: 0,
  render: function(){
    var time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (var i = 0; i < time.length; i++){
      var parisCustomers = Math.random() * (this.maxPeople - this.minPeople) + this.minPeople;
      var cookieNumber = parisCustomers * this.avgCookie;
      var cookiesBaked = Math.ceil(cookieNumber);
      this.cookieDayTotal = this.cookieDayTotal + cookiesBaked; // this.cookieDayTotal += CookiesBaked
      var parent = document.getElementById('paris');
      var listItem = document.createElement('li');
      listItem.textContent = `at ${time[i]} make ${cookiesBaked} cookies`;
      parent.appendChild(listItem);
    }
    document.getElementById('parisTotal').innerHTML = `Bake ${this.cookieDayTotal} cookies in total for the whole day.`;
  }
};
paris.render();


var lima = {
  minPeople: 2,
  maxPeople: 16,
  avgCookie: 4.6,
  cookieDayTotal: 0,
  render: function(){
    var time = ['6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (var i = 0; i < time.length; i++){
      var limaCustomers = Math.random() * (this.maxPeople - this.minPeople) + this.minPeople;
      var cookieNumber = limaCustomers * this.avgCookie;
      var cookiesBaked = Math.ceil(cookieNumber);
      this.cookieDayTotal = this.cookieDayTotal + cookiesBaked; // this.cookieDayTotal += CookiesBaked
      var parent = document.getElementById('lima');
      var listItem = document.createElement('li');
      listItem.textContent = `at ${time[i]} make ${cookiesBaked} cookies`;
      parent.appendChild(listItem);
    }
    document.getElementById('limaTotal').innerHTML = `Bake ${this.cookieDayTotal} cookies in total for the whole day.`;
  }
};
lima.render();