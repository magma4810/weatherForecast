import { createNewCity } from "./createNewCity.js";
import { render } from "./render.js";
import { buttonInputCity } from "./buttonInputCity.js";

export async function init(div) {
  div.className = "block";

  document.body.append(div);
  const inputCityHeader = document.createElement("header");

  inputCityHeader.innerHTML = `
  <div class="inputCityBlock">
  <input placeholder="Enter the city" class="inputCity">
  <button class="buttonInputCity">Enter</button>
  </div>
  <ul class="listCityes">
  </ul>`;
  div.append(inputCityHeader);

  const temperatureBlockWithInfo = document.createElement("div");
  temperatureBlockWithInfo.className = "temperatureBlock";

  temperatureBlockWithInfo.innerHTML = `
  <div class="temperatureBlockWithImg">
  <div class="temperature"></div>
  <img class="imgTemperature">
    </div>
    <div class="weatherIn"></div>`;
  div.append(temperatureBlockWithInfo);

  const informationBlock = document.createElement("div");
  informationBlock.className = "informationBlock";
  div.append(informationBlock);

  if (!localStorage.getItem("cityes")) {
    const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((ip) => ip.json())
      .then((userCity) => userCity.city);
    localStorage.setItem("cityes", JSON.stringify([await userCity]));
    localStorage.setItem("lastCity", JSON.stringify(await userCity));
    render(await userCity);
  } else {
    const lastCity = JSON.parse(localStorage.getItem("lastCity"));
    render(lastCity);
  }
  let allCityes = JSON.parse(localStorage.getItem("cityes"));
  buttonInputCity();
  document.querySelector(".inputCity").addEventListener("click", () => {
    document.querySelector(".listCityes").classList.add("show");
  });

  allCityes.forEach((element) => {
    createNewCity(element);
  });
}
