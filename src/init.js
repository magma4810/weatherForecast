import { createNewCity } from "./createNewCity.js";
import { render } from "./render.js";
import { buttonInputCity } from "./buttonInputCity.js";

export async function init(div) {
  div.className = "block";

  document.body.append(div);
  const inputCityHeader = document.createElement("header");
  const inputCity = document.createElement("input");
  inputCity.placeholder = "Enter the city";
  inputCity.className = "inputCity";

  const listCityes = document.createElement("ul");
  listCityes.className = "listCityes";

  const inputCityBlock = document.createElement("div");
  inputCityBlock.className = "inputCityBlock";

  const buttonInputCityHtml = document.createElement("button");
  buttonInputCityHtml.textContent = "Enter";
  buttonInputCityHtml.className = "buttonInputCity";
  inputCityBlock.append(inputCity);
  inputCityBlock.append(buttonInputCityHtml);

  inputCityHeader.append(inputCityBlock);

  inputCityHeader.append(listCityes);
  div.append(inputCityHeader);

  const temperatureBlockWithInfo = document.createElement("div");
  const temperatureBlockWithImg = document.createElement("div");

  const temperature = document.createElement("div");
  temperature.className = "temperature";

  temperatureBlockWithImg.append(temperature);

  const imgTemperature = document.createElement("img");
  imgTemperature.className = "imgTemperature";

  temperatureBlockWithImg.append(imgTemperature);
  temperatureBlockWithInfo.append(temperatureBlockWithImg);

  temperatureBlockWithInfo.className = "temperatureBlock";
  const weatherIn = document.createElement("div");
  weatherIn.className = "weatherIn";
  temperatureBlockWithInfo.append(weatherIn);

  div.append(temperatureBlockWithInfo);

  const informationBlock = document.createElement("div");
  informationBlock.className = "information";
  informationBlock.textContent = "information";
  div.append(informationBlock);

  if (!localStorage.getItem("cityes")) {
    const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((ip) => ip.json())
      .then((userCity) => userCity.city);
    localStorage.setItem("cityes", JSON.stringify([await userCity]));
    localStorage.setItem("lastCity", JSON.stringify(await userCity));
    render(await userCity);
  } else {
    const lastCity = localStorage.getItem("lastCity");
    render(lastCity);
  }
  let allCityes = JSON.parse(localStorage.getItem("cityes"));
  buttonInputCity();
  inputCity.addEventListener("click", () => {
    listCityes.classList.add("show");
  });

  allCityes.forEach((element) => {
    createNewCity(element);
  });
}
