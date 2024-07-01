// import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });
  console.log(filteredActivities);
  function handleAddActivity(newActivity) {
    setActivities([
      ...activities,
      {
        id: uid(),
        ...newActivity,
      },
    ]);
  }

  return (
    <div className="App">
      <h1>Welcome to our new weather app</h1>
      <Form onAddActivity={handleAddActivity} />
      <List
        filteredActivities={filteredActivities}
        isGoodWeather={isGoodWeather}
      />
    </div>
  );
}

export default App;
