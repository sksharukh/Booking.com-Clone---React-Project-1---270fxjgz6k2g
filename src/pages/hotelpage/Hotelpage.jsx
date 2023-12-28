import axios from "axios";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./hotelpage.css";

const Hotelpage = () => {
  const [singleHoteldata, setSingleHotelData] = useState([]);

  const { id } = useParams();
  console.log("id", id);
  const navigate=useNavigate()
  const handelcheckout=()=>{
    navigate('/payment-page')
  }

  const getHotelData = async () => {
    const config = {
      headers: {
        projectId: "f104bi07c490",
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`,
        config
      );
      console.log("rawdata", response);
      console.log("singledata", response.data.data);
      setSingleHotelData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const { images, amenities, rating, name, rooms } = singleHoteldata;
  console.log("images", images);
  console.log("room0", rooms);
  // console.log('length', rooms.length);

  useEffect(() => {
    console.log("called useeffect");
    getHotelData();
  }, [id]);
  return (
    <>
      <div className="booking">
        <div className="booking-container">
          <NavLink to="/" className="logo">
            <h2>Booking.com</h2>
          </NavLink>
        </div>
      </div>
      <div className="hotelContainer" key={singleHoteldata._id}>
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{name}</h1>
          <div className="hotelAddress">
            <CiLocationOn className="location-icon" />
            <span className="address">{singleHoteldata.location}</span>
          </div>
          <span className="hotelDistance">{`Rating: ${rating}`}</span>
          <span className="hotelPriceHighlight">
            {`Amenities: ${amenities}`}
          </span>
          <div className="hotelImages">
            {images?.map((images) => (
              <div className="hotelImgWrapper">
                <img src={images} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur debitis eligendi sunt quidem alias asperiores sequi
              pariatur esse? Rem, commodi odio. Quod magnam voluptatibus nisi,
              similique deserunt quae? Cum, cumque recusandae vero libero
              laudantium dolore consectetur, veniam maiores sapiente quibusdam
              aut magnam, architecto nostrum accusamus explicabo. Libero
              deleniti atque aperiam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto odio alias magni, et pariatur laborum
              hic voluptatibus officiis animi possimus repudiandae officia,
              soluta quis neque minima? Ab ipsam fuga quisquam! Cum reiciendis
              eos quaerat facilis ullam voluptatibus? Ullam fugiat accusantium
              incidunt possimus ab ratione, necessitatibus perferendis impedit
              repellendus autem quae?
            </div>
            <div className="hotelDetailsPrice">
              <h1 className="price-header">24 hr's Cancellation Policy</h1>
              <span className="location">
                {`located in the ${singleHoteldata.location}, this property has an
                excellent location score of ${rating}`}
              </span>
              <h2 className="price-details">
                {
                  rooms &&   <b>{`₹ ${rooms[0].costPerNight} (Per night) `}</b> 
                }
              </h2>
              <button className="reserve" onClick={handelcheckout}>Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotelpage;
