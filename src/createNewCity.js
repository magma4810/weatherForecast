import { render } from "./render";

export function createNewCity(city) {
  const listCityes = document.querySelector(".listCityes");
  const weatherIn = document.querySelector(".weatherIn");
  const newCity = document.createElement("li");
  const buttonCity = document.createElement("button");
  buttonCity.classList = "buttonCity";
  newCity.append(buttonCity);
  buttonCity.textContent = city;
  listCityes.append(newCity);
  buttonCity.addEventListener("click", () => {
    weatherIn.textContent = `Погода в "${buttonCity.textContent}"`;
    listCityes.classList.remove("show");
    render(buttonCity.textContent);
  });
}
