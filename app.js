/*
-Bootstrap??
- icons
- See what else you can do with Weather
- http://www.programmableweb.com/api/programmableweb
- Look up how to use
    - git branches
    - git tags
    
- Ideation
    - pain killers
    - vitamins (important. Live without Facebook.)
    - Design Thinking (pioneered at Stanford)

*/

// vanilla javascript --> HARD
// jquery --> less Hard
// Angular --> easier!!! curse!


/// Reactjs
/// angularjs


// jQuery thing!!!
$(document).ready(function() {
    // ajax!!! 
    $(".form").submit(function (event){
        event.preventDefault();
        var city = $("#city").val();
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city,                     {}).done(
                        function (data){
//                        console.log(data);
                        // Use it!! :-(
                        $("div.weather").append(data.weather[0].description);
                        }
        );
        
        $("h2.weather-city").text(city);
        $("#city").val("");
    
    });
    
    
    /*
    In plain javascript it is:
    fetch the tag
    var h1 = document.getElementByClassName("weather-city")[0];
    h1.addEventListener('click', function () { console.log("You got me") })
    */
    $('.weather-city').click(function (event){
        $(this).css({"color": "red"});
    });
    
    
//    $.getJSON("url", function_callback);
    // method chaining?
    // "after you are done getting the data..."
    
});