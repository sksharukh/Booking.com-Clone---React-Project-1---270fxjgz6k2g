import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Hotel from "../pages/hotel/Hotel";
import Login from "../pages/authentication/login/Login";
import Signup from "../pages/authentication/signup/Signup";
import { createContext, useState } from "react";
import Flights from "../pages/flights/Flights";
import Hotelpage from "../pages/hotelpage/Hotelpage";
import { Authprovider } from "../pages/provider/Authprovider";
import Payment from "../pages/paymentpage/Payment";
import Flightmodal from "./flightmodal/Flightmodal";
import { Authnavigator } from "../navigator/Authnavigator";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route
            path="/hotels/:id"
            element={
              <Authnavigator>
                <Hotelpage />
              </Authnavigator>
            }
          />
          <Route path="/flights" element={<Flights />} />
          <Route
            path="/flights/:flightid"
            element={
              <Authnavigator>
                <Flightmodal />
              </Authnavigator>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment-page" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
