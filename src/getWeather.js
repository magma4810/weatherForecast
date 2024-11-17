export async function getWeather(city) {
  const key = "ab4639f5754271e773ed6d3ffd73f327";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`,
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Город не найден");
      }
      throw new Error("Произошла ошибка при получении данных");
    }
    return await response.json();
  } catch (e) {
    alert(e.message);
    return null;
  }
}
