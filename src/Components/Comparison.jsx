// LIBRARY IMPORT
import { useEffect, useState } from "react";
import { Row, Col, Stack, Carousel } from "react-bootstrap";

// ASSETS IMPORT
import {
  FaRegCompass,
  FaRegSun,
  FaTint,
  FaCompressAlt,
  FaRocket,
} from "react-icons/fa";

import { WiThermometer } from "react-icons/wi";

// REQUEST IMPORT
import { getDataSensorExt } from "../../api/request";

const Comparison = () => {
  const [sensorData, setSensorData] = useState([]);

  const fetchDataExternal = async () => {
    const response = await getDataSensorExt();
    setSensorData(response.data["current"]);
  };

  useEffect(() => {
    fetchDataExternal();
    const interval = setInterval(() => {
      fetchDataExternal();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getArahAngin = (data) => {
    switch (data) {
      case "N":
        return "UTARA";
      case "NNE":
        return "UTARA TIMUR LAUT";
      case "NE":
        return "TIMUR LAUT";
      case "ENE":
        return "TIMUR TIMUR LAUT";
      case "E":
        return "TIMUR";
      case "ESE":
        return "TENGGARA TIMUR";
      case "SE":
        return "TENGGARA";
      case "SSE":
        return "TENGGARA SELATAN";
      case "S":
        return "SELATAN";
      case "SSW":
        return "SELATAN BARAT DAYA";
      case "SW":
        return "BARAT DAYA";
      case "WSW":
        return "BARAT DAYA BARAT";
      case "W":
        return "BARAT";
      case "WNW":
        return "BARAT LAUT BARAT";
      case "NW":
        return "BARAT LAUT";
      case "NNW":
        return "UTARA BARAT UTARA";
      default:
        return data;
    }
  };
  
  

  return (
    <div className="card-2 mt-3">
      <h5>
        <FaRocket className="me-2"/> Open Weather Data Sensor / Location in Bandung
      </h5>
      <Row className="mt-3">
      <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Temperature</div>
              <Stack direction="horizontal" gap={4}>
                <div className="icon-forecast pe-2">
                  <WiThermometer />
                </div>
                <h2 className="mt-3 ps-0">{sensorData["temp_c"]} °C</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Humidity</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast pe-2">
                  <FaTint />
                </div>
                <h2 className="mt-3 ps-0">{sensorData["humidity"]} %RH</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">UV Index</div>
              <Stack direction="horizontal" gap={4}>
                <div className="icon-forecast pe-3">
                  <FaRegSun />
                </div>
                <h2 className="mt-3">{sensorData["uv"]}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={6} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Air Pressure</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast">
                  <FaCompressAlt />
                </div>
                <h2 className="mt-3">{sensorData["pressure_mb"]} Pa</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Comparison;
