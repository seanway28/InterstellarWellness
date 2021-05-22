var now = moment().format("MM/DD");
var dateHolderEl = document.querySelector("#todaysDate");
dateHolderEl.innerHTML = '<h2>'+ now + '</h2>';
dateHolderEl.addClass("todays-date");