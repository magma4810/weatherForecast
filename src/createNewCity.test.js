import { createNewCity } from "./createNewCity";
import { render } from "./render";

jest.mock("./render", () => ({
  render: jest.fn(),
}));

describe("createNewCity", () => {
  beforeEach(() => {
    document.body.innerHTML = `<ul class='listCityes show'></ul>
        <div class='weatherIn'></div>`;
    createNewCity("Moscow");
    window.alert = () => {};
  });

  it("create buttonCity", () => {
    const buttonCity = document.querySelector(".buttonCity");
    expect(buttonCity).toBeTruthy();
    expect(buttonCity.className).toBe("buttonCity");
  });
  it("new city append", () => {
    const listCityes = document.querySelector(".listCityes");
    expect(listCityes.innerHTML).toBe(
      `<li><button class="buttonCity">Moscow</button></li>`,
    );
  });
  it("change weather", () => {
    const weatherIn = document.querySelector(".weatherIn");
    const listCityes = document.querySelector(".listCityes");
    const buttonCity = document.querySelector(".buttonCity");
    buttonCity.click();
    expect(weatherIn.innerHTML).toBe(`Погода в "${buttonCity.textContent}"`);
    expect(listCityes.className).toBe("listCityes");
  });
  it("render call", () => {
    const buttonCity = document.querySelector(".buttonCity");
    buttonCity.click();
    expect(render).toHaveBeenCalledTimes(1);
  });
});
