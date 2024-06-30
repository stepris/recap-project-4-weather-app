export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`);
    }

    console.log(this);
    // console.log(formData1);

    // const data = Object.fromEntries(formData);

    // console.dir(event.target.elements);
    // console.dir(data);
    const newActivity = {
      isForGoodWeather: event.target.isForGoodWeather.checked,
      name: event.target.name.value,
    };

    onAddActivity(newActivity);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Activity</h1>
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
