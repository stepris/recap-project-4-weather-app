export default function WeatherDataElement({ temperature, children }) {
  return (
    <span>
      {temperature} {children}
    </span>
  );
}
