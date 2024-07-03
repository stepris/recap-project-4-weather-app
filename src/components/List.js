import { InfoHeading } from "./InfoHeading";

export default function List({
  filteredActivities,
  isGoodWeather,
  onDeleteActivity,
}) {
  return (
    <>
      <InfoHeading isGoodWeather={isGoodWeather}></InfoHeading>
      <ul>
        {filteredActivities.map((activity) => {
          return (
            <li key={activity.id}>
              {activity.name}
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
