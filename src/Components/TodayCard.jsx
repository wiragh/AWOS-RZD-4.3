// LIBRARY IMPORT
import { Row, Col, Stack, Carousel } from "react-bootstrap";

// ASSETS IMPORT
import {
  FaRegLightbulb,
  FaRegCompass,
  FaRegSun,
  FaCloudShowersHeavy,
  FaTint,
  FaCompressAlt,
  FaRocket,
} from "react-icons/fa";


// DATA CONTEXT IMPORT
import { useData } from "../DataContext";

const TodayCard = () => {
  const { responseData } = useData();

  const dataLux = responseData.LightIntensity_DW;
  const intValue = parseInt(dataLux, 10);
  const dataLuxReady = intValue / 10;


  return (
    <div className="card">
      <h5>
        <FaRocket className="me-2"/> AWOS Data Sensor
      </h5>
      <div className="card-darker mb-2 mt-3">
        <Row>
          <div className="mb-3">Agriculture Node</div>
          <Col className="border-side">
            <Stack direction="vertical" gap={2}>
              <p className="font-grey text-start">Soil Moisture</p>
              <h3>{responseData["SoilMoisture_DA"]} %RH</h3>
            </Stack>
          </Col>
          <Col className="border-side">
            <Stack direction="vertical" gap={2}>
              <p className="font-grey text-start">Soil Temp</p>
              <h3>{responseData["SoilTemp_DA"]}°C</h3>
            </Stack>
          </Col>
          <Col className="border-side">
            <Stack direction="vertical mx-auto" gap={2}>
              <p className="font-grey text-start">Nitrogen</p>
              <h3>{responseData["Nitrogen_DA"]}</h3>
            </Stack>
          </Col>
          <Col className="border-side">
            <Stack direction="vertical mx-auto" gap={2}>
              <p className="font-grey text-start">Potassium</p>
              <h3>{responseData["Potasium_DA"]}</h3>
            </Stack>
          </Col>
          <Col>
            <Stack direction="vertical mx-auto" gap={2}>
              <p className="font-grey text-start">Ph Soil</p>
              <h3>{responseData["PhSoil_DA"]}</h3>
            </Stack>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Humidity</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast pe-0">
                  <FaTint />
                </div>
                <h2 className="mt-3 ps-3">{responseData["Humidity_DW"]}%RH</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Light Intensity</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast">
                  <FaRegLightbulb />
                </div>
                <h2 className="mt-3">
                  {dataLuxReady} Lux
                </h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Air Pressure</div>
              <Stack direction="horizontal" gap={4}>
                <div className="icon-forecast">
                  <FaCompressAlt />
                </div>
                <h2 className="mt-3">{responseData["AirPressure_DW"]} hPa</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Wind Wave Direction</div>
              <Stack direction="horizontal" gap={5}>
                <div className="icon-forecast pe-1">
                  <FaRegCompass />
                </div>
                <h2 className="mt-3">{responseData["WindWaveDirection_DW"]}</h2>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">Rainfall</div>
              <Stack direction="horizontal" gap={3}>
                <div className="icon-forecast pe-0">
                  <FaCloudShowersHeavy />
                </div>
                <h3 className="mt-3 ps-0">{responseData["Rainfall_DW"]} MM/Day</h3>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col xs={4} className="p-2">
          <div className="card-darker">
            <Stack direction="vertical" gap={4}>
              <div className="font-title-grey">UV Index</div>
              <Stack direction="horizontal" gap={4}>
                <div className="icon-forecast pe-5">
                  <FaRegSun />
                </div>
                <h2 className="mt-3 ps-5">
                  {responseData["UVLightIntensity_DW"]}
                </h2>
              </Stack>
            </Stack>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TodayCard;
