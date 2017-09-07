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
});

