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
import { getDataSensorExt } from "../../../api/request";

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
        <Stack direction="horizontal" gap={3}>
          <FaRocket />
          <Stack direction="vertical" gap={0}>
            <h6 className="m-0">Open Weather Data Sensor</h6>
            <h6>Location in Bandung</h6>
          </Stack>
        </Stack>
      </h5>
      <Row className="mt-3">
        <Col xs={12} className="p-2">
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <WiThermometer />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Temperature</div>
                <h2>{sensorData["temp_c"]} °C</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={12} className="p-2">
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <FaTint />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Humidity</div>
                <h2>{sensorData["humidity"]} %RH</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p-2">
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <FaRegCompass />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Wind Wave Direction</div>
                <h2>{getArahAngin(sensorData["wind_dir"])}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={12} className="p-2">
          <div className="card-darker">
          <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <FaCompressAlt />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Air Pressure</div>
                <h2>{sensorData["pressure_mb"]} Pa</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Comparison;
