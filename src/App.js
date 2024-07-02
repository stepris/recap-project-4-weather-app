import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import WeatherInfo from "./components/WeatherInfo";
import Suggestion from "./components/Suggestion";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        setWeather({
          condition: data.condition,
          temperature: data.temperature,
          isGoodWeather: data.isGoodWeather,
        });

        setError(null);
      } catch (error) {
        setError("Sorry, we couldn't fetch any weather data.");
        console.log(error);
      }
    }

    const interval = setInterval(getWeather, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
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

  function handleDeleteActivity(idToDelete) {
    setActivities(
      activities.filter((activity) => {
        return activity.id !== idToDelete;
      })
    );
  }

  const isWeatherDataEmpty = Object.keys(weather).length === 0;

  return (
    <div className="app">
      <h1 className="headline">Weather & Activities App</h1>
      <h2 className="welcome">Welcome to our new app</h2>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <WeatherInfo
            weather={weather}
            isWeatherDataEmpty={isWeatherDataEmpty}
          />
          <Suggestion
            weather={weather}
            isWeatherDataEmpty={isWeatherDataEmpty}
          />
          <List
            filteredActivities={filteredActivities}
            onDeleteActivity={handleDeleteActivity}
          />
          <Form onAddActivity={handleAddActivity} />
        </>
      )}
    </div>
  );
}

export default App;
