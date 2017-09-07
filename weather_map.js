"use strict";
//IFIE function
// (function(){
// })();

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "14585416169d73d956f6321f3f0c5253",
    q: "San Antonio, TX",
    units: "imperial"
}).done(function(data){
    console.log(data);
    var icon = data.weather[0].icon;
    console.log(icon);
    var url = "http://openweathermap.org/img/w/" + icon + ".png";
    var img = "<img src='" + url + "'>";
    console.log(img);
    // WEATHER BOXES
    // temperature (max/min)
    var presentWeather =
        "<h1>" + Math.round(data.main.temp_max) + "°/" + Math.round(data.main.temp_min) + "°</h1>" +
        img +
    //list for weather info
        "<ul>" +
        "<li><strong>Humidity</strong>: " + data.main.humidity + "%</li>" +
        "<li><strong>Wind</strong>: " + Math.round(data.wind.speed) + " mph</li>" +
        "<li><strong>Pressure</strong>: " + data.main.pressure + " hPa</li>" +
        "</ul>";
    // icon

    // clouds

    // humidity
    // wind

    //pressure

    $("#present").append(presentWeather);
});

