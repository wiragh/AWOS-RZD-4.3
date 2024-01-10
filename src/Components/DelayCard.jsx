// LIBRARY IMPORT
import { React } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

// DATA CONTEXT IMPORT
import { useData } from "../DataContext";
const DelayCard = () => {
  const { responseData } = useData();

  return (
    <>
    <Row className="mb-3">
      <Col xs={6}> 
      <div className="card pt-3 pb-2 mt-0">
        <Stack direction="vertical" gap={1}>
          <p className="font-title-grey">Waktu Sensor</p>
          <h6 className="">{responseData['CapturedAt'].substring(0, 25)}</h6>
        </Stack>
      </div>
      </Col>

      <Col xs={6}>
      <div className="card pt-3 pb-2 mt-0">
        <Stack direction="vertical" gap={1}>
          <p className="font-title-grey">Waktu Server</p>
          <h6 className="">{responseData['SavedAt'].substring(0, 25)}</h6>
        </Stack>
      </div>
      </Col>
    </Row>
    </>
  );
};
export default DelayCard;
