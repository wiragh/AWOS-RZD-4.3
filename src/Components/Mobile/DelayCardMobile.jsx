// LIBRARY IMPORT
import { React } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

// DATA CONTEXT IMPORT
import { useData } from "../../DataContext";
const DelayCardMobile = () => {
  const { responseData } = useData();

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <div className="card pt-3 pb-2 mt-2">
            <Stack direction="vertical" gap={1}>
              <p className="font-title-grey text-center">Waktu Sensor</p>
              <h6 className="text-center">
                {responseData["CapturedAt"].substring(0, 25)}
              </h6>
            </Stack>
          </div>
          <div className="card pt-3 pb-2 mt-2">
            <Stack direction="vertical" gap={1}>
              <p className="font-title-grey text-center">Waktu Server</p>
              <h6 className="text-center">
                {responseData["SavedAt"].substring(0, 25)}
              </h6>
            </Stack>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default DelayCardMobile;
