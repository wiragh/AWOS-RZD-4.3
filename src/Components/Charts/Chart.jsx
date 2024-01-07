// LIBRARY IMPORT
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

// REQUEST IMPORT
import { getDataSensorFull } from "../../../api/request";

const Chart = (props) => {
  const [dataSensor, setDataSensor] = useState([]);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchDataSensor = async () => {
      const response = await getDataSensorFull();
      setDataSensor(response.data);
    };

    fetchDataSensor();
  }, []);

  useEffect(() => {
    const processedChartData = dataSensor.map((item) => {
      // Membuat objek tanggal dari string
      const dateObject = new Date(item.CapturedAt);

      // Menggunakan metode dari objek tanggal untuk mendapatkan komponen tanggal yang diinginkan
      const formattedDate = `${dateObject.getFullYear()}-${(
        dateObject.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${dateObject
        .getDate()
        .toString()
        .padStart(2, "0")} ${dateObject
        .getHours()
        .toString()
        .padStart(2, "0")}:${dateObject
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${dateObject
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;

      console.log(item);

      if (props.context === "preview") {
        return {
          date: formattedDate,
          Temperature: item.Temp_DW,
          Rainfall: item.Rainfall_DW,
          Humidity: item.Humidity_DW,
        };
      } else if (props.context === "agriculture"){
        return {
          date: formattedDate,
          SoilMoisture: item.SoilMoisture_DA,
          SoilTemp: item.SoilTemp_DA,
          Nitrogen: item.Nitrogen_DA,
          Phospor: item.Phospor_DA,
          PhSoil: item.PhSoil_DA,
          Potasium: item.Potasium_DA,
        }
      } else if (props.context === "weather"){
        return {
          date: formattedDate,
          Temp: item.Temp_DW,
          Humidity: item.Humidity_DW,
          LightIntensity: item.LightIntensity_DW,
          UVLight: item.UVLightIntensity_DW,
          AirPressure: item.AirPressure_DW,
          WindSpeed: item.WindSpeed_DW,
          Rainfall: item.Rainfall_DW
        }
      }
    });

    setChartData(processedChartData);
  }, [dataSensor]);

  const options = {
    chart: {
      id: "chart1",
      type: "line",
      toolbar: {
        show: true,
      },
      pan: {
        enabled: true,
        mode: "x",
      },
    },
    xaxis: {
      type: "datetime",
      min: new Date().getTime() - 1 * 24 * 60 * 60 * 1000,
      max: new Date().getTime(),
    },
    yaxis: {
      title: {
        text: "Nilai",
      },
    },
  };

  let chartSeries;

  if (props.context === "preview"){
    chartSeries = [
      {
        name: "Rainfall",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Rainfall,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Temperature",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Temperature,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Humidity",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Humidity,
        })),
        strokeWidth: 0.1,
      },
    ]
  } else if (props.context === "agriculture"){
    chartSeries = [
      {
        name: "Soil Moisture",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.SoilMoisture,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Soil Temperature",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Soil_Temp,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Nitrogen",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Nitrogen,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Phospor",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Phospor,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "PH Soil",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.PhSoil,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Potasium",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Potasium,
        })),
        strokeWidth: 0.1,
      },
    ]
  } else if (props.context === "weather"){
    chartSeries = [
      {
        name: "Temperature",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Temp,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Humidity",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Humidity,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Light Intensity",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.LightIntensity,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "UV Light Intensity",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.UVLight,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Air Pressure",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.AirPressure,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Wind Speed",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.WindSpeed,
        })),
        strokeWidth: 0.1,
      },
      {
        name: "Rainfall",
        data: chartData.map((data) => ({
          x: data.date,
          y: data.Rainfall,
        })),
        strokeWidth: 0.1,
      },
    ]
  }

  return (
    <>
      <div className="mb-5 mt-3 chart-custom card-body">
        <ReactApexChart
          options={options}
          series={chartSeries}
          width="100%"
          height={275}
        />
      </div>
    </>
  );
};

export default Chart;
