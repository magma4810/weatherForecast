import { getWeather } from "./getWeather";
import { start } from "./index";
import { init } from "./init";

beforeEach(() => {
  fetch.mockClear();
});

it("test start", async () => {
  fetch.mockResponseOnce(JSON.stringify({ city: "Тестовый Город" }));
  const city = await getWeather();
  const div = document.createElement("div");
  start(div);
  expect(city).toEqual("Тестовый Город");
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(init()).toHaveBeenCalled(1);
});
