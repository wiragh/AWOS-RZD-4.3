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
import { FaWind } from "react-icons/fa";

// DATA CONTEXT IMPORT
import { useData } from "../../DataContext";

const TodayCardMobile = () => {
  const { responseData } = useData();

  const dataLux = responseData.LightIntensity_DW;
  const intValue = parseInt(dataLux, 10);
  const dataLuxReady = intValue;

  const dataAirPressure = responseData.AirPressure_DW;
  const intValueAirPressure = parseInt(dataAirPressure, 10);
  const dataAirPressureReady = intValueAirPressure;

  return (
    <>
      <div className="card mt-2">
        <h5>
          <FaRocket className="me-2" /> Data Agriculture Sensor
        </h5>
        <Stack direction="vertical">
          <Stack direction="horizontal" gap={3}>
            <div className="card-darker mt-3 text-center">
              <Stack direction="vertical" gap={2}>
                <p className="font-grey text-center">Soil Moisture</p>
                <h3>{responseData["SoilMoisture_DA"]} %RH</h3>
              </Stack>
            </div>
            <div className="card-darker mt-3 text-center">
              <Stack direction="vertical" gap={2}>
                <p className="font-grey text-center">Soil Temp</p>
                <h3>{responseData["SoilTemp_DA"]}°C</h3>
              </Stack>
            </div>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div className="card-darker mt-3 text-center">
              <Stack direction="vertical" gap={2}>
                <p className="font-grey text-center">Nitrogen</p>
                <h3>{responseData["Nitrogen_DA"]}</h3>
              </Stack>
            </div>
            <div className="card-darker mt-3 text-center">
              <Stack direction="vertical" gap={2}>
                <p className="font-grey text-center">Phosporus</p>
                <h3>{responseData["Phospor_DA"]}</h3>
              </Stack>
            </div>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div className="card-darker mt-3 text-center">
              <Stack direction="vertical" gap={2}>
                <p className="font-grey text-center">Potassium</p>
                <h3>{responseData["Potasium_DA"]} </h3>
              </Stack>
            </div>
            <div className="card-darker mt-3 text-center">
              <Stack direction="vertical" gap={2}>
                <p className="font-grey text-center">Ph Soil</p>
                <h3>{responseData["PhSoil_DA"]}</h3>
              </Stack>
            </div>
          </Stack>
          <div className="card-darker mt-3 text-center">
              <Stack direction="vertical" gap={2}>
                <p className="font-grey text-center">Electrical Conductivity</p>
                <h3>{responseData["ElectricalConduct_DA"]}</h3>
              </Stack>
            </div>
        </Stack>
      </div>
      <div className="card mt-2">
        <h5>
          <FaRocket className="me-2" /> Data Weather Sensor
        </h5>
        <Stack direction="vertical" gap={3}>
          <div className="card-darker mt-3">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <FaTint />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Humidity</div>
                <h2>{responseData["Humidity_DW"]}%RH</h2>
              </Stack>
            </Stack>
          </div>
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <FaRegLightbulb />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Light Intensity</div>
                <h2>{dataLux} Lux</h2>
              </Stack>
            </Stack>
          </div>
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <FaCompressAlt />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Air Pressure</div>
                <h2>{dataAirPressureReady} Pa</h2>
              </Stack>
            </Stack>
          </div>
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                  <FaRegCompass />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Wind Wave Direction</div>
                <h2>{responseData["WindWaveDirection_DW"].toUpperCase()}</h2>
              </Stack>
            </Stack>
          </div>
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
                <FaWind />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Wind Speed</div>
                <h2>{responseData["WindSpeed_DW"]} m/s</h2>
              </Stack>
            </Stack>
          </div>
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
              <FaCloudShowersHeavy />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">Rainfall</div>
                <h2>{responseData["Rainfall_DW"]} MM/Day</h2>
              </Stack>
            </Stack>
          </div>
          <div className="card-darker">
            <Stack direction="horizontal" gap={3}>
              <div className="icon-forecast pe-0">
              <FaRegSun />
              </div>
              <Stack direction="vertical">
                <div className="font-grey text-start">UV Index</div>
                <h2>{responseData["UVLightIntensity_DW"]}</h2>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default TodayCardMobile;
