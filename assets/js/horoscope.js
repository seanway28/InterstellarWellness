
//Selects the User's Birthday from the Form
var birthdayFormEl = document.querySelector('#birthdayForm');
var formSubmitHander = function(event) {
    event.preventDefault();
    /*
    event.preventDefault() stops the browser from performing the default action the event wants it to do. 
    In the case of submitting a form, it prevents the browser from sending the form's input data to a URL, 
    as we'll handle what happens with the form input data ourselves in JavaScript.
    */
    console.log('Birthday form submitted!');
    //Grabs the value for the user's birthday
    var birthday = document.getElementById('userBirthday').value;
    console.log('birthday:', birthday);
    //const birthday = document.getElementById('userBirthday').value;
    const splitBirthday = birthday.split('/');
    console.log(splitBirthday);
    //Grabs the user's birth month
    let month = splitBirthday[0];
    console.log(month);
    //Grabs the user's birth date
    let day = splitBirthday[1];
    console.log(day);
    var monthHundred = month*100;
    console.log('monthHundred:', monthHundred);
    //This allows us to add the month*100 and day together as integers
    var sunSignNumber = parseInt(month + day);
    console.log('Date Conversion:', sunSignNumber);
    
    if (sunSignNumber <= "120"){        
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
        return "Capricorn";

        }else if (sunSignNumber <= "219") { 
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
        return "Aquarius";

        }else if (sunSignNumber <= "320") { 
            //February 19-March 20
            console.log("sunSign: Pisces");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Pisces"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=pisces&day=today',
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
        return "Pisces";

        }else if (sunSignNumber <= "420") { 
        	//March 21-April 20
            console.log("sunSign: Aries");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Aries"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=aries&day=today',
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
        return "Aries";
        	
        }else if (sunSignNumber <= "520") { 
        	//April 21-May 20    
            console.log("sunSign: Taurus");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Taurus"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Taurus&day=today',
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
        return "Taurus";

        }else if (sunSignNumber <= "621") { 
        	//May 21-June 20
            console.log("sunSign: Gemini");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Gemini"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Gemini&day=today',
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
        return "Gemini";

        }else if (sunSignNumber <= "722") { 
            //June 21-July 22
            console.log("sunSign: Cancer");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Cancer"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Cancer&day=today',
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
        return "Cancer";

        }else if (sunSignNumber <= "822") { 
        	//July 23-August 22
            console.log("sunSign: Leo");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Leo"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Leo&day=today',
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
        return "Leo";

        }else if (sunSignNumber <= "921") { 
            //August 23-September 22
            console.log("sunSign: Virgo");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Virgo"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Virgo&day=today',
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
        return "Virgo";

        }else if (sunSignNumber <= "1022") { 
            //September 23-October 22
            console.log("sunSign: Libra");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Libra"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Libra&day=today',
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
        return "Libra";

        }else if (sunSignNumber <= "1121") { 
            //October 23-November 21
            console.log("sunSign: Scorpio");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Scorpio"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Scorpio&day=today',
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
        return "Scorpio";

        }else if (sunSignNumber <= "1221") { 
            //November 22-December 21
            console.log("sunSign: Sagittarius");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Sagittarius"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Sagittarius&day=today',
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
        return "Sagittarius";

        }else{ 
            //December 22-January 19
            console.log("sunSign: Capricorn");
            var usersSignEl = document.querySelector("#usersSign");
            usersSignEl.innerHTML = "Capricorn"
                
            $.ajax({
                type:'POST',
                url:'https://aztro.sameerkumar.website?sign=Capricorn&day=today',
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
        return "Capricorn";
    }
    

}

//Event Listener for Birthday Form
birthdayFormEl.addEventListener("submit", formSubmitHander);

