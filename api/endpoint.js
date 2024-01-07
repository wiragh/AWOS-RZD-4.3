    // BASE URL CONFIG
    const BASE_URL      = "https://serverawos.pythonanywhere.com";

    const EXTERNAL_URL  = "https://api.weatherapi.com/v1/current.json?key=aefb5c4abd60414c94b170426231412&q=Bandung&aqi=yes";

    const STREET_URL    = "https://nominatim.openstreetmap.org/reverse?format=json";


    // ENDPOINT CONFIG
    export const DATA_SENSOR        = `${BASE_URL}/DataSensor`;

    export const ALL_DATA_SENSOR    = `${BASE_URL}/DataSensorFull`;

    export const DATA_SENSOR_EXT    = `${EXTERNAL_URL}`;

    export const DATA_CITY_NAME     = `${STREET_URL}`;