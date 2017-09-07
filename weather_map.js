"use strict";
//IFIE function
// (function(){
// })();

$.get("http://api.openweathermap.org/data/2.5/forecast/?lat=29.42.42&lon=-98.49", {
    APPID: "14585416169d73d956f6321f3f0c5253",
    q: "San Antonio, TX",
    units: "imperial",
    cnt: 3
}).done(function(data){
    console.log(data);
    // WEATHER BOXES
    // temperature (max/min)

        data.forEach(function(daily, index){
            var presentWeather = "";

            var icon = data.list[index].weather[0].icon;
            console.log(icon);
            var url = "http://openweathermap.org/img/w/" + icon + ".png";
            var img = "<img class='icon' src='" + url + "'>";
            console.log(img);

            presentWeather =+

            "<h3>" + Math.round(data.list[index].main.temp_max) + "°/" + Math.round(data.list[index].main.temp_min) + "°</h3>" +
             img +
            //list for weather info
            "<ul>" +
            "<li><strong>Humidity</strong>: " + data.list[index].main.humidity + "%</li>" +
            "<li><strong>Wind</strong>: " + Math.round(data.list[index].wind.speed) + " mph</li>" +
            "<li><strong>Pressure</strong>: " + data.list[index].main.pressure + " hPa</li>" +
            "</ul>";

            $("#present").append(presentWeather);
        });

    // icon

    // clouds

    // humidity
    // wind

    //pressure

});

