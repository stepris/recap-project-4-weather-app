export default function List({ filteredActivities, onDeleteActivity }) {
  return (
    <ul>
      {filteredActivities.map((activity) => {
        console.log("Hi from each element");
        return (
          <li key={activity.id}>
            {activity.name}
            <button type="button" onClick={() => onDeleteActivity(activity.id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
