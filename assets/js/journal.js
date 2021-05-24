

document.getElementById("save").addEventListener("click", function ()
{
    var user = document.getElementById("user").value ;
    //localStorage["user"] = user ;
    localStorage.setItem("user", user) ;
    alert("gmail id saved") ;
    console.log("gmail id saved")
} , false);