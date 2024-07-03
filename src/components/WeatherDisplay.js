import WeatherDataElement from "./WeatherDataElement";
export default function WeatherDisplay({ weather }) {
  return (
    <>
      <WeatherDataElement temperature={weather.temperature}>
        ˚C {weather.condition}
      </WeatherDataElement>
    </>
  );
}
