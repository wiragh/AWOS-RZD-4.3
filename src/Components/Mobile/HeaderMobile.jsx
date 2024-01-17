// LIBRARY IMPORT
import { React } from "react";
import { Row, Col, Button } from "react-bootstrap";

// ASSETS IMPORT
import Icon from "../../assets/awos2.png";
import BtnLocationMobile from "./BtnLocationMobile";

const HeaderMobile = ({fetchDataSensor}) => {
  return (
    <>
      <Row className="mb-4">
        <Col>
            <img src={Icon} alt="Brand" width={140}/>
        </Col>
        <Col className="justify-content-center align-self-center">
            <BtnLocationMobile fetchDataSensor={fetchDataSensor}/>
        </Col>
      </Row>
    </>
  );
};
export default HeaderMobile;
