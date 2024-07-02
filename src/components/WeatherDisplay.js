import WeatherDataElement from "./WeatherDataElement";
export default function WeatherDisplay({ weather }) {
  return (
    /* <div
      style={{
        width: "360px",
        height: "80px",
        border: "1px solid red",
        fontSize: "3rem",
      }}
    >
    </div>*/
    <>
      <WeatherDataElement weather={weather}>hi testing</WeatherDataElement>
      {/*<WeatherDataElement>°C</WeatherDataElement>*/}
    </>
  );
}
