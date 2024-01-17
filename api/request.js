// ENDPOINT IMPORT
import { DATA_SENSOR, ALL_DATA_SENSOR, DATA_SENSOR_EXT, DATA_CITY_NAME } from "./endpoint";

// LIBRARY IMPORT
import axios from "axios";
import { utils, writeFile } from "xlsx";

export const getDataSensor = async() => {
    try {
        const response = await axios.get(DATA_SENSOR);
        return response;
    } catch (error) {
        const message = error.response;
        console.error("Error on request:", message);
        throw error;
    }
}

export const getDataSensorFull = async() => {
    try {
        const response = await axios.get(ALL_DATA_SENSOR);
        return response;
    } catch (error) {
        const message = error.response;
        console.error("Error on request:", message);
        throw error;
    }
}
export const handleDownloadExcel = async() => {
    try {
        const response = await axios.get(ALL_DATA_SENSOR)
        const ws = utils.json_to_sheet(response.data);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Sheet1");
        return wb;
    } catch (error) {
        const message = error.response;
        console.error("Error on request:", message);
        throw error;
    }
  };

export const getDataSensorExt = async() => {
    try {
        const response = await axios.get(DATA_SENSOR_EXT);
        return response;
    } catch (error) {
        const message = error.response;
        console.error("Error on request:", message);
        throw error;
    }
}

export const getCityName= async(latitude, longitude) => {
    try {
        const response = await axios.get(`${DATA_CITY_NAME}&lat=${latitude}&lon=${longitude}`);
        if (response.data.address){
            const cityName = response.data.address.city || response.data.address.village || response.data.address.hamlet;
            const countryName = response.data.address.country;
            return { cityName, countryName };
        } else {
            return "Looking the area...";
        }
    } catch (error) {
        const message = error.response;
        console.error("Error on request:", message);
        throw error;
    }
}