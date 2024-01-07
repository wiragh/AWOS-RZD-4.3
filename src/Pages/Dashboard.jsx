// LIBRARY IMPORT
import { ReactComponentElement, useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import axios from "axios";

// COMPONENTS IMPORT
import Header from "../Components/Header";
import NowCard from "../Components/NowCard";
import LocationCard from "../Components/LocationCard";
import TodayCard from "../Components/TodayCard";
import WeatherCard from "../Components/WeatherCard";
import DelayCard from "../Components/DelayCard";
import Comparison from "../Components/Comparison";
import Chart from "../Components/Charts/Chart";

// REQUEST IMPORT
import { getDataSensor } from "../../api/request";

// CONTEXT IMPORT
import { useData } from "../DataContext";

import { IoStatsChart } from "react-icons/io5";

const Dashboard = () => {
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
      <section id="body">
        <Header fetchDataSensor={fetchDataSensor} />
        <Row>
          <Col xs={3}>
            <NowCard />
            <h5 className="mt-4 mb-4">Lokasi Gateway</h5>
            <LocationCard node="gateway" />
            <h5 className="mt-4 mb-4">Lokasi Node Sensor</h5>
            <LocationCard node="aws" />
            <DelayCard />
          </Col>
          <Col xs={9} className="ps-4">
            <TodayCard />
            <Comparison />
          </Col>
        </Row>
        <Row className="line-border mt-5">
          <Col xs={6} className="mt-3">
            <h6><IoStatsChart /> Agriculture's Statistic</h6>
            <Chart context="agriculture" />
          </Col>
          <Col xs={6} className="mt-3">
            <h6><IoStatsChart /> Weather's Statistic</h6>
            <Chart context="weather" />
          </Col>
        </Row>
      </section>
    </>
  );
};
export default Dashboard;
