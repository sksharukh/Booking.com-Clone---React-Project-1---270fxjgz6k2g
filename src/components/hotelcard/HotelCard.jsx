import { useNavigate, useParams } from "react-router-dom";
import "./hotelcard.css";

const HotelCard = ({ details }) => {
  const navigate = useNavigate();
  const { images, name, location, rating, rooms, amenities, _id } = details;
  console.log("id", _id);
  localStorage.setItem('userid', _id);

  const openModal = () => {
    navigate(`/hotels/${_id}`);
  };

  return (
    <div>
      <div className="searchItem" key={rooms[0]._id}>
        <img src={images} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{name}</h1>
          <span className="siDistance">{location}</span>
          <span className="taxiOp">{`${amenities}`}</span>
          <span className="siSubtitle"></span>
          <span className="siFeatures">{rooms[0].bedDetail}</span>
          <span className="siCancelOp">{rooms[0].roomType}</span>
          <span className="siCancelOpSubtitle">
            {rooms[0].cancellationPolicy}
          </span>
        </div>
        <div className="details-section">
          <div className="siDetails">
            <div className="reviewDetails">
              <div className="reviewheader">
                <h3 className="reviewtitle">Review Score</h3>
              </div>
              <button className="review-btn">{rating}</button>
            </div>
          </div>
          <div className="priceSection">
            <span className="people-details">{`Room Size: ${rooms[0].roomSize}`}</span>
            <span className="price-details">
              {`₹ ${rooms[0].costPerNight}`}{" "}
            </span>
            <button className="availability-btn" onClick={openModal}>
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
