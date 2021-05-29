
$(document).ready(function(){
    //Click listener for the save buttons
    $(".journalBtn").on("click", function () {
        console.log($(this)("journal-text"));
        var userInput = $(this)("journal-text").val().trim();
        console.log(userInput);

        //Saves to local storage
        localStorage.setItem(JSON.stringify(userInput));

        //localStorage.setItem(timeSlot, userInput)
    })

    //This will load any of the saved data that was stored in local storage and display it for the user on the page
$("#journal-text").val(localStorage.getItem("journal-text"));
})