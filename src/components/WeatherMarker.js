import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/weather-storm";

const WeatherMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="weather-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="weather-icon" />
    </div>
  );
};

export default WeatherMarker;
