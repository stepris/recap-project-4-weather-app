import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
// import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import WeatherDisplay from "./components/WeatherDisplay";
import { handleAddActivity } from "./handlerFunctions";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  // console.log(setActivities);

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

    const interval = setInterval(getWeather, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleDeleteActivity(idToDelete) {
    setActivities(
      activities.filter((activity) => {
        return activity.id !== idToDelete;
      })
    );
  }

  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
  });

  return (
    <div className="App">
      <h1>Welcome to our new weather app</h1>
      <WeatherDisplay weather={weather}></WeatherDisplay>
      <List
        filteredActivities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form
        onAddActivity={handleAddActivity}
        activities={activities}
        setActivitiesFunction={setActivities}
      />
    </div>
  );
}

export default App;
