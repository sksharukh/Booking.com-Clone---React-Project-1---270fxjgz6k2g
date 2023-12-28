import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt=""
          className="fpImg"
        />
        <div className="fpTitle">
          <span className="fpName">Aparthotel star miasto</span>
          <br />
          <span className="fbAdd">old town poland krakow</span>
          <div className="fpRating">
            <button>8.9</button>
          </div>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
          alt=""
          className="fpImg"
        />
        <div className="fpTitle">
          <span className="fpName">7Seasons Apartment Budapest</span>
          <br />
          <span className="fbAdd">07, Tezeraorus, Hungary, Budapest</span>
        </div>
        <div className="fpRating"><button>8.7</button></div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o="
          alt=""
          className="fpImg"
        />
        <div className="fpTitle">
          <span className="fpName">Villa Domina</span>
          <br />
          <span className="fbAdd">Split City centre, Croatia</span>
        </div>
        <div className="fpRating">
          <button>8.7</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o="
          alt=""
          className="fpImg"
        />
        <div className="fpTitle">
          <span className="fpName">Numa I Vita Apartment</span>
          <br />
          <span className="fbAdd">Italy, Florence</span>
        </div>
        <div className="fpRating">
          <button>9.3</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
