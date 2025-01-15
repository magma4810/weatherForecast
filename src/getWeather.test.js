import { getWeather } from "./getWeather"; // замените на путь к вашей функции
// Импортируем jest-fetch-mock для имитации fetch
import fetchMock from "jest-fetch-mock";
beforeEach(() => {
  fetchMock.enableMocks();
  window.alert = () => {};
  window.alert = jest.fn();
});
afterEach(() => {
  fetchMock.resetMocks();
});
afterAll(() => {
  window.alert.mockRestore();
});
describe("GetWeather", () => {
  test("success fetch", async () => {
    const mockResponse = {
      main: { temp: 20 },
      weather: [{ description: "ясно" }],
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));
    const result = await getWeather("Москва");
    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "https://api.openweathermap.org/data/2.5/weather",
      ),
    );
  });
  test("city not found", async () => {
    fetchMock.mockResponseOnce("", { status: 404 });
    const result = await getWeather("afdsd");
    expect(result).toBeNull();
    expect(window.alert).toHaveBeenCalledWith("Город не найден");
  });
  test("other errors", async () => {
    fetchMock.mockResponseOnce("", { status: 500 });
    const result = await getWeather("Москва");
    expect(result).toBeNull();
    expect(window.alert).toHaveBeenCalledWith(
      "Произошла ошибка при получении данных",
    );
  });
});
