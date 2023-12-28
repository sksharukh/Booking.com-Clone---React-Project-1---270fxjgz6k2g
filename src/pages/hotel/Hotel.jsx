import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Head from "../../components/header/Head";
import Nav from "../../components/nav/Nav";
import Searchitems from "../../components/searchitems/Searchitems";
import "./hotel.css";

const Hotel = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  const [openoption, setOpenOption] = useState(false);
  sessionStorage.setItem('destination', destination)

  const getHotelList = async () => {
    const config = {
      headers: {
        projectId: "f104bi07c490",
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${destination}"}`,
        config
      );
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotelList();
  }, []);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  console.log(destination);

  // const handelhigh = ()=>{

  // }
  // const handellow = ()=>{

  // }

  return (
    <div>
      <Nav />
      <Head type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination/Property name:</label>
              <input
                className="destination"
                type="text"
                placeholder={destination}
              ></input>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!opendate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <span
                className="option-details"
                onClick={() => setOpenOption(!openoption)}
              >{`${option.adult} adult - ${option.children} children - ${option.room} room`}</span>
              {openoption && (
                <div className="option">
                  <div className="optionItem">
                    <span className="optionText">Adults</span>
                    <div className="optionCounter">
                      <button
                        disabled={option.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {option.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={option.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {option.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Rooms</span>
                    <div className="optionCounter">
                      <button
                        disabled={option.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{option.room}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="search">
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className="listResult">
            <Searchitems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
