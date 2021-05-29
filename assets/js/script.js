// Using moment.js to fetch current time and format it to MM/DD
var now = moment().format("MM/DD");
// Creating variable by selecting the id todaysDate
var dateHolderEl = document.querySelector("#todaysDate");
// Setting the class todays-date to be applied to the dateHolderEl variable
dateHolderEl.setAttribute("class", "todays-date");
// Populating the variable with the current time variable
dateHolderEl.innerHTML =  now ;


//This will save the user's journal prompt to local storage
document.getElementById("journalBtn").addEventListener("click", function ()
{
    //Creates variable, entry that gets the element "journal-text"
    //The value property sets or returns the value of the value attribute of a text field.
    var entry = document.getElementById("journal-text").value;
    console.log(entry);
    localStorage["entry"] = entry;
    //This sets the item in the local storage
    localStorage.setItem("journal-text", entry);
//     alert("Daily Journal Entry Saved to Local Storage");
//     console.log("Journal Entry Saved");
})
var field = document.getElementById("journal-text");
field.innerHTML = localStorage.getItem("journal-text");