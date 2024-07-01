export default function List({ filteredActivities, isGoodWeather }) {
  return (
    <>
      {isGoodWeather === true ? (
        <h3>The weather is awesome! Go outside and:</h3>
      ) : (
        <h3>Bad weather outside! Here's what you can do now:</h3>
      )}
      <ul>
        {filteredActivities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
