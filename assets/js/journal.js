//This will bring up a journal prompt when the journalPromptBtn is clicked


//This will save the user's journal prompt to local storage
// document.getElementById("journalBtn").addEventListener("click", function ()
// {
//     //Creates variable, entry that gets the element "journal-text"
//     //The value property sets or returns the value of the value attribute of a text field.
//     var entry = document.getElementById("journal-text").value;
//     console.log(entry);
//     localStorage["entry"] = entry;
//     //This sets the item in the local storage
//     localStorage.setItem("journal-text", entry);
// //     alert("Daily Journal Entry Saved to Local Storage");
// //     console.log("Journal Entry Saved");
// } , false);


// $(document).ready(function(){
//     //Click listener for the save buttons
//     $(".journalBtn").on("click", function () {
//         console.log($(this).siblings("journal-text"));
//         var userInput = $(this).siblings("journal-text").val().trim();
//         console.log(userInput);
//         var timeSlot = $(this).prev().attr("time");
//         console.log(timeSlot);

//         //Saves to local storage
//         localStorage.setItem(timeSlot, JSON.stringify(userInput));

//         //localStorage.setItem(timeSlot, userInput)
//     })

//     //This will load any of the saved data that was stored in local storage and display it for the user on the page
//     $("#9").val(localStorage.getItem("9"));
//     $("#10").val(localStorage.getItem("10"));
//     $("#11").val(localStorage.getItem("11"));
//     $("#12").val(localStorage.getItem("12"));
//     $("#13").val(localStorage.getItem("13"));
//     $("#14").val(localStorage.getItem("14"));
//     $("#15").val(localStorage.getItem("15"));
//     $("#16").val(localStorage.getItem("16"));
//     $("#17").val(localStorage.getItem("17"));

// })