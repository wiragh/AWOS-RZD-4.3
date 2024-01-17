// LIBRARY IMPORT
import { Row, Col, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";

// ASSETS IMPORT
import { FaCloud, FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa";

// DATA CONTEXT IMPORT
import { useData } from "../DataContext";

// REQUEST IMPORT
import { getCityName } from "../../api/request";

import morning from "../assets/morning.png";

import contrast from "../assets/contrast.png";

import moon from "../assets/moon.png";

const NowCard = () => {
  const [ locationData, setLocationData ] = useState([]);
  const [ dataDay, setDataDay ] = useState("Unknown");
  let iconDay;

  const { responseData } = useData();

  const latitude = parseFloat(responseData["Latitude_AWS"]);
  const longitude = parseFloat(responseData["Longitude_AWS"]);


  // FETCH CITY NAME
  const fetchCityName = async (latitude, longitude) => {
    const response = await getCityName(latitude, longitude);
    setLocationData(response)
  };

  useEffect(() => {
      // CHECK TIME
    const timestamp = responseData["SavedAt"].substring(17,19);
    const hour = parseInt(timestamp)
    if (hour >= 0 && hour < 12) {
      setDataDay("Morning");
      iconDay = morning;
    } else if (hour >= 12 && hour < 17) {
      setDataDay("Afternoon");
      iconDay = contrast;
    } else if (hour >= 17 && hour < 20) {
      setDataDay("Evening");
      iconDay = moon;
    } else {
      setDataDay("Night");
      iconDay = moon;
    };

    fetchCityName(latitude, longitude);
    const interval = setInterval(() => {
      fetchCityName(latitude, longitude);
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="card">
      <Stack direction="horizontal" gap={3}>
        <Stack direction="vertical" gap={1}>
          <div>
            <h5>This {dataDay},</h5>
          </div>
          <div>
            <h1>{responseData["Temp_DW"]}°C</h1>
          </div>
          <div>
            <h6>Broken Clouds</h6>
          </div>
        </Stack>
        <Stack direction="vertical" gap={1}>
          <div className="icons-cloud">
            <img src={dataDay === "Morning" ? morning :
          dataDay === "Afternoon" ? contrast :
          dataDay === "Evening" ? moon :
          dataDay === "Night" ? moon : morning} alt="" width={100}/>
          </div>
        </Stack>
      </Stack>
      <div className="border-white"></div>
      <Stack direction="horizontal" gap={3}>
        <Stack direction="vertical" gap={3}>
          <FaCalendarDay />
          <FaMapMarkerAlt />
        </Stack>
        <Stack direction="vertical" gap={1}>
          <div>
            {responseData && responseData["SavedAt"]
              ? responseData["SavedAt"].slice(0, 17)
              : responseData["SavedAt"]}
          </div>
          <div>
            {locationData['cityName']}, {locationData['countryName']}
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
export default NowCard;
