import { useWeather } from "../components/hooks";
import { WeatherContext } from "../context";

const WeatherProvider = ({ children }) => {
  const { error, loading, weather } = useWeather();
  return (
    <WeatherContext.Provider value={{ error, loading, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;
