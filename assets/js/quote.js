//Creates our constants to link from the Javascript file to the HTML
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const quoteBtn = document.querySelector("#quoteBtn");

//Event Listener for when User presses "New Quote" Btn
quoteBtn.addEventListener("click", getQuote);

//Function to Get Quote
function getQuote() {
    fetch("https://quotable.io/random")
    //.then(res => console.log(res.json()))
    .then (res => res.json())
    .then(data => {
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    })
}

// //Create a variable to link to the inspirational quote div in HTML
// var inspirationQuote = document.querySelector("#inspirationQuote");


// var getQuoteInfo = function(event) {
//    console.log(event);
//     //Sets up the connection between ZenQuotes API (pulling the quote of the day)
//     fetch ("https://zenquotes.io/api/today")
//     .then(function(response) {
//         console.log(response);
//         if (response.ok) {
//             response.json().then(function(data) {
//                 console.log(data);
//                 displayQuoteInfo(data);
//             });
//         } else {
//             alert("Error, please select the Quote of the Day Button");
//             }
//     })
//     .catch(function(error) {
//         alert("Unable to connect to ZenQuotes");
//     });
// }

// inspirationQuote.addEventListener('submit', getQuoteInfo);


