import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather({
        condition: data.condition,
        temperature: data.temperature,
        isGoodWeather: data.isGoodWeather,
      });
    }
    getWeather();
  }, []);

  console.log(weather);

  //const isGoodWeather = true;
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
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
      <div
        style={{
          width: "360px",
          height: "80px",
          border: "1px solid red",
          fontSize: "3rem",
        }}
      >
        <span style={{ paddingLeft: "40px" }}>
          {weather.temperature + "°C"}
        </span>
        <span style={{ paddingLeft: "80px" }}>{weather.condition}</span>
      </div>
      <List
        filteredActivities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
