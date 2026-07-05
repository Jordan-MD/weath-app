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
};

/**
 * Mettre l'UI à jour avec les données météorologiques
 * @param {Object} data
 */
export function updateWeatherUI(data) {
  weatherElements.location.textContent = `${data.name}`;

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
