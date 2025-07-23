var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let hotweather = ["Sunny", "Partly Sunny", "Partly Cloudy"];
let coldweather = ["Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

let maxTemp = 48;
let minTemp = 0;

generateWeather();

function chooseWeatherType(tempToday) {
    if (tempToday < 18) {
        return coldweather;
    } else {
        return hotweather;
    }
}

function generateWeather() {
    for (let i = 0; i < days.length; i++) {
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        
        let possibleWeather = chooseWeatherType(tempToday);
        let weatherToday = possibleWeather[Math.floor(Math.random() * possibleWeather.length)];

        document.getElementById("5DayWeather").innerHTML += 
            `<div id="${days[i]}" class="${weatherToday}">
                <b>Forecast for ${days[i]}:</b><br><br>
                ${weatherToday} and ${tempToday}°C
            </div><br>`;
    }
}
