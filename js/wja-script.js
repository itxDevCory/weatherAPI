$(document).ready(function() {
  $("#search-button").on("click", function() {
    var searchValue = $("#search-value").val();

    $("#search-value").val("");                                     
searchWeather(searchValue);
  });


  $(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });

  function makeRow(text) {
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
  }

 function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial",
      dataType: "json",
      success: function(data) {
        // create history link for this search
        if (history.indexOf(searchValue) === -1) {
          history.push(searchValue);
          window.localStorage.setItem("history", JSON.stringify(history));
    
          makeRow(searchValue);
        }
        
        // clear any old content
        $("#today").empty();

        // create html content for current weather
        var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
        var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
        var cardBody = $("<div>").addClass("card-body");
        var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

        // merge and add to page
        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

        // call follow-up api endpoints
        getForecast(searchValue);
        getUVIndex(data.coord.lat, data.coord.lon);
      }
    });
  }
  


function makeRow(text) {
var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
    }

    function searchWeather(searchValue) {
    $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=a85ae77cdf014dc6b4ed9a09b04bdb1d"
function searchByCity(City) {


    var City = $("#userCity").val().trim();
    var City = "Phoenix"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + City + "&units=imperial&appid=a85ae77cdf014dc6b4ed9a09b04bdb1d";
    var queryURLforcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=a85ae77cdf014dc6b4ed9a09b04bdb1d";
   
    $.ajax({
        url: queryURL,
         method: "GET"
     }).then(function(response) {
         console.log(response);
         console.log(queryURL);
         //empty divs and ids that we need to dump content into.....
        $("#current").empty();
       var mainDate = moment().format('L');

var key="&APPID=a85ae77cdf014dc6b4ed9a09b04bdb1d";
var City = "Philadelphia"; // My test case was "London"
var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + City + "&units=imperial&appid=a85ae77cdf014dc6b4ed9a09b04bdb1d;";

$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: City,
    appid: key,
    units: "metric",
    cnt: "10"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.City.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += val.main.temp + "&degC" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "</p>" // Closing paragraph tag
    });
    $("#showWeatherForcast").html(wf);
  }
});

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
    },




functionrecentSearches(City) {

    var City = $("#userCity").val().trim();
    if (!City) {
        alert("Please enter a City")
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
 clear input box
    $("#search-value").val("");

    searchWeather(searchValue);
  });

  $(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });

  function makeRow(text) {
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
  }

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial",
      dataType: "json",
      success: function(data) {
        // create history link for this search
        if (history.indexOf(searchValue) === -1) {
          history.push(searchValue);
          window.localStorage.setItem("history", JSON.stringify(history));
    
          makeRow(searchValue);
        }
        
        // empty previous content
        $("#today").empty();

     
        var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
        var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
        var cardBody = $("<div>").addClass("card-body");
        var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

        // merge and add to page
        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

        // call follow-up api endpoints
        getForecast(searchValue);
        getUVIndex(data.coord.lat, data.coord.lon);
      }
    });
  }
  // lines 247-274 are practically copy and paste because I couldnt work out the primary function getForecast
  function getForecast(searchValue) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=9132f5abb6571fe0a8707732122d166a&units=imperial",
      dataType: "json",
      success: function(data) {
        // overwrite any existing content with title and empty row
        $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");

        // loop over all forecasts (by 3-hour increments)
        for (var i = 0; i < data.list.length; i++) {
          // only look at forecasts around 3:00pm
          if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
            // create html elements for a bootstrap card
            var col = $("<div>").addClass("col-md-2");
            var card = $("<div>").addClass("card bg-primary text-white");
            var body = $("<div>").addClass("card-body p-2");

            var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());

            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");

            var p1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp_max + " °F");
            var p2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");

            // merge together and put on page
            col.append(card.append(body.append(title, img, p1, p2)));
            $("#forecast .row").append(col);
          }
        }
      }
    });
  }

  <!-- function getUVIndex(lat, lon) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/uvi?appid=7ba67ac190f85fdba2e2dc6b9d32e93c&lat=" + lat + "&lon=" + lon,
      dataType: "json",
      success: function(data) {
        var uv = $("<p>").text("UV Index: ");
       var btn = $("<span>").addClass("btn btn-sm").text(data.value);
        
       // change color depending on uv value
        if (data.value < 3) {
          btn.addClass("btn-success");
        }
        else if (data.value < 7) {
          btn.addClass("btn-warning");
        }
        else {
          btn.addClass("btn-danger");
        }
        
        $("#today .card-body").append(uv.append(btn));
      }
    });
  }

  // get current history, if any
  var history = JSON.parse(window.localStorage.getItem("history")) || [];

  if (history.length > 0) {
    searchWeather(history[history.length-1]);
  }

  for (var i = 0; i < history.length; i++) {
    makeRow(history[i]);
  }
});
