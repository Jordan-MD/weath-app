import { fetchWeather } from "./api.js";
import {
  updateWeatherUI,
  clearWeatherUI,
  showLoading,
  hideLoading,
  showError,
  hideError,
} from "./ui.js";
import { API_KEY } from "./config.js";
import { getErrorMessage } from "./errors.js";
import { fetchForecast } from "./api.js";
import { transformForecastData } from "./forecast.js";
import { updateForecastUI } from "./ui.js";

/**
 * Gérer la recherche de ville
 * @param {Event} event
 * @param {string} city
 * @returns {Promise<void>}
 */
export async function handleSearch(event, city) {
  event.preventDefault();
  if (!city) return;

  hideError();
  showLoading();
  try {
    const weatherData = await fetchWeather(city, API_KEY);
    updateWeatherUI(weatherData);

    const forecastData = await fetchForecast(city, API_KEY);
    const transformedForecastData = transformForecastData(forecastData);
    updateForecastUI(transformedForecastData);
  } catch (error) {
    clearWeatherUI();
    showError(getErrorMessage(error));
  } finally {
    hideLoading();
  }
}
