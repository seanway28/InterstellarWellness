//This will bring up a journal prompt when the journalPromptBtn is clicked


//This will save the user's journal prompt to local storage
document.getElementById("journalBtn").addEventListener("click", function ()
{
    //Creates variable, entry that gets the element "journal-text"
    //The value property sets or returns the value of the value attribute of a text field.
    var entry = document.getElementById("journal-text").value;
    //localStorage["journal-text"] = entry ;
    //This sets the item in the local storage
    localStorage.setItem("journal-text", entry);
    alert("Daily Journal Entry Saved to Local Storage");
    console.log("Journal Entry Saved");
} , false);