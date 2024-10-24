const apiKey = 'f60c73dc7208aae055cbc7122d8a75a1'; 
const lat = '-17.8313'; // Latitude for Harare, Zimbabwe
const lon = '31.0534'; // Longitude for Harare, Zimbabwe
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayCurrentWeather(data);
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayCurrentWeather(data) {
    const temp = data.current.temp;
    const condition = data.current.weather[0].description;
    const icon = `http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;

    document.getElementById('current-temperature').textContent = `Temperature: ${temp}°C`;
    document.getElementById('current-condition').textContent = `Condition: ${condition}`;
    document.getElementById('weather-icon').src = icon;
}

function displayForecast(data) {
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = ''; // Clear previous forecast

    // Display the next three days' temperature forecast
    for (let i = 1; i <= 3; i++) {
        const forecastItem = document.createElement('li');
        const date = new Date(data.daily[i].dt * 1000);
        const temp = data.daily[i].temp.day;

        forecastItem.textContent = `${date.toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}: ${temp}°C`;
        forecastList.appendChild(forecastItem);
    }
}

getWeather();