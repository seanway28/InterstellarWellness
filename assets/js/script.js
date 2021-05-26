// Using moment.js to fetch current time and format it to MM/DD
var now = moment().format("MM/DD");
// Creating variable by selecting the id todaysDate
var dateHolderEl = document.querySelector("#todaysDate");
// Setting the class todays-date to be applied to the dateHolderEl variable
dateHolderEl.setAttribute("class", "todays-date");
// Populating the variable with the current time variable
dateHolderEl.innerHTML =  now ;
