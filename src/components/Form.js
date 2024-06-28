export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      isForGoodWeather: event.target.isForGoodWeather.checked,
      name: event.target.name.value,
    };
    // console.log(event.target.name.value);
    console.dir(event.target.isForGoodWeather);
    console.log("Self built object:", data);

    // const dataForm = new FormData(event.target);
    // const data = Object.fromEntries(dataForm);
    // console.log("Data Object before:", data);
    // data.isForGoodWeather = event.target.isForGoodWeather.checked;
    // console.log("Data Object before:", data);
    // console.dir(event.target);
    // console.log("Event:", event);
    // console.log("Event target:", event.target);
    // console.log("Checkbox: ", event.target.isForGoodWeather.checked);
    // onAddActivity(data);
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
