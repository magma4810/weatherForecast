import "./style.css";

async function start(div) {
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

  const buttonInputCity = document.createElement("button");
  buttonInputCity.textContent = "Enter";
  buttonInputCity.className = "buttonInputCity";
  inputCityBlock.append(inputCity);
  inputCityBlock.append(buttonInputCity);

  inputCityHeader.append(inputCityBlock);

  inputCityHeader.append(listCityes);
  div.append(inputCityHeader);

  const temperatureBlock = document.createElement("div");

  const temperature = document.createElement("div");
  temperature.className = "temperature";
  temperature.textContent = "22˚";

  const imgTemperature = document.createElement("img");
  imgTemperature.src = "/src/images.png";
  temperature.append(imgTemperature);

  temperatureBlock.append(temperature);
  temperatureBlock.className = "temperatureBlock";
  const weatherIn = document.createElement("div");
  temperatureBlock.append(weatherIn);

  div.append(temperatureBlock);

  const informationBlock = document.createElement("div");
  informationBlock.className = "information";
  informationBlock.textContent = "information";

  div.append(informationBlock);

  inputCity.addEventListener("click", () => {
    listCityes.classList.add("show");
  });

  if (!localStorage.getItem("cityes")) {
    const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((ip) => ip.json())
      .then((userCity) => userCity.city);
    localStorage.setItem("cityes", JSON.stringify([await userCity]));
    localStorage.setItem("lastCity", JSON.stringify(await userCity));
  }
  let allCityes = JSON.parse(localStorage.getItem("cityes"));
  const lastCity = localStorage.getItem("lastCity");
  console.log(lastCity);
  weatherIn.textContent = `Погода в ${lastCity}`;
  buttonInputCity.addEventListener("click", () => {
    if (inputCity.value != "") {
      if (allCityes.length === 5) {
        listCityes.childNodes[0].remove();
        allCityes.shift();
      }
      const newCity = document.createElement("li");
      const buttonCity = document.createElement("button");
      buttonCity.classList = "buttonCity";
      newCity.append(buttonCity);
      buttonCity.textContent = inputCity.value;
      listCityes.append(newCity);
      allCityes.push(inputCity.value);
      localStorage.setItem("cityes", JSON.stringify(allCityes));
      localStorage.setItem("lastCity", JSON.stringify(inputCity.value));
      weatherIn.textContent = `Погода в "${inputCity.value}"`;
      inputCity.value = "";
      buttonCity.addEventListener("click", () => {
        weatherIn.textContent = `Погода в "${buttonCity.textContent}"`;
        listCityes.classList.remove("show");
      });
    }
    listCityes.classList.remove("show");
  });
  allCityes.forEach((element) => {
    const newCity = document.createElement("li");
    const buttonCity = document.createElement("button");
    buttonCity.classList = "buttonCity";
    newCity.append(buttonCity);
    buttonCity.textContent = element;
    listCityes.append(newCity);
    buttonCity.addEventListener("click", () => {
      weatherIn.textContent = `Погода в "${buttonCity.textContent}"`;
      listCityes.classList.remove("show");
    });
  });

  const clearStorage = document.createElement("button");
  clearStorage.textContent = "clearStorage";
  div.append(clearStorage);
  clearStorage.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}

start(document.createElement("div"));
