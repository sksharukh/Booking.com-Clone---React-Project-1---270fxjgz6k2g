import axios from "axios";
import { useEffect, useState } from "react";
import HotelCard from "../hotelcard/HotelCard";
import "./searchitems.css";

const Searchitems = () => {
  const token = sessionStorage.getItem("userToken");
  const [hotelData, setHotelData] = useState([]);
  const hoteldestination = sessionStorage.getItem("destination");
  const getHotelList = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: "f104bi07c490",
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${hoteldestination}"}`,
        config
      );
      
      setHotelData(response.data.data.hotels);
      console.log("hoteldata",hotelData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("calling useeffect");
    getHotelList();
  }, []);
  function sortHighestA() {
    const apiregulatechange = [...hotelData];
    apiregulatechange.sort((a, b) => {
      return [
        b.rooms[0].costPerNight - a.rooms[0].costPerNight,
      ];
    });
    setHotelData(apiregulatechange);
  }
  function sortLowestB() {
    const apiregulatechange = [...hotelData];
    apiregulatechange.sort((a, b) => {
      return [
        a.rooms[0].costPerNight - b.rooms[0].costPerNight,
      ];
    });
    setHotelData(apiregulatechange);
  }
  return (
    <>
      <div className="sorting">
        <button onClick={sortHighestA}>Sort by highest</button>
        <button onClick={sortLowestB}>Sort by lowest</button>
      </div>
      {hotelData.length > 0 &&
        hotelData.map((hotel) => {
          return <HotelCard details={hotel} key={hotel.rooms[0]._id} />;
        })}
    </>
  );
};

export default Searchitems;
