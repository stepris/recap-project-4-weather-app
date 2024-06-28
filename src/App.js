import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([
      ...activities,
      {
        id: uid(),
        ...newActivity,
      },
    ]);
  }

  console.log(activities);

  return (
    <div className="App">
      <p>Welcome to our new weather app</p>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}

export default App;
