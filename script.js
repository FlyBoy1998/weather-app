import apiKey from "./apiKey.js";
const input = document.getElementById('location-input');
const btn = document.getElementById('search-btn');
const degrees = document.querySelector('.degrees');
const cityName= document.querySelector('.location');
const maxTemp = document.querySelector('.temp-max');
const minTemp = document.querySelector('.temp-min');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

function displayWeather(event) {
    event.preventDefault();
    const cityValue = input.value;
    console.log(cityValue);
    getWeatherData(cityValue);
}

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        degrees.textContent = data.main.temp;
        cityName.textContent = data.name;
        maxTemp.textContent = data.main.temp_max;
        minTemp.textContent = data.main.temp_min;
        feelsLike.innerHTML = `${data.main.feels_like}&deg;C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        windSpeed.innerHTML = `${data.wind.speed} m/s`;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


btn.addEventListener('click', displayWeather);