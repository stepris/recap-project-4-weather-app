import "./WeatherInfo.css";

export default function WeatherInfo({ weather }) {
  const { condition, temperature } = weather;

  return (
    <section className="weatherInfo">
      <span className="weatherInfo__condition">{condition}</span>
      <span className="weatherInfo__temperature">{temperature} ˚C</span>
    </section>
  );
}
