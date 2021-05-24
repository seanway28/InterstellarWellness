//Creates our variables to connect the Javascript with the HTML

//This is what will allow the quote to populate in the paragraph tag
const quote = document.querySelector("#inspirationQuote");
//This is what will allow the author to populate in the paragraph tag
const quoteAuthor = document.querySelector("#inspirationQuoteAuthor");
//This is the link to the quote button
const quoteBtn = document.querySelector("#quoteBtn");

//Adds Event Listener, when the user clicks the "Get New Quote", then a new quote is generated
quoteBtn.addEventListener("click", getQuote);

//This is the function that will pull the quote and the author
function getQuote(){
    //Using the Quotable API
    fetch("https://quotable.io/random")
    // .then(res => console.log(res))
    // .then(res => console.log(res.json()))
    .then(res => res.json())
    .then(data => {
        //This will put the quote on the page in the id="inspirationQuote" p tag in the inspiration-quote-container
        quote.innerHTML = data.content;
        
        //This will put the quote on the page in the id="inspirationQuote" p tag in the inspiration-quote-container
        quoteAuthor.innerHTML = data.author;
    })
}

