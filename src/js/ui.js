import { getWeatherIconUrl } from "./forecast.js";

const loadingElement = document.querySelector(".loading");
const searchButton = document.querySelector("#searchButton");
const errorElement = document.querySelector(".error-message");

const weatherElements = {
  location: document.querySelector(".weather-location"),
  temp: document.querySelector(".weather-temp"),
  desc: document.querySelector(".weather-desc"),
  humidity: document.querySelector(".weather-details-humidity"),
  visibility: document.querySelector(".weather-details-visibility"),
  wind: document.querySelector(".weather-details-wind"),
  icon: document.querySelector(".weather-icon"),
};

/**
 * Mettre l'UI à jour avec les données météorologiques
 * @param {Object} data
 */
export function updateWeatherUI(data) {
  weatherElements.location.textContent = `${data.name}, ${data.sys.country}`;

  weatherElements.icon.src = getWeatherIconUrl(data.weather[0].icon);

  weatherElements.temp.textContent = `${data.main.temp} °C`;

  weatherElements.desc.textContent = data.weather[0].description;

  weatherElements.humidity.textContent = `${data.main.humidity} %`;

  weatherElements.visibility.textContent = `${data.visibility / 1000} Km`;

  weatherElements.wind.textContent = `${data.wind.speed} Km/h`;
}

export function clearWeatherUI() {
  weatherElements.location.textContent = "";
  weatherElements.temp.textContent = "";
  weatherElements.desc.textContent = "";
  weatherElements.humidity.textContent = "";
  weatherElements.visibility.textContent = "";
  weatherElements.wind.textContent = "";
}

export function showLoading() {
  loadingElement.removeAttribute("hidden");
  searchButton.disabled = true;
}

export function hideLoading() {
  loadingElement.setAttribute("hidden", "");
  searchButton.disabled = false;
}

export function showError(message) {
  errorElement.textContent = message;
  errorElement.removeAttribute("hidden");
}

export function hideError() {
  errorElement.setAttribute("hidden", "");
}

/**
 * @param {Object} forecast
 * @returns {HTMLElement}
 */
function createForecastCard(forecast) {
  const cardElement = document.createElement("li");
  cardElement.classList.add(
    "weather-forecast-card",
    "bg-sky-100",
    "rounded-xl",
    "p-4",
    "text-center",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-2",
  );

  const day = document.createElement("time");
  day.textContent = forecast.day;
  day.classList.add("weather-forecast-day", "font-bold");

  const icon = document.createElement("img");
  icon.src = forecast.iconUrl;
  icon.alt = forecast.desc;
  icon.classList.add("weather-forecast-icon");

  const temp = document.createElement("span");
  temp.textContent = `${Math.round(forecast.temp)} °C`;
  temp.classList.add("weather-forecast-temp", "font-bold");

  cardElement.append(day, icon, temp);
  return cardElement;
}

/**
 * @param {Array<Object>} forecasts
 * @returns {HTMLElement}
 */
export function updateForecastUI(forecasts) {
  const forecastContainer = document.querySelector(".weather-forecast-list");
  for (const forecast of forecasts) {
    const card = createForecastCard(forecast);
    forecastContainer.appendChild(card);
  }
  return forecastContainer;
}
