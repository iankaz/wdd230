const apiKey = 'f60c73dc7208aae055cbc7122d8a75a1';
const city = 'Harare';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const temp = data.main.temp;
    const condition = data.weather[0].description;
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
    document.getElementById('condition').textContent = `Condition: ${condition}`;
    document.getElementById('weather-icon').src = icon;
}

getWeather();