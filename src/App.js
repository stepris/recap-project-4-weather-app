import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
function App() {
  const [activities, setActivities] = useState({});

  function handleAddActivity(newActivity) {
    setActivities({ ...activities, newActivity });
  }

  return (
    <div className="App">
      <p>Welcome to our new weather app</p>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
