export default function WeatherDataElement({
  temperature,
  condition,
  weather,
  children,
}) {
  return (
    <span>
      {children}
      {weather.condition}
    </span>
  );
}
