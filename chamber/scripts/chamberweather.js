const apiKey = 'f60c73dc7208aae055cbc7122d8a75a1';
const city = 'Harare';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const temp = data.main.temp;
    const condition = data.weather[0].description;
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('current-temperature').textContent = `Temperature: ${temp}°C`;
    document.getElementById('current-condition').textContent = `Condition: ${condition}`;
    document.getElementById('weather-icon').src = icon;
}

getWeather();

const lat = -17.8292; // Latitude for Harare
const lon = 31.0522; // Longitude for Harare
const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;

async function getForecast() {
    try {
        console.log("Forecast URL:", forecastUrl);
        const response = await fetch(forecastUrl);
        const data = await response.json();
        console.log("Full API Response:", data);
        if (data && data.daily) {
            console.log("Daily forecast data:", data.daily);
            displayForecast(data);
        } else {
            console.error("No 'daily' data found in response");
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}


function displayForecast(data) {
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = ''; // Clear existing forecast
    for (let i = 1; i <= 3; i++) {
        const day = data.daily[i];
        const listItem = document.createElement('li');
        listItem.textContent = `Day ${i}: ${day.temp.day}°C, ${day.weather[0].description}`;
        forecastList.appendChild(listItem);
    }
}

getForecast();
