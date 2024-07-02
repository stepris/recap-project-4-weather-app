import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const newActivity = {
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
      name: event.target.elements.name.value,
    };

    onAddActivity(newActivity);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form__headline">Add new Activity</h2>
      <label htmlFor="name" className="form__label">
        Name:
      </label>
      <input type="text" id="name" name="name" className="form__input" />
      <label htmlFor="isForGoodWeather" className="form__label">
        Is this activity for good weather?&ensp;
      </label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        name="isForGoodWeather"
      ></input>
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
}
