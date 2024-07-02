import "./WeatherInfo.css";

export default function WeatherInfo({ weather, isWeatherDataEmpty }) {
  const { condition, temperature } = weather;

  return isWeatherDataEmpty ? (
    <p className="weatherInfo__loading">⏳ Loading weather data...</p>
  ) : (
    <section className="weatherInfo">
      <span className="weatherInfo__condition">{condition}</span>
      <span className="weatherInfo__temperature">{temperature} ˚C</span>
    </section>
  );
}
