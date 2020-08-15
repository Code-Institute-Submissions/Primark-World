
/*The Coding Train Weather App--------------------------------------------/*Animated Burger--------------------------------------------https://www.youtube.com/watch?v=dIyVTjJAkLw*/*/

function setup() {
    createCanvas(400, 200);
    loadJSON(http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b34f7d230506c1eb0a2a4579ad857c6d)
    )};

function gotData(data) {
    println(data);
};

/*var weather;

var api = 'api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=b34f7d230506c1eb0a2a4579ad857c6d';
var units = '&units=metric';

var input;

    var button = select('#submit');
    button.mousePressed(weatherAsk(){
    
    input= select('#city');

function weatherAsk() {
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
}

function draw() {
    background(0);
    if (weather) {
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        ellipse(100, 100, temp, temp);
        ellipse(300, 100, humidity, humidity);
    }
}

/*