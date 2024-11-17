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
    weatherIn.textContent = `Погода в "${name}"`;
    temperature.textContent = `${weather.temp}˚`;
    imgTemperature.src = `https://openweathermap.org/img/wn/${img}@2x.png`;
    return 1;
  } else {
    return null;
  }
}
