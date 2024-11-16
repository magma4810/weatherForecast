import { createNewCity } from "./createNewCity.js";
import { render } from "./render.js";

export function buttonInputCity() {
  let allCityes = JSON.parse(localStorage.getItem("cityes"));
  const inputCity = document.querySelector(".inputCity");
  const listCityes = document.querySelector(".listCityes");
  const buttonInputCity = document.querySelector(".buttonInputCity");

  buttonInputCity.addEventListener("click", () => {
    const value = inputCity.value;
    if (value != "") {
      if (allCityes.length === 5) {
        listCityes.childNodes[0].remove();
        allCityes.shift();
      }
      createNewCity(value);
      allCityes.push(value);
      localStorage.setItem("cityes", JSON.stringify(allCityes));
      localStorage.setItem("lastCity", JSON.stringify(value));
      render(value);

      inputCity.value = "";
    }
    listCityes.classList.remove("show");
  });
}
