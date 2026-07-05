/**
 * Récupérer les données météorologiques pour une ville donnée
 * @param {string} city
 * @param {string} API_KEY
 * @returns {Promise<Object>}
 */
export async function fetchWeather(city, API_KEY) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(weatherUrl);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}
