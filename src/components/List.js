import "./List.css";

export default function List({ filteredActivities, onDeleteActivity }) {
  return (
    <ul className="activitiesList">
      {filteredActivities.map((activity) => {
        return (
          <li key={activity.id} className="activitiesList__item">
            <span className="item__text">{activity.name} </span>
            <button
              type="button"
              className="item__button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}
