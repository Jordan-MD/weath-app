/**
 * Récupérer les données météorologiques pour une ville donnée
 * @param {string} city
 * @param {string} API_KEY
 * @returns {Promise<Object>}
 */
export async function fetchWeather(city, API_KEY) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;
  const response = await fetch(weatherUrl);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}

/**
 * Récupérer les données météorologiques pour les cinqu prochains jours
 * @param {string} city
 * @param {string} API_KEY
 * @returns {Promise<Object>}
 */
export async function fetchForecast(city, API_KEY) {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(forecastUrl);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}
