$(document).ready(function() {

    $("#submitForecast").click(function() {
        return getForecast();
    });

});

function getForecast() {
    var city = $("#city").val();
    var fiveDay = $("#fiveDay").val();

    if (city != '') {

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast,
            1 day = "dc5c58089568ea1160335da1f71da02f",
            dataType: "json",
            type: "GET",
            data: {
                q: city,
                appid: key,
                units: 'metric',
                cnt: '10'
            },
            success: function(data) {
                var wf = '';
                $.each(data, function(index, val) {
                    wf += '<p><b>' + data.city.name + '</b><img src=http://openweathermap.org/img/w/' + data.list[0].weather.icon + '.png></p>' + data.list[0].main.temp + '&deg;C' + ' | ' + data.list[0].weather.main + ", " + data.list[0].weather.description
                });
                $("#showWeatherForcast").html(wf);
            }
        });



        var table = '';

        var header = '<h2 style="font-weight:bold; font-size:30px; margin-top:20px;">Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>'

        for (var i = 0; i < data.list.length; i++) {
            table += "<tr>";

            table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>";
            table += "<td>" + data.list[i].weather[0].main + "</td>";
            table += "<td>" + data.list[i].weather[0].description + "</td>";
            table += "<td>" + data.list[i].temp.morn + "&deg;C</td>";
            table += "<td>" + data.list[i].temp.night + "&deg;C</td>";
            table += "<td>" + data.list[i].temp.min + "&deg;C</td>";
            table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
            table += "<td>" + data.list[i].pressure + "hpa</td>";
            table += "<td>" + data.list[i].humidity + "%</td>";
            table += "<td>" + data.list[i].speed + "m/s</td>";
            table += "<td>" + data.list[i].uv + "&uv;</td>";

            table += "</tr>";
        }

        $("#forecastWeather").html(table);
        $("#header").html(header);

        $("#city").val('');
        $("#five day").val('')

    }


});




}©
