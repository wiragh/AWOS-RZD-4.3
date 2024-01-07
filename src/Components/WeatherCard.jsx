// LIBRARY IMPORT
import { Row, Col, Stack } from "react-bootstrap";

// ASSETS IMPORT
import { FaCloudSun } from "react-icons/fa";

const WeatherCard = () => {
  return (
    <Row>
      <Col xs="3">
        <div className="card mb-2">
          <Stack direction="vertical" gap={4}>
            <div className="font-white-center">06.00</div>
            <div className="icon-weather">
              <FaCloudSun />
            </div>
            <div className="font-white-center">5°C</div>
          </Stack>
        </div>
      </Col>
      <Col xs="3">
        <div className="card mb-2">
        <Stack direction="vertical" gap={4}>
            <div className="font-white-center">12.00</div>
            <div className="icon-weather">
              <FaCloudSun />
            </div>
            <div className="font-white-center">5°C</div>
          </Stack>
        </div>
      </Col>
      <Col xs="3">
        <div className="card mb-2">
        <Stack direction="vertical" gap={4}>
            <div className="font-white-center">18.00</div>
            <div className="icon-weather">
              <FaCloudSun />
            </div>
            <div className="font-white-center">5°C</div>
          </Stack>
        </div>
      </Col>
      <Col xs="3">
        <div className="card mb-2">
        <Stack direction="vertical" gap={4}>
            <div className="font-white-center">00.00</div>
            <div className="icon-weather">
              <FaCloudSun />
            </div>
            <div className="font-white-center">5°C</div>
          </Stack>
        </div>
      </Col>
    </Row>
  );
};

export default WeatherCard;
