function forecast5Days() {


    var city = $("#userCity").val().trim();
    // var city = "Phoenix"
    var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9ff2356a02ea9802929dcef5b6128c26";

    $.ajax({
        url: queryURLForecast,
        method: "GET"


    }).then(function(response) {



        //this variable will help me to assign the new values to the p tags I have in the HTML
        var forecastCount = 1;

        //the forecast it's updated every 3 hours but I want to know the forecast every 24 hour
        //in every loop will check if the time it's equal to 00 which means it's another day.

        for (var i = 0; i < response.list.length; i++) {

            //changing the format of the time to two digits //Midnight it's 00 the whole rest it's in militar time zone. 18,19,20,21,22 ,23,00
            var checkTime = moment(response.list[i].dt_txt).format("HH");


            //if time is equal to 00 a paragraph with the temperature , humidity and  icon //
            if (checkTime == 00) {

                $("#date" + forecastCount).text(moment(response.list[i].dt_txt).format("l"));
                $("#temperature" + forecastCount).text("Temperature " + response.list[i].main.temp.toFixed(0) + "°F"); //to fixed will return only 2 digits in the temp
                $("#wicon" + forecastCount).attr("src", "https://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png")
                $("#humidity" + forecastCount).text("Humidity " + response.list[i].main.humidity + "%");
                forecastCount++
            }

        }
    })

}


function recentSearches(cityName) {

    var cityName = $("#userCity").val().trim();
    if (!cityName) {
        alert("Please enter a city")
        return false;

    }








}





function uvIndex(lat, lon) {


    var queryURLUvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=9ff2356a02ea9802929dcef5b6128c26";

    $.ajax({
        url: queryURLUvIndex,
        method: "GET"


    }).then(function(response) {


        console.log(response.value)
        var uvIndex = response.value
        var $uvIndex = $("<p>").text("Uv Index: " + uvIndex);
        $("#currentConditions").append($uvIndex)

    })
}
