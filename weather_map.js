"use strict";
//IFIE function
// (function(){
// })();


var callWeather = function () {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "14585416169d73d956f6321f3f0c5253",
        lat: $("#lat-input").val(),
        lon: $("#lon-input").val(),
        units: "imperial",
        cnt: 3
    }).done(function (data) {
        console.log(data);
        console.log($("#lat-input").val());
        console.log($("#lon-input").val());
        var weatherArray = ["#present", "#one-day", "#two-day"];
        var weather = "";
        var j = 0;

        // WEATHER BOXES
        (data.list).forEach(function (daily) {
            var icon = daily.weather[0].icon;
            console.log(icon);
            var url = "http://openweathermap.org/img/w/" + icon + ".png";
            var img = "<img class='icon' src='" + url + "'>";
            console.log(img);

            weather =

                "<h3>" + Math.round(daily.main.temp_max) + "°/" + Math.round(daily.main.temp_min) + "°</h3>" +
                img +
                //list for weather info
                "<ul>" +
                "<li><strong>Humidity</strong>: " + daily.main.humidity + "%</li>" +
                "<li><strong>Wind</strong>: " + Math.round(daily.wind.speed) + " mph</li>" +
                "<li><strong>Pressure</strong>: " + daily.main.pressure + " hPa</li>" +
                "</ul>";

            $(weatherArray[j]).append(weather);
            console.log(weatherArray[j]);
            j++;

            });

        });

    };

    $("#weather-submit").click(callWeather);

    var mapOptions = {

        zoom: 5,

        center: {
            lat: 29.42,
            lng: -98.49
        }
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var marker = new google.maps.Marker({
    position: {
        lat: 29.42,
        lng: -98.49
    },
    map: map,
    draggable:true,
    title:"Drag me!"
    });
