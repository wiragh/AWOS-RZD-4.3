// LIBRARY IMPORT
import { ReactComponentElement, useEffect, useState } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import axios from "axios";
import { BiCloudDownload } from "react-icons/bi";
import { writeFile } from "xlsx";

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
import { handleDownloadExcel } from "../../api/request";

// CONTEXT IMPORT
import { useData } from "../DataContext";

import { IoStatsChart } from "react-icons/io5";
import HeaderMobile from "../Components/Mobile/HeaderMobile";
import DelayCardMobile from "../Components/Mobile/DelayCardMobile";
import TodayCardMobile from "../Components/Mobile/TodayCardMobile";
import ComparisonMobile from "../Components/Mobile/ComparisonMobile";

const Dashboard = () => {
  const { setResponse } = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const workbook = await handleDownloadExcel();
      writeFile(workbook, "sensor_data.xlsx");
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    fetchDataSensor();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      fetchDataSensor();
    }, 60000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const mobileBreakpoint = 767;

  const isMobile = windowWidth <= mobileBreakpoint;

  if (isLoading) {
    return <></>;
  }
  
  return (
    <>
      {isMobile ? (
        <>
          <HeaderMobile />
          <Row>
            <NowCard />
            <DelayCardMobile />
            <TodayCardMobile />
            <ComparisonMobile />
          </Row>
          <Row className="line-border mt-5">
            <Col xs={12} className="mt-3">
              <h6>
                <IoStatsChart /> Agriculture's Statistic
              </h6>
              <Chart context="Kondisi Tanah" type="mobile" />
              <Chart context="Kandungan Nutrisi Tanah" type="mobile" />
            </Col>
            <Col xs={12} className="mt-3">
              <h6>
                <IoStatsChart /> Weather's Statistic
              </h6>
              <Chart context="Parameter Dasar" type="mobile" />
              <Chart
                context="Parameter Pencahayaan dan Radiasi"
                type="mobile"
              />
            </Col>
          </Row>
          <Button
            className="rounded-shape"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? "Processing..." : "Download Result Data"}
          </Button>
          <h5 className="mt-4 mb-4">Lokasi Gateway</h5>
          <LocationCard node="gateway" />
          <h5 className="mt-4 mb-4">Lokasi Node Sensor</h5>
          <LocationCard node="aws" />
        </>
      ) : (
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
              </Col>
              <Col xs={9} className="ps-4">
                <DelayCard />
                <TodayCard />
                <Comparison />
              </Col>
            </Row>
            <Row className="line-border mt-5">
              <div className="card mt-4">
                <div className="d-flex justify-content-center">
                  <div className="me-auto">
                    <h3>Charts</h3>
                  </div>
                  <div className="">
                    <Button
                      className="rounded-shape"
                      onClick={handleDownload}
                      disabled={isDownloading}
                    >
                      {isDownloading ? "Processing..." : "Download Result Data"}
                    </Button>
                  </div>
                </div>
              </div>
              <Col xs={6} className="mt-3">
                <h6>
                  <IoStatsChart /> Agriculture's Statistic
                </h6>
                <Chart context="Kondisi Tanah" type="website" />
                <Chart context="Kandungan Nutrisi Tanah" type="website" />
              </Col>
              <Col xs={6} className="mt-3">
                <h6>
                  <IoStatsChart /> Weather's Statistic
                </h6>
                <Chart context="Parameter Dasar" type="website" />
                <Chart
                  context="Parameter Pencahayaan dan Radiasi"
                  type="website"
                />
              </Col>
            </Row>
          </section>
        </>
      )}
    </>
  );
};
export default Dashboard;
