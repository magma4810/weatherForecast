import { render } from "./render";

export function createNewCity(cityes) {
  const listCityes = document.querySelector(".listCityes");
  const newCity = document.createElement("li");
  const buttonCity = document.createElement("button");

  buttonCity.classList = "buttonCity";
  buttonCity.textContent = "{{CITY}}"; // Временно оставим плейсхолдер
  newCity.append(buttonCity);
  listCityes.append(newCity);
  console.log(listCityes);
  // Получаем HTML с замененными городами
  const populatedHTML = template(`${listCityes.outerHTML}`, cityes);

  // Обновляем HTML списка
  listCityes.outerHTML = populatedHTML;

  // Находим кнопку после обновления DOM
  const updatedButtonCity = listCityes.querySelector(".buttonCity");
  updatedButtonCity.addEventListener("click", () => {
    listCityes.classList.remove("show");
    render(updatedButtonCity.textContent); // Теперь используем новый кнопочный элемент
  });
}

export function template(tpl, data) {
  console.log(tpl);
  console.log(data);

  // Заменяем все вхождения {{CITY}} на города из массива data
  return tpl.replace(/{{CITY}}/g, () => {
    // Проверяем, есть ли ещё города в массиве
    for (let index = 0; index < data.CITY.length; index++) {
      return data.CITY[index]; // Возвращаем текущий город и увеличиваем индекс
    }
    return "{{CITY}}"; // Если городов больше нет, возвращаем плейсхолдер
  });
}
// Заменяем все вхождения {{CITY}} на города из data
// tpl = tpl.replace(/{{CITY}}/g, data.CITY); // Предполагается, что `cityName` это ключ в `data` с названием города.

// const pattern = /\{\{(\w+)}}/gm;
// tpl = tpl.replace(pattern, (match, key) => {
//   if (key in data) {
//     return data[key];
//   }
//   return "";
// });
