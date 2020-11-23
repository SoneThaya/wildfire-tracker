import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/mountain";

const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="mountain-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="mountain-icon" />
    </div>
  );
};

export default VolcanoMarker;
