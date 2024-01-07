// LIBRARY IMPORT
import { React } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

// DATA CONTEXT IMPORT
import { useData } from "../DataContext";
const DelayCard = () => {
  const { responseData } = useData();

  return (
    <>
      <div className="card pt-3 pb-2 mt-3">
        <Stack direction="vertical" gap={1}>
          <p className="font-title-grey">Waktu Sensor</p>
          <h6 className="">{responseData['CapturedAt']}</h6>
        </Stack>
      </div>
      <div className="card pt-3 pb-2 mt-2">
        <Stack direction="vertical" gap={1}>
          <p className="font-title-grey">Waktu Server</p>
          <h6 className="">{responseData['SavedAt']}</h6>
        </Stack>
      </div>
    </>
  );
};
export default DelayCard;
