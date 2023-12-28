import "../header/header.css";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineFlight } from "react-icons/md";
import { BsFillCarFrontFill } from "react-icons/bs";
import { MdAttractions } from "react-icons/md";
import { MdLocalTaxi } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { NavLink, useNavigate } from "react-router-dom";

const Head = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();

  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <NavLink className="span" to="/">
              <LiaBedSolid className="headerListIcon" />
              <span>Stays</span>
            </NavLink>
          </div>
          <div className="headerListItem">
            <NavLink className="span" to="/flights">
              <MdOutlineFlight className="headerListIcon" />
              <span>Flights</span>
            </NavLink>
          </div>

          <div className="headerListItem">
            <MdAttractions className="headerListIcon" />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <MdLocalTaxi className="headerListIcon" />
            <span>Airport taxies</span>
          </div>
          <div className="headerListItem">
            <BsFillCarFrontFill className="headerListIcon" />
            <span>Car-Rentals</span>
          </div>
        </div>
       
        {type !== "list" && (
          <div>
          <div className="headerSearch">
          <div className="headerSearchItem">
            <LiaBedSolid className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <LuCalendarDays className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].startDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <AiOutlineUser className="headerIcon" />
            <span
              onClick={() => setOpenOption(!openOption)}
              className="headerSearchText"
            >{`${option.adult} adult - ${option.children} children - ${option.room} room`}</span>
            {openOption && (
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
                    <span className="optionCounterNumber">{option.adult}</span>
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
          <div className="headerSearchItem">
            <button className="searchBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
            <h1 className="headerTitle">Howzat for a perfect stay</h1>
            <p className="headerDesc">Search hotels, homes and much more</p>
            <button className="headerBtn">Discover more</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;
