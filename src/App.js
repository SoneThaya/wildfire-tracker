import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);

      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );

      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvent();

    console.log(eventData);
  }, []);

  return (
    <div>
      {!loading ?  <Map eventData={eventData} /> : <Loader />}
     
    </div>
  );
}

export default App;
