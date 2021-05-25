// var formEL = document.querySelector('#my-form');
// var formSubmitHander = function(event) {
//     event.preventDefault();
//     /*
//     event.preventDefault() stops the browser from performing the default action the event wants it to do. 
//     In the case of submitting a form, it prevents the browser from sending the form's input data to a URL, 
//     as we'll handle what happens with the form input data ourselves in JavaScript.
//     */
//     console.log('form submitted!');
//     var name = document.getElementById('name').value;
//     console.log('name:', name);
// }
// formEL.addEventListener("submit", formSubmitHander);

var monthFormEL = document.querySelector('#birthdayMonthForm');
var formSubmitHander = function(event) {
    event.preventDefault();
    /*
    event.preventDefault() stops the browser from performing the default action the event wants it to do. 
    In the case of submitting a form, it prevents the browser from sending the form's input data to a URL, 
    as we'll handle what happens with the form input data ourselves in JavaScript.
    */
    console.log('Month form submitted!');
    var birthMonth = document.getElementById('month').value;
    console.log('month:', birthMonth);
}
monthFormEL.addEventListener("submit", formSubmitHander);

var dayFormEl = document.querySelector('#birthdayDayForm');
var formSubmitHander = function(event) {
    event.preventDefault();
    /*
    event.preventDefault() stops the browser from performing the default action the event wants it to do. 
    In the case of submitting a form, it prevents the browser from sending the form's input data to a URL, 
    as we'll handle what happens with the form input data ourselves in JavaScript.
    */
    console.log('Day form submitted!');
    var birthDay = document.getElementById('day').value;
    console.log('day:', birthDay);
}
dayFormEl.addEventListener("submit", formSubmitHander);


function getSunSign (){
	var bdayMonth = document.getElementById('month').value;
    var bdayDay = document.getElementById('day').value; 
    var sunSign = bdayMonth*100 + bdayDay;
    console.log(sunSign);
	if (sunSign <= 120){        
		return "Capricorn";
        //January 20
	}else if (sunSign <= 219) { 
		return "Aquarius";
        //January 20-February 18
	}else if (sunSign <= 320) { 
		return "Pisces";
        //February 19-March 20
	}else if (sunSign <= 420) { 
		return "Aries";
        //March 21-April 19
	}else if (sunSign <= 520) { 
		return "Taurus";
        //April 20-May 20
	}else if (sunSign <= 621) { 
		return "Gemini";
        //May 21-June 20
	}else if (sunSign <= 722) { 
		return "Cancer";
        //June 21-July 22
	}else if (sunSign <= 822) { 
		return "Leo";
        //July 23-August 22
	}else if (sunSign <= 921) { 
		return "Virgo";
        //August 23-September 22
	}else if (sunSign <= 1022) { 
		return "Libra";
        //September 23-October 22
	}else if (sunSign <= 1121) { 
		return "Scorpio";
        //October 23-November 21
	}else if (sunSign <= 1221) { 
		return "Sagittarius";
        //November 22-December 21
	}else{ 
		return "Capricorn";
        //December 22-January 19
	}
}

//document.getElementById("userSign").innerHTML = userSign; 

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today',
    success:function(data){
    console.log(data);
    
    //I coded all the features, all you would need to do is add an id if you decided you wanted to utilize some of the other features. 

    //This is the color for the user's sign
    // var displaycolorEl = document.querySelector("#");
    // displaycolorEl.innerHTML = data.color
    // console.log('color:', data.color);

    //Sign that the user is most compatible with
    var displayCompatEl = document.querySelector("#compatibilitySign");
    displayCompatEl.innerHTML = data.compatibility
    //console.log('sign compatibility:', data.compatibility);
    
    //THIS IS THE DAILY HOROSCOPE
    var displayHoroscopeEl = document.querySelector("#todaysHoroscope");
    displayHoroscopeEl.innerHTML = data.description
    //console.log('daily horoscope:', data.description);

    //This the lucky number of the day
    // var displayNumberEl = document.querySelector("#")
    // displayNumberEl.innerHTML = data.lucky_number
    // console.log('lucky number of the day:', data.lucky_number);

    //This is the user's lucky time of the day
    var displayTimeEl = document.querySelector("#luckyTime");
    displayTimeEl.innerHTML = data.lucky_time
    //console.log('lucky time of the day:', data.lucky_time); 
    }
     })



