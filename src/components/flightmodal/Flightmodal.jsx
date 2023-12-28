import axios from "axios";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./flightmodal.css";

const Flightmodal = ({ closeflightModal }) => {
  const navigate= useNavigate()
  const { flightid } = useParams();
  console.log("flightid", flightid);
  const [singleflightdetails, setSingleFlightDetails] = useState([]);
  const handelCheckout=()=>{
    navigate('/payment-page')

  }

  const getSingleFlight = async () => {
    const config = {
      headers: {
        projectId: "f104bi07c490",
      },
    };
    try {
      const response = await axios(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightid}`,
        config
      );
      console.log("response", response);
      setSingleFlightDetails(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log("useEffect Called");
    getSingleFlight();
  }, []);

  const {
    arrivalTime,
    departureTime,
    destination,
    duration,
    flightID,
    source,
    ticketPrice,
    _id,
    availableSeats,
  } = singleflightdetails;
  return ReactDOM.createPortal(
    <div className="singleflight-container" key={_id}>
     <div className="booking">
        <div className="booking-container">
          <NavLink to="/" className="logo">
            <h2>Booking.com</h2>
          </NavLink>
        </div>
      </div>
      <h3 className="flight-header">{`Your Flight to ${destination}`}</h3>
      <span className="direct">{`Direct - ${duration} : 00 min`}</span>
      <div className="flightdetails-container">
        <div className="source-arrival">
          <div className="source">
            <span className="source-time">{`Departure - ${departureTime}`}</span>
            <h4 className="source-city">{`Source - ${source}`}</h4>
          </div>
          <div className="arrival">
            <span className="arrival-time">{`Arrival - ${arrivalTime}`}</span>
            <h4 className="arrival-city">{`Destination - ${destination}`}</h4>
          </div>
        </div>
        <div className="flight-name">
          <h2 className="flightid">{`Flight-ID ${flightID}`}</h2>
          <h4 className="availabletickets">{`Availbale Seats - ${availableSeats}`}</h4>
          <span className="flight-duration">{`Time Travel ${duration} : 00 min`}</span>
        </div>
      </div>
      <div className="ticketprice">
        <h1 className="total-price">{`INR ${ticketPrice}.00 /-`}</h1>
        <button className="select-btn" onClick={handelCheckout}>Select</button>
      </div>
    </div>,
    document.querySelector("#flightmodal-root")
  );
};

export default Flightmodal;
