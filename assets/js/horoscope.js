//Selects the User's Birthday Month
var birthdayFormEl = document.querySelector('#birthdayForm');
var formSubmitHander = function(event) {
    event.preventDefault();
    /*
    event.preventDefault() stops the browser from performing the default action the event wants it to do. 
    In the case of submitting a form, it prevents the browser from sending the form's input data to a URL, 
    as we'll handle what happens with the form input data ourselves in JavaScript.
    */
    console.log('Birthday form submitted!');
    //Grabs the value for the user's birth month
    var birthday = document.getElementById('userBirthday').value;
    console.log('birthday:', birthday);
    //const birthday = document.getElementById('userBirthday').value;
    const splitBirthday = birthday.split('/');
    console.log(splitBirthday);
    let month = splitBirthday[0];
    console.log(month);
    let day = splitBirthday[1];
    console.log(day);
    var monthHundred = month*100;
    console.log('monthHundred:', monthHundred);
    var sunSignNumber = month + day;
    console.log('Date Conversion:', sunSignNumber);

    if (sunSignNumber <= 120){        
        return "Capricorn";
        //January 20
        console.log("sunSign: Capricorn");
        var usersSignEl = document.querySelector("#usersSign");
        usersSignEl.innerHTML = "Capricorn"
                
        $.ajax({
            type:'POST',
            url:'https://aztro.sameerkumar.website?sign=capricorn&day=today',
            success:function(data){
            console.log("Fetch Data:", data);
                    
            //Sign that the user is most compatible with
            var displayCompatEl = document.querySelector("#compatibilitySign");
            displayCompatEl.innerHTML = data.compatibility
            //console.log('sign compatibility:', data.compatibility);
                    
            //THIS IS THE DAILY HOROSCOPE
            var displayHoroscopeEl = document.querySelector("#todaysHoroscope");
            displayHoroscopeEl.innerHTML = data.description
            //console.log('daily horoscope:', data.description);
                
            //This is the user's lucky time of the day
            var displayTimeEl = document.querySelector("#luckyTime");
            displayTimeEl.innerHTML = data.lucky_time
            //console.log('lucky time of the day:', data.lucky_time); 
            }
        })

        }else if (sunSignNumber <= 219) { 
            return "Aquarius";
            //January 20-February 18
            console.log("sunSign: Aquarius");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Aquarius"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=aquarius&day=today',
                success:function(data){
                console.log(data);
                    
                //Sign that the user is most compatible with
                var displayCompatEl = document.querySelector("#compatibilitySign");
                displayCompatEl.innerHTML = data.compatibility
                //console.log('sign compatibility:', data.compatibility);
                    
                //THIS IS THE DAILY HOROSCOPE
                var displayHoroscopeEl = document.querySelector("#todaysHoroscope");
                displayHoroscopeEl.innerHTML = data.description
                //console.log('daily horoscope:', data.description);
                
                //This is the user's lucky time of the day
                var displayTimeEl = document.querySelector("#luckyTime");
                displayTimeEl.innerHTML = data.lucky_time
                //console.log('lucky time of the day:', data.lucky_time); 
            }
        })

        	}else if (sunSignNumber <= 320) { 
        		return "Pisces";
                console.log("sunSign: Pisces");
                //February 19-March 20
        	}else if (sunSignNumber <= 420) { 
        		return "Aries";
                console.log("sunSign: Aries");
                //March 21-April 20
        	}else if (sunSignNumber <= 520) { 
        		return "Taurus";
                console.log("sunSign: Taurus");
                //April 21-May 20
        	}else if (sunSignNumber <= 621) { 
        		return "Gemini";
                console.log("sunSign: Gemini");
                //May 21-June 20
        	}else if (sunSignNumber <= 722) { 
        		return "Cancer";
                console.log("sunSign: Cancer");
                //June 21-July 22
        	}else if (sunSignNumber <= 822) { 
        		return "Leo";
                console.log("sunSign: Leo");
                //July 23-August 22
        	}else if (sunSignNumber <= 921) { 
        		return "Virgo";
                console.log("sunSign: Virgo");
                //August 23-September 22
        	}else if (sunSignNumber <= 1022) { 
        		return "Libra";
                //September 23-October 22
        	}else if (sunSignNumber <= 1121) { 
        		return "Scorpio";
                console.log("sunSign: Scorpio");
                //October 23-November 21
        	}else if (sunSignNumber <= 1221) { 
        		return "Sagittarius";
                console.log("sunSign: Sagittarius");
                //November 22-December 21
        	}else{ 
        		return "Capricorn";
                console.log("sunSign: Capricorn");
                //December 22-January 19
        	}
    }

//Event Listener for Month
birthdayFormEl.addEventListener("submit", formSubmitHander);
