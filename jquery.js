$(document).ready(function(){
    $('form').submit(function(){
        var base_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var api_KEY = '&&appid=08fa973dc2e402eea93b527214655a2e';
        var input = $('input[name="weather-input"]').val();
        var url = base_URL+input+api_KEY;
        $.get(url, function(value){
            var html = "";
            html += "<h1>" + value['name'] + "</h1>";
            html += "<p>Temperature: " + value['main'].temp + "</p>";
            $('.content').html(html);
        }, 'json')
        return false;
    })
});
