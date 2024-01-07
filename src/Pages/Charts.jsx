// LIBRARY IMPORT
import { ReactComponentElement, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// COMPONENTS IMPORT
import Chart from "../Components/Charts/Chart";

// REQUEST IMPORT
import { getDataSensor } from "../../api/request";

// CONTEXT IMPORT
import { useData } from "../DataContext";

const Charts = () => {
  const { setResponse } = useData();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataSensor = async () => {
    try {
      const response = await getDataSensor();
      setResponse(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error on request :", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataSensor();
    const interval = setInterval(() => {
      fetchDataSensor();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <section id="body"><Chart /></section>
    </>
  );
};
export default Charts;
