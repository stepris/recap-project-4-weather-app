export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);

    const newActivity = {
      isForGoodWeather: event.target.isForGoodWeather.checked,
      name: event.target.name.value,
    };

    onAddActivity(newActivity);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="isForGoodWeather">Do we have good weather?</label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        name="isForGoodWeather"
      ></input>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
