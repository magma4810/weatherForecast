import { render } from "./render";
import { getWeather } from "./getWeather";

jest.mock("./getWeather", () => ({
  getWeather: jest.fn().mockReturnValue({
    main: {
      temp: "36.6",
      feels_like: "-52",
      temp_min: "-1",
      temp_max: "+1",
    },
    weather: [{ icon: "11D" }],
    name: "Moscow",
    wind: {
      speed: 777,
    },
  }),
}));

describe("test for render", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="weatherIn"></div>
        <div class="temperature"></div>
        <div class="imgTemperature"></div>
        <div class="informationBlock"></div>`;
    render("Moscow");
  });
  it("get weather call", () => {
    expect(getWeather).toHaveBeenCalledTimes(1);
  });
  it("change text", () => {
    expect(document.body.innerHTML)
      .toBe(`<div class="weatherIn">Погода в "Moscow"</div>
        <div class="temperature">36.6˚</div>
        <div class="imgTemperature"></div>
        <div class="informationBlock"><div class="info">feels like : -52</div>
    <div class="info">temp min : -1</div>
    <div class="info">temp max : +1</div>
    <div class="info">wind speed : 777 km/h</div></div>`);
  });
  it("return null", async () => {
    getWeather.mockReturnValueOnce(null);
    const result = await render("Moscow");
    expect(result).toBeNull();
  });
});
