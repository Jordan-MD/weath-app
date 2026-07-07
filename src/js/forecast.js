/**
 *Transformer les données de prévision pour n'afficher que les prévisions à 12h00
 * @param {Object} forecastData
 * @returns {Array<Object>}
 */
export function transformForecastData(forecastData) {
  const DAYS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  const forecast = forecastData.list
    .filter((forecast) => forecast.dt_txt.includes("12:00:00"))
    .map((forecast) => {
      const date = new Date(forecast.dt_txt);
      const day = DAYS[date.getDay()];

      const weather = {
        day: day,
        temp: forecast.main.temp,
        desc: forecast.weather[0].description,
        iconUrl: getWeatherIconUrl(forecast.weather[0].icon),
      };
      return weather;
    });

  return forecast;
}

export function getWeatherIconUrl(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
