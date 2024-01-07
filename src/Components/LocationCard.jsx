// LIBRARY IMPORT
import { Row, Col, Stack } from "react-bootstrap";

// ASSETS IMPORT
import { FaCloud, FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa";

// DATA CONTEXT IMPORT
import { useData } from "../DataContext";
const LocationCard = (props) => {
  const { responseData } = useData();

  const latitude_gateway  = responseData["Latitude_DG"];
  const longitude_gateway = responseData["Longitude_DG"];
  const latitude_aws      = responseData["Latitude_AWS"];
  const longitude_aws     = responseData["Longitude_AWS"];

  if (props.node == "gateway") {
    return (
      <div className="card">
        <div className="mapouter">
          <div className="gmap_canvas">
            
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${latitude_gateway},${longitude_gateway}&t=&z=110&ie=UTF8&iwloc=&output=embed`}
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    );
  } else if (props.node == "aws"){
    return (
      <div className="card">
        <div className="mapouter">
          <div className="gmap_canvas">
            
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${latitude_aws},${longitude_aws}&t=&z=110&ie=UTF8&iwloc=&output=embed`}
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
};

export default LocationCard;
