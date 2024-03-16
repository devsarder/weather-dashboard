import { useWeather } from "../components/hooks";
import { WeatherContext } from "../context";

const WeatherProvider = ({ children }) => {
  const { error, isLoading, weather } = useWeather();
  console.log(weather);
  return (
    <WeatherContext.Provider value={{ error, isLoading, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;
