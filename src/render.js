import { getWeather } from "./getWeather";

export async function render(city) {
  const response = await getWeather(city);
  if (response) {
    const weather = response.main;
    const img = response.weather[0].icon;
    const name = response.name;
    const weatherIn = document.querySelector(".weatherIn");
    const temperature = document.querySelector(".temperature");
    const imgTemperature = document.querySelector(".imgTemperature");
    const information = document.querySelector(".informationBlock");
    weatherIn.textContent = `Погода в "${name}"`;
    temperature.textContent = `${weather.temp}˚`;
    imgTemperature.src = `https://openweathermap.org/img/wn/${img}@2x.png`;
    information.innerHTML = `<div class="info">feels like : ${weather.feels_like}</div>
    <div class="info">temp min : ${weather.temp_min}</div>
    <div class="info">temp max : ${weather.temp_max}</div>
    <div class="info">wind speed : ${response.wind.speed} km/h</div>`;
    return 1;
  } else {
    return null;
  }
}
