export async function getWeather(city) {
  const key = "ab4639f5754271e773ed6d3ffd73f327";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=
              ${city}&appid=${key}`,
  ).then((response) => response.json());
  return response;
}
