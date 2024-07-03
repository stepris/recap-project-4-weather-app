export function InfoHeading({ isGoodWeather }) {
  return isGoodWeather === true ? (
    <h3>The weather is awesome! Go outside and:</h3>
  ) : (
    <h3>Bad weather outside! Here's what you can do now:</h3>
  );
}
