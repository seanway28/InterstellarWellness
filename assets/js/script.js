var now = moment().format("MM/DD");
var dateHolderEl = document.querySelector("#todaysDate");
dateHolderEl.setAttribute("class", "todays-date");
dateHolderEl.innerHTML =  now ;
// dateHolderEl.addClass("todays-date");