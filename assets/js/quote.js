//Create a variable to link to the inspirational quote div in HTML
var inspirationQuote = document.querySelector("#inspirationQuote");

var getQuoteInfo = function(event) {
    fetch ("https://zenquotes.io/api/today")
    .then(function(response) {
        console.log(response);
    })
}