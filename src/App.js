import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
function App() {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  function handleAddActivity(data) {
    setName(data.name);
    setIsForGoodWeather(data.isForGoodWeather.checked);
    console.log("data", data.isForGoodWeather.checked);
    console.log("dataFromUseState", isForGoodWeather);
    console.log("dataFromForm", data);
  }
  console.log("nameFromUseState", name);
  // console.log(isForGoodWeather);
  return (
    <div className="App">
      <p>Welcome to our new weather app</p>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
