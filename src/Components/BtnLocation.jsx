// LIBRARY IMPORT
import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const BtnLocation = ({ fetchDataSensor }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = format(
    utcToZonedTime(currentTime, "Asia/Jakarta"),
    "dd/MM HH:mm:ss"
  );

  const handleSync = () => {
    setIsLoading(true);
    fetchDataSensor();
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <Button className="rounded-shape" onClick={() => handleSync()}>
        {formattedTime}
        <FaRedo className={isLoading ? "ms-2 rotate" : "ms-2"} />
      </Button>
    </>
  );
};

export default BtnLocation;
