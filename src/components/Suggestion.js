import "./Suggestion.css";

export default function Suggestion({ weather }) {
  const { isGoodWeather } = weather;
  const suggestion =
    isGoodWeather === true ? (
      <h3 className="suggestion">The weather is awesome! Go outside and:</h3>
    ) : (
      <h3 className="suggestion">
        Bad weather outside! Here's what you can do now:
      </h3>
    );

  return suggestion;
}
