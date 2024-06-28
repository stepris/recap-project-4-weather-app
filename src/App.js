import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    //st newAct  newActivity.id = uid();

    // console.log(newActivityWithId);

    //console.log(newActivity);
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
    </div>
  );
}

export default App;
