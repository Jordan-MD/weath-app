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
  } catch (error) {
    clearWeatherUI();
    showError(getErrorMessage(error));
  } finally {
    hideLoading();
  }
}
