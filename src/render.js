import { getWeather } from "./getWeather";

export async function render(city) {
  console.log(1);
  const response = await getWeather(city);
  console.log(response);
  const weather = response.main;
  // const coordinatesCity = response.coord;
  const img = response.weather[0].icon;
  const name = response.name;
  const weatherIn = document.querySelector(".weatherIn");
  const temperature = document.querySelector(".temperature");
  const imgTemperature = document.querySelector(".imgTemperature");
  weatherIn.textContent = `Погода в "${name}"`;
  temperature.textContent = `${weather.temp}˚`; //04n
  imgTemperature.src = `https://openweathermap.org/img/wn/${img}@2x.png>`;
}
