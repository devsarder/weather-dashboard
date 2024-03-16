import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import Pin from "../../assets/pin.svg";
import SunIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/getFormattedDate";
export default function WeatherHeadline() {
  const { weather } = useContext(WeatherContext);
  const { climate, location, time, temperature } = weather;
  function getClimateIcon(climate) {
    switch (climate) {
      case "rain":
        return CloudIcon;
      case "sun":
        return SunIcon;
      case "thunder":
        return ThunderIcon;
      default:
        return SunIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getClimateIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)},
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
