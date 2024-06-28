import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
function App() {
  const [activity, setActivity] = useState("");

  function handleAddActivity(newActivity) {
    setActivity(newActivity);
  }

  console.log(activity);

  return (
    <div className="App">
      <p>Welcome to our new weather app</p>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
